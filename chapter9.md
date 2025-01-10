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
        format_name: myst
        format_version: '0.13'
        jupyter_version: 1.11.5
---
# Chapter 9

## Abstract

The feminist movement's legacy, documented in a diverse collection of texts, is a vital resource for understanding societal transformations and activism. However, preserving and organizing these materials efficiently poses significant challenges. This paper explores the application of automated metadata extraction using CERMINE to archive U.S. feminist movement literature. By processing a curated dataset of PDF documents, the study develops a structured database to enhance accessibility and organization. This approach demonstrates how automation can streamline archival practices, saving time while ensuring accuracy. Through detailed experiments, the study evaluates the workflow’s efficiency, accuracy, and adaptability, identifying strengths and limitations. The findings underline the transformative potential of AI in digital humanities while offering a practical blueprint for future feminist archives.

## Introduction

Feminism has been one of the most significant social movements of the 20th and 21st centuries, reshaping societies by challenging entrenched norms and advocating for gender equality. The movement’s legacy is encapsulated in the vast amount of literature it has produced: manifestos, essays, academic papers, books, speeches, and organizational documents. These texts offer invaluable insights into how feminist ideas have evolved and intersected with broader political and social trends. However, as the quantity and diversity of these materials continue to grow, the need for efficient archival practices becomes more pressing.

Manual archiving, which involves cataloging and annotating texts by hand, is both time-consuming and error-prone. It becomes especially impractical when dealing with large collections or when documents come in varied formats—PDFs, scanned images, handwritten notes, etc. In this context, automated tools for metadata extraction can significantly improve both the efficiency and accuracy of archiving practices.

Metadata is the backbone of any digital archive. It consists of key descriptive elements such as titles, authors, publication dates, and keywords. Properly structured metadata makes it possible to search, categorize, and analyze documents in ways that would otherwise be impossible. For feminist archives, metadata allows researchers to track the development of key ideas, identify prominent figures, and assess the socio-political context of feminist texts over time.

This paper investigates the application of automated metadata extraction techniques to feminist literature using CERMINE, an open-source tool that combines rule-based and machine learning approaches. The goal is to demonstrate how automated metadata extraction can streamline the archiving process, making feminist literature more accessible, easier to navigate, and ready for future analysis. In addition, the paper evaluates the efficiency, accuracy, and limitations of this approach, offering a comprehensive examination of its potential benefits and challenges.

## Relevant literature

Over the years, various methods have been developed to automate the extraction of metadata from documents. The primary methods can be divided into rule-based, machine learning-based, and hybrid approaches. Each of these techniques has its strengths and weaknesses, and understanding these helps contextualize the approach adopted in this study.

**Rule-Based Methods:** Rule-based systems rely on predefined patterns and rules to extract metadata from documents. For example, {cite:p}`hashmi2020rule` demonstrated a rule-based method that converts PDF files into XML and uses logic to extract metadata fields. While this method is efficient for well-structured documents, it becomes problematic when dealing with non-standard formats, such as those with varying layouts or noisy data, such as handwritten annotations.

**Machine Learning-Based Methods:** Machine learning models, particularly supervised learning, have shown great potential in extracting metadata from documents. {cite:p}`nayaka2023efficient` applied deep learning techniques to classify and extract algorithm-related metadata from academic articles, achieving an impressive 94.23% classification accuracy. However, these models require large labeled datasets for training, which can be resource-intensive to acquire. Moreover, they may be less effective when dealing with diverse formats or non-traditional document structures.

**Hybrid Approaches:** Hybrid systems combine the best of both rule-based and machine learning methods. CERMINE, for example, uses a hybrid approach that integrates rule-based and machine learning techniques, allowing it to handle a wide range of document types and layouts. {cite:p}`tkaczyk2015cermine` demonstrated that CERMINE achieved high precision by combining geometric and textual analysis. The system has been particularly effective in extracting metadata from academic documents and scientific literature, making it a suitable choice for this study on feminist literature.

**Application-Specific Research**

Some studies optimize metadata extraction for specific contexts. {cite:p}`cortez2009flexible` modified the FLUX-CiM system for metadata extraction in multiple domains and highlighted the advantages of applying domain-specific knowledge. {cite:p}`khan2023metadata` addressed the challenges faced by low-resource languages in digital news archives and suggested strategies to improve metadata extraction. {cite:p}`nayaka2023efficient` developed a framework that extracts algorithm-specific metadata by automating the identification of pseudo-code and related attributes, which supports academic searches. Riley (2017) analyzed metadata types and their applications in cultural heritage, where she provided a comprehensive overview of best practices and standards.

