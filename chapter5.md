---
thebe: true
jupytext:
    formats: md:myst
    text_representation:
        extension: .md
        format_name: myst
        format_version: '0.13'
        jupytext_version: 1.11.5
kernelspec:
    display_name: Python 3
    language: Python
    name: python3
bibliography: references_chapter5.bib
---

# Chapter 5: Tracing Theological Shifts​: A Text Mining Analysis of Changes in Religious Text Translations Over Time

*Laura Christoph, Céline Eugster*

## Abstract

This chapter explores how English Bible translations have changed over time and how these changes affect the way people understand theology. It focuses on four key translations: the Douay-Rheims Bible (1582–1610), King James Version (1611), World English Bible (2000), and Open English Bible (2010). These translations show how language, culture, and theology have influenced the way the Bible is written and interpreted.

Using tools like n-grams, collocations, and sentiment analysis, this chapter finds patterns in the text that reveal shifts in style, vocabulary, and meaning. Older versions like the Douay-Rheims and King James tend to use formal and traditional language, while newer versions like the World English Bible and Open English Bible aim to be easier to read and understand. Sentiment analysis also shows that most books of the Bible are written in a positive tone, although the way this positivity comes across can vary depending on the translation.

This research highlights how translations balance staying true to the original meaning with adapting to modern readers’ needs. By showing how language changes shape theological ideas, this chapter contributes to both digital humanities and the study of religion, making it easier to see how translations affect the way people connect with scripture.

## Introduction
Religious texts, like the Bible, are cornerstones of spiritual and cultural guidance, shaping societies and beliefs for centuries. Each new translation of these texts is not a simple linguistic substitution but reflects shifts in language, culture, and theology. This chapter investigates how incremental changes in translation influence theological understanding, subtly reshaping interpretations over time. By examining major English Bible translations, including the Douay-Rheims (1582–1610) ({cite:p}`drb1582`), King James Version (1611) ({cite:p}`kjv1611`), World English Bible (2000) ({cite:p}`web2000`), and Open English Bible (2010) ({cite:p}`oeb2010`), we uncover how scripture evolves to reflect its socio-historical context.

Translation, though intended to stay true to the original, often involves interpretive choices influenced by translators' cultural and theological frameworks. This study addresses how these choices have shaped and reflected shifts in theological focus over centuries. Using text mining techniques such as n-grams and collocations, and sentiment analysis, we systematically analyze thematic patterns and linguistic changes across translations, revealing subtle shifts that might not be evident in qualitative analysis. 

By tracing these changes, this research provides empirical evidence of the interplay between scripture and context, offering a novel perspective on the evolution of religious translation and its impact on theological discourse. It highlights how language acts as a dynamic medium through which faith, values, and beliefs are continually reinterpreted, contributing to both digital humanities and the study of theological evolution.

## Related Work

The translation of religious texts, particularly the Bible, represents a unique intersection of linguistic fidelity, theological intent, and cultural adaptation. Scholars have extensively analyzed how translation methodologies reflect and shape broader societal and theological frameworks, offering a rich foundation for understanding their evolution.
 
{cite:t}`Stine2018` investigates the historical challenges of translating the Bible, focusing on the Good News Bible as a case study. His work explores how dynamic equivalence—a translation strategy prioritizing accessibility—reshapes the interpretive experience of scripture.
Stine demonstrates how the Good News Bible sought to make biblical texts comprehensible to modern readers by rephrasing theological and linguistic constructs to align with contemporary language norms. However, this strategy often required interpretive decisions that subtly redefined theological emphases to achieve clarity and inclusivity.
Stine’s analysis highlights the trade-offs inherent in dynamic equivalence, where the prioritization of readability can lead to shifts in theological meaning. These findings underscore the complexity of translation as a process that balances audience comprehension with doctrinal fidelity.
 
{cite:t}`Smith2008` offers a complementary perspective by championing direct translation, a method grounded in relevance theory, which prioritizes retaining the interpretive framework of the source text.
Smith’s approach emphasizes preserving linguistic structures and cultural nuances to enable readers to reconstruct the original intent within its historical context. He argues that while this method demands more effort from readers, it ensures theological precision by minimizing the translator’s interpretive influence.
Smith’s work provides a theoretical counterpoint to Stine, advocating for a more literal approach that prioritizes faithfulness to the original text. His insights highlight the tension between textual fidelity and accessibility, which remains central to debates on translation methodologies.
 
{cite:t}`Brown2010` extends the discourse by introducing a sociocognitive framework for hermeneutics, grounding biblical interpretation in empirical sciences to better understand the relationship between texts and their readers.
Brown emphasizes the role of cognitive schemas and social contexts in shaping both the production and reception of biblical texts. His work bridges traditional hermeneutical theory with cognitive science, providing a model for reconstructing the communicative events of ancient scripture in modern contexts.
By situating interpretation within a sociocognitive paradigm, Brown offers tools to address the cultural and linguistic gaps inherent in biblical texts. His approach complements the translation methodologies of Stine and Smith, emphasizing the mental frameworks that underpin theological understanding. 

