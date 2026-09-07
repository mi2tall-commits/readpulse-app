# -*- coding: utf-8 -*-
"""
End-to-End Headless Selenium Verification for ReadPulse AI Studio
"""
import os
import sys
import time

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def run_verification():
    app_path = os.path.abspath(r'C:\Users\user\.gemini\antigravity\scratch\readpulse-app\index.html')
    file_url = f"file:///{app_path.replace(os.sep, '/')}"
    print(f"[TEST] Opening {file_url} in Chrome Headless...")

    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1280,900")

    driver = webdriver.Chrome(options=options)
    wait = WebDriverWait(driver, 10)

    try:
        driver.get(file_url)
        time.sleep(1)

        # 1. Title & Header
        title = driver.title
        print(f"[TEST] Page Title: {title}")
        assert "ReadPulse" in title, "Title does not contain ReadPulse"

        # 2. Articles Grid
        cards = driver.find_elements(By.CLASS_NAME, "article-card")
        print(f"[TEST] Rendered Article Cards: {len(cards)}")
        assert len(cards) >= 20, f"Expected at least 20 articles, found {len(cards)}"

        # 3. Category Filter
        speeches_tab = driver.find_element(By.CSS_SELECTOR, "button[data-cat='speeches']")
        speeches_tab.click()
        time.sleep(0.5)
        speech_cards = driver.find_elements(By.CLASS_NAME, "article-card")
        print(f"[TEST] Filtered Speeches Count: {len(speech_cards)}")
        assert len(speech_cards) == 8, f"Expected 8 presidential speeches, got {len(speech_cards)}"

        # 4. Open Reader for Lincoln's Gettysburg Address
        driver.execute_script("arguments[0].click();", speech_cards[0])
        time.sleep(0.5)
        reader = wait.until(EC.visibility_of_element_located((By.ID, "readerOverlay")))
        assert "active" in reader.get_attribute("class")
        
        reader_title = driver.find_element(By.ID, "readerTitle").text
        print(f"[TEST] Reader Opened: '{reader_title}'")
        assert len(reader_title) > 0, "Reader title empty"

        # 5. Interactive Word Lookup (LingQ style)
        words = driver.find_elements(By.CLASS_NAME, "rp-word")
        print(f"[TEST] Interactive Word Spans: {len(words)}")
        assert len(words) > 10, "Not enough interactive word spans"
        
        # Click on first word
        first_word = words[0]
        word_text = first_word.text
        print(f"[TEST] Clicking Word: '{word_text}'")
        first_word.click()
        time.sleep(0.5)

        inspector = driver.find_element(By.ID, "wordInspector")
        assert "active" in inspector.get_attribute("class"), "Word inspector modal did not open"
        insp_meaning = driver.find_element(By.ID, "inspMeaning").text
        print(f"[TEST] Word Inspector Meaning: {insp_meaning[:40]}...")

        # 6. Save to Vocab
        save_btn = driver.find_element(By.ID, "btnSaveWord")
        save_btn.click()
        time.sleep(0.3)
        vocab_badge = driver.find_element(By.ID, "vocabCountBadge").text
        print(f"[TEST] Saved Vocab Badge Count: {vocab_badge}")
        assert int(vocab_badge) >= 1, "Vocab badge did not increment"

        # Close Inspector
        close_insp_btn = driver.find_element(By.CSS_SELECTOR, "#wordInspector .btn-close-modal")
        close_insp_btn.click()
        time.sleep(0.3)

        # 7. AI Shadowing Studio (ELSA Speak style)
        mic_btns = driver.find_elements(By.CLASS_NAME, "btn-sentence-mic")
        print(f"[TEST] Sentence Shadowing Triggers: {len(mic_btns)}")
        assert len(mic_btns) > 0, "No sentence mic buttons found"
        mic_btns[0].click()
        time.sleep(0.5)

        shadow_modal = driver.find_element(By.ID, "shadowingModal")
        assert "active" in shadow_modal.get_attribute("class"), "Shadowing modal did not open"
        target_sent = driver.find_element(By.ID, "shadowTargetSentence").text
        print(f"[TEST] Shadowing Target: {target_sent[:50]}...")

        # Click Big Mic to trigger speech evaluation / simulation
        big_mic = driver.find_element(By.ID, "btnRecordShadow")
        big_mic.click()
        time.sleep(1.2) # Allow simulation to run

        shadow_result = driver.find_element(By.ID, "shadowResultBox")
        assert "show" in shadow_result.get_attribute("class"), "Shadowing result box did not show"
        score = driver.find_element(By.ID, "shadowAccuracyScore").text
        print(f"[TEST] AI Pronunciation Accuracy Score: {score}")

        # Close Shadowing Modal
        close_shadow = driver.find_element(By.CSS_SELECTOR, "#shadowingModal .btn-close-modal")
        close_shadow.click()
        time.sleep(0.3)

        # 8. Quiz System
        quiz_btns = driver.find_elements(By.CLASS_NAME, "quiz-opt-btn")
        print(f"[TEST] Quiz Option Buttons: {len(quiz_btns)}")
        if len(quiz_btns) > 0:
            quiz_btns[0].click()
            time.sleep(0.3)
            fb = driver.find_element(By.ID, "quiz_feedback_0")
            assert "show" in fb.get_attribute("class"), "Quiz feedback did not display"
            print(f"[TEST] Quiz Feedback: {fb.text[:40]}...")

        # 9. Check Console Errors
        logs = driver.get_log("browser")
        severe_errors = [l for l in logs if l['level'] == 'SEVERE' and "favicon" not in l['message'].lower()]
        print(f"[TEST] Severe Browser Console Errors: {len(severe_errors)}")
        if severe_errors:
            for err in severe_errors:
                print(f"  [ERROR] {err['message']}")
        assert len(severe_errors) == 0, f"Found {len(severe_errors)} severe console errors"

        print("\n=======================================================")
        print(">>> ALL READPULSE AI PRE-VERIFICATION TESTS PASSED! <<<")
        print("=======================================================\n")

    finally:
        driver.quit()

if __name__ == "__main__":
    run_verification()
