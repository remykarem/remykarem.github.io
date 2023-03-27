# Representation

(Numerical representation)

<!-- toc -->

---

## Sparse representations

sparsity problem

no similarity

- One-hot encoding (1-of-V coding)
- Multi-hot encoding
- Bag-of-words

## Dense representations: Embeddings

learned lookup table

idea: every word is represented by a vector

### Frequency-based

- **Count Vectors**
- **TF-IDF** (term frequency - inverse document frequency)
- **Co-occurence matrix**

### Prediction-based

- **Skip-gram**: learning embeddings by predicting word contexts
- **CBOW**
- **fastText**: robust embeddings using subword information
- **GloVe**: learning embeddings of size 100 from word co-occurrence (Global Vectors for Word Representation)
- **ELMo**: Embeddings from Language Models (pre-trained)
- PPMI matrix decomposition (using SVD) to get word embeddings
- Skip-Thought Vectors
- Doc2Vec
- USE (universal sentence encoder)
- NNLM (neural network language model)
