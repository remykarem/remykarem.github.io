# AES



AES is a block cipher that operates on blocks of **128 bits**. It breaks the plaintext into similar size blocks.

The shared keys can be of length 128, 192 or 256 bits.

An **initialisation vector** (IV) is used to ensure that the same plaintext will not always get encrypted to the same ciphertext. The IV is needed when decrypting the ciphertext.

A **mode** or **encyrption mode** is the algorithm used to encrypt data. It defines how you encrypt or re-encrypt every small block, etc.

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