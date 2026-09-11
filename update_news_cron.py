# -*- coding: utf-8 -*-
"""
Automated News Refresh Cron Script for ReadPulse AI
Fetches latest breaking news from BBC RSS feeds (Technology, Science, Business, Sports, Entertainment)
and updates the local articles_database.js automatically.
"""
import urllib.request
import urllib.parse
import json
import os
import re
from datetime import datetime, timezone

FEEDS = [
    {"cat": "tech", "name": "BBC Technology", "url": "https://feeds.bbci.co.uk/news/technology/rss.xml"},
    {"cat": "science", "name": "BBC Science", "url": "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"},
    {"cat": "economy", "name": "BBC Business", "url": "https://feeds.bbci.co.uk/news/business/rss.xml"},
    # Prioritized Sports Feeds: 1. Tennis -> 2. MLB -> 3. Premier League -> 4. Other
    {"cat": "sports", "subcat": "tennis", "priority": 1, "name": "BBC Tennis", "url": "https://feeds.bbci.co.uk/sport/tennis/rss.xml"},
    {"cat": "sports", "subcat": "mlb", "priority": 2, "name": "ESPN MLB", "url": "https://www.espn.com/espn/rss/mlb/news"},
    {"cat": "sports", "subcat": "premier_league", "priority": 3, "name": "BBC Premier League", "url": "https://feeds.bbci.co.uk/sport/football/premier-league/rss.xml"},
    {"cat": "sports", "subcat": "other", "priority": 4, "name": "BBC Sports", "url": "https://feeds.bbci.co.uk/sport/rss.xml"},
    {"cat": "culture", "name": "BBC Arts", "url": "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"}
]

def fetch_rss_to_json(rss_url):
    api_url = f"https://api.rss2json.com/v1/api.json?rss_url={urllib.parse.quote(rss_url)}"
    req = urllib.request.Request(api_url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=10) as res:
        return json.loads(res.read().decode('utf-8'))

def fetch_article_body_paragraphs(article_url):
    try:
        req = urllib.request.Request(article_url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req, timeout=8) as res:
            html = res.read().decode('utf-8', errors='ignore')
        raw_paras = re.findall(r'<p[^>]*>(.*?)</p>', html, re.DOTALL)
        clean_paras = []
        for p in raw_paras:
            text = re.sub(r'<[^>]*>', '', p).strip()
            if len(text) > 60 and not any(w in text.lower() for w in ['copyright', 'cookie', 'bbc is not responsible', 'terms of use', 'sign up for', 'get in touch']):
                clean_paras.append(text)
        return clean_paras[:4]
    except Exception as e:
        return []

