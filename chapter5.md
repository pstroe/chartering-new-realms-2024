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
---

# Chapter 5

## Abstract

## Introduction
Religious texts, serving as foundational pillars of spiritual and cultural guidance, have shaped societies and personal belief systems for centuries. Yet, each new translation of these texts is not merely an act of linguistic substitution; it brings nuanced shifts that mirror changes in language, culture, and society. This chapter explores how these incremental adjustments in translation can influence readers' theological understanding, subtly reshaping interpretations of key ideas over time. By tracing these shifts, we aim to uncover the evolving theological perspectives embedded within different English translations, shedding light on how scripture adapts to and reflects its socio-historical context.
Religious texts like the Bible are among the most frequently translated works globally, with each version inevitably influenced by the translator's language, cultural context, and theological outlook. While translation aims to stay true to the original text, it often involves interpretive choices shaped by the translator's beliefs or the prevailing religious and linguistic norms of the time. This study therefore addresses a key question: How have major English Bible translations, over centuries, reflected and contributed to shifts in theological focus?
Through advanced text mining techniques, we systematically examine thematic patterns, keywords, and topics within pivotal English Bible translations spanning over four centuries, including Douay-Rheims (1582, 1601&1610), the King James Version (1611), World English Bible (2000), and Open English Bible (2010). This temporal range allows for the analysis of continuity and change in theological emphasis, tracking shifts that may align with or respond to historical events, doctrinal developments, and societal transformations.
To achieve this, we use computational methods in text mining to capture thematic and linguistic changes across these translations. Techniques such as topic modeling, frequency analysis, and keyword comparison enable us to detect subtle yet meaningful changes that may not be immediately apparent in a qualitative review. For instance, we anticipate that terms emphasizing divine authority, morality, or human agency might reveal shifting focal points in theological interpretation. By mapping these changes, this analysis provides empirical evidence of the interplay between scriptural content and the contexts in which these texts were reinterpreted.
Through this comparative, computational lens, our study aims to offer a novel perspective on the evolution of religious translation and its impact on theological discourse. This research not only contributes to the fields of computational linguistics and digital humanities but also invites reflection on the broader cultural implications of religious translation, as language remains a living medium through which faith, values, and beliefs are continually reshaped.

## Related Work


## Data 

In this chapter, we focus on tracing theological shifts over time by examining four different Bible versions based on criteria such as comparability and accessability, i.e., being open source: the King James Version (KJV), Douay-Rheims Version (DRV), World English Bible (WEB), and Open English Bible (OEB). We chose these translations to give a balanced view of how language and interpretation have evolved, reflecting changes in theological emphasis, linguistic style, and translation philosophy over the centuries. Together, these versions allow us to explore how translation choices can shape the way people understand and connect with biblical texts.
 
