# Dense representations: Embeddings

Embeddings

learned lookup table

“Representation Learning”

Represent how something functions syntactically (position) and semantically (meaning) + relationships

How to generate a numerical representation of the tokens? Need to train with some data so that model understands the world

Categorisations of embeddings:

- Frequency-based vs. language model-based
- Word-based vs. larger-than-word based

---

## Summary

| Model                  | Type I    | Type II        | Encoding                                    | Characteristics                                         |
|------------------------|-----------|----------------|---------------------------------------------|---------------------------------------------------------|
| NNLM                   | LM        | Word           |                                             | MLP with projection layer and hidden layer              |
| Skip-gram              | LM        | Word           | One-hot encoding of words                   | MLP with projection layer. predicting word contexts     |
| CBOW                   | LM        | Word           |                                             |                                                         |
| GloVe                  | Frequency | Word           | Co-occurrence matrix                        | SVD-like                                                |
| fastText               |           | Subword, word  | Character-level (subword).Character n-grams | robust embeddings using subword information             |
| ELMo                   | LM        | Any            | Character-level CNN (subword)               | Bi-directional, LM                                      |
| Transformer            | LM        | Any            |                                             | Self-attention, seq2seq                                 |
| BERT                   | LM        | Any            |                                             | LM, transformer                                         |
| Unigram Language Model | LM        |                |                                             |                                                         |
| USE                    | LM        | Any            |                                             |                                                         |
| TF-IDF                 | Frequency | Word, document |                                             |                                                         |
| Doc2Vec                |           | Document       |                                             |                                                         |
| Co-occurrence matrix   | Frequency |                |                                             |                                                         |
| PPMI                   |           |                |                                             | matrix decomposition (using SVD) to get word embeddings |
| Skip-Thought Vectors   |           |                |                                             |                                                         |
| Bag-of-words           |           |                |                                             |                                                         |
| SBERT                  | LM        | Sentence       |                                             |                                                         |
| LASER                  |           |                |                                             |                                                         |

## Other models that can be be used as embeddings

* LDA

## Other works

- InferSent
- LaBSE
- MUSE (Multilingual Unsupervised or Supervised word Embeddings)
- MOE (Misspelling Oblivious Embeddings)

## Libraries

* [SentenceTransformers](https://www.sbert.net/#)
* Gensim
