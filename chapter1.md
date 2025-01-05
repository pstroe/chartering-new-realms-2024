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
Scholars spend many hours on preprocessing raw data into structured collections that suit their needs {cite:p}`chen_2023`. This process is time and resource intensive, especially when dealing with natural language. Considering the current trend in the digital humanities away from big data towards massive data, the questions of making data Findable, Accessible, Interoperable, and Reusable {cite:p}`wilkinson_2016` have become a focus area of constructing data collections {cite:p}`ide_2003, könig_2021`. An attempt at making data accessible, interoprable, and reusable can be found in the Text Encoding Initiative {cite:p}`burnard_2013`. In this chapter, we propose an approach to the construction of structured data collections with the assistance of Large Language Models, LLMs, to reduce the amount of human labour invested in preprocessing, using the ParlaMint schema, an interoperable TEI XML schema for transcripts of parliamentary proceedings. This approach could be promising in cases where there is much raw data but it is not accessible in any coherent structure, as is the case for the variations of South African English {cite:p}`barnard_2014, jeffery_2003, pienaar_2011`. One such source of raw data are the South African parliamentary proceedings. The South African Parliament supplies transcripts of its parliamentary proceedings online, and whilst attempts have been made to structure this data into the ParliMint schema, the attempt has been labour-intensive and done only on a small scale {cite:p}`ogrodniczuk_2024`. This chapter shall thus attempt to format the parliamentary proceedings into an interoperable XML schema, by employing the aid of different LLMs without the use of industrial strength hardware. 

## Relevant Literature 
>Parliamentary proceedings (PP) are a rich source of data used by e.g. scholars in historiography, sociology, political science, linguistics, economics and economic history. As opposed to sources of most other language corpora, PP are not subject to copyright or personal privacy protections, and are typically available online thus making them ideal for compilation into corpora and open distribution. For these reasons many countries have already produced PP corpora, but each typically in their own encoding, thus limiting their comparability and utilisation in a multilingual setting.
>{cite:p}`erjavec_2019`

