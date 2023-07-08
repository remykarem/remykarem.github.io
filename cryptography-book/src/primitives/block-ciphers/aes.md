# AES

AES is a block cipher that operates on **blocks of 128 bits**. It breaks the plaintext into similar size blocks.

The key length can be **128**, **192** or **256** bits.

The ciphertext typically includes the initialisation vector and ciphertext itself.

~~~admonish note title="AES algorithm names"
AES algorithms are typically named as such:

```txt
AES-<key-length>-<mode-of-operation>
```

like

```
AES-128-CBC
```
~~~

~~~admonish example title="Ciphertext"

In OpenSSL (not sure if this is a standard), ciphertexts are prepended with

```
53 61 6c 74 65 64 5f 5f
```

which is UTF-8 for

```
Salted__
```
~~~

Resources:
* [https://medium.com/swlh/an-introduction-to-the-advanced-encryption-standard-aes-d7b72cc8de97](https://medium.com/swlh/an-introduction-to-the-advanced-encryption-standard-aes-d7b72cc8de97)
* [https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/](https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/)