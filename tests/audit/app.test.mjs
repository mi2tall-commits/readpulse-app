import test from 'node:test';
import assert from 'node:assert/strict';
import { makeApp, newsArticle } from './harness.mjs';

function boot(opts) {
  const app = makeApp(opts);
  app.run('loadUserData(); initArticles();');
  return app;
}

// readpulse-app-1: archived article must survive removal from the DB file
test('[bug-1] archived article stays after cron removes it from articles_database.js', () => {
  const storage = {};
  const a = newsArticle('auto_tech_1', 'tech');
  const day1 = boot({ articles: [a, newsArticle('auto_tech_2', 'tech')], storage });
  day1.run("toggleArchiveArticle('auto_tech_1')");
  assert.ok(JSON.parse(storage.readpulse_archived_ids).includes('auto_tech_1'));

  // next refresh: cron kept only newer items, auto_tech_1 is gone from the file
  const day5 = boot({ articles: [newsArticle('auto_tech_9', 'tech')], storage });
  const ids = day5.run('allArticles.map(a => a.id)');
  assert.ok(ids.includes('auto_tech_1'), 'archived article disappeared: ' + ids.join(','));
});

test('[bug-1] article linked from vocab stays after removal from DB', () => {
  const storage = {};
  const day1 = boot({ articles: [newsArticle('auto_sci_1', 'science')], storage });
  day1.run("openReader('auto_sci_1'); activeInspectorWord = 'three'; toggleSaveCurrentWord();");
  const later = boot({ articles: [], storage });
  assert.ok(later.run("allArticles.some(a => a.id === 'auto_sci_1')"));
});

test('[bug-1] syncLiveNews slice(0,20) does not drop archived live articles', async () => {
  const storage = {};
  const old = Array.from({ length: 20 }, (_, i) => newsArticle('live_old' + i, ['tech', 'science', 'economy', 'culture'][i % 4]));
  storage.readpulse_live_articles = JSON.stringify(old);
  storage.readpulse_archived_ids = JSON.stringify(['live_old19']);
  const app = boot({ articles: [], storage });
  let n = 0;
  app.ctx.fetch = async (url) => {
    if (url.includes('rss2json')) {
      return { ok: true, json: async () => ({ status: 'ok', items: [0, 1].map(() => ({
        title: 'New story ' + (n++), link: '', pubDate: '2026-11-06 01:00:00',
        description: 'Alpha beta gamma delta epsilon zeta eta theta iota kappa. '.repeat(6),
      })) }) };
    }
    return { ok: false };
  };
  await app.run('syncLiveNews()');
  const all = app.run('allArticles.map(a => a.id)');
  assert.ok(all.includes('live_old19'), 'archived live article was dropped');
});

// readpulse-app-2: sports cap must not be monopolized by tennis
test('[bug-2] sports capacity keeps MLB / EPL / other when 10+ tennis exist', () => {
  const app = boot({ articles: [] });
  const arts = [];
  for (let i = 0; i < 12; i++) arts.push(newsArticle('t' + i, 'sports', { sportSubcat: 'tennis', sportPriority: 1 }));
  arts.push(newsArticle('m1', 'sports', { sportSubcat: 'mlb', sportPriority: 2 }));
  arts.push(newsArticle('e1', 'sports', { sportSubcat: 'premier_league', sportPriority: 3 }));
  arts.push(newsArticle('o1', 'sports', { sportSubcat: 'other', sportPriority: 4 }));
  app.ctx.__arts = arts;
  const out = app.run('enforceTopicCapacityLimit(__arts)').filter(a => a.category === 'sports');
  assert.equal(out.length, 10, 'cap 10 kept');
  const subs = new Set(out.map(a => a.sportSubcat));
  for (const s of ['mlb', 'premier_league', 'other']) assert.ok(subs.has(s), s + ' missing');
});

test('[regression] non-sports categories still capped at 10, archived first', () => {
  const app = boot({ articles: [], storage: { readpulse_archived_ids: JSON.stringify(['x13']) } });
  const arts = Array.from({ length: 14 }, (_, i) => newsArticle('x' + i, 'tech', {
    addedAt: new Date(Date.now() - i * 3600e3).toISOString() }));
  app.ctx.__arts = arts;
  const out = app.run('enforceTopicCapacityLimit(__arts)');
  assert.equal(out.length, 10);
  assert.ok(out.some(a => a.id === 'x13'), 'archived oldest kept');
  assert.ok(out.some(a => a.id === 'x0'), 'newest kept');
  assert.ok(!out.some(a => a.id === 'x12'), 'older unarchived dropped');
});