The King James Version (KJV), Douay-Rheims Version (DRV), World English Bible (WEB), and Open English Bible (OEB) each offer a unique approach to translating the Bible, and they highlight how language and interpretation have changed over time. Each translation was created with different goals and priorities, which affect how we read and understand the text. The KJV, published in 1611, is known for its formal, poetic language and is based on manuscripts called the Textus Receptus. It has been very influential in shaping English-speaking Christianity. The DRV, published in 1582 (New Testament) and 1610 (Old Testament) and translated from the Latin Vulgate, is the Catholic counterpart and has a similar formal style (Britannica). On the other hand, the WEB and OEB are modern translations. The WEB updates the language of the [American Standard Version](https://ebible.org/eng-web/webfaq.htm#WhatRevision), which is based on the KJV, to make it easier to read , while the [OEB](https://openenglishbible.org/faq/) uses simple, everyday language to make the Bible more accessible to a wider audience . Together, these four translations let us see how biblical language has evolved and how translation choices influence how people connect with the text.
One big difference among these versions is how they handle language and readability. The KJV and DRV use older, more complex English, which can be hard for modern readers to understand. 
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

The WEB keeps the same basic structure as the KJV but modernizes the language to make it clearer. Meanwhile, the OEB focuses on being as readable as possible, using simple and straightforward language. To illustrate this, in Psalm 23:1, the KJV says, “The Lord is my shepherd; I shall not want,” which uses an older way of saying that God provides everything we need. The OEB translates this as, “The Lord is my shepherd; I have all that I need,” which is much clearer for today’s readers. These differences show how translations can make the text more or less accessible, depending on the language they use (citation??).
Theological emphasis is another important area where these translations differ. The [DRV](https://www.biblegateway.com/versions/Douay-Rheims-1899-American-Edition-DRA-Bible/) was translated from the Latin Vulgate and reflects Catholic beliefs , while the [KJV](https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/) comes from the Protestant tradition and has its own way of highlighting certain theological ideas . The WEB and OEB, being more modern and neutral, try to appeal to a broader audience. They avoid some of the theological specifics you find in the older translations. For instance, in Matthew 6:11, the DRV says, “Give us this day our supersubstantial bread,” which ties into Catholic teachings about the Eucharist. The KJV uses the simpler phrase “daily bread,” and the OEB goes even further, translating it as “the food we need for today,” which focuses on the practical meaning rather than theological implications. These differences show how translation choices can subtly influence how readers interpret theological concepts.
The sources used for these translations also affect how they read. The KJV is based on the Textus Receptus, which was the best manuscript source available during the Reformation (Britannica), while the [DRV](https://www.biblegateway.com/versions/Douay-Rheims-1899-American-Edition-DRA-Bible/) comes from the Latin Vulgate, the official Bible of the Catholic Church . The WEB and OEB, however, use more recent and diverse manuscript sources. This can lead to differences in how certain passages are presented. A good example is 1 John 5:7–8. The KJV includes a Trinitarian phrase that’s missing from most early Greek manuscripts but is present in the Textus Receptus. The OEB and WEB, which use critical editions of the Bible based on older manuscripts, leave this phrase out. These differences highlight how the manuscripts chosen for a translation can influence the final text, especially in areas with theological significance.
Finally, the translation philosophy behind each version affects how they communicate the original message. The KJV, DRV, and WEB all use a formal, word-for-word approach, which tries to stay as close to the original language as possible. This method often preserves the structure and vocabulary of the original texts but can be harder to read today. The OEB, on the other hand, uses a more dynamic approach, translating the meaning of each passage into natural, modern English. This makes the text easier to understand but can sometimes lose the feel of the original. In Philippians 4:13, for example, the KJV says, “I can do all things through Christ which strengtheneth me,” which is quite close to the original Greek wording. The OEB simplifies this to, “I can find strength for anything through him who gives me strength,” which is more relatable for modern readers. These different approaches show how translations can either stick closely to the original or make the text easier to read, and each choice affects how people connect with the Bible.
In summary, the KJV, DRV, WEB, and OEB give us a wide view of how Bible translation has changed over time. The older translations like the KJV and DRV emphasize tradition and formal language, while the WEB and OEB aim to make the text clearer and more understandable for today’s readers. Comparing these versions reveals how language, theology, and translation methods all work together to shape how we experience and interpret the Bible.


## Methodology
### N-Grams and Collocations
This chapter outlines the methodology used to analyze n-grams in Bible translations as a means to trace linguistic and theological shifts over time. The goal of this analysis was to identify meaningful lexical patterns across translations and evaluate their relevance to changes in theological emphasis and linguistic style. The methodological steps included extracting n-grams, employing statistical measures to improve relevance, and filtering results to ensure quality and interpretability.

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

## Results and Analysis

### N-Grams and Collocations

#### General
The analysis of n-grams from multiple Bible translations reveals significant stylistic, theological, and lexical variations that underscore the evolution of religious texts over time. This section will discuss these changes, highlighting their implications for understanding the dynamics of translation practices and their adaptation to evolving cultural and linguistic norms. The observations are presented in terms of stylistic differences, theological emphasis, and shifts in lexical choices.

A key observation pertains to the stylistic divergence between traditional and modern translations. For instance, older translations such as the Douay-Rheims Bible (DRB) and King James Version (KJV) retain formal expressions and archaic language, as exemplified by phrases like "Saith unto them" and "Verily I say unto you". By contrast, contemporary translations like the Open English Bible (OEB) and World English Bible (WEB) exhibit a deliberate simplification of language, using phrases such as "Jesus said to them" or "Truly, I tell you". This finding supports earlier claims @{Smith2008} that modern translations prioritize accessibility and reader comprehension. Moreover, the frequent use of conversational markers, such as "Don’t" and "They said", in WEB suggests a narrative focus aimed at engaging contemporary audiences.

Another significant observation is the difference in theological emphasis across various translations. Traditional versions, such as the DRB and KJV, tend to highlight doctrinal consistency by using formal theological expressions like "Holy Ghost" and "Our Lord Jesus Christ." In contrast, modern translations reflect a shift toward more relational and inclusive language. For example, the OEB substitutes "Holy Ghost" with "Holy Spirit," which aligns better with contemporary religious language. Additionally, phrases such as "Union with Christ Jesus" in the OEB introduce a relational dimension that is absent in earlier versions.

Another notable point involves the evolution of word choices in different translations. For instance, the term "Ghost" in the KJV is replaced by "Spirit" in the OEB and WEB, which seems to reflect a deliberate attempt to modernize the vocabulary. Similarly, while older translations use words like "Verily," more recent translations prefer "Truly," suggesting a focus on simplicity and accessibility. These lexical changes appear to stem from evolving linguistic norms and the goal of making the text more relevant to contemporary readers. An interesting example is the replacement of "Gospel" (KJV) with "Good News" (OEB), a shift that conveys the traditional meaning in a more straightforward manner.

In summary, the findings from the n-gram analysis reveal significant changes in the stylistic, theological, and lexical aspects of Bible translations over time. These transformations highlight the influence of cultural and linguistic shifts on religious text translation, demonstrating how tradition and adaptation interact. Future research could explore the impact of these changes on how readers interpret and engage with religious texts. Such studies would deepen our understanding of the relationship between language, culture, and theology.

#### Book-Specific Analysis: Insights from N-Gram Patterns
The analysis of n-grams across different Bible translations provides valuable insights into how translation choices reflect variations in linguistic style, theological emphasis, and interpretative approaches. This section highlights findings from specific books, showcasing the interplay between doctrinal priorities and linguistic shifts over time. The focus is on Philippians, Acts, Psalms, and 1 Corinthians, as these books exemplify the broader patterns identified in this study.

The findings for Philippians (Book ID 2) demonstrate a clear divergence in linguistic style and theological framing across translations. As observed in the Douay-Rheims Bible (DRB) and King James Version (KJV), phrases like "Christ Jesus" and "Lord Jesus Christ" recur frequently, reflecting a focus on Christological titles central to traditional theological discourse. In contrast, the Open English Bible (OEB) and World English Bible (WEB) incorporate modernized expressions such as "Union with Christ Jesus" and "Spreading the good news". This shift aligns with a broader emphasis on relational and narrative frameworks in modern translations. Such variations illustrate how translators balance doctrinal fidelity with linguistic accessibility.
 
In Acts (Book ID: 4), the n-grams reveal substantial stylistic and theological diversity. The DRB and KJV consistently employ formal and doctrinally rich expressions such as "The Holy Ghost" and "The Lord Jesus Christ". Meanwhile, OEB and WEB adopt modernized terminology like "The Holy Spirit" and phrases such as "Believers in Christ". Moreover, narrative-focused phrases in WEB, such as "The commanding officer" and "They heard", suggest a deliberate effort to engage readers through storytelling. These patterns underscore the evolving priorities in Bible translation, shifting from liturgical precision to audience engagement.
 
The results for Psalms (Book ID: 10) further highlight the linguistic modernization evident in contemporary translations. While DRB and KJV retain phrases such as "O Lord" and "His mercy endureth for ever", OEB and WEB favor terms like "Lord’s voice" and "Loving kindness endures forever". This lexical shift reflects a broader trend toward simplicity and emotional resonance in modern translations. Furthermore, phrases like "Give thanks to Yahweh" in WEB indicate a move toward using transliterated divine names, reflecting cultural sensitivity and theological inclusivity. Such findings suggest that translators increasingly adapt traditional expressions to align with contemporary linguistic and cultural norms.
 
In First Corinthians (Book ID: 15), the n-grams reveal significant differences in how translations address doctrinal and linguistic challenges. Traditional translations like KJV emphasize theological precision, as seen in phrases like "Dead rise not again" and "Our Lord Jesus Christ". Modern translations such as OEB and WEB focus on interpretive clarity, introducing terms like "Gift of tongues" and "Union with Christ Jesus". These changes align with the translators' objective to contextualize theological concepts for modern readers, a trend noted in @{Smith2008}. Additionally, the inclusion of practical language, such as "Let everyone remain faithful" in OEB, highlights an emphasis on ethical instruction.
 
In summary, the book-specific analysis demonstrates how translation choices reflect shifts in theological priorities, linguistic preferences, and cultural sensitivity. Traditional translations, exemplified by DRB and KJV, emphasize formal language and doctrinal fidelity, while modern translations, such as OEB and WEB, prioritize accessibility and engagement. These findings contribute to a deeper understanding of how religious texts evolve over time, balancing tradition with adaptation to meet the needs of diverse audiences. Future studies could expand on this analysis by exploring how these patterns influence readers' interpretations and engagement with biblical texts.

#### Thematic Trends in Religious Text Translations
The evolution of Bible translations is underpinned by recurring thematic trends that reflect broader shifts in linguistic practices, theological interpretations, and cultural priorities. This section explores three significant trends—modernization of vocabulary, contextualization of theological concepts, and the emphasis on accessibility and engagement. Each trend sheds light on the dynamic interplay between preserving tradition and adapting to contemporary audiences.

One of the most notable thematic trends in modern Bible translations is the deliberate modernization of vocabulary. Older translations, such as the King James Version (KJV) and Douay-Rheims Bible (DRB), employ terms like "Holy Ghost" and "Verily, I say unto you", which reflect the linguistic norms of their respective eras. In contrast, contemporary translations, such as the Open English Bible (OEB) and World English Bible (WEB), replace these with terms like "Holy Spirit" and "Truly, I tell you". These changes are not merely linguistic updates; they reflect a broader commitment to making the text more relatable and comprehensible to modern readers. As Smith in @{Smith2008} emphasizes, translators often strive to balance textual fidelity with the need to resonate with contemporary linguistic sensibilities. This trend illustrates how the language of sacred texts evolves to align with cultural shifts, ensuring that they remain relevant and meaningful across generations.
 
Another significant trend is the contextualization of theological concepts to bridge the gap between ancient contexts and modern audiences. Traditional translations often adhere to literal or doctrinally specific interpretations, which can create barriers for readers unfamiliar with historical or cultural nuances. For example, while the KJV uses the phrase "Stand fast in the Lord", the OEB opts for "Remain steadfast in Christ", emphasizing relational rather than hierarchical imagery. This shift aligns with a growing focus on inclusivity and personal connection within contemporary Christian theology. 
 
Finally, there is a clear emphasis on accessibility and reader engagement in modern translations. Unlike earlier versions that often prioritize liturgical precision, recent translations seek to foster a deeper connection with readers. This is evident in the narrative-driven language of the WEB, which incorporates conversational phrases such as "Don’t be afraid" and "They didn’t understand". Such choices create an immersive reading experience, allowing readers to engage with the text on a more personal level. Furthermore, the use of inclusive language, as seen in phrases like "Believers in Christ" (OEB) instead of "Disciples of Christ", underscores a commitment to welcoming diverse audiences. These changes reflect a broader societal trend toward inclusivity and shared understanding, ensuring that sacred texts remain relevant in increasingly pluralistic contexts.
 
In conclusion, the thematic trends identified in modern Bible translations reveal a delicate balancing act between tradition and adaptation. The modernization of vocabulary, contextualization of theological concepts, and emphasis on accessibility all reflect efforts to make sacred texts more relatable and impactful for contemporary readers. These trends underscore the evolving priorities in translation practices, illustrating how sacred texts can serve as living documents that adapt to meet the spiritual and cultural needs of their audiences. By acknowledging these shifts, we gain deeper insights into the dynamic interplay between language, theology, and culture in the process of translation.

#### Linguistic Implications of Changes in Religious Text Translations

The analysis of n-gram patterns across different Bible translations reveals profound linguistic implications that extend beyond lexical changes. These implications encompass aspects such as frequency variations, syntactic shifts, and semantic reinterpretations. This section examines how these linguistic elements contribute to understanding the evolution of religious texts, their impact on readability and theological framing, and their broader cultural significance.
 
One of the most evident linguistic implications lies in the frequency variations of n-grams across translations. Phrases like "Jesus Christ", "Holy Spirit", and "Kingdom of God" appear consistently across versions, reflecting their doctrinal centrality. However, the surrounding context of these phrases often varies, indicating subtle shifts in emphasis. For instance, in older translations such as the King James Version (KJV) and Douay-Rheims Bible (DRB), the phrase "Jesus Christ" frequently co-occurs with formal expressions like "Our Lord" or "The Son of God". In contrast, modern translations such as the Open English Bible (OEB) and World English Bible (WEB) tend to place "Jesus Christ" within relational or conversational contexts, such as "Union with Christ Jesus" or "Jesus said to them". These frequency variations suggest that modern translations prioritize accessibility and engagement, aiming to align religious discourse with contemporary linguistic norms. This observation aligns with findings by Smith in @{Smith2008}, who argued that translation strategies increasingly focus on enhancing the text's resonance with modern audiences.
 
Syntactic shifts are another key linguistic implication observed in the analysis. Older translations often favor complex, formal sentence structures that mirror the linguistic conventions of their time. For example, the KJV frequently employs passive constructions, as seen in phrases like "It is written" and "It was told unto them". Such constructions reflect a hierarchical worldview where divine authority is emphasized through impersonal, authoritative phrasing. In contrast, modern translations favor active constructions, such as "He wrote" or "Jesus said", which create a sense of immediacy and personal connection.
This syntactic evolution has significant implications for readability and reader engagement. The paper from Philip C. Stine in @{Stine2018} illustrates that the application of contemporary language and dynamic equivalence in the Good News Bible significantly enhances textual readability and reader engagement by rendering the text more accessible and relatable to modern audiences. By adopting active syntax, modern translations make the text more accessible to contemporary audiences, particularly those who may not be accustomed to archaic language. These shifts demonstrate how syntactic choices reflect broader changes in how sacred texts are presented and interpreted.
 
Perhaps the most profound linguistic implications arise from semantic reinterpretations of key terms and phrases. Terms such as "Holy Ghost" in the KJV are replaced with "Holy Spirit" in the OEB and WEB, reflecting a shift toward contemporary vernacular. While both terms refer to the same theological concept, the choice of "Spirit" over "Ghost"aligns with modern sensibilities, where "Ghost" may evoke unintended connotations. Similarly, the term "Gospel" is frequently replaced with "Good News" in modern translations, emphasizing the relational and practical aspects of the term rather than its traditional, doctrinal weight.
These semantic shifts have far-reaching implications for how readers interpret the text. By choosing terms that resonate with contemporary cultural and linguistic contexts, modern translations aim to make theological concepts more accessible without compromising their core meaning. However, this strategy also introduces the potential for subtle reinterpretations that may differ from the original intent. For example, while "Good News" captures the essence of "Gospel", it may lack the historical and liturgical weight associated with the original term. 
 
The linguistic implications of Bible translations also extend to cultural sensitivity and inclusivity. Modern translations often strive to adopt inclusive language, reflecting broader societal shifts toward equality and representation. For instance, while older translations use male-gendered terms such as "mankind" or "brethren", newer versions opt for gender-neutral alternatives like "humanity" or "brothers and sisters". This change is particularly evident in the WEB, which frequently employs gender-inclusive language to ensure that all readers feel represented in the text.
These linguistic choices have important cultural implications, as they reflect an effort to make religious texts more relevant and welcoming to diverse audiences. However, they also raise questions about the extent to which inclusivity should influence translation practices. Critics argue that such changes may risk diluting the historical and cultural specificity of the original text. Nevertheless, the trend toward inclusivity highlights the evolving role of religious texts as living documents that adapt to meet the needs of contemporary readers.
 
A recurring theme in the linguistic implications of Bible translations is the tension between fidelity to the original text and accessibility for modern readers. Older translations, such as the KJV and DRB, prioritize textual fidelity, often preserving archaic language and complex sentence structures. This approach ensures that the translation remains as close as possible to the source text but may alienate modern readers who find such language difficult to understand. In contrast, modern translations adopt strategies that prioritize readability, such as simplifying vocabulary and syntax, even if this occasionally results in the loss of certain nuances.
This balancing act has significant implications for the role of translators as mediators between the ancient and modern worlds. As Smith in @{Smith2008} notes, translators must navigate the trade-off between preserving the original meaning and ensuring that the text resonates with contemporary audiences. This tension underscores the complexity of translation as both a linguistic and cultural endeavor.
 
In conclusion, the linguistic implications of changes in religious text translations highlight the dynamic interplay between tradition and adaptation. Variations in n-gram frequency, syntactic shifts, semantic reinterpretations, and cultural sensitivity all reflect broader efforts to make sacred texts accessible and engaging for modern readers. These changes illustrate how linguistic choices shape not only the readability of the text but also its theological framing and cultural relevance. By examining these implications, we gain a deeper understanding of how language evolves to meet the spiritual and cultural needs of diverse audiences. Future research could explore the impact of these linguistic changes on readers' interpretations and engagement with religious texts, further illuminating the intersection of language, culture, and theology.



## Discussion


## Conclusion


## References
```{bibliography}