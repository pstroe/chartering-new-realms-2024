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
        format_nane: myst
        format_version: '0.13'
        jupytext_version: 1.11.5
---

# Chapter 4

*Sonja Huber*

TODO: 4k words until January, 2.5k until 30.11.

## Abstract

[I will write this at the very end]

## Introduction

Visualisations of data often give access to new insights and understanding. This also holds true for relationships between characters in literature, as has been explored previously by {cite:p}`moretti2011`, where network theory was used to see implications of said networks into the plot of a literary work. For example, in the play _Hamlet_ by Shakespeare, it becomes clear which characters are central for conflict and which are the connectors for other characters that themselves have low connectivity. However, this analysis has been done manually, limiting the scope of the analysis to a relative short text and using a lot of the time of the researcher to close-read the texts and draw the visualisations by hand. In this chapter, I will introduce distant reading and creation of character networks using a Large Language Model (LLM) to test whether this is a viable alternative to the traditional practice of close-reading for character networks. As I will be using literary text as data, this study can be considered a contribution to Computational Literary Studies. Also, as most of the studies done in CLS are done on english works, I chose a german work of literature to largen the pool of studied works by adding one from a different origin language wise: *Bunte Steine* by bohemian-austrian writer Adalbert Stifter, a 19th century work consisting of 6 "Erzählungen"(EN tales).
As well as evaluating the output of the LLM with respect to usefulness to the task of a network analysis, I will visualize the character networks, one for each story as the characters do not overlap, in order to see ([how?]) whether commonalities or striking differences arise, similar to analysis that Moretti {cite}`moretti2011` is proposing and that has already inspired many other network analysis of other works.



[Digital Humanities Aspect, also the AI connection, and why this is sinnvoll (see sprachnachricht to self)]

## Relevant Literature

#### Concept of distant reading
From the perspective of literary studies, where close readings have a long tradition, the concept of distant reading as proposed by Franco Moretti{cite}`moretti2013` is fundamental for combining the discipline with computational methods. He claims that the close reading, where one scholar is intensively reading and studying one text (that is usually part of a canon that is only a very small percentage of all published works) is very limited, and if we want to connect large amounts of literary texts such as world literature seeks to do, the approach has to be changed to _distant reading_:

> "the ambition is now directly proportional _to the distance from the text:_ the more ambitious the project, the greater must the distance be."{cite}`moretti2013{p. 48}`

> "you invest so much in individual texts _only_ if you think that very few of them really matter. Otherwise, it doesn't make sense. And if you want to look beyond the canon (and of course, world literature will do so: it would be absurd if it didn't!), close reading will not do it."{cite}`moretti2013{p. 49}`

While Moretti was, in 2013, mostly thinking about how in a few years it would be possible to investigate stylistic structures in large corpora, we might right now even be able to investigate more complicated matters such as semantic structures or speech assignment, that, as seen above, deterministic algorithms struggle with.
Examples for different approaches that examine topics of interest in literature studies can for instance be found here{cite:p}`rosendahlthomsen2023`


#### Graphs in Lit-DH
First of, the afore-mentioned method and considerations by Moretti{cite:p}`moretti2011` in the paper "Network Theory, Plot analysis" are fundamental for a lot of other works in this field, so the central concepts will be explained here briefly. To Moretti, character-networks extracted from plays and visualized in graphs are "Time turned into space"{cite:p}`moretti2011{p. 83}` and can be useful to examine the plot as a whole:
> when we watch a play, we are always in the present: what is on stage, is; and then it disappears. Here, nothing ever disappears. What is done, cannot be undone. Once the Ghost shows up at Elsinore things change forever, whether he is on scene or not, because he is never not there in the network. The past becomes past, yes, but it never disappears from our perception of the plot.{cite:p}`{see}moretti2011{p.84}`

This is of course easier to do with plays than in prose, as it is clear who the characters are on stage with. Still, Moretti writes that "the idea is too tempting to let go"`{see}moretti2011{p.94}` to not try plot analysis on novels using character networks as well.