def main():
    app_dir = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(app_dir, "articles_database.js")
    
    print("Checking current database...")
    if not os.path.exists(db_path):
        print("articles_database.js not found.")
        return

    with open(db_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    match = re.search(r"(?:const|window\.)\s*READPULSE_ARTICLES\s*=\s*(\[.*\]);?", content, re.DOTALL)
    if not match:
        print("Could not parse articles array.")
        return
    
    articles = json.loads(match.group(1))
    print(f"Loaded {len(articles)} existing articles.")

    new_articles = []
    for f_info in FEEDS:
        try:
            print(f"Fetching {f_info['name']}...")
            data = fetch_rss_to_json(f_info["url"])
            if data.get("status") == "ok" and data.get("items"):
                top_item = data["items"][0]
                article_link = top_item.get("link", "")
                scraped_paras = fetch_article_body_paragraphs(article_link) if article_link else []
                desc = re.sub(r"<[^>]*>", "", top_item.get("description", "") or top_item.get("content", "") or "").strip()

                paras_data = []
                total_words = 0
                if scraped_paras and len(scraped_paras) >= 2:
                    for p_text in scraped_paras:
                        p_sentences = [s.strip() for s in re.findall(r"[^.!?]+[.!?]+", p_text) if len(s.strip()) > 10]
                        if not p_sentences:
                            p_sentences = [p_text]
                        total_words += len(p_text.split())
                        paras_data.append({
                            "en": p_text,
                            "ko": "글로벌 최신 보도 내용입니다.",
                            "sentences": [{"en": s, "ko": "실시간 보도 번역: " + s} for s in p_sentences]
                        })
                else:
                    # Fallback: RSS 설명만으로 문단을 구성할 때도 문장을 3개씩 묶어
                    # 여러 문단으로 나눔 (모든 문장을 한 문단에 몰아넣던 버그 수정)
                    raw_sentences = [s.strip() for s in re.findall(r"[^.!?]+[.!?]+", desc) if len(s.strip()) > 10]
                    if len(desc.split()) >= 80 and raw_sentences:
                        total_words = len(desc.split())
                        chunk_size = 3
                        for i in range(0, len(raw_sentences), chunk_size):
                            chunk = raw_sentences[i:i + chunk_size]
                            paras_data.append({
                                "en": " ".join(chunk),
                                "ko": "실시간 글로벌 최신 뉴스입니다.",
                                "sentences": [{"en": s, "ko": "실시간 속보 번역: " + s} for s in chunk]
                            })

                # Only accept articles with substantial reading substance (at least 80 words)
                if paras_data and total_words >= 80:
                    art_id = f"auto_{f_info['cat']}_{abs(hash(top_item.get('title')))}"
                    if any(a.get("id") == art_id for a in articles):
                        continue
                    
                    cat_kw_map = {
                        "tech": ["#IT기술", "#최신테크", "#글로벌IT"],
                        "science": ["#최신과학", "#우주환경", "#과학뉴스"],
                        "economy": ["#세계경제", "#금융시장", "#비즈니스"],
                        "sports": ["#스포츠소식", "#경기결과", "#글로벌스포츠"],
                        "tennis": ["#테니스", "#그랜드슬램", "#스포츠속보"],
                        "mlb": ["#MLB", "#메이저리그", "#야구소식"],
                        "premier_league": ["#프리미어리그", "#해외축구", "#EPL속보"],
                        "other": ["#글로벌스포츠", "#스포츠소식"],
                        "culture": ["#문화예술", "#글로벌트렌드", "#엔터테인먼트"]
                    }

                    art_data = {
                        "id": art_id,
                        "title": top_item.get("title", "Breaking News"),
                        "subtitle": desc[:130] + "...",
                        "speaker": f_info["name"],
                        "date": top_item.get("pubDate", "Today").split(" ")[0],
                        "addedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                        "category": f_info["cat"],
                        "isLive": True,
                        "level": "B2",
                        "readTime": f"{max(2, total_words // 100)} min",
                        "wordCount": total_words,
                        "keywords": cat_kw_map.get(f_info.get("subcat") or f_info["cat"], ["#글로벌뉴스", "#최신속보"]),
                        "paragraphs": paras_data,
                        "takeaways": [
                            f"글로벌 최신 소식: {top_item.get('title')}",
                            "실시간 RSS 자동 업데이트 엔진을 통해 갱신되었습니다.",
                            "단어를 탭하여 사전을 확인하고 문장을 따라 읽어보세요."
                        ],
                        "quiz": [{
                            "question": "What is the primary topic of this report?",
                            "options": [top_item.get("title", "Breaking News"), "Historical retrospective", "Unrelated general weather"],
                            "answer": 0,
                            "explanation": "The title directly reflects the main subject."
                        }]
                    }
                    if f_info.get("subcat"):
                        art_data["sportSubcat"] = f_info["subcat"]
                        art_data["sportPriority"] = f_info.get("priority", 4)

                    new_articles.append(art_data)
        except Exception as e:
            print(f"Error fetching {f_info['name']}: {e}")

    if new_articles:
        print(f"Found {len(new_articles)} new news stories!")
        updated_list = new_articles + articles

        # Enforce max 10 articles per news topic (tech, science, economy, sports, culture)
        speeches = [a for a in updated_list if a.get("category") == "speeches"]
        capped_news = []
        for cat in ["tech", "science", "economy", "sports", "culture"]:
            cat_items = [a for a in updated_list if a.get("category") == cat]
            if cat == "sports":
                # Sort: 1. Tennis -> 2. MLB -> 3. Premier League -> 4. Other, then newest
                cat_items.sort(key=lambda x: (
                    x.get("sportPriority", 99),
                    -datetime.fromisoformat(x.get("addedAt", "2000-01-01T00:00:00Z").replace("Z", "+00:00")).timestamp()
                    if "T" in str(x.get("addedAt", "")) else 0
                ))
            else:
                # Sort descending by addedAt or date to retain newest
                cat_items.sort(key=lambda x: str(x.get("addedAt") or x.get("date")), reverse=True)
            capped_news.extend(cat_items[:10])

        final_list = capped_news + speeches
        new_content = f"// ReadPulse AI - Comprehensive English Reading & Speeches Database\nconst READPULSE_ARTICLES = {json.dumps(final_list, ensure_ascii=False, indent=2)};\n"
        with open(db_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Database updated successfully ({len(final_list)} total articles, max 10 per category).")
    else:
        print("All news stories are already up-to-date.")

if __name__ == "__main__":
    main()
