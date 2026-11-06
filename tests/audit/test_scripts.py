# -*- coding: utf-8 -*-
"""Audit tests for update_news_cron.py / normalize_articles_db.py (stdlib unittest, no network)."""
import importlib.util
import json
import os
import re
import shutil
import sys
import tempfile
import unittest
from unittest import mock

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
WORDS = " ".join(["word"] * 30)


def load_copy(script, db_articles):
    """Copy a script into a temp dir with its own articles_database.js and import it."""
    tmp = tempfile.mkdtemp(prefix="rp_audit_")
    shutil.copy(os.path.join(ROOT, script), tmp)
    db = os.path.join(tmp, "articles_database.js")
    with open(db, "w", encoding="utf-8") as f:
        f.write("// db\nconst READPULSE_ARTICLES = " + json.dumps(db_articles, ensure_ascii=False) + ";\n")
    name = "rp_" + script.replace(".py", "") + "_" + os.path.basename(tmp)
    spec = importlib.util.spec_from_file_location(name, os.path.join(tmp, script))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod, tmp, db


def read_db(db):
    with open(db, encoding="utf-8") as f:
        return json.loads(re.search(r"READPULSE_ARTICLES\s*=\s*(\[.*\]);?", f.read(), re.S).group(1))


def article(i, cat, added, **extra):
    a = {"id": f"old_{cat}_{i}", "title": f"Old {cat} {i}", "category": cat, "addedAt": added,
         "date": added[:10], "paragraphs": [], "quiz": []}
    a.update(extra)
    return a


def fake_feeds(title_prefix):
    def fetch(url):
        return {"status": "ok", "items": [{"title": f"{title_prefix} {url}", "link": "http://x/" + url,
                                           "pubDate": "2026-11-06 00:00:00", "description": "d"}]}
    return fetch


def fake_body(_url):
    return [f"Sentence number one is here. Another one follows now. {WORDS}.",
            f"Second paragraph sentence. More text to read here. {WORDS}.",
            f"Third paragraph sentence. {WORDS}."]


def run_cron(db_articles, prefix="New"):
    mod, tmp, db = load_copy("update_news_cron.py", db_articles)
    with mock.patch.object(mod, "fetch_rss_to_json", fake_feeds(prefix)), \
         mock.patch.object(mod, "fetch_article_body_paragraphs", fake_body), \
         mock.patch("builtins.print"):
        mod.main()
    return read_db(db), tmp


class CronTests(unittest.TestCase):
    def tearDown(self):
        for d in getattr(self, "_tmps", []):
            shutil.rmtree(d, ignore_errors=True)

    def _run(self, *a, **k):
        out, tmp = run_cron(*a, **k)
        self._tmps = getattr(self, "_tmps", []) + [tmp]
        return out

    def test_bug2_sports_not_monopolized_by_tennis(self):
        """readpulse-app-2: 10 tennis items must not push out new MLB/EPL/other items."""
        tennis = [article(i, "sports", f"2026-11-0{1 + i % 5}T0{i % 10}:00:00Z", sportSubcat="tennis", sportPriority=1)
                  for i in range(10)]
        out = self._run(tennis)
        sports = [a for a in out if a["category"] == "sports"]
        self.assertLessEqual(len(sports), 10)
        subs = {a.get("sportSubcat") for a in sports}
        for s in ("mlb", "premier_league", "other"):
            self.assertIn(s, subs, f"{s} was dropped by the tennis-first cap")

    def test_bug3_no_fake_translation(self):
        """readpulse-app-3: ko must not be 'prefix + English original'."""
        out = self._run([])
        for a in out:
            for p in a["paragraphs"]:
                self.assertNotIn("보도 내용입니다", p["ko"])
                for s in p["sentences"]:
                    self.assertFalse(s["ko"].startswith("실시간"), s["ko"])
                    self.assertNotIn(s["en"], s["ko"]) if s["ko"] else None

    def test_regression_cap_10_per_category_and_speeches_kept(self):
        olds = [article(i, "tech", f"2026-10-{10 + i}T00:00:00Z") for i in range(12)]
        speeches = [article(i, "speeches", "2020-01-01T00:00:00Z") for i in range(3)]
        out = self._run(olds + speeches)
        tech = [a for a in out if a["category"] == "tech"]
        self.assertEqual(len(tech), 10)
        self.assertTrue(any(a["id"].startswith("auto_tech_") for a in tech), "new item kept")
        self.assertEqual(len([a for a in out if a["category"] == "speeches"]), 3)

    def test_regression_no_duplicate_on_second_run(self):
        first = self._run([])
        second = self._run(first)
        self.assertEqual(len(first), len(second))


class NormalizeTests(unittest.TestCase):
    def setUp(self):
        self.src = [{"id": "auto_sports_1", "category": "sports", "title": "T", "addedAt": "2026-11-05T19:23:49Z",
                     "keywords": ["#테니스"], "sportSubcat": "tennis", "sportPriority": 1, "sourceName": "BBC",
                     "paragraphs": [{"en": "A b.", "ko": "", "sentences": [{"en": "A b.", "ko": ""}]}],
                     "quiz": [{"question": "q", "options": ["a", "b"], "answer": 1}]}]
        self.mod, self.tmp, self.db = load_copy("normalize_articles_db.py", self.src)

    def tearDown(self):
        shutil.rmtree(self.tmp, ignore_errors=True)

    def _norm(self):
        with mock.patch("builtins.print"):
            self.mod.normalize_database()
        return read_db(self.db)[0]

    def test_bug6_unknown_fields_preserved(self):
        """readpulse-app-6: normalize must not strip addedAt/keywords/sport fields."""
        a = self._norm()
        for k in ("addedAt", "keywords", "sportSubcat", "sportPriority", "sourceName"):
            self.assertIn(k, a, f"{k} removed by normalize")
        self.assertEqual(a["sportPriority"], 1)

    def test_bug6_backup_written(self):
        self._norm()
        self.assertTrue(os.path.exists(self.db + ".bak"), "no backup before overwrite")

    def test_regression_schema_defaults(self):
        a = self._norm()
        self.assertEqual(a["level"], "B2")
        self.assertEqual(a["quiz"][0]["answer"], 1)
        self.assertEqual(a["quiz"][0]["explanation"], "")


if __name__ == "__main__":
    unittest.main()
