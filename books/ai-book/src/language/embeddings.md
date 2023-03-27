# Embeddings

“Representation Learning”

Represent how something functions syntactically (position) and semantically (meaning) + relationships

How to generate a numerical representation of the tokens? Need to train with some data so that model understands the world

## Subword

- Unigram Language Model
- ~~MOE (Misspelling Oblivious Embeddings)~~ (deprecated)

## Word

- Bag-of-words
- TF-IDF
- Gensim’s Word2Vec
- NNLM (Neural Network Language Model)
- Word2Vec
  - Skip-Gram. word and phrase representations learned by Skip-gram model exhibits a linear structure that makes it possible to perform precise analogical reasoning using simple vector arithmetics
  - CBOW
- GLoVe
- ELMo
  - Contextual: The representation for each word depends on the entire context in which it is used.
  - Deep: The word representations combine all layers of a deep pre-trained neural network.
  - Character based: ELMo representations are purely character based, allowing the network to use morphological clues to form robust representations for out-of-vocabulary tokens unseen in training.
- LDA
- fastText
- MUSE (Multilingual Unsupervised or Supervised word Embeddings)

## Sentence

- USE (multilingual)
- InferSent
- SentenceBERT
- [LASER](https://github.com/facebookresearch/LASER) (Language-Agnostic SEntence Representations) — Trained on 90+ languages. Model has the ability to accept code-switching!
- LaBSE

## Document

- Doc2Vec
- Bag-of-words
- TF-IDF

## Summary

| Model       | Encoding                                    | Characteristics                            | Optimiser        | Word-to-embedding | Available modules trained on    | Getting embeddings             |
| ----------- | ------------------------------------------- | ------------------------------------------ | ---------------- | ----------------- | ------------------------------- | ------------------------------ |
| NNLM        |                                             | MLP with projection layer and hidden layer |                  |                   |                                 |                                |
| Skip-gram   | One-hot encoding of words                   | MLP with projection layer                  | Gradient descent | 1-to-1            | Wikipedia English               | Output                         |
| GloVe       | Co-occurrence matrix                        | SVD-like                                   | Gradient descent | 1-to-1            |                                 | Output                         |
| fastText    | Character-level (subword).Character n-grams |                                            |                  |                   |                                 | ?                              |
| ELMo        | Character-level CNN (subword)               | Bi-directional, LM                         | Gradient descent | 1-to-many         | 5.5B tokens from Wikipedia 1.9B | Aggregate output layers        |
| Transformer |                                             | Self-attention, seq2seq                    |                  |                   |                                 | ?                              |
| BERT        |                                             | LM, transformer                            |                  |                   |                                 | Aggregate encoder stack layers |

