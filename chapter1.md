# Chapter 1: From Data to Corpus
Anouk Menzi, Elizabeth Wagner
## Introduction
Scholars spend many hours on preprocessing raw data into structured collections that suit their needs {cite:p}`Chen_2023`. This process is time and resource intensive, especially when dealing with natural language. Considering the current trend in the digital humanities away from big data towards massive data, the questions of making data Findable, Accessible, Interoperable, and Reusable {cite:p}`Wilkinson_2016` have become a focus area of constructing data collections {cite:p}`Ide_2004, König_2021`. #I feel we need some more here?

In this chapter, we propose an approach to the construction of structured data collections with the assistance of Large Language Models, LLMs, to reduce the amount of human labour invested in preprocessing. This approach serves especially well in cases where there is much raw data but which has not been structured into data collections, as is the case for the variations of South African English {cite:p}`Barnard_2014, Jeffery_2003, Pienaar_2011`. One such source of raw data constitutes the South African parliamentary proceedings. The South African Parliament supplies transcripts of its parliamentary proceedings online, and whilst attempts have been made to format this data into the ParliMINT scheme, an interoperable XML scheme for transcripts of parliamentary proceedings, the attempt has been labour intensive and done only on a small scale {cite:p}`Ogrodniczuk_2024`. This chapter thus shall attempt to format the parliamentary proceedings into an interoperable XML scheme with the aid of different LLMs without the use of industrial strength hardware. 


Research Motivation
Definition of a Corpus 
End with Research Question 
## Relevant Literature 
The Republic of South Africa 
Section on South African English as a low resource language 
- Previous corpora: Barnard et al., Jeffrey, ICE corpus, Pienaar and de Klerk, 
- ParlaMint test study

