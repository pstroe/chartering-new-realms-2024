# Chapter 2: How good are LLMs at translating Latin religious texts?
Stefano Staffa, Andrea Scheck

### Done
- Find paragraphs: at least 400 words per text, more if possible (Paper by Volk et al. had 1240 words in Latin)
	- Bible: Neutral text, Psalms, Poetry
	- De legibus (Cicero): Neutral
	- Historia (Monmouth): Neutral
- Enter original + gold standard translation into Excel
- Describe data in chapter: Categorization, token number, languages
- Write python script to execute the translation scores and test for BLEU, ROUGE, chrF, METEOR
- Test LLMs to make sure if they work with Latin at all: Gemini, GPT-4, Google Translator, Yandex
- Run each paragraph through each MT
- Enter MT result into Excel
- Score translations
- Identify "bad" results
- Run "bad" paragraphs through MT 1 sentence at a time and see if it changes

### To Dos
- Analyse and write
- LLaMa -> Not available yet
---

## Introduction
Machine Translation (MT) has revolutionized the process of translating low-resource languages, significantly reducing the effort previously involved in such translations. When, for instance, the Latin Bible was first translated into French, English and German, it required enormous human effort, extensive knowledge of both Latin and the vernacular language and the year-long labor of many religious scholars. The result of this translation - a religious text that could be understood by common people - were groundbreaking for both culture and religion, with far-reaching effects on society. It is difficult to say what would have happened if the Bible had never been translated - or if the translation had been less nuanced and careful.

Almost 650 years after the first translation of the Latin Bible to English by John Wycliffe, most translations are no longer dependent on such intense labor. Even translations from low-resource languages, like Latin, instead often at least partly depend on the assistance of MT. Even so, many ancient scientific and medical texts written in Greek and Latin remain untranslated in any modern language due to the difficulty and resource limitations involved (source). While MT systems perform efficiently on many genres, they still face challenges when dealing with more creative and complex works, requiring some degrees of post-editing (Cespedosa & Mitkov, 2023).

In this chapter, we explore possible differences in the performance of various advanced AI translation tools when handling Latin religious texts versus when translating more neutral, descriptive Latin passages. We score the results of four systems which can be used for MT — GPT-4o-mini, Gemini, Google Translate, and Yandex Translate - when compared to the manual human translations done in different past decades. While GPT-4 and Gemini are not strictly traditional MT systems, but rather large language models and AI-powered tools, they have shown promise in Latin translation tasks and are increasingly used in the field (source will follow). Previous research (Volk et al., 2024) has also highlighted the variation in the Latin translation quality of these systems, further motivating this comparison.

ith this chapter, we hope to shed some light on the efficacy and limitations of MT in translating Latin, identifying which tools are better suited for specific texts. By understanding these distinctions, we might inform future developments in MT with low-resource classical languages and possibly even assist the translation of the vast untranslated ancient texts which might hold crucial knowledge to further our understanding the historical and intellectual development of the Western world.

## Relevant Literature
Volk, Martin; Fischer, Dominic P; Fischer, Lukas; Scheurer, Patricia; Ströbel, Phillip (2024): LLM-based Machine Translation  and Summarization for Latin

Bamman, David; Burns, Patrick J. (2020): Latin BERT: A contextual language model for classical philology

Ogrodniczuk, M.; Kryńska, K. (2022): Evaluating Machine Translation of Latin Interjections in the Digital Library of Polish and Poland-related News Pamphlets

## Methods & Data
As *data*, we are using Latin texts with different writing styles.

### Religious text
For the religious text, we are using the Biblia Sacra iuxta Vulgatam Clementinam released in 2006 by Michaele Tweedale as stored in the MLAT database. From this Bible, we have extracted 11 Latin passages that represent a mixture of neutral language (e.g. in historical descriptions, genealogical record and legal rules), psalms and poems. This resulted in 603 Latin words. For each passage, we have collected three English translations: the translation in the English Standard Version bible (ESV, 2001), in the Douay-Rheims 1899 American Edition bible (DRB, 1899) and in the King James Version bible (KJV, 1611). This resulted in 2558 English words.

