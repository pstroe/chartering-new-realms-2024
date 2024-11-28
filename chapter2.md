---
thebe: true
kernelspec:
  display_name: Python 3
  language: python
  name: python3
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: "0.13"
    jupytext_version: "1.11.5"
---

# Chapter 2: How good is MT at translating Latin religious texts?
Stefano Staffa, Andrea Scheck

## TO DOS
- Revise "Results" and shorten?, answer questions:
  - What tool has shown the best performance at translating Latin-English?
 	- What metric has shown the best performance at scoring Latin-English translation? Or do we suggest using all 4 and averaging?
	- Is it easier for MT to translate neutral text than religious text?
- Write "Abstract"
---

## Introduction
In 1382, when the Latin Bible was first translated English by John Wycliffe, this process required enormous human effort, extensive knowledge of both Latin and the vernacular, and years of labor by many religious scholars. The result of this translation - a religious text which could be understood by the common population - had groundbreaking and far-reaching impacts on culture and religion. One can hardly imagine how history might have changed had the Bible never been translated into English—or translated less carefully.

Almost 650 years later, Machine Translation (MT) has reduced the effort required for translation processes from years to minutes. Even low-resource languages, like Latin, are increasingly translated with the assistance of these tools, with studies suggesting MT can achieve a reasonably good translation quality (source). However, while MT systems perform efficiently on many genres, they still face challenges when dealing with more creative works {cite:p}`Cespedosa2023`, of which the Bible with its poems and psalms contains many.

Given that there are many Latin religious texts which remain untranslated to this day, this chapter raise the question: Does MT serve as a fitting tool for translating Latin religious text to English? To explore this, we examine the performance of four advanced MT systems (GPT-4o, Gemini, Google Translate, and Yandex) when handling Latin religious texts compared to more neutral, descriptive Latin passages. By comparing the results to each other and to the gold standard human translation, we aim to shed light on the efficacy and limitations of MT in translating Latin, identifying which tools are better suited for specific genres of texts.
By understanding these distinctions, we hope to contribute to future advancements in MT for low-resource languages and support the translation of the vast untranslated Latin texts which could provide valuable insights into the historical and intellectual evolution of the Western world.

## Previous Work
Work on MT and language modelling for Latin has progressed significantly since the advent of MT, leveraging both traditional and modern approaches. Martínez Garcia and García Tejedor {cite:t}`Martinez2020` utilized the Bible as a parallel corpus to build a Transformer-based Neural Machine Translation (NMT) system for Latin-Spanish, addressing challenges associated with Latin's complex morphology and low-resource nature. Similarly, Christodouloupoulos and Steedman {cite:t}`Christodoulopoulos2014` demonstrated the utility of the Bible as a parallel corpus in over 100 languages, including Latin, highlighting its structure and consistency as beneficial for multilingual NLP tasks. Liu et al. {cite:t}`Liu2021` further confirmed the effectiveness of using biblical texts for improving MT in low-resource settings, underscoring their relevance for Latin translation tasks. 

Beyond religious texts, Fischer et al. {cite:t}`Fischer2022` explored translating 16th-century Latin letters into German, emphasizing the importance of tailored training data for domain-specific translation. Bistafa {cite:t}`Bistafa2024` examined the challenges of translating Latin scientific texts, particularly the works of mathematician Leonhard Euler, using artificial intelligence and revealing complexities in specialized vocabulary and syntax. These studies highlight the diversity of Latin translation tasks and the potential of MT systems in addressing them. 

Recent advancements in Large Language Models (LLMs) have further expanded the possibilities for Latin MT. Volk et al. {cite:p}`Volk2024` evaluated GPT-4’s performance on both translation and summarization of Latin texts, achieving superior results compared to traditional MT systems and showcasing LLMs' capabilities in handling historical and low-resource languages. Riemenschneider and Frank {cite:t}`Riemenschneider2023` trained multilingual LLMs on Latin corpora, achieving state-of-the-art results for part-of-speech tagging and lemmatization, evaluated against the EvaLatin 2022 dataset. These works collectively provide a strong foundation for investigating LLM-based translation for Latin texts across religious and non-religious domains, as undertaken in this project. 

