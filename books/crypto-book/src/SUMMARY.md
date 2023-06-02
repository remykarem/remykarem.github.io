# Summary

- [Preface](./preface.md)

---

# Primitives

- [PRNGs]()
- [Hash functions](./hash-functions/index.md)
    - [MD5](./hash-functions/md5.md)
    - [SHA](./hash-functions/sha.md)
- [MGFs](./mask-generation-functions.md)
  - [MGF1](./mask-generation-functions/mgf1.md)
- [MAC](./mac/index.md)
    - [HMAC](./mac/hmac.md)
    - [SipHash]()
    - [Poly1305]()
- [Padding](./padding/index.md)
  - [OAEP](./padding/oaep.md)
  - [PKCS #7](./padding/pkcs7.md)
- [Block ciphers](./block-ciphers.md)
    - [AES](./aes.md)
    - [AEAD]()
    - [ChaCha20-Poly1305]()
    - [Threefish]()
    - [DES]()
- [KDF](./kdf.md)
    - [PBKDF2]()
    - [Bcrypt]()
    - [Scrypt]()
    - [Argon]()
- [Encryption algorithms](./encryption-algorithms.md)
- [Digital signature algorithms](./digital-signature.md)
- [Key exchange algorithms](./key-exchange.md)
    - [DHKE](./diffie-hellman.md)

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
- [PGP](./pgp.md)
- [GPG]()

---

# Encodings, formats, standards

- [Encodings]()
    - [Text-based]()
        - [PEM](./encodings/pem.md)
        - [JWT](./encodings/jwt.md)
        - [JWKS](./encodings/jwk.md)
        - [SSH2](./encodings/ssh2.md)
        - [OpenSSH](./encodings/openssh.md)
        - [P7B/PKCS #7]()
    - [Binary-based]()
        - [DER](./encodings/der.md)
        - [.p12/PFX/PKCS #12](./encodings/p12-pfx.md)
        - [JKS](./encodings/jks.md)
- [Container formats](./container-formats/index.md)
    - [ECPrivateKey](./container-formats/ecprivatekey.md)
    - [PKCS #1 (RSA)](./container-formats/pkcs1.md)
    - [PKCS #7]()
    - [PKCS #8](./container-formats/pkcs8.md)
    - [PKCS #11]()
    - [PKCS #12](./container-formats/pkcs12.md)
    - [X.509](./container-formats/x509.md)
- [Other standards](./standards.md)

---

# Applications

- [Secure random bytes](./rand.md)
- [HMAC](./hmac.md)
- [Keys]()
    - [RSA](./code.md)
    - [ECC](./keys/ecc.md)
    - [SSH](./keys/ssh.md)
- [Encryption algorithms](./ciphertext.md)
- [Digital signature algorithms]()
- [Checksum](./checksum.md)
- [Fingerprint](./fingerprint.md)
- [Digital certificate](./digital-certificate.md)
- [PKCS #12](./pkcs12-stuff.md)
- [Utils](./utils.md)

---

# Attacks

- [Brute-force attack]()
- [Length extension attack]()