In the context of world literature, he considers the creation of these networks as a first step to great possibilities:
> One day, after we add to these skeletons the layers of direction, weight and semantics, those richer images will perhaps make us see different genres -- tragedies and comedies; picaresque, gothic, _Bildungsroman_ . . . -- as different shapes; ideally, they may even make visible the micro-patterns out of which these larger network shapes emerge.{cite:p}`{see}moretti2011{p. 102}`


#### Graphs in DH
Graphs in the digital humanities are usually used to visualise large datasets that contain in some ways linkable entities. The graphs do not only transform the content into a different format but also give access to the contents in the data from a new perspective, that can help to find new angles and perspectives on it and as a consequence can lead to creation of new knowledge.
A common application of this is the creation of social networks surrounding letter exchanges in the early modern age, for example done by {cite:t}`warren2016` or by the Bullinger project {cite:t}`BullingerDigital2020`, even though only the Francis Bacon project does currently provide a interactible visualisation online, the Bullinger project is currently a "simple" search interface.
Another application of such networks is the building of publication networks such as was done by {cite:t}`vanEck2014`.
Concerning projects working with literary text that, being mostly unstructured, poses its own challenged, {cite:t}`perri2022` created various visualisations that show the co-occurrences of characters in the works of Tolkien taking place in middle earth. Before creating character networks, named entity recognition and coreference resolution had to take place, and it was decided to manually determine the references to one character despite the lower recall {cite:p}`{see}perri2022{p. 3-4}`. The resulting visualisations range from simple character matrices displaying the varying character co-occurrences in the _Lord of the Rings_ Triology {cite:p}`{see}perri2022{fig 1}` to complexer character embedding visulaisations containing edges between nodes of co-occurring characters{cite:p}`{see}perri2022{fig. 5}`.
Another visualisation of a classic literary text is {cite:t}`bostock2012` that visualized characters co-occurrences if those characters occured in the same chapter of Vitor Hugo's work _Les Misérables_.
In literature studies, there have been attempts to visualise data and extract information automated from unstructured data, like in {cite:t}`elson2010` where conversational character networks are extracted from novels. In other words, a conversational co-occurence is happening if two characters are speaking to one another. To find this, the authors use coreference resolution as well as quoted speech attribution.{cite:p}`{see}elson2010{p. 141-142}`. In the visualisation of the conversational character network, the nodes of characters with more "lines" are larger, and the longer the speech between two characters, the more weight, visualised as width, has the edge. Their most successful method of identifying speach, producing an precision of .95{cite:p}`{see}elson2010{table 2}`, was: "We empirically determined that the most accurate definition of “adjacency” is one where the two characters’ quotes fall within 300 words of one another with no attributed quotes in between."{cite:p}`{see}elson2010{p.143}` Even though the precision is quite satisfactory, the recall of .51{cite:p}`{see}elson2010{table 2}` is not so much. The other methods tried that produced better recall were significantly worse in precision. This task of idenitfying conversations reliably might be one where a LLM might produce better results than a deterministic algorithm. Even though it is out of scope for this chapter to test this extensively, on some of the tales I will do an evaluation.


## Method & Data

### Method

The experiment is to give a large language model (LLM) the stories as input, with a prompt (tbd) that lets it extract the relations between the characters in the stories in a manner that can be used as input to a graph software in order to create a graph for each of the stories in the corpus. By comparing these graphs, I plan doing an analysis inspired by {cite}`moretti2011`'s done with Shakespear plays and other literature.
Due to it being well-known and, even though not for free but still accessible, this experiment will use ChatGPT Chatinterface with the model GPT-4o.[do tools section] This method is trying to show how distant reading using a LLM can be leveraged to create a character graph and relieve the researcher of doing all the reading by 'hand'. Also, it shows the capabilities of a LLM in the area of creating character networks that should be possible to scale up to bigger datasets than the one chosen in this experiment is. A corpus with the size of _Bunte Steine_ does, arguably, not make it necessary to do distant reading, but as I want to have the possibility to check whether the output of the LLMs are accurate, I still need a somewhat manageable corpus, size-wise.