## Methods & Data
We constructed a corpus of Latin texts spanning both religious and non-religious genres to evaluate translation performance across diverse stylistic and thematic categories. The dataset contains 1’398 unique Latin words and 1’685 unique English words. Of these, religious texts contribute 566 unique Latin words and 937 unique English words, while non-religious texts comprise 832 unique Latin words and 748 unique English words. The dataset includes approximately 180 sentences drawn from texts written between the 1st century BCE and the 12th century CE. 

### Data
Religious texts were sourced from the Biblia Sacra iuxta Vulgatam Clementinam and comprise 60 passages distributed across 4 songs, 3 poetic passages, and 4 neutral passages. Each Latin text is paired with three English translations from the English Standard Version {cite:p}`ESV2001`, Douay-Rheims {cite:p}`DRB1899`, and King James Version {cite:p}`KJV1611`. The inclusion of three Bible versions captures theological, cultural, and stylistic differences, providing a nuanced basis for comparison. For instance, the DRB was translated directly from the Latin Vulgate and, as a result, adheres more closely to Latin phrasing. The KJV and the ESV drew from Hebrew, Greek and Latin and adopt a modernized style. 

To allow for an optimal comparison of MT performance, we aimed to chose neutral, descriptive Latin passages as sources for the non-religious excerpts. As many well-established Latin works with English translations tend to be religious, philosophical, or fictional, identifying a truly neutral text was a challenge. We selected Cicero’s De Legibus, a key legal text, and Geoffrey of Monmouth’s Historia Regum Britanniae, which includes descriptive historical narratives. 

This combination of literal and non-literal translations was expected to highlight interpretative variations for MT systems. Poetic passages, in particular, require systems to balance semantic accuracy with stylistic complexity, while neutral texts test straightforward syntactical translations. 

### Metrics
Translation quality was assessed using four widely recognized metrics: BLEU, ROUGE-L, METEOR, and chrF. Each metric captures a distinct dimension of translation quality, providing a comprehensive evaluation framework. All scores were calculated as percentages from 0 to 100. Thresholds were set to classify scores, with scores below 30 seen as faulty translations and scores exceeding 60 seen as high-quality translations.  

**Bilingual Evaluation Understudy (BLEU)**

BLEU measures the overlap of n-grams (sequences of 1 to 4 words) between the MT and one or more reference translations {cite:p}`Papineni2002`. It calculates precision for these n-grams and includes a brevity penalty to discourage overly short translations. The metric is particularly suited for evaluating literal translations where exact word matches are critical. However, BLEU is less effective for assessing translations with valid paraphrasing or synonym use, as it does not account for semantic similarity or contextual nuance. A BLEU score of 75 implies high fidelity, while scores below 30 suggest significant deviations from the reference. 

**Recall-Oriented Understudy for Gisting Evaluation (ROUGE-l)** 

ROUGE-L evaluates the longest common subsequence (LCS) between the machine-generated translation and the reference text {cite:p}`Lin2004`. This emphasizes structural similarity, focusing on recall—the proportion of the reference that appears in the generated text. Unlike BLEU, ROUGE-L is not limited to contiguous n-grams, making it useful for evaluating texts with more flexible word order, such as Latin prose and poetry. It excels in identifying translations that preserve the overall structure and flow of the reference, even if individual word choices differ.   

**Metric for Evaluation of Translation with Explicit ORdering (METEOR)**

METEOR extends beyond BLEU and ROUGE-L by incorporating precision, recall, and additional linguistic features such as stemming (reducing words to their root forms) and synonym matching {cite:p}`Banerjee2005`. It aligns words semantically rather than strictly lexically, enabling a better assessment of idiomatic expressions, paraphrasing, and non-literal translations. METEOR also assigns higher weights to exact matches while still rewarding partial matches and correct word order. This makes it particularly effective for evaluating poetic and figurative texts where semantic equivalence outweighs literal fidelity. Higher scores reflect greater similarity to the reference, factoring in synonyms and rephrased segments.  

**Character n-gram F-score (chrF)**

chrF operates at the character level, comparing sequences of character n-grams between the machine translation and the reference text {cite:p}`Popovic2015`. This fine-grained approach is especially advantageous for highly inflectional languages like Latin, where slight morphological differences (e.g., verb conjugations or noun declensions) can significantly alter meaning. By focusing on characters rather than words, chrF provides sensitivity to subtle grammatical nuances that may not be captured by word-based metrics. It also avoids penalizing legitimate variations in word segmentation or inflection. For Latin translations, chrF is particularly valuable for detecting morphological accuracy and alignment with the reference text. 