- Category: Primary source / raw data?
- Degrees of processing: The texts are minimally processed versions. Any annotations or digital enhancements were deleted. However, the translation into different bibles have obvious differences - which could be attributed to processing by the author due to theological priorities and cultural conventions of the time (e.g. the psalms in the DRB seem closer to narrative prose than the lyrical and poetic style in other translations).
- Results in different levels of data???
- Origin: The Bible can be considered **observational data** in the sense that it documents the beliefs, historical events, societal norms, and cultural practices as observed or understood by its authors at the time. Unlike experimental data, the content was observed within the natural context of its time.
The Bible is also a collection of texts from different authors, time periods, and cultural contexts. These individual books were **gathered** over centuries and assembled into a cohesive canon. In this sense, it represents gathered data.
Parts of the Bible, such as the historical books (e.g. Chronicles) and the laws, serve as **records** of events and rules observed by the authors. They were intended to document a continuous record.
- Collection: Resource/community data collection because it was preserved, maintained, and accessed by communities for ongoing reference, teaching, and study.

### Non religious text
For the more “neutral” texts, we are using De Legibus by Cicero and the Historia Regum Britanniae by Geoffrey of Monmouth.
#### De Legibus (On the Laws) by Cicero
- Category: Primary Source / Raw Data
- Degrees of Processing: The Latin text we use is minimally processed in terms of formatting and digital enhancement, preserving Cicero's original structure and language. The English translation might have interpretative layers added by later authors.
- Results in different levels of data: Due to its nature, this text remains in the category of raw data for legal and philosophical analysis, maintaining its primary role as a philosophical record.
- Origin: **observational data**, because the text documents Cicero’s observations and reflections on Roman law and governance, shaped by his legal experience and philosophical studies. Though authored by Cicero, it integrates various philosophical and legal theories, **gathering** ideas from multiple influences like Greek philosophy. In sections, it serves as a **record** of Roman legal ideals.
- Collection: Resource/community data collection? Reference? since it is consistently referenced in philosophy, legal studies, and historical scholarship.

#### Historia Regum Britanniae (The History of the Kings of Britain) by Geoffrey of Monmouth
- Category: Primary Source / Raw Data
- Degrees of Processing: The Latin text we use is minimally processed in terms of formatting and digital enhancement, but Geoffrey’s own authorial choices reflect a certain degree of “editorializing” of Britain’s legends through cultural and political priorities (e.g., framing Britain’s past as noble and legendary).
- Results in different levels of data: The text remains a primary source
- Origin: The work **observes** medieval British lore and perceived historical events, blending observation with legend. The text **gathers** various legends and historical anecdotes from British, Welsh, and other regional sources. Parts of Historia act as quasi-historical records.
- Collection: Resource/community data collection?

### Methods
As *methods* we are using machine translation with the programs Google Gemini, GPT-4, Google Translator, Yandex Translate, LLaMa

To score we wrote python scripts.
For BLEU:
```python
import csv
import sys
from sacrebleu import sentence_bleu

def calculate_bleu(reference, hypothesis):
    # Calculate BLEU score between two sentences
    return sentence_bleu(hypothesis, [reference]).score

def process_csv(file_path):
    with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        
        # Skip the header row
        headers = next(reader)
        
        # Iterate through rows and calculate BLEU scores
        for row_num, row in enumerate(reader, start=2):  # Start from row 2 to reflect actual CSV row numbers
            reference = row[3]  # Column D
            
            # Calculate and print BLEU scores for each comparison
            gpt_score = calculate_bleu(reference, row[4])  # Column E
            gemini_score = calculate_bleu(reference, row[5])  # Column F
            gt_score = calculate_bleu(reference, row[6])  # Column G
            yandex_score = calculate_bleu(reference, row[7])  # Column H
            llama_score = calculate_bleu(reference, row[8])  # Column I

            print(f"Row {row_num} - GPT score: {gpt_score:.2f}")
            print(f"Row {row_num} - Gemini score: {gemini_score:.2f}")
            print(f"Row {row_num} - GT score: {gt_score:.2f}")
            print(f"Row {row_num} - Yandex score: {yandex_score:.2f}")
            print(f"Row {row_num} - LLaMa score: {llama_score:.2f}\n")

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <csv_file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    process_csv(file_path)

if __name__ == "__main__":
    main()
```