ParlaMint was suggested as an interoperable, adaptive framework of formatting non-standardised parliamentary proceedings {cite:p}`erjavec_2023`. A first attempt at including the South African Parliamentary Proceedings has been made by Ogrodniczuk {cite:t}`ogrodniczuk_2024`, highlighting again the difficulties of formatting an unstructed document into the ParlaMint scheme {cite:p}`erjavec_2023`. The experiment was conducted on a singular session with a rule based approach {cite:p}`ogrodniczuk_2024`. This proved difficult as all quotations had to be marked manually, thus making it a labour intensive process when considering the 25 years of proceedings available for download on [the website of the South African Parliament](https://www.parliament.gov.za/hansard) {cite:p}`ogrodniczuk_2024, truan_2021`. 

The primary attractivity of harnessing LLMs lies in their capability to process Natural Language inputs and their generalized applicability to unknown tasks {cite:p}`zhang_jellyfish_2024, narayan_2022`. In this they are more flexible than specialized tools. Their flexibility is especially appreciated when it comes to the robustness of processing as, because they are not rule based, they are able to adapt to unforseen circumstances {cite:p}`zhang_jellyfish_2024`. In this ability they have found a wide application ground within the field of linguistics such as in Zappavigna where ChatGPT was tasked with evaluating noisy social media data {cite:p}`zappavigna_2023` or in the use of generative LLMs for corpus analysis {cite:p}`curry_2024`. As to the knowledge of the authors of this chapter, no attempts at harnessing LLMs for parliamentary corpus building specifically have been attempted. However, in the wider field of data curation and formatting, the capabilities of LLMs are utilized, for example in summarising healthcare data from semi-structured forms into possible schematas of illnesses {cite:p}`letinier_2021` or in processing natural language for the biomedical field into a reusable format {cite:p}`beck_2022`. These adaptations of LLMs are highly specialized to their respective tasks and have thus lost much of their generality which is so desired by data scientists in their quest for a one-stop-shop solution for data wrangling {cite:p}`chen_2023`. A further issue of these specialized tasks lie in the idea that LLMs also mark faulty data, or rather correct these errors, such as in customer databases {cite:p}`pookandy_2022`. A behaviour which, in the field of linguistics, is at its best irrelevant but rather more likely renders the data worthless as it would alter the transcripts. 

In light of these added difficulties when it comes to language data, where the language itself is of importance, research has largely been based on developping a tool that, in its foundations, is based on LLMs but that also includes code with a rule-based approach to wrangle data {cite:p}`chen_2023, arora_2023`. Evaporate is capable of transforming various, semistructured inputs into a table output, its LLM components are based on using cloud solutions to run LLMs {cite:p}`arora_2023`. SEED works on a similar basis, though its output format can be customised [^footnote1]. A model specifically fine-tuned for dataprocessing is the jellyfish family [^footnote4], as proposed by Zhang et al. which is based on the smaller models of the Llama 3 family {cite:t}`zhang_jellyfish_2024`. These tools display a remarkable adaptivity to new tasks, especially with few-shot prompting, where a model or tool is supplied with several examples before it is set to the task {cite:p}`chen_2023`. However, this comes at a greater computational cost than when employing non-LLM or rule-based tools {cite:p}`arora_2023`. Considering this trade-off between robustness, human-costliness and energy-efficiency, any approach must be carefully calculated and balanced.

[^footnote4]: The Jellyfish model requires a GPU with more than 15 GB of memory, we neither have a device available with such a GPU, nor does Google Colab support such memory use on their free plan, thus we are unable to test it. 

[^footnote1]: SEED is currently undergoing restructuring and thus cannot be used. It seems to be a promising project for further investigation into processing raw data via LLM, see [SEED repository](https://anonymous.4open.science/r/SEED/paper.pdf). 


## Data and Methods

### Data
The data was extracted from the official website for the Hansard of the Parliament of the Republic of South Africa. It constitutes the transcripts of the mini plenary sessions of the National Assembly, the National Council of Provinces, the National Assembly, and any joint sessions. The National Assembly is formed by 400 members from the various South African political parties. The National Assembly is elected by the voting population of South Africa. The National Council of Provinces, NCoP, is formed with 90 provincial delegates which translates to 10 delegates for each province. It is thus composed regardless of population distribution. The NCoP is chosen by the provincial governments/legislatures. 

The reports are majoritatively held in English, though when a speaker chooses to use another official language, it is transcribed, but no English translation is given. "Hansard is a substantially verbatim report - with repetitions and redundancies omitted and obvious mistakes corrected - of parliamentary proceedings" (see [Website of the South African parliament](https://www.parliament.gov.za/hansard?sorts[language]=-1&page=5&offset=40)). {cite:t}`kotze_2020` remark that it is and remains unclear what substantially verbatim conotes in the sense of corrections towards an overstandardisation {cite:p}`kotze_2020, hibbert_2016, hibbert_2003`.[^footnote2] 

[^footnote2]: For a more detailed discussion of editing practices in the South African Hansard view {cite:p}`hibbert_2016, hibbert_2003`.

The decision was made to process all reports of 2020 from the National Assembly, henceforth abbreviated as NA. The data thus excludes any other years, all joint sittings, all meetings of the NCoP and all mini plenary sessions. The decision to look at the NA was made to maximise the possible speaker count and because it holds the most sessions of all parliamentray chambers. In total 51 sessions were held in 2020.

#### ParlaMint 

To ensure that the data in this corpus remains both human- and machine-readable while adhering to widely accepted standards, it was decided to encode the transcriptions in XML using the ParlaMint schema {cite:p}`erjavec_2022`, a customisation of the Parla-Clarina schema, which itself is based on the Text Encoding Initiative (TEI) guidelines {cite:p}`tei_consortium_guidelines`. This approach allows the corpus to maintain a consistent structure while also providing a way to encode the specific nuances of parliamentary discourse.

The decision to adopt TEI, and specifically the ParlaMint schema, was guided by several considerations, specifically the goal of adhering to the FAIR principles. TEI's flexibility allows for the encoding of a diverse range of textual features, including but not limited to metadata about speakers. The ParlaMint schema, as a specialized extension of TEI, was designed to standardise the encoding of parliamentary data across various languages and regions {cite:p}`ogrodniczuk_2024` and allows for the encoding of a wide variety of metadata while following a strict structure to enable maximal interoperability {cite:p}`erjavec_2022`. In addition to the strict encoding guidelines for data and metadata provided by the ParlaMint schema, it also allows for meticulous documentation of the process to enable reusability for future research using this data. Overall, the ParlaMint was designed to adhere to the FAIR principles as closely as possible {cite:p}`erjavec_2022`. 

The concluded ParlaMint I project entailed the encoding of corpora containing transcriptions of the sessions of 17 European national parliaments, resulting in a collection of half a billion words {cite:p}`erjavec_2022_TEI`. Each corpus was prepared in two versions, one being the filly marked-up corpus with speeches in plain text, the other being identical to the first but with added linguistic annotation {cite:p}`erjavec_2022`. Adhering to the ParlaMint schema while encoding the South African Hansard papers would allow this corpus to seamlessly integrate with the ParlaMint I project.

A ParlaMint corpus is contained within a teiCorpus element, which includes a teiHeader for overarching metadata and multiple TEI elements, each representing a distinct component of the corpus, typically corresponding to a single day's transcripts. This corpus root encodes information such as the title and language of the corresponding transcripts, the number of speakers and speeches contained within them, and the time the transcriptions span. The corpus root file also contains information about the license the transcripts are published under and the place online where they can be downloaded. 
To manage large corpora more easily, ParlaMint uses the XInclude mechanism. In this setup, the main corpus file, called the corpus root, references individual files, the corpus component files. Thus, each day's transcripts are stored in a separate file, with the overarching structure being represented in the corpus root. This approach facilitates scalability and makes the corpus more easy to maintain. {cite:p}`ParlaMint_2024`


#### Training Data
The preprocessing of the transcriptions involved several steps to ensure consistency and compliance with the ParlaMint schema. This included turning the PDF-documents downloaded from the South African parliament's website {cite:p}`hansardSA_2020` into text files. The content of these txt-files was not edited at all, save for occasional spelling errors within headers and subtitles. These txt files were then converted into xml files following the ParlaMint schema.

A ParlaMint corpus is contained within a teiCorpus element, which includes a teiHeader for overarching metadata and multiple TEI elements, each representing a distinct component of the corpus, typically corresponding to a single day's transcripts. To manage large corpora more easily, ParlaMint uses the XInclude mechanism. In this setup, the main corpus file, called the corpus root, references individual files, the corpus component files. Thus, each day's transcripts are stored in a separate file, with the overarching structure being represented in the corpus root. This approach facilitates scalability and makes the corpus easier to maintain. {cite:p}`ParlaMint_2024`

Example structure of the corpus root file:

```{code-cell} xml
<teiCorpus xmlns="http://www.tei-c.org/ns/1.0">
 <teiHeader>...</teiHeader>
 <TEI>...</TEI>
 <TEI>...</TEI>
 ...
</teiCorpus>
```

A corpus component file consists of one TEI element. The teiHeader element within the TEI element contains metadata specific to the component, such as details about the parliamentary session, date, and participants. The text element holds the actual transcription of the parliamentary proceedings. This transcription is organized into divisions, which may represent different sessions or segments, and further into individual utterances. Each utterance is typically associated with a speaker, who is identified through attributes that link to the metadata in the teiHeader. {cite:p}`ParlaMint_2024`

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

#### Pre-Processing
The preprocessing of the transcriptions involved several steps to ensure consistency and compliance with the ParlaMint schema. This included turning the PDF-documents downloaded from the South African parliament's website {cite:p}`hansardSA_2020` into text files. The content of these txt-files was not edited at all, save for occassional spelling errors within headers and subtitles. These txt files were then converted into xml files following the ParlaMint schema.

The first step was to prepare the corpus root file which contains the metadata about the South African Hansard papers. In a next step, a sample xml file was prepared. For this purpose, the txt file containing the transcripts of the session of the National Assembly held on 25.02.2020 was selected. A shortened version of around 17 pages was created, containing around three speeches and the introductory conversation of that session. This short txt was then converted into an xml file, adhering to the ParlaMint schema. It was judged that these 17 pages contained enough variation in speakers and discourse as to provide a wide array of different xml elements and attributes within the xml file to serve as example for the prompts served to the LLMs. 

Example snippet from the converted xml file, showing part of the teiHeader element:

```{code-cell} xml
<TEI xmlns="http://www.tei-c.org/ns/1.0" xml:id="HansardSA_NA_2020" xml:lang="en">
    <teiHeader>
     <fileDesc>
       <titleStmt>
            <title type="main" xml:lang="en">South African Hansard papers</title>
            <title type="sub">Minutes of the National Assembly of South Africa</title>
            <meeting n="1" corresp="#DZ" </meeting> 
       </titleStmt>
       ...
      <profileDesc>
        <settingDesc>
            <setting> 
                <name type="place">Houses of Parliament</name>
                <name type="city">Cape Town</name>
                <name type="country" key="ZA">South Africa</name>
                <date when="2020-02-25">25.02.2020</>
            </setting>
        </settingDesc>
     </profileDesc>
</TEI>
```

As described above, speaker metadata is stored in a separate file, which is referenced as necessary. Specifically, a unique ID is defined for each speaker within this speaker metadata file, which is used in the component file to identify the speaker and link them to the metadata file. To facilitate the prompt engineering at first, the decision was made to forgo the speaker metadata context to ensure a clean run of the LLM. In a next step, the speaker element could be called to insert the relevant ID.

Example snippet from the converted xml file, showing part of text element containing the speeches:

```{code-cell} xml
<text>
  <body>
    <div type="debateSection">
      <note type="time">The House met at <time when="2020-02-25T014:00:00">14:00</time>.</note>
      <note type="narrative">House Chairperson Ms M G Boroto took the Chair and requested members to observe a moment of silence for prayer or meditation.</note>
      <note type="speaker">The HOUSE CHAIRPERSON (Ms M G Boroto):</note>
      <u xml:id="25-02-2020_u1" who="#houseChairperson">
        <seg xml:lang="en">Hon members, I would like to remind you that on 4 December 2019 the House adopted the Rules Committee report which introduced a number of
            amendments to our rules. Some of the amendments pertain to thesequence of proceedings and Members’ Statements. To facilitate sufficient opportunity for Ministers’ Responses to Members’ Statements, the sequence of proceedings has been amended so that Members’ Statements are now at the start of the proceedings on days that they are scheduled by the programming committee.
            </seg>
        <seg xml:lang="en">The Rules Committee further agreed that the number of Ministers’ Responses be increased from six to seven and that time allowed for ministers’ Responses be increased from two minutes to three minutes. With that background, I will now take the first item on the Order Paper which is Members’ Statements. Does any member of the ANC wish to make a statement?
        </seg>
      </u>
      <note type="speaker">The CHIEF WHIP OF THE OPPOSITION:</note>
      <u xml:id="25-02-2020_u2" who="#ChiefWhipOfOpposition"> 
        <seg xml:lang="en">
            Sorry Chair, on a point of order.
        </seg>
      </u>
      <note type="speaker">The HOUSE CHAIRPERSON (Ms M G Boroto):</note>
      <u xml:id="25-02-2020_u3" who="#houseChairperson">
        <seg xml:lang="en">
            Please take your seat. Yes, what’s your point of order?
        </seg>
      </u>
      ...
    </div>
  </body>
</text>
```


### Method 
This chapter uses the newest releases of the Llama 3 model family, Gemini 1.5 Flash and GPT-4o. 

Llama makes multiple sets of pretrained models with different quantities of parameters available, thus, offering the possibility of maximising minimal parameter count to maximum quality output thus possibly minimizing the costliness of the running of such models. Whilst there is an effort to optimize models, it is still not possible to train a LLM locally on a standard laptop {cite:p}`zhang_jellyfish_2024`. However, it is possible to run some pretrained models locally, provided that their parameter count is relatively small, and adapt them to a specific task via prompting. In this context Llama offers small-scale options with their development of the general models Llama 3.2 1B, 3B and 70B, where especially the 1B and the 3B parameter models are runnable on mobile or edge devices {cite:p}`dubey_2024`. The smaller models are "best-in-class, outperforming alternative models with similar numbers of parameters" {cite:p}`dubey_2024`. However, these smaller models come at a reduction of processing power, which may cause difficulties in processing the complex ParlaMint structure. 

```{figure} chapter1_ZA-content/images/llama_3.jpg
---
width: 650px
align: center
name: fig-llama_3
---
Llama 3 herd with parameters {cite:p}`dubey_2024`
```

Gemini 1.5 Flash constitutes the attempt at constructing a lightweight model with GPT-4 capabilities but a longer context window {cite:p}`gemini_2024`. It promises accuracy across a context window of 10 million token, whilst being relatively efficient and more efficient to serve then the Gemini 1.0 models {cite:p}`gemini_2024`, thus making it a promising candidate for formatting data as, especially in the case of ParlaMint, the complete context of the correct XML structure is relatively long.  

GPT-4o was chosen for its accessibility, computational efficiency, and ease of use. Unlike larger, resource-intensive models, GPT-4o offers advanced capabilities while remaining efficient to run on standard hardware. Additionally, OpenAI announced in a press conference that GPT-4o demonstrates significant advancements in linguistic, textual, and visual reasoning task {cite:p}`liu_2024`.

With the subscription to the GPT-4o model comes the option of configuring user-specific GPTs. Custom GPTs are specialized models tailored to perform specific tasks. Users can configure these models without coding by providing clear instructions and uploading relevant documents. Once configured, custom GPTs operate by leveraging the provided instructions and data to generate responses aligned with the user's requirements. {cite:p}`zhao_2024, garrido_2023, openai_2025` 
Custom GPTs have been shown to outperform basic GPT models like GPT-3.5 and GPT-4 in specialised, domain-specific tasks in fields such as medicine {cite:p}`liu_2024, muti_2024` and teaching {cite:p}`garrido_2023`, especially when the tasks involves information-retrieval. 


**Models Used**
- Llama 3.2 1B
- Llama 3.2 3B
- Llama 3 8B
- Gemini 1.5 Flash
- GPT-4o

Because of the various implementations of the LLMs, with the Llama herd being locally run, and Gemini and GPT-4o being run through their online interface, different approaches had to be taken. 

Overall, the ParlaMint schema was simplified as to compartementalize the different elements of the structure. Erjavec's most time consuming task when annotating a file by hand, was the marking of metalinguistic commentary, respectively, speaker and metalinguistic commentary differenciation {cite:t}`erjavec_2023`. The input prompt was always structured by giving an example of the raw data, an example of the structured, corresponding XML section and a set of instructions {cite:p}`sahoo_2024`. Depending on whether the LLM was called via API or it's online interface, it was either guided onwards through repeating the instruction, or iterative refinement {cite:p}`vijayan_2023`. Furthermore, persona prompting and chain of thought prompting was attempted where appropriate. For a detailed description of the approaches, please view the [Experiments and Results](##Experiments and Results) section.

#### Evaluation
To evaluate the work of the LLMs automatically, a twofold approach was selected, where both the structure, [Evaluation XML Schema](##### Evaluation XML Schema) and the content, [Evaluation Content](##### Evaluation Content) of the processed file is assessed. 

##### Evaluation XML Schema
To validate the XML schema of the files output by the LLMs, the RelaxNG {cite:p}`clark_2001` file format was chosen. A RelaxNG file is itself an XML file, which can be used to check and validate the structure of an XML file {cite:p}`van-der-vlist_2003`. This format was selected as there already exists an official RelaxNG file created by the ParlaMint team [^footnote9]. Due to the simplified nature of the XML schema followed within this paper, the ParlaMint RelaxNG file was adapted and simplified to better suit this project's needs.

Using a short Python script, the adapted RelaxNG file was used to evaluate and validate all XML files:

```{code-cell} python
from lxml import etree
from collections import Counter

def validate_xml(relaxng_file, xml_file):
    """
    Validates an XML file against a RelaxNG schema and prints detailed error messages,
    along with a total count of errors and a count of each error type.

    :param relaxng_file: Path to the RelaxNG schema file.
    :param xml_file: Path to the XML file to be validated.
    """
    try:
        with open(relaxng_file, 'r', encoding='utf-8') as rng_file:
            relaxng_doc = etree.parse(rng_file)
            relaxng = etree.RelaxNG(relaxng_doc)
        
        with open(xml_file, 'r', encoding='utf-8') as xml_file_obj:
            xml_doc = etree.parse(xml_file_obj)
        
        if relaxng.validate(xml_doc):
            print(f"The XML file '{xml_file}' is valid according to the RelaxNG schema.")
        else:
            print(f"The XML file '{xml_file}' is NOT valid according to the RelaxNG schema.\n")
            print("Validation errors:")

            error_count = 0
            error_type_counter = Counter()

            # Process and print each error
            for error in relaxng.error_log:
                error_count += 1
                error_type_counter[error.type_name] += 1
                print(f"Line {error.line}, Column {error.column}: {error.message}")
                print(f"  Domain: {error.domain_name}, Type: {error.type_name}\n")

            # Print total error summary
            print("Summary of Validation Errors:")
            print(f"Total Errors: {error_count}")
            for error_type, count in error_type_counter.items():
                print(f"  {error_type}: {count} occurrences")
    
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    relaxng_file = "Adapted_ParlaMint.rng" 
    xml_file = "uh_25.02_short.xml"    

    validate_xml(relaxng_file, xml_file)

```
If the XML file is valid, the output consists of a single line: "The XML file '{xml_file}' is valid according to the RelaxNG schema.". If the XML file is not valid, the script outputs a list of all errors with their corresponding line numbers and error types. Additionally, it outputs a total sum of errors and a sum of each type of error, which facilitates the comparison across different evaluations.

[^footnote9]: This RelaxNG file can be accessed on the ParlaMint project's GitHub repository, in the [Schema](https://github.com/clarin-eric/ParlaMint/tree/main/Schema) folder.

##### Evaluation Content
To evaluate the content of the output of the LLMs tested, a percentage scale was chosen. To avoid looping through each file, the decision was made to base the validation script on a random sampler of sentences. It samples a specified number of sentences from the processed XML file and compares them to the original txt file on a token basis.

```{attention} This code needs to be configured for the xml tag that denotes where the text content of the file is stored. The ParlaMint scheme specifies this with the *seg* tag, though it is customisbale, to allow for output from LLMs which configure this tag wrongly, to allow for a consistent check of content. Furthermore, a regular expression was configured to check whether the speaker segmentation was successful. The code below is configured for the gold standard.
```

```{code-cell} python
import xml.etree.ElementTree as ET
import random
import re
import os
import pandas as pd
from collections import OrderedDict

"""Script to evaluate all XML output files in a folder against its original. 
Includes error handling for incomplete/incorrect XML schema where it parses the the erroneous file as TXT format.
"""

# Path to the folder containing XML files
xml_folder_path = 'chapter1_ZA-content/gold_standard'  # Replace with the actual folder path containing XML files
txt_file_path = 'chapter1_ZA-content/gold_standard'  # Replace with the actual path to your TXT file

# Open the original file and reads its content, this serves as comparator for the processed XML files. 
with open(txt_file_path, 'r', encoding='utf-8') as file:
    txt_content = file.read()

# Removes newline characters and extra spaces from the txt file content, ensures that the script is not bothered by the original format.
txt_content = re.sub(r'\s+', ' ', txt_content.replace('\n', ' ').strip())

# Define the namespace for the TEI XML, given for ParlaMint, 
namespace = {'tei': 'http://www.tei-c.org/ns/1.0'}

#option to configure the tag where the text is contained. seg is the official ParlaMint tag. This is due to the script checking for content and not formatting, thus if the LLM formatted with a wrong tag, the tag could be adapted more easily.
tag = "seg"

#option to configure the sampler size from each XML file. Can be set at random, or calculated for a desired probability of reliability. 
sampler = 50

# Function to split text into sentences, used for the validation. 
def split_into_sentences(text):
    # Basic sentence splitting based on a simple regex. Not perfectly robust but when tested on the gold standard, output is at a 100%
    return re.split(r'(?<=\w[.!?]) +', text)

# Function to calculate how much of the sentence is found in the TXT content
def calculate_match_percentage(sentence, txt_content):
    # Find the longest substring match in the text content
    match = re.search(re.escape(sentence), txt_content)
    if match:
        match_len = len(match.group(0))  # Length of the match
        sentence_len = len(sentence)  # Length of the original sentence
        return (match_len / sentence_len) * 100  # Percentage of the sentence found
    return 0  # No match found

#checks names in the XML files
def check_names(sentences): 
    for sentence in sentences: 
        pattern = r"(?<!>)([A-Z]+(?: [A-Z]+)*)(?!>):"
        # Find all matches
        matches = re.findall(pattern, sentence)
        # Count the number of matches
        count = len(matches)
        if count != 0: 
            return(count)

      

# List to store results
results = []

#list to store the 
all_sentences = []

speaker_error = {}
# Loop through all XML files in the folder
for xml_file_name in os.listdir(xml_folder_path):
    if xml_file_name.endswith('.xml'):  # Only process XML files
        xml_file_path = os.path.join(xml_folder_path, xml_file_name)
        
        #handles the processing and selection of the n random sentences.
        try:
            # Try parsing the XML file
            tree = ET.parse(xml_file_path)
            root = tree.getroot()
            # Find all the tag elements within the XML
            segments = root.findall(f'.//tei:{tag}', namespace)
            # Loop through each segment, split text into sentences, and add to the list
            for seg in segments:
                sentences = split_into_sentences(seg.strip())
                #check for any names within the text, regex because the format is always the same for all debates. EX: MS BOROTO: 
                speaker_error[xml_file_name] = check_names(sentences)
                # ensure the randomness of the sampled sentences
                sampled_sentences = random.sample(sentences, sampler) if len(sentences) >= sampler else sentences
                all_sentences.extend(sampled_sentences)
        except: # If XML parsing fails, open the file as a plain text file
            print(f"XML parsing failed for {xml_file_name}, treating as plain text...")
            with open(xml_file_path, 'r', encoding='utf-8') as file:
                raw_content = file.read()
                # Loop through each segment, split text into sentences, and add to the list
                sentences = split_into_sentences(raw_content.strip()) 
                speaker_error[xml_file_name] = check_names(sentences) 
                # ensure the randomness of the sampled sentences
                sampled_sentences = random.sample(sentences, sampler) if len(sentences) >= sampler else sentences
                all_sentences.extend(sampled_sentences)

        # Remove newline characters and extra spaces from the sampled sentences
        sampled_sentences = [re.sub(r'\s+', ' ', sentence.replace('\n', ' ').strip()) for sentence in sampled_sentences]

        # List to store the match percentages for the current XML file
        match_percentages = []

        # Check how much of the sentences are present in the TXT file
        for sentence in sampled_sentences:
            match_percentage = calculate_match_percentage(sentence, txt_content)
            match_percentages.append(match_percentage)

        # Calculate the average match percentage for the current XML file
        average_match_percentage = sum(match_percentages) / len(match_percentages) if match_percentages else 0

        # Store the result for the current XML file in the results list
        for i, percentage in enumerate(match_percentages, start=1):
            file_error = speaker_error.get(xml_file_name, None)
            results.append({
                'XML File': xml_file_name,
                'Sentence #': i,
                'Sentence': sampled_sentences[i-1],
                'Match Percentage': f"{percentage:.2f}%",
                'Average Match Percentage': f"{average_match_percentage:.2f}%",
                'Speaker Error': file_error
            })

# Create a DataFrame from the results
df = pd.DataFrame(results)

# Write the results to an Excel file
excel_file_path = 'output_results_with_average.xlsx' 
df.to_excel(excel_file_path, index=False)

print(f"Results have been written to {excel_file_path}")           
```

## Experiments and Results
In a primary approach, the attempt was made to guide locally run, smaller, LLMs, from the Llama herd, via prompt engineering with a standard prompting approach but enriched with an example {cite:p}`vijayan_2023, zhang_2023, naveed_2023`. This approach was chosen to assess whether a smaller, and thus less costly, LLM could fulfill the task requirements. Furthermore, two larger LLMs, Gemini and GPT-4o, were tested through their online chat interface, to assess whether they produce a different, possibly a more stable output. 

### LLama Herd 
The prompt for the Llama herd is comprised of a shortened version of the input txt file and the corresponding xml file in the ParlaMint schema. This decision to utilize a standard prompting approach was made to accomodate the context windows of the models tested. To work with the context window given, the files had to be chunked. The decision was made not to enlargen the context windows as larger context windows generally amplify hallucinations, which in the case of data formatting would be detrimental.

Ollama was chosen as basesoftware as it offers the smaller Llama 3.2 models in downloadable form. Furthermore, Ollama is linked to langchain to customise its prompting abilities, as Ollama offers limited customization options, though this is subject to changes [^footnote]. Langchain offers flexibility with regards to customisation {cite:p}`martra_2024`. Thus, the temperature of the model was arranged between 0-0.3 to minimize creativity within the responses. The setting of the model was varied to test whether different base settings would alter the responses given by the model. 

[^footnote]: For the newest updates and developments concerning Ollama consult their [blog](https://ollama.com/blog).

In the first attempt the model was given a prompt of the structure: 

```{code-cell} python
example_xml = f'<note type="speaker">The CHIEF WHIP OF THE MAJORITY PARTY:</note> <u xml:id="25-02-2020_u16" who="#ChiefWhipOfMajorityParty"> <seg xml:lang="en">Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.</seg>'
example_txt = f'The CHIEF WHIP OF THE MAJORITY PARTY: Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.'
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

#specifies the model
model = OllamaLLM(model="llama3.2")

#chunks the files into manageable sizes for the LLMs context windows.
def chunk_text(text, chunk_size=5000):
    words = text.split()
    for i in range(0, len(words), chunk_size):
        yield ' '.join(words[i:i + chunk_size])

for filename in os.listdir(folder_path):
    #checks the input file's format
    if filename.endswith('.txt'):
        file_path = os.path.join(folder_path, filename)
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                print(f'Processing file: {filename}')
                content = file.read()
                document_list = []
                i = 0 #counters for debugging
                for chunk in chunk_text(content, chunk_size=1000):
                    try:
                        #actual prompt given to LLM
                        question = f'If given raw text: {example_txt} with the end goal: {example_xml}, can you adapt this: {chunk} into the same xml format?'
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

```{attention} This code will fail unless langchain and Ollama are installed!
```
The input prompt was varied, and the global setting for the Llama family adapted. View the appendix for the specific settings and their corresponding results. 

ADAPT THE STYLE APPROPRIATELY 
```{code-cell} python
import pandas as pd

pd.set_option('display.max_colwidth', 0)
excel_file = "ZA-content/comments.xlsx"
sn = "13.12"

comments = pd.read_excel(excel_file, sheet_name=sn)

print(comments)
```

### Gemini 1.5 Flash
To assess whether a larger LLM gives a better output, Gemini 1.5 Flash was tested in its online chat interface. Gemini's primary attractiveness for this task lies in its long context windows of up to 10 million token and its superior efficiency over the GPT models {cite:p}`gemini_2024`. As the online chat interface does not allow file input, the prompt was structured to contain both an example xml and an example txt, as well as a chunk of a file to be processed. See below for an example of the structure. The file was chunked into 4000 word segments to respect the input maximum of 5108 tokens of each call for Gemini 1.5 Flash. Every conversation was held thrice to assess the answer scheme of the LLM and whether it's answers are similar in content. 

```{example} PROMPT:[Given: [The CHIEF WHIP OF THE MAJORITY PARTY: Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.] with the goal [<note type="speaker">The CHIEF WHIP OF THE MAJORITY PARTY:</note> <who="#ChiefWhipOfMajorityParty"> <seg xml:lang="en">Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.</seg>] format the following text into the same xml format. Format all of the text.
[UNREVISED HANSARD
NATIONAL ASSEMBLY
TUESDAY, 25 FEBRUARY 2020
Page: 1
TUESDAY, 25 FEBRUARY 2020
____
PROCEEDINGS OF THE NATIONAL ASSEMBLY
____
The House met at 14:00.
House Chairperson Ms M G Boroto took the Chair and requested
members to observe a moment of silence for prayer or
meditation.
The HOUSE CHAIRPERSON (Ms M G Boroto): Hon members, I would
like to remind you that on 4 December 2019 the House adopted
the Rules Committee report which introduced a number of
amendments to our rules. Some of the amendments pertain to the
sequence of proceedings and Members’ Statements. To facilitate
sufficient opportunity for Ministers’ Responses to Members’
Statements, the sequence of proceedings has been amended so
that Members’ Statements are now at the start of the
proceedings on days that they are scheduled by the programming
committee.
UNREVISED HANSARD
NATIONAL ASSEMBLY
TUESDAY, 25 FEBRUARY 2020
Page: 2
```

It's output however, was mostly unusable, as it refused to attempt the task and gave answers such as: 

|| **Prompts**                                                                                    |**Additional Files/Information** | **Results**                       |
|----|--------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|
|1| help me format some text | None | can help you format text in a few different ways. I can: Change the font and size of the text. Make the text bold, italic, or underlined. Add bullet points or numbered lists to the text. Indent the text. Align the text to the left, right, or center. To help me format your text, please provide me with the following information: The text you want to format. The specific formatting you want to apply. For example, you could say: "Please format the following text: This is an example of some text. I want to make the text bold and italic." Once you provide me with this information, I will be able to format your text for you. |
|2| Your task: Given: [The CHIEF WHIP OF THE MAJORITY PARTY: Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.] with the goal [<note type="speaker">The CHIEF WHIP OF THE MAJORITY PARTY:</note> <who="#ChiefWhipOfMajorityParty"> <seg xml:lang="en">Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.</seg>] format the following text  into the same xml format. Format all of the text.| 4000 token chunk of 25.02 transcript | View {Download}`second XML file<./chapter1_ZA-content/gemini-results/31.12/attempt_6-1.xml>`|
|3|format all of the text | None | I'm not programmed to assist with that. |

The experiment was insofar successful, as that when asking for help, Gemini attempted to format the input, though in a first attempt, it did format the text according to the example (attempt 10), when rerunning the prompt (attempt 11) it neglected all speaker turns and created one large segment with the entire input placed within. 

|| **Prompts**                                                                                    |**Additional Files/Information** | **Results**                       |
|----|--------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|
|1| I need help with some xml formatting. I have this example text: "The CHIEF WHIP OF THE MAJORITY PARTY: Thank you very much, House Chair. As indicated on the Order Paper we shall proceed." And I need it formatted into this shape: "<note type="speaker">The CHIEF WHIP OF THE MAJORITY PARTY:</note> <who="#ChiefWhipOfMajorityParty"> <seg xml:lang="en">Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.</seg>". Help me format the following text: | 4000 token chunk of 25.02 transcript | View {Download}`output attempt 11 31.12 <./chapter1_ZA-content/gemini-results/31.12/attempt_11-1.xml>` |
|2| Try again, pay attention to the speakers| None | View {Download}`second XML file<./chapter1_ZA-content/gemini-results/31.12/attempt_11-2.xml>`|
|3|Assign a separate speaker tag to each speaker please | None | View {Download}`third XML file<./chapter1_ZA-content/gemini-results/31.12/attempt_11-3.xml>` |
|4| Find all speakers in the text | None | View {Download}`fourth XML file<./chapter1_ZA-content/gemini-results/31.12/attempt_11-4.xml>`  |

ACTUALLY I NEED TO CHECK WHATEVER WAS GOING ON IN ATTEMPT 10

### Custom GPT
When configuring a custom GPT, the user can set several different paramaters. For this paper, the paramaters "Additional Instructions", "Knowledge" and "New Capabilities" were of particular interest.
In the "Additional Instructions" section, the user may provide detailed instructions or guidelines on how the GPT should behave, its functionalities, and any particular behaviors to avoid. {cite:p}`openai_creating`

The "Knowledge" is provided by the user in the form of uploaded files, which provides addtional context for the GPT to reference. The "New Capabilities" consist of Web Browsing, DALL·E Image Generation, Canvas and Advanced Data Analysis, which allow the GPT to perform additional functionality. The options "Web Borwsing", "DALL·E Image Generation" and "Canvas" were disabled. {cite:p}`openai_creating, openai_knowledge`

In order to have the custom GPT perform the XML-formatting task, the appraoch of interactive or multi-shot reasoning was chosen, as it has been shown that this improves GPT's performance compared to a single-shot reasoning approach {cite:p}`truhn_2023`.

#### Try 1

Additional Instructions: You are a txt to xml converter. You are given sample corresponding txt and xml files, with the xml file being the converted version of the txt file. These files contain the same information and illustrate the xml schema that you will adhere to when converting other txt files. 

Knowledge: Snippet from a raw txt file, the corresponding XML file following the ParlaMint schema

|| **Prompts**                                                                                    |**Additional Files/Information** | **Results**                       |
|----|--------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|
|1| Please convert the txt file I have given you into an xml file following the same schema |Snippets from txt and XML file, uploaded part 1 of raw txt data | View {Download}`first XML file<./chapter1_ZA-content/gpt-results/Try1/converted_hansard_25_02_2020.xml>` |
|2| Please note that your final result should include the entire content of the txt file. You have omitted a large part of the original data I gave you.| None | View {Download}`second XML file<./chapter1_ZA-content/gpt-results/Try1/complete_converted_hansard_25_02_2020.xml>`|
|3|This is what the XML schema is supposed to look like. Please note that a new "u" element is used every time the speaker changes. The speeches are contained within the "seg" element. The "note" element is used for transcriber's notes.| Correct snippet from XML file | View {Download}`third XML file<./chapter1_ZA-content/gpt-results/Try1/updated_converted_hansard_25_02_2020.xml>` |
|4| It is looking much better. Please contain entire speeches in one <seg> element instead of starting a new one for each line break.| None | View {Download}`fourth XML file<./chapter1_ZA-content/gpt-results/Try1/final_updated_converted_hansard_25_02_2020.xml>`  |

#### Try 2

Additional Instructions: You are a txt to xml converter. You are given a txt file which you will convert into a downloadable xml file following the RelaxNG file which you were given.

Knowledge: the RNG file used to validate the ParlaMint schema

|| **Prompts**                                                                                    |**Additional Files/Information** | **Results**                       |
|----|--------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|
|1| Please convert the txt file I have given you into an xml file following the same schema |Snippets from txt and XML file, uploaded part 1 of raw txt data | View {Download}`first XML file<./chapter1_ZA-content/gpt-results/Try2/converted_hansard.xml>` |
|2| Please note that your final result should include the entire content of the txt file. You have omitted a large part of the original data I gave you.| None | View {Download}`second XML file<./chapter1_ZA-content/gpt-results/Try2/converted_hansard_full.xml>`| 
|3|Please note that this is what the XML schema is supposed to look like. Please omit the page headers and please include entire utterances within the <seg> element. There is no need to split them up by line breaks.| Correct snippet XML file | View {Download}`third XML file<./chapter1_ZA-content/gpt-results/Try2/converted_hansard_updated.xml>` |
|4| You have now stored the entirety of the speeches in the txt file in one <u> element. Please take care to start a new "u" element every time the speaker changes and to store their speeches in the "seg" element.| None | View {Download}`fourth XML file<./chapter1_ZA-content/gpt-results/Try2/converted_hansard_final.xml>`  |

#### Try 3

Additional Instructions: You are a txt to xml converter. You are given sample corresponding txt and xml files, with the xml file being the converted version of the txt file. These files contain the same information and illustrate the xml schema that you will adhere to when converting other txt files. Additionally, you were also given a RelaxNG file which can be used to validate the xml files and illustrates the xml schema you will be following.

Knowledge: Snippet from a raw txt file, the corresponding XML file following the ParlaMint schema, the RNG file used to validate the ParlaMint schema

|| **Prompts**                                                                                    |**Additional Files/Information** | **Results**                       |
|----|--------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|
|1| Please convert the txt file I have given you into an xml file following the same schema |Snippets from txt and XML file, uploaded part 1 of raw txt data | View {Download}`first XML file<./chapter1_ZA-content/gpt-results/Try3/converted_hansard.xml>` |
|2| Please note that your final result should include the entire content of the .txt file. You have omitted a large part of the raw data. | None | View {Download}`second XML file<./chapter1_ZA-content/gpt-results/Try3/converted_hansard_full.xml>`      |
|3|This is an extract of the XML you provided. It is correct. Please keep the same schema when adapting the rest of the .txt file into the XML schema. Note also that there is no need to repeat the page header every time - please omit it. | Correct snippet from previously output XML file | View {Download}`third XML file<./chapter1_ZA-content/gpt-results/Try3/converted_hansard_adapted.xml>` |
|4| You have now omitted the entirety of the textual data. Please make sure to include all speeches in your XML. | None | View {Download}`fourth XML file<./chapter1_ZA-content/gpt-results/Try3/converted_hansard_complete.xml>`  |


## Discussion 
STRUCTURE IT AS AN OVERALL DISCUSSION? DO YOU WANNA COMPARE THE SCORES TO EACH OTHER HERE? 
### Llama Herd 

### Gemini 1.5 Flash 

### GPT-4o 

### Limitations
Problems: specific world knowledge that is needed to fill in the metadata, size of context window, computational power/resources. 
Prompt Engineering on local LLMs (Why it doesn't work for this specific case, why it didn't work for us.) -> the limited context window paired with the large input, the inability to work with unaltered text, computational issues/hardware issues. Batching didn't work.

Note for limitations: we do not populate the metadata files, because very specific real world knowledge would be needed, and it is easier and computationally more efficient to populate this metadate with a rule-based approach once the base xml of the speeches themselves are parsed/created by the LLM. 
Many members of the SA parliament do not have their birth date published online. 


## Conclusion 

As pretrained LLMs show difficulties in formatting a large amount of documents into a highly specific format such as the ParlaMint, further research is necessary on whether tools such as Evaporate or SEED, whene again available, can be adapted better to the task. A different approach could lie in accessing stronger hardware through cloud computing platforms such as google colab to run models such as Jellyfish which are specialized on the task of formatting data {cite:p}`zhang_jellyfish_2024`.

## Bibliography
```{bibliography}
:style: plain
```

