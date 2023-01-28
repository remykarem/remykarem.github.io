# Block ciphers

A *deterministic* symmetric encryption algorithm operating on blocks

```
(plaintext, key) -> ciphertext

(ciphertext, key) -> plaintext
```

---

💡 A **block** is a fixed-length group of *bits*

Block ciphers can operate in a *mode of operation*. This involves *repeated* XOR-ing a block etc. to achieve confidentiality and authentication. Involves some initial randomness (IV). Here are some:

- Confidentiality + Authentication
    - GCM
    - EAX
- Confidentiality
    - CBC — each block depends on the proper encryption block before it
    - ECB
    - CFB
    - CTR