{cite:t}`Adeyefa2023` critiques contemporary translation practices by exploring the socio-linguistic dynamics driving retranslation efforts, identifying key factors that influence modern versions of the Bible.
Adeyefa identifies five primary drivers of retranslation, including advancements in textual scholarship, the dynamism of language, and cultural shifts. He highlights how translators must navigate these forces while balancing theological fidelity with the expectations of modern audiences.
This critique underscores the translator’s role as a cultural mediator, negotiating between the preservation of sacred meaning and the demands of contemporary readability. Adeyefa’s work enriches the discussion by emphasizing the broader societal forces shaping translation practices over time.
 
{cite:t}`Wendland2023` introduces the literary-functional equivalence (LiFE) approach, which seeks to integrate literary aesthetics with functional goals in Bible translation.
Wendland argues that existing paradigms, such as dynamic equivalence and direct translation, often overlook the literary and rhetorical qualities of the source text. His LiFE model advocates for preserving these artistic dimensions while adapting the text to the linguistic and cultural norms of the target audience.
By combining literary fidelity with functional clarity, Wendland’s approach offers a holistic framework that addresses the dual challenges of preserving theological depth and engaging diverse audiences. His insights provide a nuanced strategy for navigating the complexities of sacred text translation.

Together, these works illustrate the multifaceted challenges of religious text translation, where linguistic, theological, and cultural factors intersect. They provide valuable theoretical and practical insights into the evolving priorities of translators.
While Stine and Smith examine the trade-offs between readability and fidelity, Brown’s sociocognitive model situates these debates within the broader framework of human cognition. Adeyefa highlights the socio-linguistic forces shaping retranslation efforts, and Wendland integrates literary and functional goals to create a balanced translation strategy.

Building on these foundations, our study employs computational text mining to trace the theological and linguistic shifts in English Bible translations over time. By systematically analyzing thematic patterns and linguistic trends, we provide a data-driven perspective that complements and extends the theoretical and qualitative frameworks established by prior research.



## Data

The data set used to explore theological shifts over time consits of the following four English Bible versions: the King James Version (KJV), Douay-Rheims Version (DRV), World English Bible (WEB), and Open English Bible (OEB). These translations reveal how language, theology, and translation philosophies have evolved, shaping readers' understanding of scripture.

The KJV (1611) ({cite:p}`britannica_king_james_version`) and DRV (1582–1610) ({cite:p}`britannica_douai_reims_bible`) reflect formal, word-for-word approaches, preserving original structure but often making the text less accessible. In contrast, the modern WEB (2000) ({cite:p}`web2000`) and OEB (2010) ({cite:p}`oeb2010`) prioritize readability, with the OEB adopting a thought-for-thought approach. For example, Psalm 23:2 in the KJV reads, “He maketh me to lie down in green pastures: he leadeth me beside the still waters.” while the OEB says, “He lays me down in green pastures. He gently leads me to waters of rest”.

The DRV emphasizes Catholic theology, as in Matthew 6:11 (“supersubstantial bread”), while the KJV uses “daily bread.” The WEB and OEB, based on diverse manuscripts, aim for broader accessibility, omitting theological specifics like the Trinitarian reference in 1 John 5:7–8.

```{code-cell} python
:thebe:
with open("KJV_old_testament.tsv", "r") as f:
    i = 0
    for line in f.readlines():
        a,b,c = line.split("\t")
        if 0 < i < 4:
            print(c)
        i += 1
        if i > 4:
            break
```

### Data Set
After cleaning and aligning the data, we focused on 24 books that appear in all four Bible versions for better comparability. The books in the dataset can be seen in {numref}`Verse distribution`. The figure uses the OEB book titles, as these are short and contain the most important part about the titel. In total, 23,615 verses were analyzed across the four versions, with Psalms containing by far the most verses. The verses from the other books are distributed more evenly, as shown in {numref}`Verse distribution`.

```{figure} verse_dist_by_book.png
---
name: Verse distribution
---
This figure shows the distribution of verses across the books analyzed, highlighting the higher number of verses in Psalms compared to other books.
```


While we did not expect huge fluctuations in the verse counts across the versions, we anticipated some minor differences, which were generally in line with the Bible’s consistent structure. 

The data cleaning process posed several challenges, primarily due to the fact that the four Bible versions were formatted differently. One notable issue was that only the KJV explicitly distinguishes between Old Testament (OT) and New Testament (NT) books. Upon comparing the other versions, we discovered that there are significantly more NT books than OT books in the dataset. This discrepancy led us to decide against differentiating between OT and NT books, as it did not significantly affect our analysis.

Title alignment was another important task to figure out which books are present in all four versions. We used the OEB to identify the correct book names and then cross-referenced them with the other versions. In one case, we found that Revelation and The Apocalypse of St. John referred to the same book, which leads us to believe that there may be other similar cases that were overlooked.