For visualising the free and simple tool Graphviz will be used. It is under a common public license and can be freely downloaded from [webpage]. Additionally, it can create graphs on basis of text-files with the .dot extension, that should be fairly easy for LLMs to produce as well. So, to summarize, the reasons to choose this tool in particular were 1) it is a free and actively maintained open source tool to secure accessibility, 2) the simplicity of its input format that could also easily be adapted by human if it is found to be faulty.


### Data

The Data used in this experiment are the six german *Erzählungen* ("stories") contained in Adalbert Stifter(* 1805, † 1868)'s *Bunte Steine* ("colorful stones"): *Granit, Kalkstein, Turmalin, Bergkristall, Katzensilber, Bergmilch*. The text of these stories is freely available on project-gutenberg.org (https://www.projekt-gutenberg.org/stifter/buntestn/index.html [08.10.2024]).
*Bunte Steine* is associated with the german literary epoch of *Biedermeier*, which is often telling stories of a small scale, nature and families,  staying away from the political or epic storylines [in Handbuch nachschlagen].

The stories have the following word counts:

[TODO: do a table here with the word-counts]

Following the dimensions of data classification suggested by {cite:t}`borgman2015`, the data is of records origin and in no collection, also it has not been processed, contains no metadata. It can be considered raw data in digital form and a primary data with regards to literary studies.



## Experiments


### Experiment setup / Ablauf

Due to reasons of accessability, the LLM GPT-4o, as used in the Chat-environmane of ChatGPT was used. In order to ensure no influences from prior conversations, the memory setting was turned off, and for each story a new conversation was started.

Through the iterative process of refining the prompts and the Vorgehen in general until the results were of acceptable quality, the following prompting-strategy was developed. The prompts are in english even though the text is in german as german prompts seem to have computed worse than german ones.[das kann man fix von irgendwo zitieren...]
Since the research on prompting so far has found out that well-performing prompts on one model has no guarantee to work well with another {cite}`leidinger2023`, be aware that

1. **The first prompt**:

    I will provide you consecutively with multiple parts of a story. Do the following:

    1. Please extract for each appearing character by what different names he or she is referenced in the text. (create section: Character Names in the chat output)

    2. create a tsv-table as output ith the characters in the rows and column header, in the fields a 1 if the characters interact, 0 otherwise. Provide it to me after each part. If not the first part of the story, update the table I will provide to you then with the next part of the story. (provide updated table, containing ONLY that interaction table, nothing else.)

    3. Next: extract what characters speak to each other. (create section: Interaction sentences in the chat output) print the senctence from which you gathered the information of each and every interaction marked in the table for the first time you encounter it between two characters. Also make a short comment where you see the interaction happening.

    Ready?

Then, after the response from the LLM, follows the first 150 lines of the text. That length was chosen to be below the context of [...] one can enter in the ChatGPT interface.

The output from the LLM then might look like this [insert image of output]. The examples, the LLM has to provide and the comments to said examples are supposed to show on what sentence the model makes the decision wheter two characters are speaking to each other or not. At the end, a downloadable tsv containing a matrix of speaking characters is provided by the LLM. This I then stored locally, to provide to the model in the following prompt:

2. **every prompt except the first, followed by more literary text**

    Here is the next part of the story and the interaction-table so far. Remember the prompt:

    1. create a tsv-table as output ith the characters in the rows and column header, in the fields a 1 if the characters interact, 0 otherwise. Provide it to me after each part. If not the first part of the story, update the table I will provide to you then with the next part of the story. (provide updated table, containing ONLY that interaction table, nothing else.)

    2. Please extract for each appearing character by what different names he or she is referenced in the text. (create section: Character Names in the chat output)

    3. Next: extract what characters speak to each other. (create section: Interaction sentences in the chat output) print the senctence from which you gathered the information of each and every interaction marked in the table for the first time you encounter it between two characters. Also make a short comment where you see the interaction happening.


    Do all of these steps! Do not skip any of them.