The Difficulties of Parlimint (not sure if it should go here or rather in between South african english as low resource and llms? (I've now moved it here, I think that's much better)

Possibilities of LLMs in cleaning up data lakes

#that's shit

The primary attractivity of harnessing LLMs lies in their capability to process Natural Language inputs and their generalized applicability to unknown tasks {cite:p}`Zhang_jellyfish_2024, Narayan_2022`. In this they are more flexible than specialized tools. Their flexibility is especially appreciated when it comes to the robustness of processing as, because they are not rule based, they are able to adapt to unforseen circumstances {cite:p}`Zhang_jellyfish_2024`. In this ability they have found a wide application ground within the field of linguistics such as in Zappavigna where ChatGPT was tasked with evaluating noisy social media data {cite:p}`Zappavigna_2023` or in the use of generative LLMs for corpus analysis {cite:p}`Curry_2024`. As to the knowledge of these #ambigous_language_use authors, no attempts at harnessing LLMs for corpus building specifically have been attempted. However, in the wider field of data curation and formatting, the capabilities of LLMs are utilized, for example in summarising healthcare data from semi-structured forms into possible schematas of illnesses {cite:p}`Letinier_2021` or in processing natural language for the biomedical field into a reusable format {cite:p}`Beck_2022`. These adaptations of LLMs are highly specialized for their respective tasks and have thus lost much of their generality which is so desired by data scientists in their quest for a one-stop-shop solution for data wrangling {cite:p}``. A further issue of these specialized tasks lie in the idea that LLMs also mark faulty data, respectively correct these errors, such as in customer databases {cite:p}`Pookandy_2022`. A behaviour which, in the field of linguistics, is at its best irrelevant but rather more likely renders the data worthless as it would alter the transcripts. 

In light of these added difficulties when it comes to language data where the language itself is of importance, research has largerly been based on developping a tool that in its foundations is based on LLMs but that also includes rule based code to wrangle data {cite:p}`Chen_2023, Zhang_jellyfish_2024, Arora_2023` 

[^mylabel]: SEED is currently undergoing restructuring and thus cannot be used. It seems to be a promising project for further investigation into processing raw data via LLM, see [SEED repository](https://anonymous.4open.science/r/SEED/paper.pdf). 

These tools display a remarkable adaptivity to new tasks, especially when employing a technique called few-shot prompting. However, this comes at a greater computational cost than non-LLM tools. Nonetheless, they again are relatively restrictive in their output and are geared more towards data extraction from unstructed data rather than formatting into a customisable format.   




## Methods and Data 

### Method 
#### Large Language Models 
To adhere to the FAIR principles the decision was made to harness the capabilities of the LLaMA Large Language Model family, which is developped by Meta {cite:p}`Touvron_2023, Dubey_2024`. The LLaMA models are based on a Transformer architercture {cite:p}`Dubey_2024`. The LLaMA families "only use[s] publicly available data, making [their] work compatible with open-sourcing" {cite:p}`Touvron_2023`. It was thus possible to release the LLaMA models as open source with some restrictions to access. This chapter uses the newest release of the model family, LLaMA 3, of which the largest model employs 405 bilion parameters {cite:p}`Dubey_2024`. However, LLaMA makes available multiple sets of pretrained models with different quantities of parameters, offering the possibility of maximising minimal parameter count to maximum quality output. The smaller models are "best-in-class, outperforming alternative models with similar numbers of parameters" {cite:p}`Dubey_2024;2`  . The model family was pretrained on 15T tokens which marks a large increase from Llama 2 with 1.8T tokens {cite:p}`Dubey_2024`.
```{image} ../images/llama_3.png
:alt: llama 3 model family
:width: 400px
:align: center
```


A further issue in harnessing LLMs for data formatting lies in the costliness of training and running of such models. (i'll say this in the previous research problem) Whilst there is an effort to sleaken down models, it is still not possible to train a LLM locally on a standard issue laptop {cite:p}``. But it is possible to run some pretrained models locally, provided that their parameter count is relatively small, and adapt them to a specific task via few-shot prompting. Here again, LLaMA offers promising options with their development of the general models Llama 3.2 1B, 3B and 70B, where especially the 1B and the 3B parameter models are runnable on mobile or edge devices {cite:p}`Dubey_2024`. 
**Models Used**
- Llama 3.2 1B
- Llama 3.2 3B
- Llama 3 8B
- Jellyfish
- 



### Data
The data was extracted from the official website for the Hansard of the Parliament of the Republic of South Africa. It constitutes the transcripts of the mini plenary sessions of the National Assembly, the National Council of Provinces, the National Assembly, and any joint sessions. The National Assembly is formed by 400 members from the various South African political parties. The National Assembly is elected by the voting population of South Africa. The National Council of Provinces, NCoP, is formed with 90 provincial delegates which translates to 10 delegates for each province. It is thus composed regardless of population distribution. The NCoP is chosen by the provincial governments/legislatures. 

The reports are majoritatively held in English, though when a speaker chooses to use another official language, it is transcribed ad verbatim and the English translation is given. "Hansard is a substantially verbatim report - with repetitions and redundancies omitted and obvious mistakes corrected - or parliamentary proceedings" https://www.parliament.gov.za/hansard?sorts[language]=-1&page=5&offset=40. Kotze and Van Rooy remark that it is and remains unclear what substantially verbatim conotes in the sense of correction towards an overstandardisation {cite:t}`Kotze_2020, Hibbert_2016, Hibbert_2003` 

[^mylabel]: For a more detailed discussion of editing practices in the South African Hansard view {cite:p}`Hibbert_2016, Hibbert_2003`.


The decision was made to process all reports of 2019 from the National Assembly, henceforth abbreviated as NA. The data thus excludes any other years, all joint sittings, all meetings of the NCoP and all mini plenary sessions. 2019 was chosen as it constituted an election year, thus giving the opportunity of potentially harnessing more speakers as the NA's composition was altered after elections. Furthermore, as the NA is the largest body in Parliament, it was chosen to again maximise speaker count. 

Do we give speaker counts? like how many people spoke?

In total 51 sessions were held in 2019.

## Experiments and Results
```{tip}
Make sure that you close Ollama before serving it on the command line, otherwise it will not work.
To exit Ollama in the command line press ctrl + c.
```
```python
#code goes here


```
## Results & Discussion 

### Limitations

## Conclusion 

