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

# Chapter 5

## Abstract

## Introduction
Religious texts, like the Bible, are cornerstones of spiritual and cultural guidance, shaping societies and beliefs for centuries. Each new translation of these texts is not a simple linguistic substitution but reflects shifts in language, culture, and theology. This chapter investigates how incremental changes in translation influence theological understanding, subtly reshaping interpretations over time. By examining major English Bible translations, including the Douay-Rheims (1582–1610), King James Version (1611), World English Bible (2000), and Open English Bible (2010), we uncover how scripture evolves to reflect its socio-historical context.

Translation, though intended to stay true to the original, often involves interpretive choices influenced by translators' cultural and theological frameworks. This study addresses how these choices have shaped and reflected shifts in theological focus over centuries. Using text mining techniques such as n-grams and collocations, and sentiment analysis, we systematically analyze thematic patterns and linguistic changes across translations, revealing subtle shifts that might not be evident in qualitative analysis. 

By tracing these changes, this research provides empirical evidence of the interplay between scripture and context, offering a novel perspective on the evolution of religious translation and its impact on theological discourse. It highlights how language acts as a dynamic medium through which faith, values, and beliefs are continually reinterpreted, contributing to both digital humanities and the study of theological evolution.

## Related Work

The translation of religious texts, particularly the Bible, represents a unique intersection of linguistic fidelity, theological intent, and cultural adaptation. Scholars have extensively analyzed how translation methodologies reflect and shape broader societal and theological frameworks, offering a rich foundation for understanding their evolution.
 
