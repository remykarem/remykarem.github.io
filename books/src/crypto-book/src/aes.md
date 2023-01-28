# AES


A *deterministic* symmetric encryption algorithm operating on blocks

```
(plaintext, key) -> ciphertext

(ciphertext, key) -> plaintext
```

---

💡 A **block** is a fixed-length group of *bits*

- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)

Block ciphers can operate in a *mode of operation*. This involves *repeated* XOR-ing a block etc. to achieve confidentiality and authentication. Involves some initial randomness (IV). Here are some:

- Confidentiality + Authentication
    - GCM
    - EAX
- Confidentiality
    - CBC — each block depends on the proper encryption block before it
    - ECB
    - CFB
    - CTR

---

AES is a block cipher that operates on **blocks of 128 bits (16 bytes)**. It breaks the plaintext into similar size blocks.

The shared keys can be of length 128, 192 or 256 bits.

An **initialisation vector** (IV) is used to ensure that the same plaintext will not always get encrypted to the same ciphertext. The IV is needed when decrypting the ciphertext.

A **mode** or **encyrption mode** is the algorithm used to encrypt data which has more than 1 block. It defines how you encrypt or re-encrypt every small block, etc.

* ECB
* CBC
* CFB
* OFB
* CTR

```txt
AES-128-CBC 
 ^   ^   ^
 |   |   |
alg key mode
  length
```

Finally, the ciphertext will include the initialisation vector and ciphertext.

Note that some modes allow partial decryption, like the CTR.

Resources:
* [https://medium.com/swlh/an-introduction-to-the-advanced-encryption-standard-aes-d7b72cc8de97](https://medium.com/swlh/an-introduction-to-the-advanced-encryption-standard-aes-d7b72cc8de97)
* [https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/](https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/)