### Tools 
Machine translations were generated using GPT-4, Google Translate, Gemini, and Yandex Translate. These systems leverage either pre-trained language models or statistical algorithms to translate Latin texts into English. Each system has strengths suited to specific text types: GPT-4 excels at contextual and semantic nuances, while Google Translate often delivers consistent outputs for literal translations. 

Automated scoring scripts, written in Python, were used to evaluate the MT against gold-standard references. By combining diverse data sources, detailed metrics, and advanced translation systems, this methodology provides a comprehensive framework for evaluating machine translation performance on Latin texts of varying complexity and stylistic nuance. 

## Experiments
The experimental setup began with selecting original Latin excerpts from the aforementioned sources and their corresponding gold-standard translations. The excerpts were translated from Latin to English individually using the web interfaces of Google Translate and Yandex. For GPT-4o and Gemini, translations were conducted in separate conversations, preceded by a standardized prompt to limit the influence of prior knowledge or external context on the outputs<sup>1</sup>. Each translation was then scored against the gold standard using the four metrics (BLEU, ROUGE, METEOR, and chrF), resulting in a matrix with four translations per excerpt and four scores per translation.

Table 1 allows for a look into the translation results:
(*here will follow an interactive code block which the reader can run to see a random example of one Latin excerpt and its translation by all MT systems*)
```{code-cell} python
import pandas as pd
import random
from IPython.display import display, Markdown

csv_path = "data/translations.csv"  # CSV with all translations
data = pd.read_csv(csv_path, delimiter=';')

random_row = data.sample(n=1).iloc[0]  # Select a random row

# Show in a table
table = "| Header | Content |\n"
table += "|--------|---------|\n"
for column, value in random_row.items():
    # Only show the first 400 characters
    truncated_value = str(value)[:400] + "..." if len(str(value)) > 400 else str(value)
    table += f"| {column} | {truncated_value} |\n"
display(Markdown(table))
```

### Low BLEU scores
Examining the scoring results, we observed low BLEU scores across texts, with an overall BLEU average of 24.86 %. Of the 49 translations, 35 received a BLEU score below the threshold of 30 %, indicating notable errors in lexical or syntactic accuracy. Since the scores of all metrics were averaged, these low BLEU scores negatively influenced the overall results of almost every translation. To address this, we also considered the median of the metrics alongside the average, mitigating the impact of outliers caused by low BLEU scores.

While seemingly low, these scores align with prior research: Volk et al. (2024) observed a BLEU score of 25.22 % for Google Translate and 34.50 % for GPT-4. Our findings, with BLEU averages of 25.32 % for Google Translate and 56.69 % for GPT-4, indicate no major errors during the experiments but consistency in the outputs, while also highlighting a notable improvement in GPT-4’s performance compared to earlier projects.

Table 2 allows for a look into the scores for a random translation:
(*here will follow an interactive code block which the reader can run to see a random example of one Latin excerpt and its scores in all metrics*)
```{code-cell} python
import pandas as pd
import random
from IPython.display import display, Markdown

csv_path_scores = "data/scores.csv"  # CSV with all scores
data_scores = pd.read_csv(csv_path_scores, delimiter=';')

random_row_scores = data_scores.sample(n=1).iloc[0]  # Select a random row

# Show in a table
table_scores = "| Source | BLEU average | ROUGE average | chrF average | METEOR average |\n"
table_scores += "|--------|--------------|---------------|--------------|----------------|\n"
for column, value in random_row_scores.items():
    # Only show the first 400 characters for the Source (although it shouldn't exceed 400 characters)
    truncated_value = str(value)[:400] + "..." if len(str(value)) > 400 else str(value)
    table_scores += f"| {truncated_value} " if column == 'Source' else f"| {truncated_value} "
table_scores += "|\n"
display(Markdown(table_scores))
```

### Error proofing 
Six translations received an overall average score below 30 %, indicating significant errors in the translation. These included Psalm 88:3-7 (DRB), Psalm 23:4-6 (DRB), Book 1 Chapter 13 of The History of the Kings of Britain, Job 3:11-13 (in both the ESV and KJV), and Book 1 Section 40 of De Legibus. Upon review, we identified issues in three of the corresponding gold standard translations, where they had been either incorrectly or incompletely processed. After addressing these discrepancies, the average score for the affected excerpts increased to slightly above 30 %, marking them as acceptable translations.

