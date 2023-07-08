# Tokenisation

Tokenisation is the *splitting* of text into smaller units.

### Algorithms

- Character
- Subword
    - BPE (Byte-Pair Encoding). By frequency. Implementations:
      - [SentencePiece](https://github.com/google/sentencepiece)
      - [fastBPE](https://github.com/glample/fastBPE)
      - [YouTokenToMe](https://github.com/VKCOM/YouTokenToMe)
      - [rsennrich / subword-nmt](https://github.com/rsennrich/subword-nmt)
    - WordPiece. By likelihood
    - Unigram Language Model
    - Syllable tokenisation
    - Character n-grams (by fasttext)
- Word
    - [spaCy](https://spacy.io/)
    - [Moses](http://www.statmt.org/moses/?n=Development.GetStarted)

### Libraries

- Moses
- Whitespace

### Visualisation

[Byte Pair Encoding Tokenization by HuggingFace](https://www.youtube.com/watch?v=HEikzVL-lZU)
