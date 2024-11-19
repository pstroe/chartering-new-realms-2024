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
To adhere to the FAIR principles the decision was made to harness the capabilities of the LLaMA Large Language Model family, which is developped by Meta {cite:p}`Touvron_2023`. The LLaMA families "only use[s] publicly available data, making [their] work compatible with open-sourcing" {cite:p}`Touvron_2023`. It further offers multiple sets of models with different quantities of parameters. 
### Data
The data was extracted from the official website for the Hansard of the Parliament of the Republic of South Africa. It constitutes the transcripts of the mini plenary sessions of the National Assembly, the National Council of Provinces, the National Assembly, and any joint sessions. The National Assembly is formed by 400 members from the various South African political parties. The National Assembly is elected by the voting population of South Africa. The National Council of Provinces, NCoP, is formed with 90 provincial delegates which translates to 10 delegates for each province. It is thus composed regardless of population distribution. The NCoP is chosen by the provincial governments/legislatures. 

The reports are majoritatively held in English, though when a speaker chooses to use another official language, it is transcribed ad verbatim and the English translation is given. "Hansard is a substantially verbatim report - with repetitions and redundancies omitted and obvious mistakes corrected - or parliamentary proceedings" https://www.parliament.gov.za/hansard?sorts[language]=-1&page=5&offset=40. Kotze and Van Rooy remark that it is and remains unclear what substantially verbatim conotes in the sense of correction towards an overstandardisation {cite:t}`Kotze2020, Hibbert2016, Hibbert2003`[^1]: For a more detailed discussion of editing practices in the South African Hansard view {cite:p}`Hibbert2016, Hibbert2003`. 

The decision was made to process all reports of 2019 from the National Assembly, henceforth abbreviated as NA. The data thus excludes any other years, all joint sittings, all meetings of the NCoP and all mini plenary sessions. 2019 was chosen as it constituted an election year, thus giving the opportunity of potentially harnessing more speakers as the NA's composition was altered after elections. Furthermore, as the NA is the largest body in Parliament, it was chosen to again maximise speaker count. 

Do we give speaker counts? like how many people spoke?

In total 51 sessions were held in 2019.

## Experiments and Results

```python
#code goes here


```
## Results & Discussion 

### Limitations

## Conclusion 