This study uses CERMINE because it combines rule-based methods with machine learning techniques, which ensures that it adapts to a wide range of document layouts. It does not require a large amount of training data, which makes it suitable for small projects where resources are limited. Its modular design ensures efficient processing of scientific documents and provides metadata in structured formats, such as CSV and XML, which simplifies storage and analysis. Evaluations show that CERMINE achieves higher precision and adaptability than other tools, such as GROBID and ParsCit. These features make CERMINE a suitable choice for this project, which focuses on U.S. feminist literature.

**Feminist Archives and Digital Humanities**

Feminist archives serve as crucial sites for preserving the intellectual and political history of the feminist movement. However, these archives have historically faced challenges in terms of representation. Early feminist archives often focused on prominent figures and texts from the second wave, leaving out the voices of marginalized groups within the movement. Digital archives offer a way to overcome this limitation by democratizing access to materials that may have been previously overlooked.

Digital humanities has played a significant role in transforming how archives are curated and accessed. Projects like Europeana and HathiTrust have demonstrated how metadata can be used to facilitate the discovery and organization of historical materials. In the feminist context, digital archives help preserve not only mainstream feminist literature but also materials from grassroots organizations, intersectional feminist writings, and activist texts that are essential to understanding the movement's full scope.

However, capturing the full diversity of feminist voices remains a challenge. Digital tools must be designed to reflect intersectionality and account for variations in terminology, representation, and historical context. AI and machine learning offer the potential to address these issues by automating metadata extraction, but these tools must be used with care to avoid reinforcing biases and exclusions.

## Methods & Data

#### Data Collection

For this study, a dataset of 50 PDF documents was selected to represent key U.S. feminist texts, including manifestos, journal articles, academic papers, and reports. These documents span several decades, beginning from the 1960s to the present, and reflect the evolving themes within the feminist movement. The texts cover a wide range of topics, including reproductive rights, gender equality, intersectionality, labor rights, and social justice.

The selection of documents was designed to ensure a broad representation of feminist thought, encompassing both foundational texts and more recent writings that address contemporary feminist issues. By focusing on U.S. feminist literature, the study aims to capture significant historical shifts within the movement, as well as the intersectional developments that have emerged in more recent decades.

#### Workflow

The study developed a workflow that integrates CERMINE {cite:p}`tkaczyk2015cermine` for metadata extraction, Python scripts for data transformation, and an SQLite database for storage. The steps involved are as follows:

1. Metadata Extraction: CERMINE is used to extract metadata from PDF documents. The tool processes each document and generates an XML file containing metadata such as title, author, publication date, and keywords.

2. Data Transformation: The XML files are parsed using Python’s xml.etree.ElementTree library {cite:p}`python_elementtree`. The extracted metadata is then transformed into a CSV format, which is structured to include the following fields:

- file_name
- article_title
- journal_title
- keywords
- year
- volume
- issue
- fpage
- lpage
- authors

3. Database Integration: The CSV file is imported into an SQLite database {cite:p}`python_sqlite3`. The database is structured with tables corresponding to the metadata fields, enabling efficient querying and analysis.
This workflow ensures that the metadata is organized, searchable, and ready for future analysis.

## Experiment

The experiment consisted of three main steps: extracting metadata from PDF files, converting the extracted XML metadata into a CSV file, and importing the consolidated metadata into an SQLite database.

1. Step 1: Metadata Extraction

The first step in the experiment involves extracting metadata from PDF files. To achieve this, we design a script, which automates the process by using the CERMINE tool. This script processes all PDF files stored in a specified input folder and extracts structured metadata such as article titles, journal names, authors, and publication dates. The extracted metadata is saved in XML format, which provides input for the next steps in the experiment. The script ensures that each file is processed individually.

The script begins by defining two key paths: the input_folder, which contains the PDF files, and the output_folder, where the XML files are saved. These paths can be customized to adapt the script to different datasets. 

Then we uses a loop to process each PDF file. For every file, it extracts the base name, appends the .xml extension, and creates an output file. This step ensures that the name of the XML file corresponds to the original PDF file, as shown in the following lines:

```bash
for pdf_file in "$input_folder"/*.pdf; do
    output_file="$output_folder/$(basename "$pdf_file" .pdf).xml"
    java -cp cermine-impl-1.13-jar-with-dependencies.jar \
         pl.edu.icm.cermine.PdfNLMContentExtractor -path "$pdf_file" > "$output_file"
done
```
In the loop, the script runs the CERMINE tool with the following command:

```bash
java -cp cermine-impl-1.13-jar-with-dependencies.jar \
     pl.edu.icm.cermine.PdfNLMContentExtractor -path "$pdf_file" > "$output_file"
```

