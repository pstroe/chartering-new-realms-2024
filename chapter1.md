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

## Abstract 

#We will write this in the end

## Introduction
Scholars spend many hours on preprocessing raw data into structured collections that suit their needs {cite:p}`chen_2023`. This process is time and resource intensive, especially when dealing with natural language. Considering the current trend in the digital humanities away from big data towards massive data, the questions of making data Findable, Accessible, Interoperable, and Reusable {cite:p}`wilkinson_2016` have become a focus area of constructing data collections {cite:p}`ide_2003, könig_2021`. An attempt at making data accessible, interoprable, and reusable can be found in the Text Encoding Initiative {cite:p}`burnard_2013`. In this chapter, we propose an approach to the construction of structured data collections with the assistance of Large Language Models, LLMs, to reduce the amount of human labour invested in preprocessing using the ParliMint schema, an interoperable TEI XML schema for transcripts of parliamentary proceedings. This approach serves especially well in cases where there is much raw data which has not been converted into structured data collections, as is the case for the variations of South African English {cite:p}`barnard_2014, jeffery_2003, pienaar_2011`. One such source of raw data are the South African parliamentary proceedings. The South African Parliament supplies transcripts of its parliamentary proceedings online, and whilst attempts have been made to structure this data into the ParliMint schema, the attempt has been labour-intensive and done only on a small scale {cite:p}`ogrodniczuk_2024`. This chapter thus shall attempt to format the parliamentary proceedings into an interoperable XML schema, employing the aid of different LLMs without the use of industrial strength hardware. 

## Relevant Literature 
>Parliamentary proceedings (PP) are a rich source of data used by e.g. scholars in historiography, sociology, political science, linguistics, economics and economic history. As opposed to sources of most other language corpora, PP are not subject to copyright or personal privacy protections, and are typically available online thus making them ideal for compilation into corpora and open distribution. For these reasons many countries have already produced PP corpora, but each typically in their own encoding, thus limiting their comparability and utilisation in a multilingual setting.
>{cite:p}`erjavec_2019`

