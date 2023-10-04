# Preface

[https://cryptobook.nakov.com](https://cryptobook.nakov.com/)

[https://connect2id.com/products/nimbus-jose-jwt/examples](https://connect2id.com/products/nimbus-jose-jwt/examples)

[https://developers.google.com/tink/deterministic-encryption](https://developers.google.com/tink/deterministic-encryption)

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
* OpenSSH
* PyCryptodome
* Bouncy Castle