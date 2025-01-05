import os
from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM

template = """Question: {question}

Answer: Be a helpful assistant."""

prompt = ChatPromptTemplate.from_template(template)
model = OllamaLLM(model="llama3.1:8B")

example_xml = f'<note type="speaker">The CHIEF WHIP OF THE MAJORITY PARTY:</note> <u xml:id="25-02-2020_u16" who="#ChiefWhipOfMajorityParty"> <seg xml:lang="en">Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.</seg>'
example_txt = f'The CHIEF WHIP OF THE MAJORITY PARTY: Thank you very much, House Chair. As indicated on the Order Paper we shall proceed.'

folder_path = r'test_objects'  # Folder path

def chunk_text(text, chunk_size=1000):
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
                        question = f'Given: {example_txt} with the goal: {example_xml}, format this: {chunk} into the same xml format. Format all of the text.'
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