// readpulse-app-3: fake translation must not be shown as Korean translation
test('[bug-3] sentence/parallel mode does not show fake translation text', () => {
  const a = newsArticle('auto_tech_f', 'tech');
  a.paragraphs[0].ko = '글로벌 최신 보도 내용입니다.';
  a.paragraphs[0].sentences = [{ en: 'Shares plunge today.', ko: '실시간 보도 번역: Shares plunge today.' }];
  const app = boot({ articles: [a] });
  app.run("openReader('auto_tech_f'); readingMode = 'sentence'; renderReaderBody();");
  assert.ok(!app.els.readerBody.innerHTML.includes('실시간 보도 번역'), 'fake sentence translation rendered');
  app.run("readingMode = 'parallel'; renderReaderBody();");
  assert.ok(!app.els.readerBody.innerHTML.includes('글로벌 최신 보도 내용입니다'), 'fake paragraph translation rendered');
});

test('[bug-3] live-sync paragraphs do not create fake translations', () => {
  const app = boot({ articles: [] });
  const paras = app.run("chunkSentencesToParagraphs(['Alpha beta gamma.', 'Delta epsilon zeta.'])");
  for (const p of paras) {
    assert.ok(!p.ko.includes('실시간'), p.ko);
    for (const s of p.sentences) assert.ok(!s.ko.includes('번역'), s.ko);
  }
});

test('[regression] real Korean translation still shown in sentence mode', () => {
  const a = newsArticle('sp1', 'speeches');
  a.paragraphs[0].sentences = [{ en: 'Stay hungry.', ko: '늘 갈망하라.' }];
  const app = boot({ articles: [a] });
  app.run("openReader('sp1'); readingMode = 'sentence'; renderReaderBody();");
  assert.ok(app.els.readerBody.innerHTML.includes('늘 갈망하라.'));
});

// readpulse-app-4: no fake pronunciation score
test('[bug-4] no microphone -> no random score and no XP', () => {
  const app = boot({ articles: [newsArticle('a1', 'tech')] });
  app.run("openReader('a1'); openShadowingModal(0, 0);");
  const before = app.run('userXp');
  app.run('recognition = null; toggleShadowRecording();');
  assert.equal(app.run('userXp'), before, 'XP granted without speaking');
  assert.ok(!/%$/.test(app.els.shadowAccuracyScore?.innerText || ''), 'score shown: ' + app.els.shadowAccuracyScore?.innerText);
});

test('[bug-4] recognition error (permission denied) -> no random score and no XP', () => {
  const app = boot({ articles: [newsArticle('a1', 'tech')] });
  app.run("openReader('a1'); openShadowingModal(0, 0);");
  const before = app.run('userXp');
  // emulate the real handler wiring with a fake SpeechRecognition
  app.run(`window.SpeechRecognition = function () {}; initSpeechRecognition(); recognition.onerror({ error: 'not-allowed' });`);
  assert.equal(app.run('userXp'), before, 'XP granted on mic error');
  assert.ok(!/%$/.test(app.els.shadowAccuracyScore?.innerText || ''));
});

test('[regression] real speech result is still scored', () => {
  const app = boot({ articles: [newsArticle('a1', 'tech')] });
  app.run("openReader('a1'); openShadowingModal(0, 0);");
  app.run("evaluateShadowingPronunciation('one two three')");
  assert.equal(app.els.shadowAccuracyScore.innerText, '100%');
});

// readpulse-app-5: quiz answers always A, XP farmable
function renderedOrder(html) {
  return [...html.matchAll(/checkQuizAnswer\(0, (\d+)\)">\s*[A-Z]\. ([^<]*?)\s*<\/button>/g)].map(m => [Number(m[1]), m[2]]);
}

test('[bug-5] quiz options are shuffled so the answer is not always A', () => {
  const positions = new Set();
  for (const r of [0.01, 0.5, 0.99]) {
    const app = boot({ articles: [newsArticle('q1', 'tech')], random: () => r });
    app.run("openReader('q1')");
    const order = renderedOrder(app.els.readerQuizContainer.innerHTML);
    assert.equal(order.length, 3);
    positions.add(order.findIndex(([, t]) => t === 'right'));
  }
  assert.ok(positions.size > 1 || !positions.has(0), 'correct answer always at A');
});

test('[bug-5] clicking the displayed correct option is graded correct', () => {
  const app = boot({ articles: [newsArticle('q1', 'tech')], random: () => 0.01 });
  app.run("openReader('q1')");
  const order = renderedOrder(app.els.readerQuizContainer.innerHTML);
  const [idx] = order.find(([, t]) => t === 'right');
  app.run(`checkQuizAnswer(0, ${idx})`);
  assert.ok(app.els.quiz_feedback_0.innerHTML.includes('정답입니다'));
});

test('[bug-5] quiz XP is granted only once per question', () => {
  const app = boot({ articles: [newsArticle('q1', 'tech')], random: () => 0.5 });
  const gains = [];
  for (let i = 0; i < 2; i++) {
    app.run("openReader('q1')");
    delete app.els.quiz_item_0;
    const [idx] = renderedOrder(app.els.readerQuizContainer.innerHTML).find(([, t]) => t === 'right');
    const before = app.run('userXp');
    app.run(`checkQuizAnswer(0, ${idx})`);
    gains.push(app.run('userXp') - before);
  }
  assert.equal(gains[0], 10);
  assert.equal(gains[1], 0, 'quiz XP farmed twice');
});
