# Chapter 2: How good are LLMs at translating Latin religious texts?
Stefano Staffa, Andrea Scheck

## TO DOS
1. Write "Relevant Literature" (400 words)
2. Write "Methods & Data" (200 words)
	- Describe data based on what we already wrote (but more like other papers, take Volk et al. (2024): "LLM-based Machine Translation  and Summarization for Latin" as example): how many words, tokens, sentences, what sources we used (Versions, translation,  Ausgabe etc.), how many neutral, psalms, songs, what languages, what year, literal or non literal translation, why did we use 3 bibles -> check if you can cut & paste some from what we wrote in "Results"
	- In short: Describe metrics: what do they measure? what do we consider a bad score (below 30) or a good score (above 60)? What variations lead to a bad score for each metric? -> check if you can cut & paste some from what we wrote in "Results"
 	- In short: Descibe tools: how do they work? -> check if you can cut & paste some from what we wrote in "Results"
3. Write "Experiments" (650 words?)
	- Explain process for translation (example sentence translation experiment can be deleted)
		- Run each paragraph through each MT
		- Enter MT result into Excel
	- Explain process for scoring (code, averaging scores)
 	- Explain how we handled "bad" results (<30%), by running through MT 1 sentence at a time and see if it changes
  	- Get Thebe to work and insert code which randomly returns one translation + scores for the reader (see table 1 and 2 on Volk et al. (2024): "LLM-based Machine Translation  and Summarization for Latin" page 4 as example - could also be 2 tables for us (translation first in all systems, then all average scores?)
4. Write "Conclusion" (200 words)
5. Revise "Introduction" and shorten (300 words)

After:
- Revise "Results" and shorten (650 words?), answer questions:
  	- What tool has shown the best performance at translating Latin-English?
 	- What metric has shown the best performance at scoring Latin-English translation? Or do we suggest using all 4 and averaging?
	- Is it easier for MT to translate neutral text than religious text?
- Write "Abstract" (max. 100 words)

---

## Introduction
Machine Translation (MT) has revolutionized the process of translating low-resource languages, significantly reducing the effort previously involved in such translations. When, for instance, the Latin Bible was first translated into French, English and German, it required enormous human effort, extensive knowledge of both Latin and the vernacular language and the year-long labor of many religious scholars. The result of this translation - a religious text that could be understood by common people - were groundbreaking for both culture and religion, with far-reaching effects on society. It is difficult to say what would have happened if the Bible had never been translated - or if the translation had been less nuanced and careful.

Almost 650 years after the first translation of the Latin Bible to English by John Wycliffe, most translations are no longer dependent on such intense labor. Even translations from low-resource languages, like Latin, instead often at least partly depend on the assistance of MT. Even so, many ancient scientific and medical texts written in Greek and Latin remain untranslated in any modern language due to the difficulty and resource limitations involved (source). While MT systems perform efficiently on many genres, they still face challenges when dealing with more creative and complex works, requiring some degrees of post-editing (Cespedosa & Mitkov, 2023).

In this chapter, we explore possible differences in the performance of various advanced AI translation tools when handling Latin religious texts versus when translating more neutral, descriptive Latin passages. We score the results of four systems which can be used for MT — GPT-4o-mini, Gemini, Google Translate, and Yandex Translate - when compared to the manual human translations done in different past decades. While GPT-4 and Gemini are not strictly traditional MT systems, but rather large language models and AI-powered tools, they have shown promise in Latin translation tasks and are increasingly used in the field (source will follow). Previous research (Volk et al., 2024) has also highlighted the variation in the Latin translation quality of these systems, further motivating this comparison.

ith this chapter, we hope to shed some light on the efficacy and limitations of MT in translating Latin, identifying which tools are better suited for specific texts. By understanding these distinctions, we might inform future developments in MT with low-resource classical languages and possibly even assist the translation of the vast untranslated ancient texts which might hold crucial knowledge to further our understanding the historical and intellectual development of the Western world.

## Relevant Literature

Volk et al. (2024): LLM-based Machine Translation  and Summarization for Latin

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
As *methods* we are using machine translation with the programs Google Gemini, GPT-4, Google Translator, Yandex Translate, LLaMa.

To score we wrote python scripts.

### Metrics
BLEU:
ROUGE-L:
METEOR:
chrF:

For BLEU: scores below 30 (source: https://cloud.google.com/translate/docs/advanced/automl-evaluate)
For ROUGE-L: scores below 30 (source: https://klu.ai/glossary/rouge-score)
For chrF: no universally agreed threshold for good or bad translation, took scores below 30
For METEOR: no universally agreed threshold for good or bad translation, took scores below 30

## Experiments - 650 words (or less)
The experimental setup for this project began with the selection and preparation of texts, where original Latin excerpts and their corresponding gold standard translations were aligned and organized into a CSV table. The Latin excerpts were translated one at a time through the web interface of Google Translate and Yandex. For ChatGPT (GPT-4o) and Gemini, the excerpts were translated in separate conversations, always preceeded by the same prompt to limit the influence of prior knowledge or external context on the MT outputs, focusing instead on the sentence structure and vocabulary of the Latin text. (Endnote mit dem spezifischen Prompt). Each translated result was added to the table and the scored against the gold standard using all four chosen metrics (BLEU, ROUGE, METEOR, and chrF), calculated with a Python script.

***Thebe***
Get Thebe to work and insert code which randomly returns one translation + scores for the reader (see table 1 and 2 on Volk et al. (2024): "LLM-based Machine Translation  and Summarization for Latin" page 4 as example - could also be 2 tables for us (translation first in all systems, then all average scores?)

<button id="activateButton" style="width: 100px; height: 40px; font-size: 1em;">Activate</button>

<pre data-executable="true" data-language="python">
print("Hello")
</pre>

<!-- Thebe initialization -->
<script type="text/x-thebe-config">
  {
    "requestKernel": true,
    "binderOptions": {
      "repo": "pstroe/chartering-new-realms-2024/chapter_2"
    }
  }
</script>

<script src="https://unpkg.com/thebe@latest/lib/index.js"></script>

<script>
var bootstrapThebe = function() {
    thebelab.bootstrap();
}

document.querySelector("#activateButton").addEventListener('click', bootstrapThebe);
</script>

### Low BLEU scores
After examining the results of the scoring process, we were surprised at the low BLEU scores across most texts (average...). Out of X translations, BLEU was below the threshold of 30% for X, indicating significant errors in the translation. As we averaged the metric scores, the low BLEU scores resulted in a considerable negative impact for most results. To address this, the median of the metrics was considered additionally to the average to mitigate the disproportionate impact of low BLEU scores. This allowed for a more balanced representation of translation quality across metrics.

### Error identification 
In regards to the scores, six translations received an average score below 30%, indicating they contained significant errors. These included Psalm 88: 3-7 (DRB), Psalm 23: 4-6 (DRB), Book 1 Chapter 13 of the History of the Kings of Britain, Job 3: 11-13 (in both the ESV and the KJV), and Book 1 Section 40 of De Legibus. To identify the issues, we revisited the gold standard translations and upon review, found three errors. For Psalm 88: 3-7 and Psalm 23: 4-6 (DRB), incorrect gold standard translations were initially used due to differences in Psalm numbering between the Latin Vulgate and the Douay-Rheims Bible. Correcting these discrepancies raised their score averages to X and Y respectively. For Book 1 Section 40 of De Legibus, a formatting issue in the used gold standard translation source had resulted in the omission of the final sentence from the gold standard. Once this was corrected, its score average also rose to X.

### Retranslations
Despite these corrections, three texts — Book 1 Chapter 13 of the History of the Kings of Britain and Job 3: 11-13 in both ESV and KJV — remained below the 30% threshold which we deemed an acceptable translation. For these texts, we modified the translation workflow by translating each sentence individually rather than entire paragraphs. This approach aimed to reduce the impact of long, syntactically complex sentences, which are particularly challenging for MT systems. While this method resulted in slight improvements for all three texts, their average scores remained below 30%. Possible reasons are discussed in details in the following chapter.

## Results & Discussion

(Teil Andrea)
### Analysing scores
Considering the average and median values of all chosen metrics, we compared the translation quality between the different genres of text. The highest and lowest scores per text source were examined further to be sure there were no processing errors.
![Scatter plot](https://github.com/user-attachments/assets/f86b18c9-e09b-4607-8be7-c755181ba1e9)

#### De Legibus
All translations of De Legibus lie above the quality threshold of 30 %, with five out of six sections scoring above 41% when considering the average, and above 45% when considering the median. The average and median scores for De Legibus generally fall within a narrow range, indicating consistent performance across different sections. Book 1 Section 60 had the highest scores (average of 46.82% and median of 48.73%), possibly due to its closer adherence to the original text in both structure and meaning. However, there is a notable outlier in Book 1 Section 40, which achieved an average of only 33.61%.

Considering **Book 1 Section 40** in detail, it became apparent that the gold standard translation diverged significantly from the Latin source, using fewer details and replacing long descriptive clauses with brief summaries. This abbreviation of content could cause fewer overlapping n-grams when compared to translations that more closely adhered to the original text. Additionally, the gold standard used a more modernized tone, losing certain phrases such as the justification of crimes through "naturae iure" and softening the vivid imagery of torture. This semantic difference could reduce matches in metrics like METEOR and chrF, which prioritize meaning preservation.

#### History of the Kings of Britain
The translations for History of the Kings of Britain show a wider range of scores, with three out of four translations achieving average scores above 30%, but none exceeding 40%. The average scores ranged from 27.33% to 36.69% with median scores falling between 30.30% and 40.59%. Notably, Book 1, Chapter 13 received the lowest average score and fell below the acceptable threshold of 30%.

Examining **Book 1, Chapter 13** in detail, the Latin source used a vivid, descriptive language, explicitely depicting the violence of Corineus’s actions. For example, the original described him severing arms, decapitating enemies, and engaging in  physical combat. The gold standard translation simplified this text by consolidating actions and reducing the intensity. For example, the gold standard translation used phrases like “terrible slaughter” and omitted the specific actions, which could lead to lower BLEU scores due to discrepancies in n-gram matches.

As this text fell below the threshold of 30%, we also retranslated it with each MT system sentence by sentence instead of as a whole paragraph, to ensure that the length of the text was not a negative influence on the scores. This marginally improved the scores, with the average rising from 27.33 to 29.13, a percentage-wise improvement of approximately 6.57 %. Still, even the improved score from sentence-to-sentence-translation was not adequate enough to reach the 30%-threshold. (Gehört ev. mehr Richtung Methods)


#### Religious texts
For the bible translations, we translated the Latin Vulgate as the original source and compared the outcomes to three different English versions of the bible.

For the Bible translations using the King James Version (KJV) as the gold standard, 12 of 13 translations achieved an average score greater than 32.75%, with the highest score reaching 64.05%. Among these high-performing texts were neutral descriptions of law and genealogy, stories as well as songs and poems. There was no clear correlation between the scores and the "neutrality" of the text. The lowest score, recorded for Job 3:11-13, was 28.44%, which deviated significantly from the other translations.

For the Bible translations using the English Standard Version (ESV) as the gold standard, 12 out of 13 texts received an average score above 35.85%, with the highest average score being 65.43%. Most of the texts translated with the ESV gold standard showed consistently high scores across the BLEU, ROUGE, chrF, and METEOR metrics. The average scores for these texts generally remained well above 35%, with scores consistently improving for passages like Psalm 23:4-6 (65.43%) and Exodus 7:20-24 (61.25%). Again, There was no clear correlation between the scores and the "neutrality" of the text, with a mixture of neutral texts, songs and poems across all scores. Notably, the ESV gold standard translation stands out because it was the only comparison text with a significant number of texts (3) achieving an average score above 60%. The lowest score, recorded for Job 3:11-13, was 27.54%. 

For the Bible translations using the Douay-Rheims 1899 American Edition (DRB) as the gold standard, all texts received a score average above 45.41 %, with the highest average reaching 67.65 %, and the corresponding median at 73.06 %. Remarkably, even Job 3:11-13, which presented challenges and low scores for the other Bible versions, achieved a significantly better score of 46.52% in the DRB translation. The DRB translations consistently achieved higher scores across all the MT systems and less variation in performance across the passages compared to both the KJV and ESV.  Notably, this was the only comparison project in which no text had a translation score average under 30, suggesting that the language style and structure of the DRB translation may be more amenable to machine translation systems, particularly in the semantic equivalence captured by the evaluation metrics (e.g., ROUGE, METEOR). The lowest score was recorded for Psalm 88:4-8, but at 45.41%, it still performed significantly better than the same passage in the KJV and ESV translations. 

##### What happened to Job
The Latin text of Job 3:11-13 contains highly poetic language that reflects emotional distress, characterized by the repetition of rhetorical questions such as, “Why did I not die in the womb?” and “Why was I nursed at the breasts?”. This type of lyrical and repetitive structure can pose challenges any translators, as they may struggle to preserve the nuanced tone and rhetorical structure. This is amplified by the fact that the Latin word order is flexible and emphasizes certain elements for rhetorical effect, which is not always directly translatable into English. These challenges become evident when comparing the gold standard translation from KJV, ESV and DRB:

While both KJV as well as ESV are faithful to the original meaning and easily readable for modern eyes, they adhere to a modernized language structure that simplifies the emotional weight conveyed in the Latin source. For example, a poetic expression like "dormiens silerem" becomes the more dry "lain still/down and been quiet", with less expressive language. The Latin differentiation between "in vulva" (approximately: in the womb) and "ex utero" (out of the womb) might have been a additional challenge for the gold standard translators, being translated not very precisely to "at birth" or "from the womb". Additionally, the expression "give up the ghost" in the KJV translation was not replicated by MT.

In the DRB translation, interestingly, the same passage received an acceptable average score, likely due to the DRB structure being slightly more compatible with machine translation systems. The language and repetition in the source Latin are preserved well in the DRB, allowing for more accurate semantic mappings across the translations. Notably, however, this translation does not read as a well-formed text to a modern reader. Questions which entirely lack a subject, such as "Why received upon the knees? Why suckled at the breasts?" might be close to the Latin original and also close to the MT results, but hardly how we would form a sentence today.

| Verse            | Latin                                                                                         | ESV                                                                                           | KJV                                                                                           | DRB                                                                                           |
|-------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Job 3: 11-13** | Quare non in vulva mortuus sum? <br> egressus ex utero non statim perii? <br> Quare exceptus genibus? <br> cur lactatus uberibus? <br> Nunc enim dormiens silerem, <br> et somno meo requiescerem | Why did I not die at birth, <br> come out from the womb and expire? <br> Why did the knees receive me? <br> Or why the breasts, that I should nurse? <br> For then I would have lain down and been quiet; <br> I would have slept; then had I been at rest, | Why died I not from the womb? <br> Why did I not give up the ghost when I came out of the belly? <br> Why did the knees prevent me? <br> Or why the breasts that I should suck? <br> For now should I have lain still and been quiet, <br> I should have slept: then had I been at rest, | Why did I not die in the womb, <br> why did I not perish when I came out of the belly? <br> Why received upon the knees? <br> Why suckled at the breasts? <br> For now I should have been asleep and still, <br> and should have rest in my sleep. |

The same challenges which lead to deviation between the different gold standards also affected the MT systems:

| **Latin**                                      | **GPT-4o**                                                                                   | **Google Translate**                                                                    | **Gemini**                                                                               | **Yandex**                                                                |
|------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Quare non in vulva mortuus sum?**            | Why did I not die in the womb?                                                              | Why did I not die in the womb?                                                         | Why not in the womb did I die?                                                          | Why am I not dead in the womb?                                            |
| **Egressus ex utero non statim perii?**        | Having left the uterus, why did I not perish immediately?                                   | Did I not immediately perish when I came out of the womb?                              | Having gone forth from the womb not immediately did I perish?                           | Going out of the womb was not immediately ruined?                         |
| **Quare exceptus genibus?**                    | Why was I received upon the knees?                                                         | Why except the knees?                                                                   | Why caught by the knees?                                                                | Why knees?                                                                |
| **Cur lactatus uberibus?**                     | Why was I nursed at the breasts?                                                           | Why did he breastfeed?                                                                  | Why suckled by the breasts?                                                              | Why breastfeed?                                                            |
| **Nunc enim dormiens silerem,**                | For now, sleeping, I would be silent,                                                      | For now, sleeping in silence,                                                           | Now indeed sleeping I would be silent,                                                  | Silent sleeping for now,                                                  |
| **Et somno meo requiescerem.**                 | And in my sleep, I would rest.                                                             | And I would rest in my sleep.                                                           | And in my sleep I would rest.                                                            | I need my sleep.                                                           |

The repetition of rhetorical questions, expressing anguish and lamentation rather than seeking actual answers, seems to have been highly difficult for MT, which appear to interpret the words literally. The "Why" structure is abandoned in the second sentence by Google Translate, Gemini and Yandex, rather asking "if" the speaker died; in the third and fourth sentence, they even lose the reference to the subject ("I"). The emotional tone seems hard to reproduce, with very practical sounding results such as "I need my sleep". Additionally, vocabulary ambiguities also occur due to the very limited context, with "perii" (perished) translated as "ruined" and "exceptus" (received) as "caught".

A retranslation experiment, in which the text was translated sentence by sentence, showed an improvement in overall scores when compared to ESV and KJV, particularly in BLEU. This suggests that translating smaller units may help maintain structure and preserve n-gram matches, even in poetic or emotionally dense texts. The results from the sentence-by-sentence approach indicate that smaller segments may allow the MT system to more accurately replicate individual sentence structures, thus improving alignment with the original text. This underscores the difficulty of evaluating poetic texts using metrics like BLEU, which are heavily influenced by word-for-word accuracy rather than meaning preservation and stylistic nuances.

### Comparing scores
Non-religious texts, on average, did not perform better than religious texts. Religious texts showed higher overall scores and consistency across versions.
- De Legibus had average scores mostly between 33.61% and 48.54%.
- History of the Kings of Britain scores ranged between 27.33% and 36.69%, performing worse overall.
- Religious texts in the Douay-Rheims version (e.g., Exodus 7: 20-24, Psalm 23, Ecclesiastes 3: 7-8) performed particularly well, often exceeding 50% averages.
- Even the lowest-performing religious texts (Job 3: 11-13) had scores comparable to or better than the poorest-performing non-religious texts.

| Source                       | Average of Averages (%) | Median of Averages (%) | General Performance Ranking |
|------------------------------|--------------------------|-------------------------|-----------------------------|
| *Douay-Rheims Bible (DRB)*   | **52.35**               | **55.85**              | Highest-performing source  |
| *English Standard Version (ESV)* | 47.96                   | 48.88                  | Strong, consistent         |
| *King James Version (KJV)*   | 45.06                   | 46.93                  | Good, slightly behind ESV  |
| *De Legibus*                 | 43.42                   | 47.16                  | Moderate, varying          |
| *History of the Kings*       | **33.08**               | **37.11**              | Lowest-performing source   |

Additionally, whether neutral-tone texts generally performed better than poetry or songs could not be generally stated:
- The best-performing neutral texts, such as Exodus 7: 20-24 (Douay-Rheims), scored higher than most poetry, with averages exceeding 67%.
- However, neutral texts like History of the Kings of Britain had lower scores, often around 30-40%, dragging down the overall performance.
- Poetry showed a wide range of performance, with Ecclesiastes 3: 7-8 (63.84%-64.56%) outperforming neutral texts but Job 3: 11-13 struggling with scores around 27-29%.
- Songs consistently scored higher than poetry. Examples include Psalm 23 and Psalm 149, which averaged 46-65%.

(*Notizen, die nicht zu meinem Vergleich gehören, aber aufgefallen sind*
- Across the board, the median scores were slightly higher than the averages, indicating that a substantial proportion of translations performed better than the average, with a few outliers pulling down the overall mean. This suggests that while some translations may struggle, the general performance of MT systems remains relatively high and consistent.
- The BLEU scores tended to be lower compared to other metrics, reflecting the common limitations of this metric in evaluating creative or interpretive translation tasks. BLEU’s strict adherence to exact n-gram matches means that translations which paraphrase or modify sentence structure (such as in the gold standard) are penalized, regardless of their accuracy or faithfulness to the source content.
- The BLEU scores for this source were notably low, especially for Book 1, Chapter 13, where it was just 6.71%. This highlights the difficulty of machine translation in retaining exact word matches when the source text is rich in descriptive detail. This also lead to a noticeable gap between average and median scores, indicating that most translations performed better than the overall average, but the BLEU scores pulled down the mean scores significantly.)

### Possible explanations
Many automatic metrics like BLEU, ROUGE, chrF, and METEOR rely on matching n-grams, tokens, or semantic similarity. They are blind to readability for humans, only measuring overlap and surface-level similarity.

The DRB, being older, was translated with stricter adherence to the source text’s structure and meaning. Modern translations like ESV and KJV adapt to contemporary language, which introduces idiomatic changes, omissions, or reinterpretations for readability — this decreases literal similarity with the source.
Machine translations, often designed to process texts literally, are more likely to score well with the DRB as a target text, since it shares more characteristics with the source by keeping the word order, grammar and phrasing more similar to the Latin, even if the language is archaic.

When comparing the scores between the DRB and De Legibus and History of the Kings, the latter two often feature complex sentence structures, with frequent use of subordinate clauses, legal jargon, or historical references. De Legibus in particular uses legal and philosophical terminology, which seems challenging for MT models. On the other hand, the DRB has a very formal, literal language, with the bible in general having a highly consistent structure, which MT systems can more easily map.
Religious texts, particularly those like the DRB, often have a well-established vocabulary and phrasing that aligns with traditional theological discourse. MT systems may have encountered similar texts during training, allowing for more accurate translations. De Legibus and History of the Kings of Britain belong to genres (philosophy, law, and history) that may not be as heavily represented in training data for machine translation systems.
(Ende Teil Andrea)


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





---

## Conclusion


## Bibliography
{cite:p}``
```{bibliography} references_chap2.bib
:style: plain
:filter: docname in docnames
```

## Notes / Things that were deleted 
The prompt: "Approach this sentence translation without drawing on any pre-existing knowledge or examples you've encountered. Use only the specific sentence structure and vocabulary present, rather than referencing broader linguistic context, cultural knowledge, or past translations of similar phrases."

| Assessment of tone | Source | Latin              | Gold standard translation      | GPT-4 (ChatGPT)              | Google Gemini             | Google Translate            | Yandex                    | LLaMa                   |
|--------------------|--------|--------------------|--------------------------------|------------------------------|----------------------------|-----------------------------|---------------------------|-------------------------|
| Test               | Test   | Ī, curre per Alpīs. | Go, run across the Alps.       | Go, run through the Alps.    | Hey! Run through the Alps! | Ī, run through the Alps.    | Run through The Alps.     | N/A                     |


| Score with...   | GPT Score | Gemini Score | GT Score | Yandex Score | LLaMa Score |
|------------------|-----------|--------------|----------|---------------|--------------|
| **BLEU**         | 41.11     | 13.13        | 30.74    | 14.32         | 0.00         |
| **ROUGE-L**      | 80.00     | 60.00        | 66.67    | 66.67         | 0.00         |
| **chrF**         | 51.95     | 29.43        | 42.11    | 32.51         | 2.01         |
| **METEOR**       | 84.13     | 36.51        | 69.14    | 55.15         | 0.00         |