For ROUGE-L:
```python
import csv
import sys
from rouge_score import rouge_scorer

def calculate_rouge_l(reference, hypothesis):
    # Initialize the scorer with ROUGE-L only
    scorer = rouge_scorer.RougeScorer(['rougeL'], use_stemmer=True)
    scores = scorer.score(reference, hypothesis)
    return scores['rougeL'].fmeasure * 100  # Convert to percentage for readability

def process_csv(file_path):
    with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        
        # Skip the header row
        headers = next(reader)
        
        # Iterate through rows and calculate ROUGE-L scores
        for row_num, row in enumerate(reader, start=2):  # Start from row 2 to reflect actual CSV row numbers
            reference = row[3]  # Column D
            
            # Calculate and print ROUGE-L scores for each comparison
            gpt_score = calculate_rouge_l(reference, row[4])  # Column E
            gemini_score = calculate_rouge_l(reference, row[5])  # Column F
            gt_score = calculate_rouge_l(reference, row[6])  # Column G
            yandex_score = calculate_rouge_l(reference, row[7])  # Column H
            llama_score = calculate_rouge_l(reference, row[8])  # Column I

            print(f"Row {row_num} - GPT score: {gpt_score:.2f}")
            print(f"Row {row_num} - Gemini score: {gemini_score:.2f}")
            print(f"Row {row_num} - GT score: {gt_score:.2f}")
            print(f"Row {row_num} - Yandex score: {yandex_score:.2f}")
            print(f"Row {row_num} - LLaMa score: {llama_score:.2f}\n")

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <csv_file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    process_csv(file_path)

if __name__ == "__main__":
    main()
```

For chrF:
```python
import csv
import sys
from sacrebleu.metrics import CHRF

def calculate_chrf(reference, hypothesis):
    # Initialize the chrF scorer
    chrf_scorer = CHRF()
    score = chrf_scorer.sentence_score(hypothesis, [reference])
    return score.score  # Return the chrF score directly

def process_csv(file_path):
    with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        
        # Skip the header row
        headers = next(reader)
        
        # Iterate through rows and calculate chrF scores
        for row_num, row in enumerate(reader, start=2):  # Start from row 2 to reflect actual CSV row numbers
            reference = row[3]  # Column D
            
            # Calculate and print chrF scores for each comparison
            gpt_score = calculate_chrf(reference, row[4])  # Column E
            gemini_score = calculate_chrf(reference, row[5])  # Column F
            gt_score = calculate_chrf(reference, row[6])  # Column G
            yandex_score = calculate_chrf(reference, row[7])  # Column H
            llama_score = calculate_chrf(reference, row[8])  # Column I

            print(f"Row {row_num} - GPT score: {gpt_score:.2f}")
            print(f"Row {row_num} - Gemini score: {gemini_score:.2f}")
            print(f"Row {row_num} - GT score: {gt_score:.2f}")
            print(f"Row {row_num} - Yandex score: {yandex_score:.2f}")
            print(f"Row {row_num} - LLaMa score: {llama_score:.2f}\n")

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <csv_file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    process_csv(file_path)

if __name__ == "__main__":
    main()
```

