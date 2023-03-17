# Tokenisatin

Token: ‘smallest unit of language in the eyes of computer’. Tokenisation is especially useful in agglutinative languages like Turkish.

### Algorithms

- Character
- Subword
    - BPE (Byte-Pair Encoding). By frequency. Implementations: SentencePiece, fastBPE.
    - WordPiece. By likelihood
    - Unigram Language Model
    - Syllable tokenisation
    - Character n-grams (by fasttext)
    - [rsennrich / subword-nmt](https://github.com/rsennrich/subword-nmt)
- Word
    - [spaCy](https://spacy.io/)
    - [Moses](http://www.statmt.org/moses/?n=Development.GetStarted)

Libraries

- Moses
- Whitespace
