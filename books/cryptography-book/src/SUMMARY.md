# Summary

- [Preface](./preface.md)

---

# Primitives

- [PRNGs]()
- [Cryptographic hash functions](./primitives/cryptographic-hash-functions/index.md)
    - [MD5](./primitives/cryptographic-hash-functions/md5.md)
    - [SHA](./primitives/cryptographic-hash-functions/sha.md)
- [MGFs](./primitives/mask-generation-functions/index.md)
  - [MGF1](./primitives/mask-generation-functions/mgf1.md)
- [MAC](./primitives/mac/index.md)
    - [HMAC](./primitives/mac/hmac.md)
    - [SipHash]()
    - [Poly1305]()
- [Padding](./primitives/padding/index.md)
  - [OAEP](./primitives/padding/oaep.md)
  - [PKCS #7](./primitives/padding/pkcs7.md)
- [Block ciphers](./primitives/block-ciphers/index.md)
    - [AES](./primitives/block-ciphers/aes.md)
    - [AEAD]()
    - [ChaCha20-Poly1305]()
    - [Threefish]()
    - [DES]()
- [KDF](./primitives/kdf.md)
    - [PBKDF2]()
    - [Bcrypt]()
    - [Scrypt]()
    - [Argon]()
- [Encryption algorithms](./primitives/encryption-algorithms.md)
- [Digital signature algorithms](./primitives/digital-signature.md)
- [Key exchange algorithms](./primitives/key-exchange-algorithms/index.md)
    - [DHKE](./primitives/key-exchange-algorithms/diffie-hellman.md)

---

# Cryptosystems

- [RSA](./cryptosystems/rsa/index.md)
    - [Encryption algorithms](./cryptosystems/rsa/encryption-schemes.md)
    - [Digital signature algorithms](./cryptosystems/rsa/digital-signature-algorithms.md)
    - [Key exchange algorithms](./cryptosystems/rsa/key-exchange.md)
- [ECC](./cryptosystems/ecc/index.md)
    - [Encryption algorithms](./cryptosystems/ecc/encryption-algorithms.md)
    - [Digital signature algorithms](./cryptosystems/ecc/digital-signature-algorithms.md)
    - [Key exchange algorithms](./cryptosystems/ecc/key-exchange.md)
- [DSA](./cryptosystems/dsa.md)
- [ElGamal]()
- [PGP](./cryptosystems/pgp.md)
- [GPG]()

---

# Definitions, formats, standards

- [ASN.1 definitions](./asn1-definitions/index.md)
    - [PKCS #1 (RSA)](./asn1-definitions/pkcs1.md)
    - [PKCS #7 / P7B](./asn1-definitions/pkcs7.md)
    - [PKCS #8](./asn1-definitions/pkcs8.md)
    - [PKCS #12 / PFX](./asn1-definitions/pkcs12.md)
    - [RFC 5915 (ECC)](./asn1-definitions/ecprivatekey.md)
    - [X.509](./asn1-definitions/x509.md)
- [Common formats](./common-formats/index.md)
    - [PEM](./common-formats/pem.md)
    - [DER](./common-formats/der.md)
    - [JWK / JWKS](./common-formats/jwk.md)
    - [OpenSSH](./common-formats/openssh.md)
    - [JWT](./common-formats/jwt.md)
    - [JKS](./common-formats/jks.md)
- [Other standards](./standards.md)

---

# Applications

- [Secure random bytes](./applications/rand.md)
- [Checksum](./applications/checksum.md)
- [HMAC](./applications/hmac.md)
- [Block ciphers](./applications/block-ciphers.md)
- [Keys]()
    - [RSA](./applications/code.md)
    - [ECC](./applications/keys/ecc.md)
    - [SSH](./applications/keys/ssh.md)
- [Fingerprint](./applications/fingerprint.md)
- [Encryption](./applications/ciphertext.md)
- [Digital signatures]()
- [Digital certificate](./applications/digital-certificate.md)
- [Utils](./applications/utils.md)

---

# Attacks

- [Brute-force attack]()
- [Length extension attack]()
