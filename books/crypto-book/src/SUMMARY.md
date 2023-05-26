# Summary

- [Preface](./preface.md)

---

# Primitives

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
  - [PKCS#7](./padding/pkcs7.md)
- [PRNGs]()
- [Block ciphers](./ciphers.md)
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
- [Encryption algorithms]()
- [Digital signature algorithms](./digital_signature.md)
- [Key exchange algorithms](./key_exchange.md)
    - [DHKE](./diffie_hellman.md)

---

# Cryptosystems

- [Public-key cryptosystem](./public_key_cryptosystem.md)
    - [DSA](./dsa.md)
    - [RSA](./rsa/index.md)
        - [Encryption algorithms](./rsa/encryption-schemes.md)
        - [Digital signature algorithms](./rsa/digital-signature-algorithms.md)
        - [Key exchange algorithms](./rsa/key-exchange.md)
    - [ECC](./ecc/index.md)
        - [Encryption algorithms](./ecc/encryption-algorithms.md)
        - [Digital signature algorithms](./ecc/digital-signature-algorithms.md)
        - [Key exchange algorithms](./ecc/key-exchange.md)
    - [ElGamal]()
- [Hybrid cryptosystem]()
    - [PGP]()
    - [GPG]()

---

# Encodings, formats, standards

- [Encodings]()
    - [Text-based]()
        - [PEM](./pem.md)
        - [JWT](./jwt.md)
        - [JWKS](./jwk.md)
        - [SSH2](./ssh2.md)
        - [OpenSSH](./openssh.md)
        - [P7B/PKCS #7]()
    - [Binary-based]()
        - [DER](./der.md)
        - [.p12/PFX/PKCS #12](./p12-pfx.md)
        - [JKS](./jks.md)
- [Formats](./structured_container_formats.md)
    - [ECPrivateKey](./ecprivatekey.md)
    - [PKCS #1 (RSA)](./pkcs1.md)
    - [PKCS #7]()
    - [PKCS #8](./pkcs8.md)
    - [PKCS #11]()
    - [PKCS #12](./pkcs12.md)
    - [X.509](./x509.md)
- [Other standards](./standards.md)

---

# Applications

- [Secure random bytes](./rand.md)
- [Keys]()
    - [RSA](./code.md)
    - [ECC](./keys/ecc.md)
    - [SSH](./keys/ssh.md)
- [Encryption algorithms](./ciphertext.md)
- [Digital signature algorithms]()
- [Checksum](./checksum.md)
- [Fingerprint](./fingerprint.md)
- [HMAC](./hmac.md)
- [Digital certificate](./digital_certificate.md)
- [Utils](./utils.md)
- [PKCS #12](./pkcs12-stuff.md)

---

# Attacks

- [Brute-force attack]()
- [Length extension attack]()
