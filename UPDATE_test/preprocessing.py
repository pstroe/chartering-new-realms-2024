import os
import re
import regex
import json
import hashlib
import unicodedata
import chardet

import nltk
import spacy
import stanza
import gensim
from gensim.utils import simple_preprocess
from gensim.models import Phrases
from gensim.corpora import Dictionary
from gensim.models import TfidfModel
from collections import defaultdict

# Advanced Stop Words and Preserved Terms
PRESERVED_COVID_TERMS = {
    "covid", "κορωνοϊός", "πανδημία",
    "μάσκα", "εμβόλιο", "μετάδοση",
    "lockdown", "εμβολιασμός", "κρούσμα",
    "καραντίνα", "αποστάσεις", "υγειονομικός"
}

greek_stop_words = set([
    # Verb Forms
    "είναι", "ήταν", "ήμουν", "είμαστε", "είστε",
    "έχω", "έχουμε", "έχετε", "δεν", "θα", "να",

    # Conjunctions
    "και", "ή", "αλλά", "όμως", "ούτε",

    # Prepositions
    "σε", "στη", "στις", "στο", "με", "για", "από", "προς",

    # Articles
    "ο", "η", "το", "οι", "τα", "της", "του", "τον", "την", "τους", "τις",

    # Additional Verb Forms
    "είχε", "είχα", "είχες", "είχαμε", "είχατε",
    "μπορεί", "μπορούν", "μπορείτε", "πρέπει",

    # Pronouns and Demonstratives
    "αυτό", "αυτά", "αυτής", "αυτού", "εκείνα",
    "εκείνος", "εκείνη", "εκείνες", "κάθε",
    "εγώ", "εσύ", "αυτός", "αυτή", "αυτοί",
    "εμάς", "εσείς", "τους", "εμένα", "εσένα",
    "κάποιος", "κάτι", "κάποιο", "κάποια",

    # More comprehensive list continues...
])

# Remove preserved COVID terms from stopwords
COMPREHENSIVE_GREEK_STOPWORDS = greek_stop_words - PRESERVED_COVID_TERMS

# Initialize NLP tools
nlp = spacy.load("el_core_news_sm")
stanza.download('el')
stanza_nlp = stanza.Pipeline('el')


def advanced_greek_preprocessing(text):
    """Comprehensive text normalization for Greek text"""
    # Normalize Unicode characters
    text = unicodedata.normalize('NFKD', text)

    # Convert to lowercase
    text = text.lower()

    # Remove special characters and keep Greek characters
    text = regex.sub(r'[^\p{Greek}\s]', '', text, flags=regex.UNICODE)

    # Remove extra whitespaces
    text = regex.sub(r'\s+', ' ', text).strip()

    return text


def comprehensive_token_cleaning(tokens):
    """Advanced token cleaning with Greek-specific rules"""
    cleaned_tokens = []
    for token in tokens:
        # Remove very short tokens
        if len(token) < 2:
            continue

        # Remove tokens with too many numbers
        if sum(c.isdigit() for c in token) > len(token) * 0.3:
            continue

        # Remove tokens that are not primarily Greek
        greek_char_ratio = sum(
            unicodedata.category(char).startswith('L') and
            '\u0386' <= char <= '\u03CE'
            for char in token
        ) / len(token)

        if greek_char_ratio < 0.7:
            continue

        cleaned_tokens.append(token)

    return cleaned_tokens


def advanced_lemmatization(tokens):
    """Enhanced lemmatization using Stanza"""
    lemmatized_tokens = []
    for token in tokens:
        stanza_doc = stanza_nlp(token)

        for sent in stanza_doc.sentences:
            for word in sent.words:
                if (word.lemma and
                        len(word.lemma) > 2 and
                        word.lemma.lower() not in COMPREHENSIVE_GREEK_STOPWORDS):
                    lemmatized_tokens.append(word.lemma.lower())

    return lemmatized_tokens


def remove_rare_words(texts, min_frequency=2):
    """Remove tokens that appear very infrequently"""
    frequency = defaultdict(int)
    for text in texts:
        for token in text:
            frequency[token] += 1

    return [
        [token for token in text if frequency[token] > min_frequency]
        for text in texts
    ]


def detect_encoding(file_path):
    """Detect file encoding"""
    with open(file_path, 'rb') as f:
        result = chardet.detect(f.read())
    return result['encoding']


def load_text_files(directory):
    """Load text files with proper encoding detection"""
    texts = []
    for filename in os.listdir(directory):
        if filename.endswith('.txt'):
            filepath = os.path.join(directory, filename)
            try:
                encoding = detect_encoding(filepath)
                with open(filepath, 'r', encoding=encoding) as f:
                    texts.append(f.read())
            except Exception as e:
                print(f"Error reading {filename}: {e}")
    return texts


def preprocess_for_topic_modeling(texts):
    """Comprehensive preprocessing pipeline"""
    processed_texts = []

    for text in texts:
        # 1. Initial cleaning
        cleaned_text = advanced_greek_preprocessing(text)

        # 2. Tokenization
        tokens = simple_preprocess(cleaned_text, deacc=False)

        # 3. Token cleaning
        cleaned_tokens = comprehensive_token_cleaning(tokens)

        # 4. Lemmatization
        lemmatized_tokens = advanced_lemmatization(cleaned_tokens)

        # 5. Remove stopwords
        final_tokens = [
            token for token in lemmatized_tokens
            if token not in COMPREHENSIVE_GREEK_STOPWORDS
               or token in PRESERVED_COVID_TERMS
        ]

        processed_texts.append(final_tokens)

    # 6. Remove rare words
    processed_texts = remove_rare_words(processed_texts, min_frequency=2)

    return processed_texts


def diagnose_preprocessing(original_texts, processed_texts):
    """Diagnostic report for preprocessing"""
    print("Preprocessing Diagnostic Report:")
    print(f"Original Texts: {len(original_texts)}")
    print(f"Processed Texts: {len(processed_texts)}")

    token_lengths = [len(tokens) for tokens in processed_texts]
    print(f"Average Tokens per Document: {sum(token_lengths) / len(token_lengths):.2f}")

    from collections import Counter
    all_tokens = [token for doc in processed_texts for token in doc]
    print("\nTop 20 Most Common Tokens:")
    for token, count in Counter(all_tokens).most_common(20):
        print(f"{token}: {count}")


def main(directory):
    # Load texts
    original_texts = load_text_files(directory)

    # Preprocess
    processed_texts = preprocess_for_topic_modeling(original_texts)

    # Diagnose preprocessing
    diagnose_preprocessing(original_texts, processed_texts)

    return processed_texts


if __name__ == "__main__":
    # Replace with your directory path
    directory = "/path/to/your/text/files"
    processed_data = main(directory)