We did not align verses between the versions, which could have affected the granularity of our analysis. Although we cannot be fully certain that all books are identical across versions, the verse distribution by book strongly supports the idea that the books are the same across the versions, as shown in {numref}`Verse distribution version`. In most cases, the number of verses per book is consistent, except for Esther and Psalms, where the DRB version has slightly more verses. This could be due to differences in extraction logic or the inclusion of additional verses in DRB, but it is considered negligible for our analysis.

```{figure} verse_dist.png
---
name: Verse distribution version
---
This figure shows the distribution of verses across the four Bible versions analyzed.
```

Additionally, a mistake in the WEB version was identified, where the last verse of one book was incorrectly matched to the first verse of the following book. While we did not resolve this issue, it does not significantly impact the analysis. We assume that there might be other verses not properly aligned, which is also neglectable.


## Methodology
### N-Grams and Collocations
This section outlines the methodology used to analyze n-grams in Bible translations as a means to trace linguistic and theological shifts over time. The goal of this analysis was to identify meaningful lexical patterns across translations and evaluate their relevance to changes in theological emphasis and linguistic style. The methodological steps included extracting n-grams, employing statistical measures to improve relevance, and filtering results to ensure quality and interpretability.

#### N-Gram Extraction

The first step in the analysis involved extracting n-grams from the text of each Bible translation. N-grams are contiguous sequences of n words, and in this study, bi-grams (2-grams), tri-grams (3-grams), and quad-grams (4-grams) were selected for analysis. This range of n-grams was chosen to capture both simple lexical co-occurrences and more complex phrasal structures. The rationale for selecting 2-grams to 4-grams is twofold:

- Granularity: Bi-grams often reveal fundamental lexical relationships, such as key theological terms (e.g., "Holy Spirit", "Jesus Christ"), while tri-grams and quad-grams provide deeper insight into recurring doctrinal or narrative expressions (e.g., "In the name of Jesus", "Kingdom of God is") that are vital to understanding theological framing.
- Interpretability: Longer n-grams, while potentially more informative, may become less frequent and more difficult to interpret. Thus, 2-grams to 4-grams strike a balance between capturing meaningful patterns and maintaining interpretability.
For each book in the Bible, n-grams were extracted individually across the selected translations, allowing for book-level comparisons. This approach ensured that the analysis remained sensitive to the unique thematic and linguistic characteristics of each text.

#### Statistical Filtering with T-Score

To enhance the relevance and quality of the extracted n-grams, a t-score was used as a statistical measure. The t-score evaluates the strength of association between words in an n-gram by comparing their observed frequency to what would be expected if their occurrences were independent. This approach helps to:

- Prioritize Collocations: Highlight meaningful word pairings and phrases that occur more frequently than chance, filtering out incidental word combinations.
- Improve Theological Relevance: By focusing on statistically significant n-grams, the analysis captures patterns that are more likely to reflect underlying theological or linguistic intent.
The t-score is calculated using the formula:

$$
t = \frac{(O - E)}{\sqrt{O}}
$$

Where:
- $ O $: Observed frequency of the n-gram.
- $ E $: Expected frequency under independence.

N-grams with higher t-scores were prioritized for analysis, as they are more likely to represent meaningful patterns in the text.

#### Stop Word Filtering

To make the n-gram results more useful, we applied a process to filter out "stop words." These are common words like "and," "the," and "of," which often appear frequently in texts but don't really help in understanding the main themes or theological ideas. By removing these words, we were able to focus on more meaningful terms that carry weight in the analysis. However, we didn’t completely ignore stop words. In some cases, they were kept when they were part of important theological phrases, like "Kingdom of God" or "The Lord Jesus."

We created a custom list of stop words to strike a balance between filtering out irrelevant words and keeping phrases that are theologically significant. This list also took into account the differences in language styles between older and newer Bible translations.

There were some challenges during this process:

- Common Phrases Creating Noise: Phrases like "said unto them" or "came to pass" showed up a lot but didn’t add much to the analysis. We excluded these unless they had a clear theological meaning.
- Text Differences Between Translations: Each Bible version uses slightly different wording and phrasing, which made it tricky to compare them directly. To handle this, we analyzed the n-grams in aligned sections of the text to keep things consistent.

### Sentiment Analysis
The following section discusses the methodology used to analyze the sentiment of the books across the different Bible versions.

Initially, we applied sentiment analysis using VADER (Valence Aware Dictionary and sEntiment Reasoner) ({cite:p}`VADER2014`). But because VADER is speficially trained on social media text, it proved to not perform adequately for our purposes. For instance, VADER often interprets key terms as neutral — such as "Jesus" — despite their significant positive connotations in the text. Conversely, terms like "God" are appropriately identified as positive. This inconsistency prompted a shift to more advanced tools.

To address these challenges, we employed a pre-trained DistilBERT model fine-tuned for sentiment classification by HuggingFace({cite:p}`hf_canonical_model_maintainers_2022`). While further fine-tuning the model specifically on biblical texts would likely improve performance further, this would have gone beyond the scope of our analysis.

The sentiment analysis process involved applying the DistilBERT model to classify each verse in the dataset as either positive or negative, alongside a confidence score indicating the model's certainty for each prediction. The data was then grouped by Bible book and version to aggregate sentiment predictions for each group. To determine the overall sentiment of a book or version, we used the ratio of positive to negative verses, to get a first idea of the predominant sentiment of a book. The results were compiled into a single DataFrame, summarizing sentiment trends across all books and versions.

