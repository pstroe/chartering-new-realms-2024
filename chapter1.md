---
thebe: true 
kernelspec: 
  display_name: Python 3
  language: python 
  name: python3
jupytext: 
  format: md:myst
  text_representation: 
    extension: .md
    format_name: myst
    format_version: '0.13'
    jupytext_version: 1.11.5
--- 

# Chapter 1: From Data to Corpus
Anouk Menzi, Elizabeth Wagner
## Introduction
Scholars spend many hours on preprocessing raw data into structured collections that suit their needs {cite:p}`chen_2023`. This process is time and resource intensive, especially when dealing with natural language. Considering the current trend in the digital humanities away from big data towards massive data, the questions of making data Findable, Accessible, Interoperable, and Reusable {cite:p}`wilkinson_2016` have become a focus area of constructing data collections {cite:p}`ide_2003, könig_2021`. It has moved data processing and data preprocessing from being a fringe concern into its own field. 

In this chapter, we propose an approach to the construction of structured data collections with the assistance of Large Language Models, LLMs, to reduce the amount of human labour invested in preprocessing. This approach serves especially well in cases where there is much raw data but which has not been structured into data collections, as is the case for the variations of South African English {cite:p}`barnard_2014, jeffery_2003, pienaar_2011`. One such source of raw data constitutes the South African parliamentary proceedings. The South African Parliament supplies transcripts of its parliamentary proceedings online, and whilst attempts have been made to format this data into the ParliMINT scheme, an interoperable XML scheme for transcripts of parliamentary proceedings, the attempt has been labour intensive and done only on a small scale {cite:p}`ogrodniczuk_2024`. This chapter thus shall attempt to format the parliamentary proceedings into an interoperable XML scheme with the aid of different LLMs without the use of industrial strength hardware. 


Probably a paragraph on what we are choosing?

Research Motivation
Definition of a Corpus 
End with Research Question 
## Relevant Literature 
The Republic of South Africa 
Section on South African English as a low resource language 
- Previous corpora: Barnard et al., Jeffrey, ICE corpus, Pienaar and de Klerk, 
- ParlaMint test study