[Stine (2018)](https://translation.bible/wp-content/uploads/2024/07/stine-2018-from-good-news-for-modern-man-to-good-news-bible-origins-and-early-issues.pdf) investigates the historical challenges of translating the Bible, focusing on the Good News Bible as a case study. His work explores how dynamic equivalence—a translation strategy prioritizing accessibility—reshapes the interpretive experience of scripture.
Stine demonstrates how the Good News Bible sought to make biblical texts comprehensible to modern readers by rephrasing theological and linguistic constructs to align with contemporary language norms. However, this strategy often required interpretive decisions that subtly redefined theological emphases to achieve clarity and inclusivity.
Stine’s analysis highlights the trade-offs inherent in dynamic equivalence, where the prioritization of readability can lead to shifts in theological meaning. These findings underscore the complexity of translation as a process that balances audience comprehension with doctrinal fidelity.
 
[Smith (2008)](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53) offers a complementary perspective by championing direct translation, a method grounded in relevance theory, which prioritizes retaining the interpretive framework of the source text.
Smith’s approach emphasizes preserving linguistic structures and cultural nuances to enable readers to reconstruct the original intent within its historical context. He argues that while this method demands more effort from readers, it ensures theological precision by minimizing the translator’s interpretive influence.
Smith’s work provides a theoretical counterpoint to Stine, advocating for a more literal approach that prioritizes faithfulness to the original text. His insights highlight the tension between textual fidelity and accessibility, which remains central to debates on translation methodologies.
 
[Brown (2010)](https://www.sil.org/system/files/reapdata/92/27/47/92274762824683737516033658991070054139/2010_Brown_PhD_Naturalizing_Biblical_Hermeneutics.pdf) extends the discourse by introducing a sociocognitive framework for hermeneutics, grounding biblical interpretation in empirical sciences to better understand the relationship between texts and their readers.
Brown emphasizes the role of cognitive schemas and social contexts in shaping both the production and reception of biblical texts. His work bridges traditional hermeneutical theory with cognitive science, providing a model for reconstructing the communicative events of ancient scripture in modern contexts.
By situating interpretation within a sociocognitive paradigm, Brown offers tools to address the cultural and linguistic gaps inherent in biblical texts. His approach complements the translation methodologies of Stine and Smith, emphasizing the mental frameworks that underpin theological understanding. 

[Adeyefa (2023)](https://www.researchgate.net/publication/374444085_BIBLE_TRANSLATION_REASONS_APPROACHES_AND_IMPLICATIONS) critiques contemporary translation practices by exploring the socio-linguistic dynamics driving retranslation efforts, identifying key factors that influence modern versions of the Bible.
Adeyefa identifies five primary drivers of retranslation, including advancements in textual scholarship, the dynamism of language, and cultural shifts. He highlights how translators must navigate these forces while balancing theological fidelity with the expectations of modern audiences.
This critique underscores the translator’s role as a cultural mediator, negotiating between the preservation of sacred meaning and the demands of contemporary readability. Adeyefa’s work enriches the discussion by emphasizing the broader societal forces shaping translation practices over time.
 
[Wendland (2023)](https://www.researchgate.net/publication/376682021_Exploring_the_Theory_and_Practice_of_Modern_Bible_Translating_A_Selective_Overview) introduces the literary-functional equivalence (LiFE) approach, which seeks to integrate literary aesthetics with functional goals in Bible translation.
Wendland argues that existing paradigms, such as dynamic equivalence and direct translation, often overlook the literary and rhetorical qualities of the source text. His LiFE model advocates for preserving these artistic dimensions while adapting the text to the linguistic and cultural norms of the target audience.
By combining literary fidelity with functional clarity, Wendland’s approach offers a holistic framework that addresses the dual challenges of preserving theological depth and engaging diverse audiences. His insights provide a nuanced strategy for navigating the complexities of sacred text translation.

Together, these works illustrate the multifaceted challenges of religious text translation, where linguistic, theological, and cultural factors intersect. They provide valuable theoretical and practical insights into the evolving priorities of translators.
While Stine and Smith examine the trade-offs between readability and fidelity, Brown’s sociocognitive model situates these debates within the broader framework of human cognition. Adeyefa highlights the socio-linguistic forces shaping retranslation efforts, and Wendland integrates literary and functional goals to create a balanced translation strategy.

Building on these foundations, our study employs computational text mining to trace the theological and linguistic shifts in English Bible translations over time. By systematically analyzing thematic patterns and linguistic trends, we provide a data-driven perspective that complements and extends the theoretical and qualitative frameworks established by prior research.



## Data

The data set used to explore theological shifts over time consits of the following four English Bible versions: the King James Version (KJV), Douay-Rheims Version (DRV), World English Bible (WEB), and Open English Bible (OEB). These translations reveal how language, theology, and translation philosophies have evolved, shaping readers' understanding of scripture.

The KJV (1611) ([Britannica](https://www.britannica.com/topic/King-James-Version)) and DRV (1582–1610) ([Brittanica](https://www.britannica.com/topic/Douai-Reims-Bible)) reflect formal, word-for-word approaches, preserving original structure but often making the text less accessible. In contrast, the modern WEB (2000) ([Worl English Bible](https://worldenglish.bible/)) and OEB (2010) ([Open English Bible](https://openenglishbible.org/faq/)) prioritize readability, with the OEB adopting a thought-for-thought approach. For example, Psalm 23:2 in the KJV reads, “He maketh me to lie down in green pastures: he leadeth me beside the still waters.” while the OEB says, “He lays me down in green pastures. He gently leads me to waters of rest”.

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

To further refine the n-gram results, a stop word filtering process was applied. Stop words—common function words such as "and", "the", and "of"—tend to dominate n-gram extractions but often contribute little to understanding thematic or theological shifts. By excluding stop words, the analysis was able to focus on content words that carry semantic weight. However, stop words were not completely disregarded; their inclusion was allowed in specific cases where they formed integral parts of theological phrases (e.g., "Kingdom of God" or "The Lord Jesus").

A custom stop word list was developed to balance relevance and theological significance, ensuring that key collocations involving function words were retained, also considering the linguistic differences between the older and newer versions.

Several challenges were encountered during the extraction and analysis of n-grams:

Noise from Common Phrases: Frequent generic phrases like "said unto them" or "came to pass" appeared across translations but contributed little to the analysis. These were managed by excluding phrases with high occurrence across all translations unless they carried theological significance.
Textual Variability: Differences in translation practices and textual traditions led to variations in word choice and phrasing. To address this, n-grams were analyzed within aligned sections of the text to ensure comparability.

### Sentiment Analysis
The following section discusses the methodology used to analyze the sentiment of the books across the different Bible versions.

In a first iteration of applying sentiment analysis to the four Bible versions, we used [VADER](https://vadersentiment.readthedocs.io/en/latest/) (Valence Aware Dictionary and sEntiment Reasoner). But because VADER is speficially trained on social media text, it proofed to not perform adequately for our purposes. For instance, VADER often interprets key terms as neutral — such as "Jesus" — despite their significant positive connotations in the text. Conversely, terms like "God" are appropriately identified as positive. This inconsistency prompted a shift to more advanced tools.

To address these challenges, we employed a pre-trained DistilBERT model fine-tuned for sentiment classification by [Huggingface](https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english). While fine-tuning specifically on biblical text would likely improve performance further, the existing model demonstrated sufficient efficacy for the study's purpose.

Sentiment analysis was performed by applying the DistilBERT model to classify each verse in the dataset as either positive or negative, along with a confidence score for each prediction that indicated the model's certainty. The dataset was then organized by Bible book and version to allow aggregation of sentiment predictions for all verses within each grouping. A majority voting approach, based on the most frequent sentiment label, was used to determine whether the overall sentiment of each book and version was predominantly positive or negative.

To determine the overall sentiment for each book and version, we applied majority voting, where the most frequent sentiment label (positive or negative) among the verses was chosen as the book's predominant sentiment. These results were then combined into a single DataFrame, offering a comprehensive summary of sentiment trends across books and versions.

To test the adequacy of the model's apporach, we analyzed a selection of verses from the OEB book of Revelation, which we assumed to be more negative in tone due to the topic of the apocalypse. 

Here are a few sentences from the book of Revelation with their sentiment analysis results (CODE NOT WORKING YET):

```{code-cell} python
:thebe:
import pandas as pd

# Load the saved DataFrame
sentiment_df = pd.read_csv('sentiment_revelation_ex_results.csv') 
# Display the first 10 rows as a DataFrame
sentiment_df.head(10)
```

As we can see, a verse like "The Revelation of Jesus Christ, which God gave to him to make known to his servants, concerning what must shortly take place, and which he sent and revealed by his angel to his servant John," is labeled positive with a high confidencd score of 0.969. This is likely due to the model detecting positive or anticipatory language that indicates hope or revelation, such as the reference to "Jesus Christ", "revealed", and "concerning what must shortly take place". These words often carry a sense of expectation or importance, which the sentiment model associates with positive sentiment, even though this text may have deeper religious or prophetic connotations.
In contrast, a verse like "I, John, who am your brother, and who share with you in the suffering and kingship and endurance of Jesus, found myself on the island called Patmos, for the sake of the message of God and the testimony to Jesus." is labeled negative with high confidence score of 0.917. While the overall tone seems more positive, as it expresses a sense of solidarity, endurance, and purpose, the model may classify it as negative due to the context of suffering and intensity of language. The model may focus more on negative keywords than biblical context.
Taking these sentences as examples shows that while the model works well enough, it should be fine-tuned to biblical texts to capture some keywords better in the spirutual context.

In summary, the purpose of this workflow was to systematically analyze sentiment trends across different Bible books in our four Bible versions. This analysis aimed to provide insights into the overall tone of each book and Bible version, whether predominantly positive or negative, as well as the intensity of sentiment as measured by the average confidence score. To address potential biases introduced by majority voting, the ratio of positive to negative sentiments was also calculated, offering a more nuanced perspective on sentiment dynamics.

This approach provides a robust framework for examining the emotional undertones in biblical texts, contributing to a deeper understanding of theological and interpretative shifts across translations. This will be discussed in more detail in the next section.


## Results and Analysis

### N-Grams and Collocations

#### General
The analysis of n-grams from multiple Bible translations reveals significant stylistic, theological, and lexical variations that underscore the evolution of religious texts over time. This section will discuss these changes, highlighting their implications for understanding the dynamics of translation practices and their adaptation to evolving cultural and linguistic norms. The observations are presented in terms of stylistic differences, theological emphasis, and shifts in lexical choices.

A key observation pertains to the stylistic divergence between traditional and modern translations. For instance, older translations such as the Douay-Rheims Bible (DRB) and King James Version (KJV) retain formal expressions and archaic language, as exemplified by phrases like "Saith unto them" and "Verily I say unto you". By contrast, contemporary translations like the Open English Bible (OEB) and World English Bible (WEB) exhibit a deliberate simplification of language, using phrases such as "Jesus said to them" or "Truly, I tell you". This finding supports earlier claims [Smith](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53) that modern translations prioritize accessibility and reader comprehension. Moreover, the frequent use of conversational markers, such as "Don’t" and "They said", in WEB suggests a narrative focus aimed at engaging contemporary audiences.

Another significant observation is the difference in theological emphasis across various translations. Traditional versions, such as the DRB and KJV, tend to highlight doctrinal consistency by using formal theological expressions like "Holy Ghost" and "Our Lord Jesus Christ." In contrast, modern translations reflect a shift toward more relational and inclusive language. For example, the OEB substitutes "Holy Ghost" with "Holy Spirit," which aligns better with contemporary religious language. Additionally, phrases such as "Union with Christ Jesus" in the OEB introduce a relational dimension that is absent in earlier versions.

Another notable point involves the evolution of word choices in different translations. For instance, the term "Ghost" in the KJV is replaced by "Spirit" in the OEB and WEB, which seems to reflect a deliberate attempt to modernize the vocabulary. Similarly, while older translations use words like "Verily," more recent translations prefer "Truly," suggesting a focus on simplicity and accessibility. These lexical changes appear to stem from evolving linguistic norms and the goal of making the text more relevant to contemporary readers. An interesting example is the replacement of "Gospel" (KJV) with "Good News" (OEB), a shift that conveys the traditional meaning in a more straightforward manner.

In summary, the findings from the n-gram analysis reveal significant changes in the stylistic, theological, and lexical aspects of Bible translations over time. These transformations highlight the influence of cultural and linguistic shifts on religious text translation, demonstrating how tradition and adaptation interact. Future research could explore the impact of these changes on how readers interpret and engage with religious texts. Such studies would deepen our understanding of the relationship between language, culture, and theology.

#### Book-Specific Analysis: Insights from N-Gram Patterns
The analysis of n-grams across different Bible translations provides valuable insights into how translation choices reflect variations in linguistic style, theological emphasis, and interpretative approaches. This section highlights findings from specific books, showcasing the interplay between doctrinal priorities and linguistic shifts over time. The focus is on Philippians, Acts, Psalms, and 1 Corinthians, as these books exemplify the broader patterns identified in this study.

The findings for Philippians (Book ID 2) demonstrate a clear divergence in linguistic style and theological framing across translations. As observed in the Douay-Rheims Bible (DRB) and King James Version (KJV), phrases like "Christ Jesus" and "Lord Jesus Christ" recur frequently, reflecting a focus on Christological titles central to traditional theological discourse. In contrast, the Open English Bible (OEB) and World English Bible (WEB) incorporate modernized expressions such as "Union with Christ Jesus" and "Spreading the good news". This shift aligns with a broader emphasis on relational and narrative frameworks in modern translations. Such variations illustrate how translators balance doctrinal fidelity with linguistic accessibility.
 
In Acts (Book ID: 4), the n-grams reveal substantial stylistic and theological diversity. The DRB and KJV consistently employ formal and doctrinally rich expressions such as "The Holy Ghost" and "The Lord Jesus Christ". Meanwhile, OEB and WEB adopt modernized terminology like "The Holy Spirit" and phrases such as "Believers in Christ". Moreover, narrative-focused phrases in WEB, such as "The commanding officer" and "They heard", suggest a deliberate effort to engage readers through storytelling. These patterns underscore the evolving priorities in Bible translation, shifting from liturgical precision to audience engagement.
 
The results for Psalms (Book ID: 10) further highlight the linguistic modernization evident in contemporary translations. While DRB and KJV retain phrases such as "O Lord" and "His mercy endureth for ever", OEB and WEB favor terms like "Lord’s voice" and "Loving kindness endures forever". This lexical shift reflects a broader trend toward simplicity and emotional resonance in modern translations. Furthermore, phrases like "Give thanks to Yahweh" in WEB indicate a move toward using transliterated divine names, reflecting cultural sensitivity and theological inclusivity. Such findings suggest that translators increasingly adapt traditional expressions to align with contemporary linguistic and cultural norms.
 
In First Corinthians (Book ID: 15), the n-grams reveal significant differences in how translations address doctrinal and linguistic challenges. Traditional translations like KJV emphasize theological precision, as seen in phrases like "Dead rise not again" and "Our Lord Jesus Christ". Modern translations such as OEB and WEB focus on interpretive clarity, introducing terms like "Gift of tongues" and "Union with Christ Jesus". These changes align with the translators' objective to contextualize theological concepts for modern readers, a trend noted in [Smith's article](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53). Additionally, the inclusion of practical language, such as "Let everyone remain faithful" in OEB, highlights an emphasis on ethical instruction.
 
In summary, the book-specific analysis demonstrates how translation choices reflect shifts in theological priorities, linguistic preferences, and cultural sensitivity. Traditional translations, exemplified by DRB and KJV, emphasize formal language and doctrinal fidelity, while modern translations, such as OEB and WEB, prioritize accessibility and engagement. These findings contribute to a deeper understanding of how religious texts evolve over time, balancing tradition with adaptation to meet the needs of diverse audiences. Future studies could expand on this analysis by exploring how these patterns influence readers' interpretations and engagement with biblical texts.

#### Thematic Trends in Religious Text Translations
The evolution of Bible translations is underpinned by recurring thematic trends that reflect broader shifts in linguistic practices, theological interpretations, and cultural priorities. This section explores three significant trends—modernization of vocabulary, contextualization of theological concepts, and the emphasis on accessibility and engagement. Each trend sheds light on the dynamic interplay between preserving tradition and adapting to contemporary audiences.

One of the most notable thematic trends in modern Bible translations is the deliberate modernization of vocabulary. Older translations, such as the King James Version (KJV) and Douay-Rheims Bible (DRB), employ terms like "Holy Ghost" and "Verily, I say unto you", which reflect the linguistic norms of their respective eras. In contrast, contemporary translations, such as the Open English Bible (OEB) and World English Bible (WEB), replace these with terms like "Holy Spirit" and "Truly, I tell you". These changes are not merely linguistic updates; they reflect a broader commitment to making the text more relatable and comprehensible to modern readers. As [Smith](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53) emphasizes, translators often strive to balance textual fidelity with the need to resonate with contemporary linguistic sensibilities. This trend illustrates how the language of sacred texts evolves to align with cultural shifts, ensuring that they remain relevant and meaningful across generations.
 
Another significant trend is the contextualization of theological concepts to bridge the gap between ancient contexts and modern audiences. Traditional translations often adhere to literal or doctrinally specific interpretations, which can create barriers for readers unfamiliar with historical or cultural nuances. For example, while the KJV uses the phrase "Stand fast in the Lord", the OEB opts for "Remain steadfast in Christ", emphasizing relational rather than hierarchical imagery. This shift aligns with a growing focus on inclusivity and personal connection within contemporary Christian theology. 
 
Finally, there is a clear emphasis on accessibility and reader engagement in modern translations. Unlike earlier versions that often prioritize liturgical precision, recent translations seek to foster a deeper connection with readers. This is evident in the narrative-driven language of the WEB, which incorporates conversational phrases such as "Don’t be afraid" and "They didn’t understand". Such choices create an immersive reading experience, allowing readers to engage with the text on a more personal level. Furthermore, the use of inclusive language, as seen in phrases like "Believers in Christ" (OEB) instead of "Disciples of Christ", underscores a commitment to welcoming diverse audiences. These changes reflect a broader societal trend toward inclusivity and shared understanding, ensuring that sacred texts remain relevant in increasingly pluralistic contexts.
 
In conclusion, the thematic trends identified in modern Bible translations reveal a delicate balancing act between tradition and adaptation. The modernization of vocabulary, contextualization of theological concepts, and emphasis on accessibility all reflect efforts to make sacred texts more relatable and impactful for contemporary readers. These trends underscore the evolving priorities in translation practices, illustrating how sacred texts can serve as living documents that adapt to meet the spiritual and cultural needs of their audiences. By acknowledging these shifts, we gain deeper insights into the dynamic interplay between language, theology, and culture in the process of translation.

#### Linguistic Implications of Changes in Religious Text Translations

The analysis of n-gram patterns across different Bible translations reveals profound linguistic implications that extend beyond lexical changes. These implications encompass aspects such as frequency variations, syntactic shifts, and semantic reinterpretations. This section examines how these linguistic elements contribute to understanding the evolution of religious texts, their impact on readability and theological framing, and their broader cultural significance.
 
One of the most evident linguistic implications lies in the frequency variations of n-grams across translations. Phrases like "Jesus Christ", "Holy Spirit", and "Kingdom of God" appear consistently across versions, reflecting their doctrinal centrality. However, the surrounding context of these phrases often varies, indicating subtle shifts in emphasis. For instance, in older translations such as the King James Version (KJV) and Douay-Rheims Bible (DRB), the phrase "Jesus Christ" frequently co-occurs with formal expressions like "Our Lord" or "The Son of God". In contrast, modern translations such as the Open English Bible (OEB) and World English Bible (WEB) tend to place "Jesus Christ" within relational or conversational contexts, such as "Union with Christ Jesus" or "Jesus said to them". These frequency variations suggest that modern translations prioritize accessibility and engagement, aiming to align religious discourse with contemporary linguistic norms. This observation aligns with findings by [Smith](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53), who argued that translation strategies increasingly focus on enhancing the text's resonance with modern audiences.
 
Syntactic shifts are another key linguistic implication observed in the analysis. Older translations often favor complex, formal sentence structures that mirror the linguistic conventions of their time. For example, the KJV frequently employs passive constructions, as seen in phrases like "It is written" and "It was told unto them". Such constructions reflect a hierarchical worldview where divine authority is emphasized through impersonal, authoritative phrasing. In contrast, modern translations favor active constructions, such as "He wrote" or "Jesus said", which create a sense of immediacy and personal connection.
This syntactic evolution has significant implications for readability and reader engagement. The paper from Philip C. Stine in @{Stine2018} illustrates that the application of contemporary language and dynamic equivalence in the Good News Bible significantly enhances textual readability and reader engagement by rendering the text more accessible and relatable to modern audiences. By adopting active syntax, modern translations make the text more accessible to contemporary audiences, particularly those who may not be accustomed to archaic language. These shifts demonstrate how syntactic choices reflect broader changes in how sacred texts are presented and interpreted.
 
Perhaps the most profound linguistic implications arise from semantic reinterpretations of key terms and phrases. Terms such as "Holy Ghost" in the KJV are replaced with "Holy Spirit" in the OEB and WEB, reflecting a shift toward contemporary vernacular. While both terms refer to the same theological concept, the choice of "Spirit" over "Ghost"aligns with modern sensibilities, where "Ghost" may evoke unintended connotations. Similarly, the term "Gospel" is frequently replaced with "Good News" in modern translations, emphasizing the relational and practical aspects of the term rather than its traditional, doctrinal weight.
These semantic shifts have far-reaching implications for how readers interpret the text. By choosing terms that resonate with contemporary cultural and linguistic contexts, modern translations aim to make theological concepts more accessible without compromising their core meaning. However, this strategy also introduces the potential for subtle reinterpretations that may differ from the original intent. For example, while "Good News" captures the essence of "Gospel", it may lack the historical and liturgical weight associated with the original term. 
 
The linguistic implications of Bible translations also extend to cultural sensitivity and inclusivity. Modern translations often strive to adopt inclusive language, reflecting broader societal shifts toward equality and representation. For instance, while older translations use male-gendered terms such as "mankind" or "brethren", newer versions opt for gender-neutral alternatives like "humanity" or "brothers and sisters". This change is particularly evident in the WEB, which frequently employs gender-inclusive language to ensure that all readers feel represented in the text.
These linguistic choices have important cultural implications, as they reflect an effort to make religious texts more relevant and welcoming to diverse audiences. However, they also raise questions about the extent to which inclusivity should influence translation practices. Critics argue that such changes may risk diluting the historical and cultural specificity of the original text. Nevertheless, the trend toward inclusivity highlights the evolving role of religious texts as living documents that adapt to meet the needs of contemporary readers.
 
A recurring theme in the linguistic implications of Bible translations is the tension between fidelity to the original text and accessibility for modern readers. Older translations, such as the KJV and DRB, prioritize textual fidelity, often preserving archaic language and complex sentence structures. This approach ensures that the translation remains as close as possible to the source text but may alienate modern readers who find such language difficult to understand. In contrast, modern translations adopt strategies that prioritize readability, such as simplifying vocabulary and syntax, even if this occasionally results in the loss of certain nuances.
This balancing act has significant implications for the role of translators as mediators between the ancient and modern worlds. As [Smith](https://journals.co.za/doi/pdf/10.10520/AJA19968167_53) notes, translators must navigate the trade-off between preserving the original meaning and ensuring that the text resonates with contemporary audiences. This tension underscores the complexity of translation as both a linguistic and cultural endeavor.
 
In conclusion, the linguistic implications of changes in religious text translations highlight the dynamic interplay between tradition and adaptation. Variations in n-gram frequency, syntactic shifts, semantic reinterpretations, and cultural sensitivity all reflect broader efforts to make sacred texts accessible and engaging for modern readers. These changes illustrate how linguistic choices shape not only the readability of the text but also its theological framing and cultural relevance. By examining these implications, we gain a deeper understanding of how language evolves to meet the spiritual and cultural needs of diverse audiences. Future research could explore the impact of these linguistic changes on readers' interpretations and engagement with religious texts, further illuminating the intersection of language, culture, and theology.

## Sentiment Analysis
The sentiment analysis of Bible books across multiple translations demonstrates that most books are predominantly positive in tone. {numref}`sentiment_per_book` shows the ratio of positive to negative verses in each book. A higher positive-to-negative ratio indicates that the verses within a book are more frequently positive than negative. A ratio of 1 serves as the threshold for balance - 1 meaning the same number of positive and negative verses -, with values above 1 indicating more positive sentiment and those below 1 reflecting a majority of negative sentiment. Interestingly, few books approach this threshold, and even fewer fall below it, underscoring the overall positive tone across the dataset.

```{figure} sentiment_per_book_by_version.png
---
name: sentiment_per_book
---
This figure shows the ratio of positive to negative verses in each book per version.
```

Most notably, the overall sentiment distribution is consistent across different Bible translations. No book displays a predominantly positive tone in one version and a predominantly negative tone in another. However, differences emerge when comparing traditional translations, such as the DRB and the KJV, with modern translations like the WEB and the OEB. The two modern translations generally exhibit higher positivity ratios in certain books. This may reflect their use of simpler, more accessible language, which contrasts with the more formal tone retained in traditional translations. These stylistic differences likely influence the sentiment analysis model’s interpretation, as modern language tends to emphasize relational and conversational elements, which is in line with [Vora et al.](https://arxiv.org/abs/2401.00689)'s findings .

Certain books stand out for their especially positive tone across all translations, notably Ephesians and Philemon. Ephesians emphasizes themes of unity, particularly the unity of believers and the reconciliation of humanity to God. Philemon, while surprising given its focus on a runaway slave, is predominantly connoted with forgiveness and reconciliation, themes that inherently carry a positive tone. More about the different themes in the books can be found on [Scripture Source](https://scripturesource.com/biblebookthemes/). This positivity is consistent across translations, though slightly higher in the WEB, where the ratio of positive to negative verses is 22 to 3, compared to 20 to 5 in the OEB, and 19 to 6 in both the DRB and KJV. These minor differences suggest that translation choices, such as lexical tone or narrative emphasis, may account for variations in positivity ratios.

Unexpectedly, Revelation and Esther also present interesting sentiment trends. Revelation, despite its focus on apocalyptic imagery and judgment, exhibits a balance between positive and negative sentiment across translations. This balance could be attributed to its overarching themes of hope, redemption, and ultimate victory, which counterbalance its darker elements. Esther, which narrates the story of a Jewish woman saving her people from massacre, is slightly more positive in tone, particularly in traditional translations. However, the OEB displays a slightly more negative sentiment distribution, potentially reflecting subtle differences in language or interpretative framing in modern translations.

The results also highlight potential limitations of the sentiment analysis model. Certain theological or neutral terms, such as "justice" and "judgment," may be interpreted differently depending on their context, introducing slight biases in sentiment classification. For instance, words associated with divine judgment might skew negative, even in contexts where the broader theological meaning is positive or redemptive.

To summarize our findings, the sentiment analysis reveals consistent positive tones across Bible books and translations, with modern translations slightly amplifying positivity, possibly through simpler language. Books like Ephesians and Philemon align with their themes of unity and reconciliation, while Revelation and Esther display sentiment trends that challenge initial assumptions. These findings emphasize the interplay between translation choices, thematic focus, and linguistic style, demonstrating how these elements influence sentiment interpretation in religious texts.

## Discussion


## Conclusion

Our application of n-grams, collocations, and sentiment across Bible translations shows how religious texts adapt to evolving linguistic, cultural, and theological contexts. Traditional translations like the Douay-Rheims Bible (DRB) and King James Version (KJV) retain formal, archaic language emphasizing doctrinal fidelity, while modern translations such as the World English Bible (WEB) and Open English Bible (OEB) prioritize accessibility and engagement through simplified, conversational language. These stylistic differences influence both linguistic framing and sentiment interpretation.

Sentiment analysis confirms a predominantly positive tone across most Bible books, with consistent trends across translations. Modern translations slightly amplify positivity, likely due to their accessible language. Notably, Ephesians and Philemon stand out for their positive themes of unity and reconciliation, while books like Revelation and Esther present nuanced sentiment distributions that challenge initial assumptions. However, limitations in the sentiment model, particularly its handling of theological terms such as "justice" and "judgment," may introduce biases in sentiment classification. Additionally, the model would benefit from fine-tuning for biblical texts, and further inspection of verse-level sentiments is needed to confirm its accuracy.

The scope of this study is also limited by its selection of books, as not all books of the Bible were analyzed. To mitigate this, the same books were used across all translations for consistency. Furthermore, while this study identifies important themes, expert input could provide deeper insights into theological and linguistic nuances, verifying and refining the results.

## References

Richard Brown, 2010. Naturalizing Biblical Hermeneutics: A Case for Grounding Hermeneutical Theory in the Sociocognitive Sciences. (Doctoral dissertation, Brunel University).

Kevin Gary Smith 2008. Direct Translation: Striving for Complete Resemblance. South African Theological Seminary.

Philip C. Stine 2018. From Good News for Modern Man to Good News Bible: Origins and Early Issues. The Bible Translator, 69(3), p.335–346.

Adeyefa, D. 2023. BIBLE TRANSLATION: REASONS, APPROACHES AND IMPLICATIONS.

Wendland, E. 2023. Exploring the Theory and Practice of Modern Bible Translating: A Selective Overview. HIPHIL Novum, HIPHIL Novum, p.5-27.


```{bibliography}