ParlaMint was suggested as an interoperable, adaptive framework of formatting non-standardised parliamentary proceedings {cite:p}`erjavec_2023`. A first attempt at including the South African Parliamentary Proceedings has been made by Ogrodniczuk {cite:t}`ogrodniczuk_2024`, highlighting again the difficulties of formatting an unstructed document into the ParlaMint scheme {cite:p}`erjavec_2023`. The experiment was conducted on a singular session with a rule based approach {cite:p}`ogrodniczuk_2024`. This proved difficult as all quotations had to be marked manually, thus making it a labour intensive process when considering the 25 years of proceedings available for download on [the website of the South African Parliament](https://www.parliament.gov.za/hansard) {cite:p}`ogrodniczuk_2024, truan_2021`. 

The primary attractivity of harnessing LLMs lies in their capability to process Natural Language inputs and their generalized applicability to unknown tasks {cite:p}`zhang_jellyfish_2024, narayan_2022`. In this they are more flexible than specialized tools. Their flexibility is especially appreciated when it comes to the robustness of processing as, because they are not rule based, they are able to adapt to unforseen circumstances {cite:p}`zhang_jellyfish_2024`. In this ability they have found a wide application ground within the field of linguistics such as in Zappavigna where ChatGPT was tasked with evaluating noisy social media data {cite:p}`zappavigna_2023` or in the use of generative LLMs for corpus analysis {cite:p}`curry_2024`. As to the knowledge of the authors of this chapter, no attempts at harnessing LLMs for parliamentary corpus building specifically have been attempted. However, in the wider field of data curation and formatting, the capabilities of LLMs are utilized, for example in summarising healthcare data from semi-structured forms into possible schematas of illnesses {cite:p}`letinier_2021` or in processing natural language for the biomedical field into a reusable format {cite:p}`beck_2022`. These adaptations of LLMs are highly specialized for their respective tasks and have thus lost much of their generality which is so desired by data scientists in their quest for a one-stop-shop solution for data wrangling {cite:p}`chen_2023`. A further issue of these specialized tasks lie in the idea that LLMs also mark faulty data, respectively correct these errors, such as in customer databases {cite:p}`pookandy_2022`. A behaviour which, in the field of linguistics, is at its best irrelevant but rather more likely renders the data worthless as it would alter the transcripts. 

In light of these added difficulties when it comes to language data, where the language itself is of importance, research has largely been based on developping a tool that, in its foundations, is based on LLMs but that also includes code with a rule-based approach to wrangle data {cite:p}`chen_2023, arora_2023`. Evaporate is capable of transforming various, semistructured inputs into a table output, however its LLM components are based on using cloud solutions to run LLMs {cite:p}`arora_2023`. SEED works on a similar basis, though its output format can be customised [^footnote1]. A model specifically fine-tuned for dataprocessing is the jellyfish family, as proposed by Zhang et al. which is based on the smaller models of the Llama 3 family {cite:t}`zhang_jellyfish_2024`. These tools display a remarkable adaptivity to new tasks, especially with few-shot prompting, where a model or tool is supplied with several examples before it is set to the task {cite:p}`chen_2023`. However, this comes at a greater computational cost than when employing non-LLM or rule-based tools {cite:p}`arora_2023`. Considering this trade-off between robustness, human-costliness and energy-efficiency, any approach must be carefully calculated and balanced.


[^footnote1]: SEED is currently undergoing restructuring and thus cannot be used. It seems to be a promising project for further investigation into processing raw data via LLM, see [SEED repository](https://anonymous.4open.science/r/SEED/paper.pdf). 


## Data and Methods

### Data
The data was extracted from the official website for the Hansard of the Parliament of the Republic of South Africa. It constitutes the transcripts of the mini plenary sessions of the National Assembly, the National Council of Provinces, the National Assembly, and any joint sessions. The National Assembly is formed by 400 members from the various South African political parties. The National Assembly is elected by the voting population of South Africa. The National Council of Provinces, NCoP, is formed with 90 provincial delegates which translates to 10 delegates for each province. It is thus composed regardless of population distribution. The NCoP is chosen by the provincial governments/legislatures. 

The reports are majoritatively held in English, though when a speaker chooses to use another official language, it is transcribed, and no English translation is given. "Hansard is a substantially verbatim report - with repetitions and redundancies omitted and obvious mistakes corrected - of parliamentary proceedings" (see [Website of the South African parliament](https://www.parliament.gov.za/hansard?sorts[language]=-1&page=5&offset=40)). {cite:t}`kotze_2020` remark that it is and remains unclear what substantially verbatim conotes in the sense of corrections towards an overstandardisation {cite:p}`kotze_2020, hibbert_2016, hibbert_2003`.[^footnote2] 

[^footnote2]: For a more detailed discussion of editing practices in the South African Hansard view {cite:p}`hibbert_2016, hibbert_2003`.

The decision was made to process all reports of 2020 from the National Assembly, henceforth abbreviated as NA. The data thus excludes any other years, all joint sittings, all meetings of the NCoP and all mini plenary sessions. The decision to look at the NA was made to maximise the possible speaker count and because it holds the most sessions of all parliamentray chambers. In total 51 sessions were held in 2020.

#### ParlaMint 

To ensure that the data in this corpus remains both human- and machine-readable while adhering to widely accepted standards, it was decided to encode the transcriptions in XML using the ParlaMint schema {cite:p}`erjavec_2022`, a customisation of the Parla-Clarina schema, which itself is based on the Text Encoding Initiative (TEI) guidelines {cite:p}`tei_consortium_guidelines`. This approach allows the corpus to maintain a consistent structure while also providing a way to encode the specific nuances of parliamentary discourse.

The decision to adopt TEI, and specifically the ParlaMint schema, was guided by several considerations, specifically the goal of adhering to the FAIR principles. TEI's flexibility allows for the encoding of a diverse range of textual features, including but not limited to metadata about speakers. The ParlaMint schema, as a specialized extension of TEI, was designed standardise the encoding of parliamentary data across various languages and regions {cite:p}`ogrodniczuk_2024` and allows for the encoding of a wide variety of metadata while following a strict structure to enable maximal interoperability {cite:p}`erjavec_2022`. In addition to the strict encoding guidelines for data and metadata provided by the ParlaMint schema, it also allows for meticulous documentation of the process to enable reusability for future research using this data. Overall, the ParlaMint was designed to adhere to the FAIR principles as closely as possible {cite:p}`erjavec_2022`. 
The concluded ParlaMint I project entailed the encoding of corpora containing transcriptions of the sessions of 17 European national parliaments, resulting in a collection of half a billion words {cite:p}`erjavec_2022_TEI`. Each corpus was prepared in two versions, one being the filly marked-up corpus with speeches in plain text, the other being identical to the first but with added linguistic annotation {cite:p}`erjavec_2022`.

Adhering to the ParlaMint schema while encoding the South African Hansard papers would allow this corpus to seamlessly integrate with the ParlaMint I project.


#### Pre-Processing
The preprocessing of the transcriptions involved several steps to ensure consistency and compliance with the ParlaMint schema. This included turning the PDF-documents downloaded from the South African parliament's website {cite:p}`hansardSA_2020` into text files. The content of these txt-files was not edited at all, save for occassional spelling errors within headers and subtitles. These txt files were then converted into xml files following the ParlaMint schema.

A ParlaMint corpus is contained within a teiCorpus element, which includes a teiHeader for overarching metadata and multiple TEI elements, each representing a distinct component of the corpus, typically corresponding to a single day's transcripts. To manage large corpora more easily, ParlaMint uses the XInclude mechanism. In this setup, the main corpus file, called the corpus root, references individual files, the corpus component files. Thus, each day's transcripts are stored in a separate file, with the overarching structure being represented in the corpus root. This approach facilitates scalability and makes the corpus more easy to maintain. {cite:p}`ParlaMint_2024`

Example structure of the corpus root file:

```{code-cell} xml
 <teiCorpus xmlns="http://www.tei-c.org/ns/1.0">
   <teiHeader>...</teiHeader>
   <TEI>...</TEI> <!-- Corpus component -->
   <TEI>...</TEI> <!-- Corpus component -->
 </teiCorpus>
```

A corpus component file consists of one TEI element. The teiHeader element within the TEI element contains metadata specific to the component, such as details about the parliamentary session, date, and participants. The text element holds the actual transcription of the parliamentary proceedings. This transcription is organized into divisions, which may represent different sessions or segments, and further into individual utterances. Each utterance is typically associated with a speaker, identified through attributes that link to the metadata in the teiHeader. {cite:p}`ParlaMint_2024`

Example structure of a corpus component file:

```{code-cell} xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
 <teiHeader>...</teiHeader>
 <text>
    <body>
      <div type="commentSection">...</div>
      <div type="debateSection">...</div>
      <div type="debateSection">...</div>
    ...
    </body>
 </text>
</TEI>
```

The ParlaMint schema also allows for the encoding of extensive metadata around speakers and organisations, all of which are stored in separate files, which are referenced when necessary.[^footnote3]

[^footnote3]: For more information about the structure of the ParlaMint schema visit their [GitHub repository](https://github.com/clarin-eric/ParlaMint).

### Method 

To adhere to the FAIR principles the decision was made to harness the capabilities of the Llama Large Language Model family, which was and is developped by Meta {cite:p}`touvron_2023, dubey_2024`. The Llama models are based on a Transformer architercture {cite:p}`dubey_2024`. The Llama families "only use[s] publicly available data, making [their] work compatible with open-sourcing" {cite:p}`touvron_2023`. It was thus possible to release the Llama models as open source with some restrictions to access. This chapter uses the newest release of the model family, Llama 3, of which the largest model employs 405 bilion parameters {cite:p}`dubey_2024`. However, Llama makes available multiple sets of pretrained models with different quantities of parameters, offering the possibility of maximising minimal parameter count to maximum quality output. The smaller models are "best-in-class, outperforming alternative models with similar numbers of parameters" {cite:p}`dubey_2024`. The model family was pretrained on 15T tokens which marks a large increase from Llama 2 with 1.8T tokens {cite:p}`dubey_2024`.

```{figure} images_chapter1/llama_3.jpg
---
width: 650px
align: center
name: fig-llama_3
---
Here is the caption for llama 3 {cite:p}`dubey_2024`
```

A further issue in harnessing LLMs for data formatting lies in the costliness of training and running of such models. Whilst there is an effort to optimize models , it is still not possible to train a LLM locally on a standard laptop {cite:p}`zhang_jellyfish_2024`. However, it is possible to run some pretrained models locally, provided that their parameter count is relatively small, and adapt them to a specific task via few-shot prompting. In this context Llama offers small-scale options with their development of the general models Llama 3.2 1B, 3B and 70B, where especially the 1B and the 3B parameter models are runnable on mobile or edge devices {cite:p}`dubey_2024`. As the Jellyfish family by Zhan et al. is also based on Llama but finetuned to data processing, it will also be included in the experiments {cite:p}`zhang_jellyfish_2024`.

**Models Used**
- Llama 3.2 1B
- Llama 3.2 3B
- Llama 3 8B 
- Jellyfish

#### Experiment Setup
Here we describe the use of the gold-standard xml for training etc.


## Experiments and Results
In a primary approach, the attempt was made to guide a locally run LLM via prompt engineering with a standard prompting approach but enriched with an example {cite:p}`vijayan_2023, zhang_2023, naveed_2023`. This decision to utilize a standard prompting appraoch was made to accomodate the context windows of the models tested. To work with the context window given, the files had to be chunked. The decision was made not to enlargen the context windows as larger context windows generally amplify hallucinations, which in the case of dataformatting would be detrimental.

Ollama was chosen as basesoftware as it offers the smaller Llama 3.2 models in a downloadable fashion. Furthermore, Ollama linked to langchain to customise its prompting abilities as Ollama offers limited customization options, though this is subject to swift changes [^footnote]. Langchain offers flexibility with regards to customisation {cite:p}`martra_2024`. 

[^footnote]: For the newest updates and developments concerning Ollama consult their [blog](https://ollama.com/blog).

In the first attempt the model was given a prompt of the structure: 

```{code-cell} python
example_xml = f'<note type="speaker">The CHIEF WHIP OF THE MAJORITY PARTY:</note>
            <u xml:id="25-02-2020_u16" who="#ChiefWhipOfMajorityParty"> 
                <seg xml:lang="en">
                    Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.
                </seg>'
example_txt = f'The CHIEF WHIP OF THE MAJORITY PARTY: Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.'
question_1 = f'If given raw text: {example_txt} with the end goal: {example_xml}, can you adapt this: {chunk} into the same xml format?'
```


A code example is given below with Llama 3.2 configured: 

```{tip}
Make sure that you close Ollama before serving it on the command line, otherwise it will not work.

To exit Ollama in the command line press ctrl + c.
```

```{code-cell} python
import os
from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM

folder_path = r'test_objects'


template = """Question: {question}

Answer: Let's think step by step."""

prompt = ChatPromptTemplate.from_template(template)
model = OllamaLLM(model="llama3.2")


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
                        question = question_1
                        response = model(prompt.format(question=question))
                        document_list.append(response)
                        i += 1
                        if i == 4:  # Limit iterations for testing
                            break
                    except Exception as e:
                        print(f"Error processing chunk: {e}")
                output_file = os.path.join(folder_path, f"{os.path.splitext(filename)[0]}.xml")
                with open(output_file, 'w', encoding='utf-8') as output:
                    output.write('\n'.join(document_list))
        except Exception as e:
            print(f"Error reading file {filename}: {e}")
```
## Results & Discussion 

### Limitations
Problems: specific world knowledge that is needed to fill in the metadata, size of context window, computational power/resources. 
Prompt Engineering on local llms (Why it doesn't work for this specific case, why it didn't work for us.) -> the limited context window paired with the large input, the inability to work with unaltered text, computational issues/hardware issues. Batching didn't work.


## Conclusion 

## Bibliography
```{bibliography}
:style: plain
```