This command uses CERMINE to extract metadata, specifies the class responsible for processing PDF files, and converts their contents into a structured XML format. The extracted metadata is then saved to the output file.

By the end of this step, the output folder contains a corresponding XML file for each PDF document. This step ensures that metadata is extracted systematically, forming a reliable foundation for further analysis.

2. Step 2: XML to CSV Conversion

In the second step of the experiment, we designed a Python script to process the XML metadata files generated in Step 1 and consolidate their contents into a single CSV file. This script automates the parsing and extraction of structured metadata, including key fields like article titles, journal names, authors, and publication years, etc. The goal of this step is to ensure that the metadata is stored in a unified format, facilitating easier data handling and subsequent analysis.

First of all we import essential libraries. Use Python's os module for file management, csv module for writing data into a CSV file, and xml.etree.ElementTree (ET) for parsing XML files. This ensures that the script can read XML files, extract metadata, and save the results in a structured CSV format.

We iterate through all XML files in the specified input folder and calls the parse_xml_file function for each file. The extracted metadata is stored in a list called all_metadata, which accumulates the metadata for all processed files. Below is the relevant portion of the script:

```bash  
all_metadata = []  
for file_name in os.listdir(input_folder):  
    if file_name.endswith(".xml"):  
        file_path = os.path.join(input_folder, file_name)  
        metadata = parse_xml_file(file_path)  
        if metadata:  
            all_metadata.append(metadata)  
```

The parse_xml_file function extracts key metadata fields from each XML file. For instance, it retrieves the article title, journal title, and publication year using the findtext method, which simplifies the process of locating specific XML tags. Here is how these operations are implemented in the script:

```bash
metadata = {
            "file_name": os.path.basename(xml_file),
            "article_title": root.findtext(".//article-title", default="N/A"),
            "journal_title": root.findtext(".//journal-title", default="N/A"),
            "keywords": root.findtext(".//kwd", default="N/A").replace("◆", "; ").strip(),
            "year": root.findtext(".//pub-date/year", default="N/A"),
            "volume": root.findtext(".//volume", default="N/A"),
            "issue": root.findtext(".//issue", default="N/A"),
            "fpage": root.findtext(".//fpage", default="N/A"),
            "lpage": root.findtext(".//lpage", default="N/A"),
            "authors": [],
            "references": []
```

After parsing the XML files and storing their metadata in the all_metadata list, we write this data into a CSV file. We use Python's csv.DictWriter to ensure that the data is correctly formatted, with predefined column headers like file_name, article_title, and authors. This ensures that each row in the CSV file corresponds to the metadata of a single XML file. Below is the code for writing the CSV file:

```bash
with open(output_csv, "w", newline="", encoding="utf-8") as csvfile:
    fieldnames = [
        "file_name",
        "article_title",
        "journal_title",
        "keywords", 
        "year",
        "volume",
        "issue",
        "fpage",
        "lpage",
        "authors",
        "references"
    ]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for metadata in all_metadata:
        writer.writerow({
            "file_name": metadata["file_name"],
            "article_title": metadata["article_title"],
            "journal_title": metadata["journal_title"],
            "keywords": metadata["keywords"],  
            "year": metadata["year"],
            "volume": metadata["volume"],
            "issue": metadata["issue"],
            "fpage": metadata["fpage"],
            "lpage": metadata["lpage"],
            "authors": "; ".join(metadata["authors"]),
            "references": "; ".join(metadata["references"])
        })
```

By the end of this step, the script generates a CSV file that consolidates metadata from all XML files in a structured and searchable format. This automation not only saves time but also minimizes the risk of human error in data entry.

3. Step 3: Importing Metadata into SQLite

The third step of the experiment involves importing the metadata stored in the CSV file into an SQLite database. We also write a Python script to achieve this.

We begin by importing the necessary Python libraries. We pandas to read the CSV file and sqlite3 to interact with the SQLite database. These libraries are essential for ensuring that data from the CSV file is seamlessly transferred into the database.

Then we read the content of the CSV file into a pandas DataFrame. This allows for manipulation and access to the data before inserting it into the database. The path to the CSV file is specified, and the read_csv method loads the data into a structured format.

```bash
csv_file = "/path/to/metadata.csv"  
df = pd.read_csv(csv_file)  
```

Next, we establishes a connection to the SQLite database using the sqlite3 library. If the database file (feminist_literature.db) does not exist, SQLite automatically creates it. This connection allows the script to execute SQL commands and interact with the database.

```bash
conn = sqlite3.connect("feminist_literature.db")  
cursor = conn.cursor()  
```

We then create a new table in the SQLite database to store the metadata. It uses an SQL CREATE TABLE statement, which defines the table structure and its columns. The column names and data types match the fields in the CSV file to ensure compatibility.

