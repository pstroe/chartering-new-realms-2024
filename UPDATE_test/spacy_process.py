import os
import json
import spacy
import unicodedata
import re

# Load Greek spaCy model
nlp = spacy.load("el_core_news_lg")

# Expanded stop words list without intonation marks, but still in Greek script
raw_stop_words = [
    "εχουν", "ηταν", "ημουν", "ειμαστε", "ειστε", "ειχαν", "εχουν", "ειχα", "ειχες", "ειχε",
    "εχω", "εχουμε", "εχετε", "θα", "να", "μηπως", "μπορει", "μπορω", "μπορω", "γινω", "γινω",
    "γινω", "μπορειτε", "ισως", "δεν", "και", "η", "αλλα", "ομως", "ουτε", "ενω", "επειδη",
    "διοτι", "καθως", "αντι", "σε", "στη", "στις", "στο", "στους", "με", "για", "απο", "προς",
    "ως", "κατα", "περι", "μεχρι", "αυτο", "αυτα","αυτων", "μαζι", "κελιο", "αυτης", "αυτου", "εκεινα", "εκεινος",
    "εκεινη", "εκεινες", "εγω", "εσυ", "αυτος", "αυτη", "αυτοι", "εμας", "εσεις", "τους",
    "εμενα", "εσενα", "ο", "η", "το", "οι", "τα", "της", "του", "τον", "την", "τους", "τις",
    "ποσος", "ποση", "ποσο", "πολυ", "πολλοι", "μερικοι", "ολοι", "κανεις", "καποιος", "ετσι",
    "οσο", "λοιπον", "μαλλον", "παντα", "ποτε", "συνηθως", "τοτε", "τωρα", "αμεσως", "αν",
    "αμα", "πριν", "μετα", "μεχρι", "οταν", "καθως", "οπου", "οπως", "λογω", "σχετικα", "μεσω",
    "πλην", "ανευ", "υπο", "ανω", "κατω", "διπλα", "μπροστα", "πισω", "γιατι", "πως", "οχι",
    "ναι", "ετσι", "οπως", "εχει", "εχουμε", "ειστε", "ειναι", "τον", "την", "και", "κι",
    "με", "ομως", "να", "τις", "ως", "του", "τον", "εχεις", "εχει", "απο", "πολυ", "αυτο",
    "εμενα", "εσενα", "εκεινος", "εκεινη", "γιατι", "τωρα", "τοτε", "ποσοι", "καποιοι",
    "μου", "σου", "του", "της", "μας", "σας", "τους", "σε ο", "σε η", "στον", "στην",
    "θερμας", "πιο", "ολα", "πανω", "κατω", "ποιος", "αυτοι", "εκεινοι", "εδω", "εκει",
    "τοτε", "ποτε", "ελαχιστα", "πλεον", "χωρις", "ακομα", "επισης", "αυτοματα", "ειδικα",
    "ακριβως", "αλλωστε", "οτι", "παλι", "ενας","που", "οποιος", "επιδημι", "οποιος", "εγινε",
    "μαλιστα", "ειμαι", "συμφωνα", "ανα", "οτι", "παρα", "κανω", "δειτε", "βρισκω", "μεταξυ",
    "ηδη", "ειτε", "δωσει", "αλλος", "οσος", "δινω", "παραμενω", "ονο", "λειπω","κυριως", "βαλουν",
    "ολος", "ιδια", "ολο", "ερχω", "λεει", "απλη", "απλα","λεει"
]


def remove_accents(input_str):
    """
    Remove accents from Greek characters while keeping Greek script
    """
    return ''.join(
        char for char in unicodedata.normalize('NFKD', input_str)
        if unicodedata.category(char) != 'Mn'
    )


# Create stop words set
stop_words = set(remove_accents(word) for word in raw_stop_words)


def recompose_tokens(tokens):
    """
    Attempt to recompose split tokens into more meaningful words
    """
    # List to store final tokens
    final_tokens = []

    # Iterate through tokens
    i = 0
    while i < len(tokens):
        # Try to combine current and next token if they seem related
        if i + 1 < len(tokens):
            # Combine tokens that might be parts of the same word
            combined = tokens[i] + tokens[i + 1]

            # Check if combined token is longer and makes more sense
            if len(combined) > len(tokens[i]) and len(combined) > len(tokens[i + 1]):
                final_tokens.append(combined)
                i += 2  # Skip next token
                continue

        # If no combination, add current token
        final_tokens.append(tokens[i])
        i += 1

    return final_tokens

def preprocess_text(text_list):
    """
    Preprocess the text by:
    1. Joining the list of tokens
    2. Lemmatizing with spaCy
    3. Removing stop words
    4. Removing punctuation
    """
    # Join the tokens if they are in a list
    text = ' '.join(text_list) if isinstance(text_list, list) else text_list

    # Process with spaCy
    doc = nlp(text)

    # Lemmatize, remove stop words and punctuation
    processed_tokens = [
        remove_accents(token.lemma_)
        for token in doc
        if (remove_accents(token.lemma_) not in stop_words and
            token.pos_ not in ['PUNCT', 'SYM', 'NUM'] and
            len(token.lemma_) > 2)
    ]

    return processed_tokens


def process_json_files(input_dir, output_dir):
    """
    Process all JSON files in the input directory
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Process each JSON file
    for filename in os.listdir(input_dir):
        if filename.endswith('_processed.json'):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, f'cleaned_{filename}')

            # Read input JSON
            with open(input_path, 'r', encoding='utf-8') as f:
                data = json.load(f)

            # Process each document
            cleaned_data = {}
            for doc_name, doc_tokens in data.items():
                cleaned_tokens = preprocess_text(doc_tokens)
                if cleaned_tokens:  # Only add non-empty documents
                    cleaned_data[doc_name] = cleaned_tokens

            # Write processed data
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(cleaned_data, f, ensure_ascii=False, indent=2)

            print(f"Processed {filename}")


# Directories
input_dir = '/Users/maritina/Desktop/Uni/AIinDH/chartering-new-realms-2024/UPDATE_test/SemiProcessed_DATA'
output_dir = '/Users/maritina/Desktop/Uni/AIinDH/chartering-new-realms-2024/UPDATE_test/CleanedDataSpacy'

# Run the processing
process_json_files(input_dir, output_dir)

print("Processing complete!")