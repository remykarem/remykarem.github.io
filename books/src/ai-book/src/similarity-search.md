# Similarity search

<!-- toc -->

---

## Brute force

Given $N$ documents, there are \\( {N \choose 2}  = \frac{N(N-1)}{2} \\) combinations.

Complexity is $O(N^2)$ .

## Min-hashing

Complexity is... $O(N)$?

**Distance**

- Jaccard
    
    ![Untitled](./similarity-search-0.png)
    

![Untitled](./similarity-search-1.png)

doc1: `the cat is is is glad today`

doc2: `the cat is glad`

1. **Shingling**
    
    
    n-gram
    
    ```
    
                 doc1 doc2 ... docN
                 ------------------
       (the cat)    1    1
        (cat is)    1    1
       (is glad)    1    1
    (glad today)    1    0
    
    1 indicates that the shingle exists in the doc1
    ```
    
2. **Min-hash**
    
    hash each document. Highly similar documents usually have the same document
    
    ```python
    doc = "the cat is is is glad"
    
    hash("the cat") = 12 = a
    hash("cat is")  = 41 = b
    hash("is glad") = 37 = c
    
    minhash(doc) = min(a,b,c) = 12
    ```
    
    ![Positive example](./similarity-search-2.png)
    
    Positive example
    
    > 💡 P( h(d1)=h(d2) ) = jaccard_sim(d1, d2)
    
3. **Find candidate pairs**
    
    This is done by comparing signatures.