For METEOR:
```python
# for me it was necessary to run the two following commands in a python shell before running the code:
# import nltk
# nltk.download('wordnet')

import csv
import sys
from nltk.translate.meteor_score import meteor_score
from nltk.tokenize import word_tokenize
import nltk

# Download necessary NLTK resources
nltk.download('punkt')
nltk.download('punkt_tab')  # Explicitly download punkt_tab

def calculate_meteor(reference, hypothesis):
    # Tokenize the reference and hypothesis
    reference_tokens = word_tokenize(reference)
    hypothesis_tokens = word_tokenize(hypothesis)
    
    # Calculate METEOR score between reference and hypothesis
    return meteor_score([reference_tokens], hypothesis_tokens) * 100  # Convert to percentage for readability

def process_csv(file_path):
    with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        
        # Skip the header row
        headers = next(reader)
        
        # Iterate through rows and calculate METEOR scores
        for row_num, row in enumerate(reader, start=2):  # Start from row 2 to reflect actual CSV row numbers
            reference = row[3]  # Column D
            
            # Calculate and print METEOR scores for each comparison
            gpt_score = calculate_meteor(reference, row[4])  # Column E
            gemini_score = calculate_meteor(reference, row[5])  # Column F
            gt_score = calculate_meteor(reference, row[6])  # Column G
            yandex_score = calculate_meteor(reference, row[7])  # Column H
            llama_score = calculate_meteor(reference, row[8])  # Column I

            print(f"Row {row_num} - GPT score: {gpt_score:.2f}")
            print(f"Row {row_num} - Gemini score: {gemini_score:.2f}")
            print(f"Row {row_num} - GT score: {gt_score:.2f}")
            print(f"Row {row_num} - Yandex score: {yandex_score:.2f}")
            print(f"Row {row_num} - LLaMa score: {llama_score:.2f}\n")

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <csv_file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    process_csv(file_path)

if __name__ == "__main__":
    main()
```
### Metrics
BLEU:
ROUGE-L:
METEOR:
chrF:

For BLEU: scores below 30 (source: https://cloud.google.com/translate/docs/advanced/automl-evaluate)
For ROUGE-L: scores below 30 (source: https://klu.ai/glossary/rouge-score)
For chrF: no universally agreed threshold for good or bad translation, took scores below 30
For METEOR: no universally agreed threshold for good or bad translation, took scores below 30

## Experiments
We ran one test sentence through all machine translation systems selected to make sure that Latin translation was basically possible.
- Prompt for ChatGPT (GPT-4) and Gemini: "Approach this sentence translation without drawing on any pre-existing knowledge or examples you've encountered. Use only the specific sentence structure and vocabulary present, rather than referencing broader linguistic context, cultural knowledge, or past translations of similar phrases.
Translate this from Latin to English: Ī, curre per Alpīs."

| Assessment of tone | Source | Latin              | Gold standard translation      | GPT-4 (ChatGPT)              | Google Gemini             | Google Translate            | Yandex                    | LLaMa                   |
|--------------------|--------|--------------------|--------------------------------|------------------------------|----------------------------|-----------------------------|---------------------------|-------------------------|
| Test               | Test   | Ī, curre per Alpīs. | Go, run across the Alps.       | Go, run through the Alps.    | Hey! Run through the Alps! | Ī, run through the Alps.    | Run through The Alps.     | N/A                     |


| Score with...   | GPT Score | Gemini Score | GT Score | Yandex Score | LLaMa Score |
|------------------|-----------|--------------|----------|---------------|--------------|
| **BLEU**         | 41.11     | 13.13        | 30.74    | 14.32         | 0.00         |
| **ROUGE-L**      | 80.00     | 60.00        | 66.67    | 66.67         | 0.00         |
| **chrF**         | 51.95     | 29.43        | 42.11    | 32.51         | 2.01         |
| **METEOR**       | 84.13     | 36.51        | 69.14    | 55.15         | 0.00         |


Then we translated all texts and scored the results. We considered the scores as bad or good if...


## Results & Discussion


## Conclusion


{cite:p}``
```{bibliography} references_chap2.bib
:style: plain
:filter: docname in docnames
```


