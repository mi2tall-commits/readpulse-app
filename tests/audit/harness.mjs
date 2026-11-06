// Loads the inline <script> of index.html into a Node vm context with a tiny fake DOM.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function appScript() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  return blocks.join('\n');
}

function fakeEl(id) {
  const classes = new Set();
  const el = {
    id, innerText: '', innerHTML: '', value: '', disabled: false, className: '',
    style: {}, children: [],
    classList: {
      add: (...c) => c.forEach(x => classes.add(x)),
      remove: (...c) => c.forEach(x => classes.delete(x)),
      contains: c => classes.has(c),
      toggle: c => (classes.has(c) ? classes.delete(c) : classes.add(c)),
    },
    setAttribute() {}, getAttribute() { return null; }, appendChild() {},
    addEventListener() {}, focus() {}, scrollIntoView() {},
    querySelectorAll(sel) {
      if (sel === '.quiz-opt-btn') {
        if (!el._buttons) {
          const n = (el.innerHTML.match(/quiz-opt-btn/g) || []).length;
          el._buttons = Array.from({ length: n }, (_, i) => fakeEl(id + '_btn' + i));
        }
        return el._buttons;
      }
      return [];
    },
    querySelector() { return null; },
  };
  return el;
}

export function makeApp({ articles = [], storage = {}, random } = {}) {
  const els = {};
  const document = {
    getElementById: id => (els[id] ||= fakeEl(id)),
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: tag => fakeEl(tag),
    body: fakeEl('body'),
    documentElement: fakeEl('html'),
  };
  const localStorage = {
    _d: storage,
    getItem: k => (k in storage ? storage[k] : null),
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: k => { delete storage[k]; },
  };
  const mathObj = Object.create(Math);
  if (random) mathObj.random = random;
  const ctx = {
    console: { log() {}, warn() {}, error() {} },
    document, localStorage,
    window: { addEventListener() {}, speechSynthesis: { cancel() {}, speak() {}, getVoices: () => [] } },
    SpeechSynthesisUtterance: function (t) { this.text = t; },
    navigator: {}, setTimeout: (fn) => { fn(); return 0; }, clearTimeout() {},
    READPULSE_ARTICLES: articles,
    READPULSE_DICTIONARY: {},
    Math: mathObj, Date, JSON, AbortController,
    fetch: async () => ({ ok: false }),
  };
  ctx.window.document = document;
  vm.createContext(ctx);
  vm.runInContext(appScript(), ctx);
  const run = code => vm.runInContext(code, ctx);
  return { ctx, run, els, storage };
}

export function newsArticle(id, cat, extra = {}) {
  return {
    id, category: cat, title: 'Title ' + id, subtitle: 's', speaker: 'BBC', isLive: true,
    date: new Date().toISOString().slice(0, 10), addedAt: new Date().toISOString(),
    level: 'B2', readTime: '2 min', wordCount: 100,
    paragraphs: [
      { en: 'One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty.', ko: '', sentences: [{ en: 'One two three.', ko: '' }] },
      { en: 'One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty.', ko: '', sentences: [{ en: 'Four five six.', ko: '' }] },
    ],
    takeaways: [], quiz: [{ question: 'Q?', options: ['right', 'wrong1', 'wrong2'], answer: 0, explanation: '' }],
    ...extra,
  };
}
