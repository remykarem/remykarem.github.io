# AES

Advanced Encryption Standard

[FIPS 197](https://csrc.nist.gov/pubs/fips/197/final)

AES is a block cipher that operates on a **block of 128 bits**. It breaks the plaintext into similar size blocks.

The key length can be one of the following (bits): **128**, **192** or **256**.

AES is a bijective function — any data can encrypted, and any data can be decrypted. 

~~~admonish warning
Because any data can be decrypted, it is  incorrect to assume that just because you can decrypt some ciphertext, that it was indeed encrypted using the key you have.
~~~

The ciphertext typically includes the initialisation vector and ciphertext itself.

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

~~~admonish example title="Encrypt file with OpenSSL"

```bash
echo -n "hello" | 
openssl enc -aes-256-cbc -pbkdf2 | 
base64
```

```bash
echo -n "U2FsdGVkX19eOFx2c4vZzUBqShy+giooq9P8VVMLtx0=" |
base64 -d |
openssl enc -aes-256-cbc -d -pbkdf2  # password is 123
```
~~~

~~~admonish example
* AWS S3 uses AES-256 for server-side encryption at rest.
* OpenVPN uses aes-256-cbc as its default cipher. 
~~~

Resources:
* [https://medium.com/swlh/an-introduction-to-the-advanced-encryption-standard-aes-d7b72cc8de97](https://medium.com/swlh/an-introduction-to-the-advanced-encryption-standard-aes-d7b72cc8de97)
* [https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/](https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/)