To assess the model's performance, we analyzed a sample of verses from the OEB version of Revelation, a book expected to have a more negative tone due to its apocalyptic content. 

The results provide a closer look at how the sentiment model interprets biblical language: (CODE NOT WORKING YET):

```{code-cell} python
:thebe:
import pandas as pd

# Load the saved DataFrame
sentiment_df = pd.read_csv('sentiment_revelation_ex_results.csv') 
# Display the first 10 rows as a DataFrame
sentiment_df.head(10)
```

As we can see, a verse like "The Revelation of Jesus Christ, which God gave to him to make known to his servants, concerning what must shortly take place, and which he sent and revealed by his angel to his servant John," is labeled positive with a high confidencd score of 0.969. This classification likely stems from the model detecting positive or anticipatory language, such as "Jesus Christ," "revealed," and "what must shortly take place." These terms often convey hope or importance, which the sentiment model associates with positivity, even though the verse has deeper theological and prophetic significance.

In contrast, a verse like "I, John, who am your brother, and who share with you in the suffering and kingship and endurance of Jesus, found myself on the island called Patmos, for the sake of the message of God and the testimony to Jesus." is labeled negative with high confidence score of 0.917. While the overall tone seems more positive, as it expresses a sense of solidarity, endurance, and purpose, the model may classify it as negative due to the context of suffering and intensity of language. The model may focus more on negative keywords than biblical context.

Another spot test conducted in Second John reveals different behavior by the model. In the DRB, the verse reads: "For many seducers are gone out into the world who confess not that Jesus Christ is come in the flesh. This is a seducer and an antichrist." (DRB, The Second Epistle of St. John the Apostle 1:7). The model categorizes this verse as negative, with a confidence score of 0.55.

In contrast, the same verse in the WEB translation reads: "For many deceivers have gone out into the world, those who don't confess that Jesus Christ came in the flesh. This is the deceiver and the Antichrist." (WEB, Second John 1:7). Here, the model categorizes the verse as positive, with a significantly higher confidence score of 0.73.

While the confidence score for the negatively classified verse in the DRB is only moderately high, it is noteworthy that the untrained DistilBERT model classifies two very similar verses with differing sentiments. This divergence highlights potential challenges in sentiment classification for closely related yet differently worded translations.

Taking these sentences as examples shows that while the model likely works well enough to gain a first impression of the sentiment, it should be fine-tuned to biblical texts to capture some keywords better in the spirutual context.

Because relying solely on the ratio of positive to negative verses does not account for this potential misclassification—especially in books with only a few verses, where even small errors can heavily skew the results—we took an additional step to better understand the differences in sentiment between the four Bible versions. To address this, we incorporated Cohen’s $h$, which allowed us to quantify the magnitude of these differences in a more reliable and meaningful way ({cite:p}`Cohen1988`). Unlike purely statistical tests, which determine if differences are unlikely due to chance, Cohen’s $h$ focuses on practical significance, helping us assess whether differences are substantial enough to matter. 
While this approach does not account for cases of misclassification directly, it helps us give a sense of the current differences and how meaningful they are.

Cohen’s $h$ standardizes the difference between proportions on an arcsine scale, which reduces the impact of extreme values and ensures fair comparisons across datasets of varying sizes. The formula for Cohen’s $h$ is:

$$
h = 2 \cdot \left( \arcsin\left(\sqrt{p_1}\right) - \arcsin\left(\sqrt{p_2}\right) \right)
$$

where $p_1$ and $p_2$ represent the positivity proportions for two versions. This quantifies the magnitude of the difference in proportions. We categorized the effect sizes as negligible ($h$ < 0.1), small (0.1 ≤ $h$ < 0.2), moderate (0.2 ≤ $h$ < 0.5), and large ($h$ ≥ 0.5). 
To streamline the process, we automated pairwise comparisons for all books, categorizing results by practical significance. This ensured consistency and helped identify patterns across translations, which will be discussed in the result section.

## Results and Analysis

### N-Grams and Collocations

#### General
The analysis of n-grams from multiple Bible translations reveals significant stylistic, theological, and lexical variations that underscore the evolution of religious texts over time. This section will discuss these changes, highlighting their implications for understanding the dynamics of translation practices and their adaptation to evolving cultural and linguistic norms. The observations are presented in terms of stylistic differences, theological emphasis, and shifts in lexical choices.

A key observation pertains to the stylistic divergence between traditional and modern translations. For instance, older translations such as the Douay-Rheims Bible (DRB) and King James Version (KJV) retain formal expressions and archaic language, as shown by phrases like "Saith unto them" and "Verily I say unto you". By contrast, contemporary translations like the Open English Bible (OEB) and World English Bible (WEB) show a deliberate simplification of language, using phrases such as "Jesus said to them" or "Truly, I tell you". This finding supports earlier claims by {cite:t}`Smith2008` that modern translations prioritize accessibility and reader comprehension. Moreover, the frequent use of conversational markers, such as "Don’t" and "They said", in WEB suggests a narrative focus aimed at engaging contemporary audiences.

