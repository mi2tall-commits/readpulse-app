# -*- coding: utf-8 -*-
"""
Normalize articles_database.js to ensure consistent schema across all news & speeches
"""
import json
import os
import re

def normalize_database():
    db_path = r'C:\Users\user\.gemini\antigravity\scratch\readpulse-app\articles_database.js'
    with open(db_path, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'(?:const|window\.)\s*READPULSE_ARTICLES\s*=\s*(\[.*\]);?', content, re.DOTALL)
    if not match:
        print("Could not find articles array.")
        return

    articles = json.loads(match.group(1))
    print(f"Normalizing {len(articles)} articles...")

    normalized = []
    for art in articles:
        # Takeaways
        takeaways = art.get('takeaways') or art.get('keyTakeaways') or []
        level = art.get('level') or art.get('cefrLevel') or 'B2'
        speaker = art.get('speaker') or art.get('author') or 'Speaker'
        readTime = art.get('readTime') or f"{art.get('readTimeMinutes', 3)} min"
        
        # Paragraphs & Sentences
        paragraphs = art.get('paragraphs')
        if not paragraphs:
            # Reconstruct paragraphs from sentences
            sents = art.get('sentences') or []
            if sents:
                # Standardize sentence keys to en and ko
                standardized_sents = []
                for s in sents:
                    standardized_sents.append({
                        "en": s.get('en') or s.get('text') or '',
                        "ko": s.get('ko') or s.get('translation') or ''
                    })
                
                # Group every 2-3 sentences into a paragraph
                chunk_size = 3
                para_list = []
                for i in range(0, len(standardized_sents), chunk_size):
                    chunk = standardized_sents[i:i+chunk_size]
                    p_en = " ".join([s['en'] for s in chunk])
                    p_ko = " ".join([s['ko'] for s in chunk])
                    para_list.append({
                        "en": p_en,
                        "ko": p_ko,
                        "sentences": chunk
                    })
                paragraphs = para_list
            else:
                paragraphs = [{
                    "en": art.get('subtitle', ''),
                    "ko": "",
                    "sentences": [{"en": art.get('subtitle', ''), "ko": ""}]
                }]
        else:
            # Also ensure existing paragraphs have en/ko on sentences
            for p in paragraphs:
                for s in p.get('sentences', []):
                    if 'en' not in s and 'text' in s:
                        s['en'] = s['text']
                    if 'ko' not in s and 'translation' in s:
                        s['ko'] = s['translation']
        
        # Word count
        word_count = art.get('wordCount')
        if not word_count:
            total_words = 0
            for p in paragraphs:
                for s in p.get('sentences', []):
                    total_words += len(s.get('en', '').split())
            word_count = total_words or 200

        # Quiz normalization
        raw_quiz = art.get('quiz') or []
        norm_quiz = []
        for q in raw_quiz:
            norm_quiz.append({
                "question": q.get('question', ''),
                "options": q.get('options', []),
                "answer": q.get('answer', 0),
                "explanation": q.get('explanation', '')
            })

        norm_art = {
            "id": art.get('id'),
            "category": art.get('category', 'tech'),
            "isLive": art.get('isLive', False),
            "level": level,
            "title": art.get('title', ''),
            "subtitle": art.get('subtitle', ''),
            "speaker": speaker,
            "date": str(art.get('date', 'Recent')),
            "readTime": readTime,
            "wordCount": word_count,
            "paragraphs": paragraphs,
            "takeaways": takeaways,
            "quiz": norm_quiz
        }
        normalized.append(norm_art)

    new_content = f"// ReadPulse AI - Comprehensive English Reading & Speeches Database\nconst READPULSE_ARTICLES = {json.dumps(normalized, ensure_ascii=False, indent=2)};\n"
    with open(db_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully normalized {len(normalized)} articles in {db_path}!")

if __name__ == '__main__':
    normalize_database()
