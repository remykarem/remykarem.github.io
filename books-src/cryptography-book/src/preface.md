# Preface

Cryptography deals with:
* bitwise mathematical operations
* modular arithmetics.

Therefore, many cryptographic objects are represented as binary data aka byte arrays (eg. shared secrets) and numbers (eg. modulus of RSA).

Binary data is usually represented as hexadecimal string or encoded using Base64.

Numbers are usually represented as... idk I can't think of an example.

---

Proofs

| Ting                | Integrity | Authenticity | Non-repudiation |
| ------------------- | --------- | ------------ | --------------- |
| Checksum            | ✅        | ❌           | ❌              |
| MAC                 | ✅        | ✅           | ❌              |
| HMAC                | ✅        | ✅           | ❌              |
| Digital signature   | ✅        | ✅           | ✅              |
| Digital certificate |           | ✅           |                 |

Encryption

| Ting                  | Confidentiality | Authenticity | Integrity | Nonrepudiation | Output randomness |
| --------------------- | --------------- | ------------ | --------- | -------------- | ----------------- |
| Deterministic AEAD    | ✅              | ✅           | -         | ?              | Deterministic     |
| AEAD ciphertext       | ✅              | ✅           | -         | ?              | Random            |
| Basic AES ciphertext  | ✅              | ?            | -         | ?              | Random            |
| Public-key ciphertext | ✅              | ✅           | -         | ?              | Random            |

## Common cryptography libraries

* OpenSSL
  - OpenSSL 1.x
  - OpenSSL 3.x
  - LibreSSL (macOS) - `/usr/bin/openssl`
  - BoringSSL (Google)
* OpenSSH
* PyCryptodome
* Bouncy Castle
* [Tink](https://developers.google.com/tink)

## Others
[https://cryptobook.nakov.com](https://cryptobook.nakov.com/)

[Intuition for Cryptography](https://azeemba.com/posts/intuition-for-cryptography.html)

[the cryptopals crypto challenges](https://cryptopals.com)