Another interesting observation is how different translations emphasize theology in their own ways. Older versions like the Douay-Rheims Bible (DRB) and King James Version (KJV) often stick to formal, traditional expressions such as "Holy Ghost" and "Our Lord Jesus Christ," which show a focus on maintaining doctrinal consistency. On the other hand, newer translations take a different approach, using language that feels more relational and inclusive. For instance, the Open English Bible (OEB) uses "Holy Spirit" instead of "Holy Ghost," which feels more in tune with modern religious language. The OEB also introduces phrases like "Union with Christ Jesus," adding a personal and relational tone that wasn’t as present in the older versions.

Another notable point involves the evolution of word choices in different translations. For instance, the term "Ghost" in the KJV is replaced by "Spirit" in the OEB and WEB, which seems to reflect a deliberate attempt to modernize the vocabulary. Similarly, while older translations use words like "Verily," more recent translations prefer "Truly," suggesting a focus on simplicity and accessibility. These lexical changes appear to stem from evolving linguistic norms and the goal of making the text more relevant to contemporary readers. An interesting example is the replacement of "Gospel" (KJV) with "Good News" (OEB), a shift that conveys the traditional meaning in a more straightforward manner.

In summary, the findings from the n-gram analysis reveal significant changes in the stylistic, theological, and lexical aspects of Bible translations over time. These transformations highlight the influence of cultural and linguistic shifts on religious text translation, demonstrating how tradition and adaptation interact. Future research could explore the impact of these changes on how readers interpret and engage with religious texts. Such studies would deepen our understanding of the relationship between language, culture, and theology.

#### Book-Specific Analysis: Insights from N-Gram Patterns
Looking at the n-grams from different Bible translations gives us helpful insights into how choices in wording reflect changes in style, theological focus, and interpretation. This section dives into specific books—Philippians, Acts, Psalms, and 1 Corinthians—to show how these shifts play out over time, highlighting the balance between doctrinal priorities and changes in language.

In *Philippians* (Book ID 2), the differences in style and theological emphasis stand out clearly. Older translations like the Douay-Rheims Bible (DRB) and King James Version (KJV) use phrases such as "Christ Jesus" and "Lord Jesus Christ" frequently, showing their focus on traditional Christological titles. On the other hand, the Open English Bible (OEB) and World English Bible (WEB) prefer phrases like "Union with Christ Jesus" and "Spreading the good news," which sound more modern and relational. This shift points to how newer translations aim to balance staying true to doctrine while being more accessible to contemporary readers.
The graph compares 4-grams (four-word phrases) across four Bible versions: DRB, OEB, WEB, and KJV. Green highlights phrases found in all versions, like "the lord jesus christ," showing shared themes. Red marks unique phrases, reflecting differences in translation style or focus.
```{code-cell} python
:tags: [hide-input]
:thebe:
import matplotlib.pyplot as plt
import pandas as pd

# Data for 4-grams
data = {
    'DRB': ['am made a minister', 'giving thanks to god', 'the lord jesus christ', 'jerome epist ad algas'],
    'OEB': ['spreading the good news', 'union with christ jesus', 'the lord jesus christ', 'animated by one spirit'],
    'WEB': ['the lord jesus christ', 'smelling fragrance an acceptable', 'humility each counting others', 'every knee should bow'],
    'KJV': ['am made a minister', 'the lord jesus christ', 'malice blasphemy filthy communication', 'neither greek nor jew']
}

# Convert data into a DataFrame
df = pd.DataFrame(dict([(k, pd.Series(v)) for k, v in data.items()]))

# Transpose DataFrame for better visualization
df_transposed = df.T

# Collect all unique 4-grams
all_ngrams = df.values.flatten()
# Prepare data for the table visualization
all_unique_ngrams = pd.unique(all_ngrams)
data_matrix = pd.DataFrame(index=df_transposed.index, columns=all_unique_ngrams)

# Populate the matrix
for bible, row in df_transposed.iterrows():
    for ngram in row:
        if pd.notna(ngram):
            data_matrix.loc[bible, ngram] = ngram

# Adjust the plot to remove x-axis labels
fig, ax = plt.subplots(figsize=(15, 8))

# Draw the grid
ax.set_xlim(-0.5, len(data_matrix.columns) - 0.5)
ax.set_ylim(-0.5, len(data_matrix.index) - 0.5)
ax.set_xticks(range(len(data_matrix.columns)))
ax.set_yticks(range(len(data_matrix.index)))
ax.set_xticklabels([])  # Remove x-axis labels
ax.set_yticklabels(data_matrix.index, fontsize=10)

# Populate the grid with text and color
for y, bible in enumerate(data_matrix.index):
    for x, ngram in enumerate(data_matrix.columns):
        text = data_matrix.loc[bible, ngram]
        if pd.notna(text):
            # Check conditions for coloring
            occurrences = sum(
                text in df_transposed.loc[bible_version].dropna().values
                for bible_version in data_matrix.index
            )
            if occurrences == len(data_matrix.index):  # Common across all books
                color = 'green'
            elif occurrences == 1:  # Unique to one book
                color = 'red'
            else:
                color = 'white'

            # Add the rectangle and text
            ax.add_patch(plt.Rectangle((x - 0.5, y - 0.5), 1, 1, color=color, alpha=0.6))
            ax.text(
                x, y, text, ha='center', va='center', fontsize=8,
                bbox=dict(boxstyle="round,pad=0.3", edgecolor='none', facecolor='white')
            )

# Final adjustments to the plot
ax.grid(visible=False)
ax.set_title('4-Gram Visualization with Unique and Common Highlights', fontsize=14)
ax.tick_params(left=False, bottom=False)
ax.set_frame_on(False)

plt.tight_layout()
plt.show()
``````
This finding suggests that while the Bible versions share core theological expressions, the unique phrases highlight variations in translation approaches and interpretive emphasis.

The findings in *Psalms* (Book ID 10) highlight the ongoing simplification of language in newer translations. Older versions, such as the DRB and KJV, keep traditional phrases like "O Lord" and "His mercy endureth for ever." Modern versions like the OEB and WEB replace these with "Lord’s voice" and "Loving kindness endures forever," making the text feel more emotionally resonant. The WEB even uses "Give thanks to Yahweh," showing an effort to include transliterated divine names, which reflects both cultural sensitivity and theological inclusivity.

In *1 Corinthians* (Book ID 15), the focus shifts to how different translations tackle doctrinal and linguistic challenges. The KJV, for example, emphasizes theological exactness with phrases like "Dead rise not again" and "Our Lord Jesus Christ." Modern translations like the OEB and WEB, however, aim for clarity, using terms like "Gift of tongues" and "Union with Christ Jesus" to make the text easier to understand. This trend aligns with [Smith's article](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53), which talks about how modern translations adapt theological ideas for today’s readers. The OEB also includes more practical language, like "Let everyone remain faithful," showing a focus on ethical guidance.
This plot highlights three-grams from Corinthians First across four Bible versions, with shared phrases in green and unique ones in red, emphasizing commonalities and distinct phrasing between translations.
```{code-cell} python
:tags: [hide-input]
:thebe:
import matplotlib.pyplot as plt
import pandas as pd

