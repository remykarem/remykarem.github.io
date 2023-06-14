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

# Encodings, formats, structures, standards

- [Encodings / formats](./encodings/index.md)
    - [Text]()
        - [PEM](./encodings/pem.md)
    - [Binary]()
        - [DER](./encodings/der.md)
- [Structures / representations / formats](./formats/index.md)
    - [JWT](./encodings/jwt.md)
    - [PKCS #1 (RSA)](./formats/pkcs1.md)
    - [PKCS #7 / P7B]()
    - [PKCS #8](./formats/pkcs8.md)
    - [PKCS #11]()
    - [PKCS #12 / PFX](./formats/pkcs12.md)
    - [JKS](./encodings/jks.md)
    - [JWK / JWKS](./encodings/jwk.md)
    - [ECPrivateKey](./formats/ecprivatekey.md)
    - [X.509](./formats/x509.md)
    - [SSH2](./formats/ssh2.md)
    - [OpenSSH](./formats/openssh.md)
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