The Difficulties of Parlimint (not sure if it should go here or rather in between South african english as low resource and llms? (I've now moved it here, I think that's much better)

The primary attractivity of harnessing LLMs lies in their capability to process Natural Language inputs and their generalized applicability to unknown tasks {cite:p}`zhang_jellyfish_2024, narayan_2022`. In this they are more flexible than specialized tools. Their flexibility is especially appreciated when it comes to the robustness of processing as, because they are not rule based, they are able to adapt to unforseen circumstances {cite:p}`zhang_jellyfish_2024`. In this ability they have found a wide application ground within the field of linguistics such as in Zappavigna where ChatGPT was tasked with evaluating noisy social media data {cite:p}`zappavigna_2023` or in the use of generative LLMs for corpus analysis {cite:p}`curry_2024`. As to the knowledge of these #ambigous_language_use authors, no attempts at harnessing LLMs for corpus building specifically have been attempted. However, in the wider field of data curation and formatting, the capabilities of LLMs are utilized, for example in summarising healthcare data from semi-structured forms into possible schematas of illnesses {cite:p}`letinier_2021` or in processing natural language for the biomedical field into a reusable format {cite:p}`beck_2022`. These adaptations of LLMs are highly specialized for their respective tasks and have thus lost much of their generality which is so desired by data scientists in their quest for a one-stop-shop solution for data wrangling {cite:p}``. A further issue of these specialized tasks lie in the idea that LLMs also mark faulty data, respectively correct these errors, such as in customer databases {cite:p}`pookandy_2022`. A behaviour which, in the field of linguistics, is at its best irrelevant but rather more likely renders the data worthless as it would alter the transcripts. 

In light of these added difficulties when it comes to language data where the language itself is of importance, research has largerly been based on developping a tool that in its foundations is based on LLMs but that also includes rule based code to wrangle data {cite:p}`chen_2023, zhang_jellyfish_2024, arora_2023` 

[^mylabel]: SEED is currently undergoing restructuring and thus cannot be used. It seems to be a promising project for further investigation into processing raw data via LLM, see [SEED repository](https://anonymous.4open.science/r/SEED/paper.pdf). 

These tools display a remarkable adaptivity to new tasks, especially when employing a technique called few-shot prompting. However, this comes at a greater computational cost than non-LLM tools. Nonetheless, they again are relatively restrictive in their output and are geared more towards data extraction from unstructed data rather than formatting into a customisable format, where one talks to their .   




## Methods and Data 

### Method 

#### Large Language Models 
To adhere to the FAIR principles the decision was made to harness the capabilities of the LLaMA Large Language Model family, which is developped by Meta {cite:p}`touvron_2023, dubey_2024`. The LLaMA models are based on a Transformer architercture {cite:p}`dubey_2024`. The LLaMA families "only use[s] publicly available data, making [their] work compatible with open-sourcing" {cite:p}`touvron_2023`. It was thus possible to release the LLaMA models as open source with some restrictions to access. This chapter uses the newest release of the model family, LLaMA 3, of which the largest model employs 405 bilion parameters {cite:p}`dubey_2024`. However, LLaMA makes available multiple sets of pretrained models with different quantities of parameters, offering the possibility of maximising minimal parameter count to maximum quality output. The smaller models are "best-in-class, outperforming alternative models with similar numbers of parameters" {cite:p}`dubey_2024;2`  . The model family was pretrained on 15T tokens which marks a large increase from Llama 2 with 1.8T tokens {cite:p}`dubey_2024`.
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

Problems: specific world knowledge that is needed to fill in the metadata, size of context window, computational power/resources. 

TODO 
- Prompt Engineering on local llms (Why it doesn't work for this specific case, why it didn't work for us.) -> the limited context window paired with the large input, the inability to work with unaltered text, computational issues/hardware issues. Batching didn't work. 
- Fine-Tuning issue: possibly could be done with unsloth? I do this this weekend, issue of computational power, time frame, etc. 
- Utilizing jellyfish/evaporate (so half and half, possibly if it works the best solution?)
- 


### Data
The data was extracted from the official website for the Hansard of the Parliament of the Republic of South Africa. It constitutes the transcripts of the mini plenary sessions of the National Assembly, the National Council of Provinces, the National Assembly, and any joint sessions. The National Assembly is formed by 400 members from the various South African political parties. The National Assembly is elected by the voting population of South Africa. The National Council of Provinces, NCoP, is formed with 90 provincial delegates which translates to 10 delegates for each province. It is thus composed regardless of population distribution. The NCoP is chosen by the provincial governments/legislatures. 

The reports are majoritatively held in English, though when a speaker chooses to use another official language, it is transcribed ad verbatim, and no English translation is given. "Hansard is a substantially verbatim report - with repetitions and redundancies omitted and obvious mistakes corrected - or parliamentary proceedings" https://www.parliament.gov.za/hansard?sorts[language]=-1&page=5&offset=40. Kotze and Van Rooy remark that it is and remains unclear what substantially verbatim conotes in the sense of correction towards an overstandardisation {cite:t}`kotze_2020, hibbert_2016, hibbert_2003` 

[^mylabel]: For a more detailed discussion of editing practices in the South African Hansard view {cite:p}`hibbert_2016, hibbert_2003`.


The decision was made to process all reports of 2019 from the National Assembly, henceforth abbreviated as NA. The data thus excludes any other years, all joint sittings, all meetings of the NCoP and all mini plenary sessions. 2019 was chosen as it constituted an election year, thus giving the opportunity of potentially harnessing more speakers as the NA's composition was altered after elections. Furthermore, as the NA is the largest body in Parliament, it was chosen to again maximise speaker count. 

Do we give speaker counts? How many people spoke?

In total 51 sessions were held in 2019.

#### Data Processing (Parlamint)

Please ignore the lackluster title. I'll come up with something else. Here, I want to introduce xml, TEI and ParlaMint and our approach. Lmk if it goes somewhere else. 

To ensure that the data in this corpus remains both human- and machine-readable while adhering to widely accepted standards, it was decided to encode the transcriptions in XML using the ParlaMint schema {cite:p}`erjavec_2023`, a customisation of the Parla-Clarina schema, which itself is based on the Text Encoding Initiative (TEI) guidelines {cite:p}`tei_consortium_guidelines`. This approach allows the corpus to maintain a consistent structure while also providing a way to encode the specific nuances of parliamentary discourse.

The decision to adopt TEI, and specifically the ParlaMint schema, was guided by several considerations, specifically the goal of adhering to the FAIR principles. TEI's flexibility allows for the encoding of a diverse range of textual features, including metadata about speakers, speech acts, and contextual annotations. The ParlaMint schema, as a specialized extension of TEI, is particularly suited for parliamentary corpora. It was designed to allow the encoding of a wide variety of metadata while following a strict structure to enable maximal interoperability {cite:p}`erjavec_2023`. This would allow this corpus to seamlessly integrate with other corpora encoded witht he ParlaMint schema.

In addition to the strict encoding guidelines for data and metadata provided by the ParlaMint schema, it also allows for meticulous documentation of the process to enable reusability for future research using this data. Overall, the ParlaMint was designed to adhere to the FAIR principles as closely as possible {cite:p}`erjavec_2023`.

The preprocessing of the transcriptions involved several steps to ensure consistency and compliance with the ParlaMint schema. This included turning the PDF-documents downloaded from the South African Parliament's website {cite:p}`hansardSA_2020` into txt files, which were then used to create the XML files. 
The content of these txt-files was barely edited, save for occassional spelling errors within headers and subtitles. 

Here I need to describe how I created the xml Vorlage file. 

By adopting ParlaMint and adhering to the FAIR principles, our methodology ensures the creation of a high-quality, standardized corpus that serves as a robust resource for the research community while preserving the integrity and richness of parliamentary discourse.


## Experiments and Results
In a primary approach, the attempt was made to guide a locally run LLM via prompt engineering with a few-shot approach. For this Ollama was chosen as basesoftware as Ollama offers the smaller Llama 3.2 models in a downloadable fashion. Furthermore, Ollama linked to langchain to customise its prompting abilities as Ollama offers limited customization options, though this is subject to swift changes [^footnote]. Langchain offers flexibility with regards to customisation {cite:p}`matra_2024`. To work with the context window given, the files had to be chunked. The decision was made not to enlargen the context windows as larger context windows generally amplify hallucinations, which in the case of dataformatting would be detrimental.

[^footnote]: For the newest updates and developments concerning Ollama consult their [blog](https://ollama.com/blog).

In the first attempt the model was given a prompt of the structure: 

```{code-cell} python
example = f" "
prompt = f" {chunk}"
```


```{tip}
Make sure that you close Ollama before serving it on the command line, otherwise it will not work.
To exit Ollama in the command line press ctrl + c.
```

A code example is given below with the specification of 
```{code-cell} python
import os
from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM

template = """Question: {question}

Answer: Let's think step by step."""

prompt = ChatPromptTemplate.from_template(template)
model = OllamaLLM(model="llama3.2")

folder_path = r'test_objects'  # Folder path

def chunk_text(text, chunk_size=5000):
    words = text.split()
    for i in range(0, len(words), chunk_size):
        yield ' '.join(words[i:i + chunk_size])

for filename in os.listdir(folder_path):
    if filename.endswith('.txt'):
        file_path = os.path.join(folder_path, filename)
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                print(f'Processing file: {filename}')
                content = file.read()
                document_list = []
                i = 0
                for chunk in chunk_text(content, chunk_size=1000):
                    try:
                        question = f"Do not comment it, do not alter the utterances. Can you adapt the following utterances: {chunk} into a structured XML where you mark the speaker as a tag and copy the utterances into a content field?"
                        response = model(prompt.format(question=question))
                        document_list.append(response)
                        i += 1
                        if i == 4:  # Limit iterations for debugging
                            break
                    except Exception as e:
                        print(f"Error processing chunk: {e}")
                output_file = os.path.join(folder_path, f"{os.path.splitext(filename)[0]}.xml")
                with open(output_file, 'w', encoding='utf-8') as output:
                    output.write('\n'.join(document_list))
        except Exception as e:
            print(f"Error reading file {filename}: {e}")
```






```{code-cell} python
print("hello, world")
```
## Results & Discussion 

### Limitations

## Conclusion 