Following this prompt, the next 150 or so lines of the literary text are inserted. Also, I attach the previously produced tsv-file. This, as well as the constant repeating of the prompt, is necessary to not let the LLM "lose sight of" the prompt as the context largens.

This iterative process continues, until all the text has been given to the model and the last update to the character-matrix tsv has been provided for download.

Now, as I will explain further in chapter [problems that occurred], it is necessary to check the tsv for obvious errors. Sometimes, the LLM will enter some characters twice into the matrix, or assign values higher than 1 if two characters spoke more than once. For the sake of what the result should be -- a graph only displaying that characters spoke, but not how often -- these small things can be changed by hand.

Then, to finally get from the tsv to a .dot file that can be used to produce a graph using graphviz, it is possible to either, prompt the LLM again to convert the file, or do it with a simple script yourself. As the script is a more reliable option -- without very specific prompt, the LLM will vary in the way it makes the graphes look -- I chose that one, click to test with an example tsv of the tale _Bergkristall_:


``` {code-block} python
:class: thebe
import pandas as pd

def tsv_to_dot(tsv_file, dot_file):
    df = pd.read_csv(tsv_file, sep='\t', index_col=0)
    edges = set()

    with open(dot_file, 'w') as f:
        f.write('graph G {\n')

        for source in df.index:
                for target in df.columns:
                    if df.loc[source, target] != 0:  # Adjust condition as needed
                        edge = (source, target)
                        reverse_edge = (target, source)
                        if edge not in edges and reverse_edge not in edges:
                            edges.add(edge)
                            f.write(f'    "{source}" -- "{target}" [weight={df.loc[source, target]}];\n')

        f.write('}\n')

input_tsv = 'Bergkristall_matrix_korrigiert.tsv'
output_dot = 'Bergkristall.dot'

tsv_to_dot(input_tsv, output_dot)

```
```{thebe-button}
```


first experiments results:

Here the example images:

![alt text](images/Bergkristall_network.png)
Fig. 1: _Character Network Bergkristall_

1. using chatgpt, as I am paying that anyways. separate sessions. seems to have a length limit though... split it?
    might have to split the stories as the inputs can become is quite long. tried once in english, once in german, german was noticably worse.

[tried to incorporate explainability]

[always send about 100 txt-file lines, as they vary in content-length]



### Problems that occurred

- Too long texts made the ouptut unusable a lot of the times, so the context should be restricted, which ideally would be done using the api and a tokenizer that can estimate the token length of the next input.
- First, I tried to ouput a file that I could then download, but that output was less stable than asking the LLM to provide the table in the text output to copy directly. In an API setting, the copying should be possible to automate.
- On a day I prompted a lot, I reached the limit for the GPT-4o model, even though I was using my subscription. So, for large inputs and projects with funding, the API is commendable.



## Results & Discussion

As this is a quite experimental setting, evaluation can be done only approximately, firstly because there are a lot of cases where one can debate whether in a literary text that is not a drama, two people are for certain talking to each other, see also {cite}`moretti2011`

![alt text](images/Bergmilch.png)
Fig. 1: _Character Network Bergmilch_

![alt text](images/Granit.png)
Fig. 2: _Character Network Granit_

![alt text](images/Kalkstein.png)
Fig. 3: _Character Network Kalkstein_

![alt text](images/Katzensilber.png)
Fig. 4: _Character Network Katzensilber_

![alt text](images/Turmalin.png)
Fig. 5: _Character Network Turmalin_

![alt text](images/Bergkristall.png)
Fig. 6: _Character Network Bergkristall_

[reread 1-2 of the stories]

[Methodenreflektion]

[Reflektion von warum das DH ist]




### How well are the results explainable by what the model did output as well


## Conclusion


## Bibliography

```{bibliography} references_chapter4.bib
:style: plain
```
## Tools
