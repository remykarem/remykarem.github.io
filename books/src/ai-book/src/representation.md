# Representation

## **Sparse Representations**

sparsity problem

no similarity

- One-hot encoding (1-of-V coding)
- Multi-hot encoding

## **Traditional**

- n-gram
- Bag of words

## **Denser Representations: Embedding / embedding vector / vector representation / word representations in vector space**

learned lookup table

idea: every word is represented by a vector

## Embeddings: **Frequency-based**

- **Count Vectors**
- **TF-IDF** (term frequency - inverse document frequency)
- **Co-occurence matrix**

## E**mbeddings: Prediction-based**

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
