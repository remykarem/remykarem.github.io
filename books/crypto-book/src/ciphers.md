# Block ciphers

A *deterministic* symmetric encryption algorithm operating on blocks.

The algorithm should be able to perform both operations:

$$
\text{(message, \textbf{key})} \rightarrow \text{ciphertext}
$$

$$
\text{(ciphertext, \textbf{key})} \rightarrow \text{message}
$$

---

```admonish note
A **block** is a fixed-length group of *bits*
```

Block ciphers can operate in a *mode of operation*. This involves *repeated* XOR-ing a block etc. to achieve confidentiality and authentication. Involves some initial randomness (IV). Here are some:

- Confidentiality + Authentication
    - GCM
    - EAX
- Confidentiality
    - CBC — each block depends on the proper encryption block before it
    - ECB
    - CFB
    - CTR
