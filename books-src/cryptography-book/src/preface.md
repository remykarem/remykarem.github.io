# Preface

[https://cryptobook.nakov.com](https://cryptobook.nakov.com/)

[https://connect2id.com/products/nimbus-jose-jwt/examples](https://connect2id.com/products/nimbus-jose-jwt/examples)

[https://developers.google.com/tink/deterministic-encryption](https://developers.google.com/tink/deterministic-encryption)

## Scenarios

- Only encrypting the HTTP payload ("confidentiality")

  An attacker might not be able to read the data in transit. But they may be able to flip bits without detection. A GET can be changed to PUT by flipping bits, without interfering with the ciphertext.

- Only appending a checksum ("data integrity")

  An attacker can generate a correct sum.

## Goals

You also want to make sure that _attackers_:

1. cannot reuse any submitted proofs (**resistance to replay attack**)
2. cannot find any pattern from the encryption (using **randomness** aka high entropy, dependent on the encryption algorithm)

Based on these requirements, here is an example infrastructure:

- There are 2 sets of keys:
  - For encryption - sender has the public key X, receiver has a private key Y.
  - For signing - sender has the private key A, receiver has a public key B.
- Sender encrypts payload (confidentiality, authenticity) with the public key X.
- Sender signs payload together with current timestamp (resistance to replay attack) with private key A.

[https://en.wikipedia.org/wiki/Confusion_and_diffusion](https://en.wikipedia.org/wiki/Confusion_and_diffusion)

Proofs

| Ting                | Integrity | Authenticity | Nonrepudiation | Output randomness |
| ------------------- | --------- | ------------ | -------------- | ----------------- |
| Checksum            | ✅        | ❌           | ❌             | Deterministic     |
| MAC                 | ✅        | ✅           | ❌             | Deterministic     |
| HMAC                | ✅        | ✅           | ❌             | Deterministic     |
| Digital signature   | ✅        | ✅           | ✅             | Random            |
| Digital certificate |           | ✅           |                |                   |

Encryption

| Ting                  | Confidentiality | Authenticity | Integrity | Nonrepudiation | Output randomness |
| --------------------- | --------------- | ------------ | --------- | -------------- | ----------------- |
| Deterministic AEAD    | ✅              | ✅           | -         | ?              | Deterministic     |
| AEAD ciphertext       | ✅              | ✅           | -         | ?              | Random            |
| Basic AES ciphertext  | ✅              | ?            | -         | ?              | Random            |
| Public-key ciphertext | ✅              | ✅           | -         | ?              | Random            |

## Common cryptography libraries

OpenSSL

- OpenSSL 1.x
- OpenSSL 3.x
- LibreSSL (macOS) - `/usr/bin/openssl`