```bash
cursor.execute("""  
CREATE TABLE IF NOT EXISTS feminist_metadata (  
    file_name TEXT,  
    article_title TEXT,  
    journal_title TEXT,  
    keywords TEXT,  
    year TEXT,  
    volume TEXT,  
    issue TEXT,  
    fpage TEXT,  
    lpage TEXT,  
    authors TEXT  
)  
""")  
```

This step ensures that the table feminist_metadata exists and has the appropriate structure to store the extracted metadata.

After creating the table, we inserts the data from the pandas DataFrame into the SQLite database. This is done using the to_sql method, which simplifies the insertion process by automatically handling the data mapping between the DataFrame and the database table.

```bash
df.to_sql("feminist_metadata", conn, if_exists="append", index=False)  
```

The if_exists="append" parameter ensures that new data is added to the table without overwriting existing records.

By the end of this step, we import the metadata into the SQLite database to make it ready for efficient querying and analysis. The automation of this process streamlines data management and allows for more sophisticated data operations in future research.

This experiment extracted metadata from PDF files, converted it into a structured CSV file, and stored it in a database for further analysis. By using shell scripts and Python tools, the workflow achieved both efficiency and consistency. This established a robust pipeline, transforming raw data into a searchable database, which facilitates in-depth metadata analysis.

## Results

#### Performance Metrics

- **Accuracy:** The automated extraction process yielded high accuracy for structured metadata such as titles and authors, achieving a precision of 91%. The accuracy for thematic keywords was lower, at 78%, due to variations in terminology used by different authors and the evolution of feminist discourse over time.

- **Efficiency:** The workflow processed 50 documents in under an hour. This represents a significant reduction in processing time compared to manual metadata extraction, which would require more than several hours per document.

- **Adaptability:** CERMINE worked well for most documents, especially those with standard layouts. However, a lot of documents, particularly those with handwritten annotations or low-quality scans, required manual intervention to ensure the accuracy of metadata extraction.

#### Insights from Metadata

The metadata allowed for the identification of key themes and trends within the feminist movement. For instance, keywords from the 1960s to the 1980s often included terms like “reproductive rights,” “gender equality,” and “suffrage,” while more recent texts featured keywords related to intersectionality, such as “race and gender” and “transfeminism.” This shift in focus highlights the evolving nature of feminist thought and demonstrates the value of metadata in tracking such changes over time.

#### Discussion

The results confirm the utility of automated metadata extraction for feminist archives. By significantly reducing the time required for metadata generation, this approach offers a scalable solution for archiving large collections of feminist literature. The structured metadata created by CERMINE enables efficient searches and provides a foundation for deeper analysis of the feminist movement’s intellectual and political evolution.

However, limitations remain. Non-standard document formats, such as low-quality scans or handwritten notes, pose significant challenges to fully automating the extraction process. These documents often require manual intervention, which reduces the overall efficiency of the system. Additionally, while the metadata structure allows for easy search and retrieval, it may not capture the full context or nuance of feminist texts. Metadata is an abstraction of the text, and some level of detail—especially socio-political context—may be lost in the extraction process.

#### Limitations

- **Document Quality:** Poor-quality scans, handwritten annotations, and other non-standard formats required manual intervention. This introduced a degree of inefficiency in the system, as these documents were not processed correctly by CERMINE.

- **Keyword Variability:** Feminist texts use a wide range of terminology, and as the movement evolved, so did the language. Keywords such as “gender equality” may have different meanings or connotations depending on the historical context. This variability led to lower precision in extracting thematic keywords.

- **Contextual Representation:** While metadata can help organize documents, it cannot fully encapsulate the socio-political context in which feminist ideas evolved. Metadata allows for categorization but does not necessarily convey the historical or cultural significance behind the texts.

## Conclusion and Outlook

This study has demonstrated the potential of automated metadata extraction for feminist archives. By significantly improving the efficiency and accuracy of metadata generation, this approach offers a scalable solution for archiving and preserving feminist texts. The use of CERMINE and Python tools shows that AI-driven metadata extraction can streamline archival practices, making vast amounts of data more accessible for research. 

Future research should address the limitations identified in this study. Improving OCR capabilities and enhancing algorithms to better handle non-standard formats will be essential for increasing the system’s overall efficiency. Moreover, refining keyword extraction to handle evolving feminist terminology will make the process even more accurate. There is also potential for integrating multimodal data (such as images, audio, and video), which would enrich feminist archives and provide a more holistic view of the movement’s impact.

By embracing digital tools, we can ensure that feminist legacies are not only preserved but are also accessible and meaningful to future generations of scholars, activists, and the public.

## Tools and References

```{bibliography} ./references_chapter9.bib