# Data for 3-grams
data = {
    'DRB': ['lord jesus christ', 'thanks to god', 'christ jesus who', 'in christ jesus'],
    'OEB': ['don’t you know', 'the good news', 'gift of preaching', 'gift of ‘tongues'],
    'WEB': ['don t you', 'the good news', 'lord jesus christ', 'i don t'],
    'KJV': ['whether they be', 'lest any man', 'let no man', 'a faithful minister']
}

# Convert data into a DataFrame
df = pd.DataFrame(dict([(k, pd.Series(v)) for k, v in data.items()]))

# Transpose DataFrame for better visualization
df_transposed = df.T

# Collect all unique 3-grams
all_ngrams = df.values.flatten()
# Prepare data for the table visualization
all_unique_ngrams = pd.unique(all_ngrams)
data_matrix = pd.DataFrame(index=df_transposed.index, columns=all_unique_ngrams)

# Populate the matrix
for bible, row in df_transposed.iterrows():
    for ngram in row:
        if pd.notna(ngram):
            data_matrix.loc[bible, ngram] = ngram

# Adjust the plot to remove x-axis labels
fig, ax = plt.subplots(figsize=(15, 8))

# Draw the grid
ax.set_xlim(-0.5, len(data_matrix.columns) - 0.5)
ax.set_ylim(-0.5, len(data_matrix.index) - 0.5)
ax.set_xticks(range(len(data_matrix.columns)))
ax.set_yticks(range(len(data_matrix.index)))
ax.set_xticklabels([])  # Remove x-axis labels
ax.set_yticklabels(data_matrix.index, fontsize=10)

# Populate the grid with text and color
for y, bible in enumerate(data_matrix.index):
    for x, ngram in enumerate(data_matrix.columns):
        text = data_matrix.loc[bible, ngram]
        if pd.notna(text):
            # Check conditions for coloring
            occurrences = sum(
                text in df_transposed.loc[bible_version].dropna().values
                for bible_version in data_matrix.index
            )
            if occurrences == len(data_matrix.index):  # Common across all books
                color = 'green'
            elif occurrences == 1:  # Unique to one book
                color = 'red'
            else:
                color = 'white'

            # Add the rectangle and text
            ax.add_patch(plt.Rectangle((x - 0.5, y - 0.5), 1, 1, color=color, alpha=0.6))
            ax.text(
                x, y, text, ha='center', va='center', fontsize=8,
                bbox=dict(boxstyle="round,pad=0.3", edgecolor='none', facecolor='white')
            )

# Final adjustments to the plot
ax.grid(visible=False)
ax.set_title('3-Gram Visualization with Unique and Common Highlights', fontsize=14)
ax.tick_params(left=False, bottom=False)
ax.set_frame_on(False)

