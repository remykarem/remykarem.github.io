# Topic modelling

Resources

BERT-based: [https://github.com/MaartenGr/KeyBERT/](https://github.com/MaartenGr/KeyBERT/)

[https://github.com/boudinfl/pke](https://github.com/boudinfl/pke)

| Method             | Need more than 1 doc | Algorithm                           | Output: Doc-Topic | Output: Term-Doc | Output: Term-Topic | Output: similarity matrix |
| ------------------ | -------------------- | ----------------------------------- | ----------------- | ---------------- | ------------------ | ------------------------- |
| TF-IDF             | ✓                    | Frequency-based                     |                   | ✓                |                    |                           |
| NMF                | ✓                    | SVD of term-docV = WH               | ✓                 |                  | ✓                  |                           |
| LDA                | ✓                    | Probabilistic generative modelling  | ✓                 |                  | ✓                  |                           |
| LSA                | ✓                    | SVD of term-docX = UΣVT             |                   | ✓                | ✓                  |                           |
| RAKE               |                      | Word co-occurrences, scoring system |                   |                  |                    |                           |
| TextRank           |                      | Similarity (word co-occurrences)    |                   |                  |                    | ✓                         |
| Bag of words       |                      | Word frequency                      |                   |                  |                    |                           |
| POS tagging        |                      | Linguistic approach                 |                   |                  |                    |                           |
| NER tagging        |                      | Linguistic approach                 |                   |                  |                    |                           |
| Random Projections |                      |                                     |                   |                  |                    |                           |

**Theory**

Distributional hypothesis - The **distributional hypothesis** in linguistics is derived from the semantic theory of language usage, i.e. words that are used and occur in the same contexts tend to purport similar meanings

Semantic similarity

Vector space model - representing text documents as vectors

---

# **TF-IDF**

(Term Frequency - Inverse Document Frequency)

words which are rare are the ones that actually help in distinguishing between the data, and carry more weight

1. Get a list of unique words.
2. For every word in every document, calculate
   - $$tf = \frac{\text{count of this term}}{\text{total no. of words}}$$
   - $$ idf = \log \frac{\text{total no. of docs}}{\text{no. of docs with this term}}$$
   - $$tfidf = tf \times df$$

Document A: The car is driven on the road.

Document B: The truck is driven on the highway.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1103cc7-0688-4750-912d-d811e7e8de31/log(22)__0.png](./tf-idf.png)

# **NMF**

(Nonnegative Matrix Factorisation)

# **GloVe**

- svd

# **RAKE**

(Rapid Automation Keyword Extraction)

1.  Get tokens by partitioning using stop words and punctuation marks
2.  Get co-occurrence matrix
3.  Simple scoring
    Degree(“keyword”) = sum of no. of co-occurrences = 3+3+1+1
    Frequency(“keyword”) = cell entry in co-occurrence = 3
    Score(“keyword”) = degree/frequency
        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73abfb6b-f8c5-44fc-b26d-05d44bcc111f/keyword.png](./rake.png)

# **LDA**

(Latent Dirichlet Allocation)

- Model the data as observations that arise from a generative probabilistic process that includes hidden variables (topics/themes)
- Infer the hidden structure using posterior inference

# **TextRank**

Inspired from PageRank

Construct a (cosine) similarity matrix by comparing their **vector representations** (summing/average of all word embeddings in every sentence).

|           | Sentence1 | Sentence2 | Sentence3 |
| --------- | --------- | --------- | --------- |
| Sentence1 |           |           |           |
| Sentence2 |           |           |           |
| Sentence3 |           |           |           |

Construct a (cosine) similarity matrix by comparing their **vector representations** or other word occurrences methods.

|       | Word1 | Word2 | Word3 |
| ----- | ----- | ----- | ----- |
| Word1 |       |       |       |
| Word2 |       |       |       |
| Word3 |       |       |       |

Lastly, rank.