### Retranslations
After these corrections, three texts remained with an average score below 30 %: Book 1 Chapter 13 of the History of the Kings of Britain and Job 3: 11-13 in both ESV and KJV. To address this, we adjusted the translation workflow by translating each sentence individually rather than entire paragraphs. This approach aimed to mitigate the challenges posed by long, syntactically complex structures, which are particularly difficult for MT systems to handle (He, 2023). While this method improved the score for The History of the Kings of Britain by 1.8 %, it did not result in significant changes for Job 3:11-13. Ultimately, the average scores for all three excerpts remained below 30 %. Possible reasons for these results are explored in detail in the following chapter.

## Results & Discussion
### Analysing scores
Considering the average and median values of all chosen metrics, we compared the translation quality between the different genres of text. The highest and lowest scores per text source were examined further to be sure there were no processing errors.

Figure 1 shows a scatter plot of the average scores for the text excerpts of each source, arranged in ascending order of values:
![Scatter plot](https://github.com/user-attachments/assets/f86b18c9-e09b-4607-8be7-c755181ba1e9)

#### De Legibus
All translations of De Legibus lie above the threshold of 30 %, with five of six excerpts scoring above 41 % when considering the average, and above 45 % when considering the median. The average and median scores for De Legibus generally fall within a narrow range, indicating consistent performance across different sections. The translation for Book 1 Section 60 received the highest scores (average of 46.82 %, median of 48.73 %), possibly due to its closer adherence to the original text in both structure and meaning. However, there is a notable outlier in Book 1 Section 40, which achieved an average of only 33.61 %.

Examining **Book 1 Section 40** in detail, it becomes apparent that the gold standard translation diverges significantly from the Latin source, using fewer details and replacing long descriptive clauses with brief summaries. This abbreviation of content could cause fewer overlapping n-grams when compared to translations that more closely adhered to the original text. Additionally, the gold standard uses a more modernized tone, losing certain phrases such as the justification of crimes through "naturae iure" and softening the vivid imagery of torture. This semantic difference could reduce matches in metrics like METEOR and chrF.

#### History of the Kings of Britain
The translations for History of the Kings of Britain show a wider range of scores, with three of four translations achieving average scores above 30 %, but none exceeding 40 %. The average scores range from 27.33 % to 36.69 % with median scores falling between 30.30 % and 40.59 %. Notably, Book 1, Chapter 13 received the lowest average score and fell below the threshold of 30 %.

Examining **Book 1, Chapter 13** in detail, it is notable that the Latin source uses a vivid, descriptive language, explicitely depicting the violence of Corineus’s actions. For example, the original describes him severing arms, decapitating enemies, and engaging in physical combat. The gold standard translation simplifies this text by consolidating actions and reducing the intensity. Instead, the gold standard translation uses phrases like “terrible slaughter” and omits the specific actions, which could lead to lower BLEU scores.

As this text fell below the threshold of 30 %, it was one of the retranslations mentioned in the preceding chapter. This marginally improved the scores, with the average rising from 27.33 to 29.13, a percentage-wise improvement of approximately 6.57 %. Even the improved score from sentence-to-sentence-translation was not adequate enough to reach the 30 % threshold.

#### Religious texts
For the Bible translations using the KJV as the gold standard, 12 of 13 translations achieved an average score greater than 32.75 %, with the highest score reaching 64.05 %. Among these high-performing texts were neutral descriptions of law and genealogy, stories as well as songs and poems. There was no clear correlation between the scores and the "neutrality" of the text. The lowest score, recorded for Job 3:11-13, was 28.44 %, which deviated significantly from the other translations.

For the Bible translations using the ESV as the gold standard, 12 out of 13 texts received an average score above 35.85 %, with the highest average score being 65.43 %. Most of the translations scored against the ESV gold standard showed consistently high scores across the BLEU, ROUGE, chrF, and METEOR metrics. The average scores for these texts generally remained well above 35 %, with scores consistently improving for passages like Psalm 23:4-6 (65.43 %) and Exodus 7:20-24 (61.25 %). Again, there was no clear correlation between the scores and the "neutrality" of the text, with a mixture of neutral texts, songs and poems across all scores. Notably, three translations scored against the ESV gold standard achieve an average score above 60 %, making it the comparison project with the largest number of "good" results. The lowest score, recorded for Job 3:11-13, was 27.54 %. 

For the Bible translations using the DRB as the gold standard, all texts received a score average above 45.41 %, with the highest average reaching 67.65 %, and the corresponding median at 73.06 %. Remarkably, even Job 3:11-13, which presented challenges and low scores for the other Bible versions, achieved a significantly better score of 46.52 % in the DRB translation. The DRB translations consistently achieved higher scores across all the MT systems and less variation in performance across the passages compared to both the KJV and ESV.  Notably, this was the only comparison project in which no translation had an average score  under 30 %, suggesting that the language style and structure of the DRB translation may be more amenable to machine translation systems, particularly in the semantic equivalence captured by the evaluation metrics (e.g., ROUGE, METEOR). The lowest score was recorded for Psalm 88:4-8, but at 45.41 %, it still performed significantly better than the same passage in the KJV and ESV translations. 

##### Job 3:11-13 in detail
The Latin text of Job 3:11-13 contains highly poetic language that reflects emotional distress, characterized by the repetition of rhetorical "Why"-questions. This type of structure can pose challenges for any translators, as they may struggle to preserve the nuanced tone and rhetorical structure. This is amplified by the fact that the Latin word order is flexible and emphasizes certain elements for rhetorical effect, which is not always directly translatable into English. These challenges become evident when comparing the gold standard translation from KJV, ESV and DRB:

While both KJV and ESV are faithful to the original meaning and easily readable for modern eyes, they use a modernized language structure that simplifies the emotional weight. For example, the poetic expression like "dormiens silerem" becomes the less expressive "lain still/down and been quiet". The Latin differentiation between "in vulva" (approximately: "in the womb") and "ex utero" ("out of the womb") might have been a additional challenge for the translators, being translated to "at birth" or "from the womb". Additionally, the expression "give up the ghost" in the KJV translation is a stylistically unique choice.

In the DRB translation, the translation for the same excerpt received an acceptable average score, as the language and repetition from the Latin are preserved well in the DRB, allowing for more accurate semantic mappings. Notably, however, this translation does not read as a well-formed text to a modern reader, with some questions entirely lacking the subject "I". While this might be close to the Latin original and also close to the MT results, it is hardly how we would form a sentence today.

| Verse            | Latin                                                                                         | ESV                                                                                           | KJV                                                                                           | DRB                                                                                           |
|-------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Job 3: 11-13** | Quare non in vulva mortuus sum? <br> egressus ex utero non statim perii? <br> Quare exceptus genibus? <br> cur lactatus uberibus? <br> Nunc enim dormiens silerem, <br> et somno meo requiescerem | Why did I not die at birth, <br> come out from the womb and expire? <br> Why did the knees receive me? <br> Or why the breasts, that I should nurse? <br> For then I would have lain down and been quiet; <br> I would have slept; then had I been at rest, | Why died I not from the womb? <br> Why did I not give up the ghost when I came out of the belly? <br> Why did the knees prevent me? <br> Or why the breasts that I should suck? <br> For now should I have lain still and been quiet, <br> I should have slept: then had I been at rest, | Why did I not die in the womb, <br> why did I not perish when I came out of the belly? <br> Why received upon the knees? <br> Why suckled at the breasts? <br> For now I should have been asleep and still, <br> and should have rest in my sleep. |

The same challenges which led to deviation between the different gold standards also seem to have affected the MT systems. The repetition of  questions seems to have been highly difficult for MT, with systems appearing to interpret the words literally. Google Translate, Gemini and Yandex abandon the "Why" structure in the second sentence, asking "if" the speaker died; in the following sentences, they also lose the reference to the subject ("I"). Yandex was unable to reproduce the emotional tone, producing with very practical sounding sentences. Additionally, vocabulary ambiguities also occur due to the very limited context, with "perii" (perished) translated as "ruined" and "exceptus" (received) as "caught".


| **Latin**                                      | **GPT-4o**                                                                                   | **Google Translate**                                                                    | **Gemini**                                                                               | **Yandex**                                                                |
|------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Quare non in vulva mortuus sum?**            | Why did I not die in the womb?                                                              | Why did I not die in the womb?                                                         | Why not in the womb did I die?                                                          | Why am I not dead in the womb?                                            |
| **Egressus ex utero non statim perii?**        | Having left the uterus, why did I not perish immediately?                                   | Did I not immediately perish when I came out of the womb?                              | Having gone forth from the womb not immediately did I perish?                           | Going out of the womb was not immediately ruined?                         |
| **Quare exceptus genibus?**                    | Why was I received upon the knees?                                                         | Why except the knees?                                                                   | Why caught by the knees?                                                                | Why knees?                                                                |
| **Cur lactatus uberibus?**                     | Why was I nursed at the breasts?                                                           | Why did he breastfeed?                                                                  | Why suckled by the breasts?                                                              | Why breastfeed?                                                            |
| **Nunc enim dormiens silerem,**                | For now, sleeping, I would be silent,                                                      | For now, sleeping in silence,                                                           | Now indeed sleeping I would be silent,                                                  | Silent sleeping for now,                                                  |
| **Et somno meo requiescerem.**                 | And in my sleep, I would rest.                                                             | And I would rest in my sleep.                                                           | And in my sleep I would rest.                                                            | I need my sleep.                                                           |

A retranslation experiment, in which the text was translated sentence by sentence, showed an improvement in overall scores when compared to ESV and KJV, particularly in BLEU. This suggests that translating smaller units may help maintain structure and preserve n-gram matches, even in poetic or emotionally dense texts.

### Comparing scores
Non-religious texts, on average, did not perform better than religious texts. Religious texts showed higher overall scores and consistency across versions.
- De Legibus had average scores mostly between 33.61 % and 48.54 %.
- History of the Kings of Britain scores ranged between 27.33 % and 36.69 %, performing worse overall.
- Religious texts in the Douay-Rheims version (e.g., Exodus 7: 20-24, Psalm 23, Ecclesiastes 3: 7-8) performed particularly well, often exceeding 50 % averages.
- Even the lowest-performing religious texts (Job 3: 11-13) had scores comparable to or better than the poorest-performing non-religious texts.

| Source                       | Average of Averages ( %) | Median of Averages ( %) | General Performance Ranking |
|------------------------------|--------------------------|-------------------------|-----------------------------|
| *Douay-Rheims Bible (DRB)*   | **52.35**               | **55.85**              | Highest-performing source  |
| *English Standard Version (ESV)* | 47.96                   | 48.88                  | Strong, consistent         |
| *King James Version (KJV)*   | 45.06                   | 46.93                  | Good, slightly behind ESV  |
| *De Legibus*                 | 43.42                   | 47.16                  | Moderate, varying          |
| *History of the Kings*       | **33.08**               | **37.11**              | Lowest-performing source   |

Additionally, whether neutral-tone texts generally performed better than poetry or songs could not be generally stated:
- The best-performing neutral texts, such as Exodus 7: 20-24 (Douay-Rheims), scored higher than most poetry, with averages exceeding 67 %.
- However, neutral texts like History of the Kings of Britain had lower scores, often around 30-40 %, dragging down the overall performance.
- Poetry showed a wide range of performance, with Ecclesiastes 3: 7-8 (63.84 %-64.56 %) outperforming neutral texts but Job 3: 11-13 struggling with scores around 27-29 %.
- Songs consistently scored higher than poetry. Examples include Psalm 23 and Psalm 149, which averaged 46-65 %.

(*Notizen, die nicht zu meinem Vergleich gehören, aber aufgefallen sind*
- The BLEU scores for this source were notably low, especially for Book 1, Chapter 13, where it was just 6.71 %. This highlights the difficulty of machine translation in retaining exact word matches when the source text is rich in descriptive detail. This also lead to a noticeable gap between average and median scores, indicating that most translations performed better than the overall average, but the BLEU scores pulled down the mean scores significantly.)

### Possible explanations
Many automatic metrics like BLEU, ROUGE, chrF, and METEOR rely on matching n-grams, tokens, or semantic similarity. They are blind to readability for humans, only measuring overlap and surface-level similarity.

The DRB, being older, was translated with stricter adherence to the source text’s structure and meaning. Modern translations like ESV and KJV adapt to contemporary language, which introduces idiomatic changes, omissions, or reinterpretations for readability — this decreases literal similarity with the source.
Machine translations, often designed to process texts literally, are more likely to score well with the DRB as a target text, since it shares more characteristics with the source by keeping the word order, grammar and phrasing more similar to the Latin, even if the language is archaic.

When comparing the scores between the DRB and De Legibus and History of the Kings, the latter two often feature complex sentence structures, with frequent use of subordinate clauses, legal jargon, or historical references. De Legibus in particular uses legal and philosophical terminology, which seems challenging for MT models. On the other hand, the DRB has a very formal, literal language, with the bible in general having a highly consistent structure, which MT systems can more easily map.
Religious texts, particularly those like the DRB, often have a well-established vocabulary and phrasing that aligns with traditional theological discourse. MT systems may have encountered similar texts during training, allowing for more accurate translations. De Legibus and History of the Kings of Britain belong to genres (philosophy, law, and history) that may not be as heavily represented in training data for machine translation systems.

#### GPT-4o:
GPT-4o emerges as the most versatile and reliable performer across all evaluated metrics. For biblical texts, it achieves the best results with a BLEU score of 28.74 and a ROUGE score of 58.27, reflecting a high degree of accuracy in both lexical and structural reproduction. The chrF score of 54.44 and METEOR score of 57.28 further underscore its ability to maintain semantic and stylistic alignment.
For non-biblical texts, while its performance decreases slightly, with a BLEU score of 19.10 and a ROUGE score of 47.94, GPT-4o remains robust and consistent, managing stylistic diversity better than other tools. Its particularly strong results for biblical texts suggest an aptitude for formal, repetitive, and structured content, though some challenges arise in handling more stylistically varied material.

#### Google Translate:
Google Translate delivers solid translation results but consistently ranks just below GPT-4o across all metrics. Its performance with biblical texts, reflected in a BLEU score of 26.98, ROUGE score of 57.43, and chrF score of 53.35, highlights its fluency and adequacy in reproducing structured content. A METEOR score of 53.36 indicates reasonably strong semantic alignment.
However, its capabilities diminish more noticeably with non-biblical texts, where it scores a BLEU of 18.37 and a ROUGE of 46.08. The chrF score of 49.35 and METEOR score of 47.02 indicate greater difficulty in managing nuanced meanings and stylistic variability. This performance disparity suggests that Google Translate is particularly effective for formal, structured text but struggles with the complexities of informal or stylistically diverse material.

#### Gemini:
Gemini delivers balanced results and demonstrates strong competitiveness, particularly when compared to Google Translate. For biblical texts, it performs well, achieving a BLEU score of 27.22, a ROUGE score of 56.54, and a chrF score of 52.71, indicating high fluency and coherence. Its METEOR score of 54.71 further reflects strong semantic alignment, making it a reliable option for structured content like Bible texts.
When translating non-biblical texts, Gemini faces slightly greater challenges but still performs admirably. Its BLEU score of 19.39 and ROUGE score of 45.84 indicate it handles stylistically diverse content on par with or slightly better than Google Translate in certain aspects. However, its chrF score of 48.37 and METEOR score of 43.64 highlight areas for improvement in capturing lexical richness and nuanced meaning. (Overall, Gemini is a robust tool, excelling in structured contexts and showing promise for handling more complex linguistic tasks with further refinement.)

#### Yandex:
Yandex consistently underperforms relative to other tools, showing significant limitations in both precision and coherence. For biblical texts, it achieves a BLEU score of 18.68 and a chrF score of 46.05, suggesting weaker lexical and structural fidelity. Its METEOR score of 47.52 reflects moderate semantic alignment, though it struggles to preserve deeper meanings effectively.
The tool’s challenges become more pronounced with non-biblical texts, where it scores only 10.65 in BLEU and 45.19 in chrF, with a METEOR score of 43.13. These results highlight its difficulty in adapting to diverse stylistic and syntactic demands, making it less suitable for high-quality translations across various content types.

(GPT-4o stands out as the most capable translation tool across all metrics, excelling in fluency, precision and semantic preservation, particularly for highly structured content such as biblical texts. Google Translate delivers competitive results and performs closely to Gemini, especially for structured texts, though both tools show some decline with informal or stylistically diverse material. Gemini matches Google Translate in many respects, providing reliable translations with solid coherence and meaning preservation but it still encounters challenges with more nuanced and descriptive linguistic structures. Yandex, on the other hand, demonstrates significant limitations across all text types, particularly struggling with stylistic and semantic consistency. This comparison underscores the importance of evaluating translation tools comprehensively, as different metrics highlight distinct strengths and weaknesses, particularly when tackling content with varying linguistic complexity and stylistic variability.)

#### Metrics:
When comparing the metrics BLEU, ROUGE, chrF, and METEOR across the models, distinct patterns emerge. For Bible texts, BLEU scores show the widest variability, ranging from 18.68 (Yandex) to 28.74 (GPT). METEOR follows closely with a range from 47.52 (Yandex) to 57.28 (GPT), capturing substantial differences in semantic alignment across models. ROUGE scores are slightly narrower, ranging from 51.92 (Yandex) to 58.27 (GPT), while chrF, which balances precision and recall at the character level, ranges from 46.05 (Yandex) to 54.44 (GPT). This indicates that while BLEU and METEOR are more sensitive to performance differences, ROUGE and chrF provide more stable evaluations, with ROUGE emphasizing recall and chrF focusing on fine-grained lexical and structural alignment. (Overall, the metrics highlight GPT's superior performance, with Yandex trailing across all measures.)
For non-Bible texts, BLEU again shows the largest variability, with scores spanning from 10.65 (Yandex) to 19.39 (Gemini). ROUGE follows, ranging from 40.74 (Yandex) to 47.94 (GPT). chrF and METEOR, while showing less declines, still demonstrate meaningful gaps, with chrF ranging from 45.19 (Yandex) to 51.31 (GPT) and METEOR from 43.13 (Yandex) to 48.80 (GPT). Thus, while chrF and METEOR are slightly more conservative than BLEU and ROUGE, they still reflect noticeable drops in performance, particularly for more challenging text types.

Across all tools, the metrics reveal a consistent trend: translations of non-biblical texts score lower due to their greater stylistic variability and linguistic complexity. BLEU and ROUGE, which emphasize precision and recall for specific lexical and syntactic features, show sharper declines for such texts, highlighting the difficulty in preserving structural elements. Meanwhile, chrF, which balances character-level precision and recall and METEOR, which incorporates synonym matching and semantic alignment, show relatively smaller variations between text types. This suggests that even when lexical and stylistic accuracy falters, tools maintain a fair degree of meaning preservation. Overall, the trend underscores the challenges posed by diverse linguistic structures and the importance of metric selection for evaluating translation quality in varying contexts.

## Conclusion
This study highlights the varied performance of MT systems in translating Latin texts, revealing distinct strengths and weaknesses across different text types and evaluation metrics. GPT-4o consistently outperformed other systems, particularly with structured and repetitive content like religious texts, achieving the highest scores across BLEU, ROUGE-L, METEOR, and chrF metrics. In contrast, systems like Yandex struggled significantly, especially with stylistically diverse and complex texts. 

Religious texts demonstrated higher overall translation quality compared to neutral texts, likely due to the structured and consistent nature of their source material. Notably, the Douay-Rheims Bible provided the most favorable benchmark, suggesting that older, more literal translations align better with MT capabilities. Here, it is importatnt to note that the best scoring translation does not automatically equate to the most readable translation for modern readers. Additional challenges persisted with poetic and highly emotional passages, as MT systems often failed to replicate nuanced tone and rhetorical complexity.  

The findings underscore the importance of text type and evaluation metric selection in MT research. While MT has advanced significantly, translating low-resource languages like Latin still demands refinements, particularly for creative and interpretive content. Future work could explore improved contextual understanding in MT systems and expand training datasets to include more diverse examples, aiding the broader goals of digital humanities and classical studies. 

## Bibliography
{cite:p}``
```{bibliography} references_chap2.bib
:style: plain
:filter: docname in docnames
```

## Appendix
<sup>1</sup>	Prompt used for GPT-4o and Gemini during the experiments: "Approach this sentence translation without drawing on any pre-existing knowledge or examples you've encountered. Use only the specific sentence structure and vocabulary present, rather than referencing broader linguistic context, cultural knowledge, or past translations of similar phrases." (followed by Latin excerpt)
