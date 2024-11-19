# Chapter 1: From Data to Corpus
Anouk Menzi, Elizabeth Wagner
## Introduction
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
- More general: Beck et al., Curry et al., Letinier et al., Naryan et al., Pookandy, Zappavigna, 
- Arora et al., Chen et al. 



## Methods and Data 

### Method 
#### Large Language Models 
To adhere to the FAIR principles the decision was made to harness the capabilities of the LLaMA Large Language Model family, which is developped by Meta {cite:p}`Touvron_2023`. The LLaMA families "only use[s] publicly available data, making [their] work compatible with open-sourcing" {cite:p}`Touvron_2023`. It was thus possible to release the LLaMA models as open access. This chapter uses the newest release of the model family, LLaMA 3, of which the largest model employs 405 bilion parameters {cite:p}`Dubey_2024`. The model family was pretrained on 15T tokens which marks a large increase from Llama 2 with 1.8T tokens {cite:p}`Dubey_2024`.
```{image} ../images/llama_3.png
:alt: llama 3 model family
:width: 400px
:align: center
```
Furthermore, LLaMA makes available multiple sets of pretrained models with different quantities of parameters, offering the possibility of maximising minimal parameter count to maximum quality output. 

A further issue in harnessing LLMs for data formatting lies in the costliness of training and running of such models. (i'll say this in the previous research problem) Whilst there is an effort to sleaken down models, it is still not possible to train a LLM locally on a standard issue laptop {cite:p}``. But it is possible to run some pretrained models locally. This is dependent on the parameter size, thus, to run the models locally, smaller parameter models were chosen. 



**Models Used**
- 

### Data
The data was extracted from the official website for the Hansard of the Parliament of the Republic of South Africa. It constitutes the transcripts of the mini plenary sessions of the National Assembly, the National Council of Provinces, the National Assembly, and any joint sessions. The National Assembly is formed by 400 members from the various South African political parties. The National Assembly is elected by the voting population of South Africa. The National Council of Provinces, NCoP, is formed with 90 provincial delegates which translates to 10 delegates for each province. It is thus composed regardless of population distribution. The NCoP is chosen by the provincial governments/legislatures. 

The reports are majoritatively held in English, though when a speaker chooses to use another official language, it is transcribed ad verbatim and the English translation is given. "Hansard is a substantially verbatim report - with repetitions and redundancies omitted and obvious mistakes corrected - or parliamentary proceedings" https://www.parliament.gov.za/hansard?sorts[language]=-1&page=5&offset=40. Kotze and Van Rooy remark that it is and remains unclear what substantially verbatim conotes in the sense of correction towards an overstandardisation {cite:t}`Kotze2020, Hibbert2016, Hibbert2003` [^mylabel]: For a more detailed discussion of editing practices in the South African Hansard view {cite:p}`Hibbert2016, Hibbert2003`.


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

