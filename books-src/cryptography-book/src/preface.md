# Preface

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
* [Tink](https://developers.google.com/tink)

## Others
[https://cryptobook.nakov.com](https://cryptobook.nakov.com/)