plt.tight_layout()
plt.show()
```
The plot shows strong overlap in core theological phrases, like "lord jesus christ," while unique expressions, such as "gift of ‘tongues" in OEB and "a faithful minister" in KJV, reflect each version’s interpretative nuances.

In summary, looking at these books shows how translation choices mirror changing priorities in theology, style, and cultural sensitivity. Older translations like the DRB and KJV stick to formal, traditional language, while newer ones like the OEB and WEB focus on being relatable and easy to read. These shifts reveal how Bible translations adapt over time to meet the needs of different audiences. Future research could build on this by exploring how these trends shape how readers engage with and interpret scripture.

#### Thematic Trends in Religious Text Translations
The way Bible translations have changed over time reflects some big shifts in language, theology, and culture. This section focuses on three key trends that stand out: updating vocabulary, reinterpreting theological ideas for modern readers, and making the text easier to understand and connect with. These trends show how translators try to balance respecting tradition while still making the Bible relevant to people today.

One major trend is how modern translations update the language. Older versions like the King James Version (KJV) and Douay-Rheims Bible (DRB) use words like "Holy Ghost" and phrases such as "Verily, I say unto you" that fit the way people spoke back then. Newer versions, like the Open English Bible (OEB) and World English Bible (WEB), change these to "Holy Spirit" and "Truly, I tell you." These updates aren’t just about changing words—they show an effort to make the Bible easier for modern readers to relate to. As {cite:t}`Smith2008` points out, translators often work hard to find the right balance between keeping the meaning accurate and using language that makes sense for today. This shows how the Bible’s language evolves to stay meaningful across different times and cultures.

Another important trend is adapting theological ideas to help bridge the gap between ancient times and today’s readers. Traditional translations often stick to literal phrases or specific doctrinal language, which can be hard for people to understand if they don’t know the historical or cultural background. For example, while the KJV says, "Stand fast in the Lord," the OEB translates this as "Remain steadfast in Christ," which feels more personal and less formal. This shift reflects a growing emphasis on inclusivity and relationships in modern Christian theology.

Lastly, there’s a strong focus on making the text more accessible and engaging for readers. Unlike older translations that prioritize accuracy for worship settings, newer versions try to connect with readers on a deeper level. For instance, the WEB uses conversational phrases like "Don’t be afraid" or "They didn’t understand," which make the text feel more approachable. Inclusive language is also a big part of this trend. The OEB, for example, uses "Believers in Christ" instead of "Disciples of Christ" to ensure more people feel included. These changes reflect broader cultural movements toward inclusivity and shared understanding, helping the Bible stay relevant in today’s diverse world.

In summary, the way Bible translations have changed over time shows a careful balancing act between holding onto tradition and adapting to meet the needs of modern readers. Updating the language, rethinking theological ideas, and focusing on accessibility all demonstrate how the Bible continues to be a living document that speaks to people in every generation. These trends give us a deeper understanding of how language, theology, and culture come together in the process of translation.

#### Linguistic Implications of Changes in Religious Text Translations

The analysis of n-gram patterns in Bible translations highlights important linguistic changes that go beyond word choices, including shifts in frequency, syntax, and meaning. These changes reveal how translations evolve to balance tradition with modern readability and cultural relevance.

One key change is how often certain phrases appear and the context they’re used in. For example, phrases like "Jesus Christ" and "Holy Spirit" are central across all versions, but older translations like the King James Version (KJV) often pair them with formal terms like "Our Lord." Modern versions like the Open English Bible (OEB) use more relational phrases like "Union with Christ Jesus," making the text feel more approachable. This reflects a trend noted by {cite:t}`Smith2008`, where newer translations aim to resonate with modern readers.

Another shift is in sentence structure. Older translations tend to use formal, complex sentences, such as "It is written," which reflect a focus on authority. Modern versions, however, prefer active, conversational phrasing like "Jesus said," which creates a more direct and engaging tone. This change aligns with {cite:t}`Stine2018`'s, where simpler language enhances readability and reader connection.

Semantic changes, or shifts in meaning, also play a big role. Words like "Holy Ghost" in the KJV are replaced with "Holy Spirit" in modern versions, avoiding outdated or confusing connotations. Similarly, "Gospel" becomes "Good News," emphasizing practicality over formality. While these updates improve clarity, they can also slightly alter how the text feels.

Modern translations also strive for inclusivity, using terms like "humanity" instead of "mankind" to ensure everyone feels represented. While some argue this risks losing cultural specificity, it reflects a broader effort to make the Bible accessible to diverse audiences.

These changes highlight the tension between staying true to the original text and making it accessible for modern readers. As {cite:t}`Smith2008` points out, translators must navigate this balance carefully, as their choices shape how the text is understood and experienced today.


## Sentiment Analysis

### Ratio of positive to negative verses

The sentiment analysis of Bible books across various translations reveals that most books predominantly have a positive tone. As shown in {numref}`sentiment_per_book`, the ratio of positive to negative verses in each book indicates how often positive sentiment is expressed compared to negative sentiment. A ratio of 1 serves as the threshold, meaning an equal number of positive and negative verses, with ratios above 1 signaling more positivity and those below 1 suggesting more negativity. Interestingly, very few books come close to this threshold, and even fewer fall below it, highlighting the overall positive sentiment trend in the dataset.

```{figure} sentiment_per_book_by_version.png
---
name: sentiment_per_book
---
This figure shows the ratio of positive to negative verses in each book per version.
```

Most notably, the sentiment trends remain consistent across translations. No book shifts from predominantly positive in one version to predominantly negative in another. However, when comparing traditional translations like the DRB and KJV with modern ones like the WEB and OEB, some differences emerge. Modern translations often show slightly higher positivity ratios in certain books. This could reflect their use of simpler, more accessible language, which contrasts with the formal tone typical of older translations. The more conversational tone in modern translations might also influence how the sentiment analysis model interprets the text, aligning with findings from {cite:t}`Vora2024`.

Certain books stand out for their especially positive tone across all translations. Ephesians, for example, emphasizes themes like unity—both among believers and between humanity and God. Philemon, which focuses on the story of a runaway slave, also conveys overwhelmingly positive themes of forgiveness and reconciliation ({cite:p}`britannica_letter_to_philemon`). These themes naturally lean toward positive sentiment, a trend consistent across translations. However, there are minor differences in the positivity ratios, such as the WEB showing a ratio of 22:3 compared to 20:5 in the OEB and 19:6 in the DRB and KJV. These slight variations likely stem from translation decisions that affect word choice and tone.

Interestingly, Revelation and Esther present unique sentiment patterns. Revelation, despite its heavy focus on apocalyptic imagery and the crisis of faith ({cite:p}`britannica_revelation_to_john`), displays a balanced sentiment distribution across translations. This balance might be due to its broader themes of hope, redemption, and ultimate victory, which counteract its darker elements. Esther, recounting the story of a Jewish woman saving her people, shows a generally positive tone, particularly in traditional translations ({cite:p}`britannica_book_of_esther`). The OEB, however, leans slightly more negative, possibly due to differences in language or interpretive choices in modern translations.

### Analysis of Cohen’s $h$ Results

The results of Cohen’s $h$ indicate a range of differences in positivity proportions across Bible versions. The majority of pairwise comparisons (65.97%) show negligible differences in positivity proportions. This suggests that, for most books and versions, the model’s sentiment classifications are relatively similar, with little practical significance in the differences. These negligible differences imply a high degree of consistency in sentiment classification across the Bible versions studied, and they are unlikely to matter in practice.

Approximately 26.39% of comparisons exhibit small differences in positivity proportions. These differences, while noticeable, are not substantial. They may reflect minor shifts in sentiment emphasis between versions, potentially due to translation choices, linguistic nuances, or even misclassification of verses.

A smaller proportion, 7.64% of comparisons, show moderate differences, indicating more meaningful divergences in sentiment between versions. These moderate differences suggest that certain versions may interpret or present sentiment in ways that are more distinct, possibly influenced by the translators’ theological or stylistic choices.

In Colossians, the WEB appears to have a slightly more positive tone compared to the older versions, DRB and KJV. Similarly, in James, the WEB also exhibits a slightly more positive tone than the KJV. In Philemon, the WEB stands out as the most positive of all versions.

In Second John, the DRB shows a slightly more positive sentiment than the OEB and KJV, though not the WEB. Conversely, in Third John, the OEB is slightly more positive than the older versions, KJV and DRB.

Overall, where moderate differences were observed, the WEB consistently appears to have the most positive tone, suggesting that modern versions such as WEB and OEB often present a more positive sentiment compared to older translations like KJV and DRB. An exception is Third John, where the DRB is the most positive.


## Conclusion

Our application of n-grams, collocations, and sentiment analysis in comparing Bible translations highlights how religious texts adapt to changing linguistic, cultural, and theological contexts. Older translations like the Douay-Rheims Bible (DRB) and King James Version (KJV) tend to preserve formal, archaic language that prioritizes doctrinal accuracy, while newer translations like the World English Bible (WEB) and Open English Bible (OEB) focus on making the text more accessible and engaging through simpler, conversational language. These differences affect both how the text is framed linguistically and how its sentiment is interpreted.

Analyzing both the sentiment ratios and practical significance offers an initial perspective on sentiment classification across Bible versions and provides a useful starting point for further analysis. However, to derive more meaningful insights, it is essential to fine-tune the model on Bible-specific texts to reduce misclassification. The findings presented here should be interpreted with caution, as the model was not trained on Bible texts, and only spot tests were performed to validate the model's output. These tests indicated a degree of misclassification or unusual model behavior in certain cases. But overall, this first analysis indicates a slightly more positive tone in the newer Bible versions in some of the books analyzed.

Lastly, this study is limited by the selection of books analyzed, as not all books of the Bible were included. To ensure consistency, the same books were compared across all translations. While the findings reveal key themes, input from experts could add valuable insights into the theological and linguistic details, helping to verify and refine the results, especially in terms of sentiment analysis.

## References

```{bibliography}