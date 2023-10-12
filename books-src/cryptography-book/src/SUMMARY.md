# Summary

- [Preface](./preface.md)

---

# Primary goals

- [Authenticity](./goals/authenticity.md)
- [Non-repudiation](./goals/non-repudiation.md)
- [Integrity](./goals/integrity.md)
- [Confidentiality](./goals/confidentiality.md)
- [Anonymity and privacy]()
- [Forward secrecy]()

---

# Cryptographic keys

- [Shared secret]()
- [Private-public key pair](./cryptographic-keys/private-public-key-pair.md)

---

# Algorithms, primitives

- [Secure randomness](./primitives/secure-randomness.md)
- [Cryptographic hash functions](./primitives/cryptographic-hash-functions/index.md)
    - [MD5](./primitives/cryptographic-hash-functions/md5.md)
    - [SHA](./primitives/cryptographic-hash-functions/sha.md)
- [MGFs](./primitives/mask-generation-functions/index.md)
  - [MGF1](./primitives/mask-generation-functions/mgf1.md)
- [MAC](./primitives/mac/index.md)
    - [HMAC](./primitives/mac/hmac.md)
    - [SipHash]()
    - [Poly1305]()
- [Padding schemes](./primitives/padding-schemes/index.md)
  - [PKCS1-v1_5](./primitives/padding-schemes/PKCS1-v1_5.md)
  - [OAEP](./primitives/padding-schemes/oaep.md)
  - [PKCS #7](./primitives/padding-schemes/pkcs7.md)
- [Digital signature algorithms](./primitives/digital-signature-algorithms/index.md)
  - [RSASSA-PKCS1-v1_5](./primitives/digital-signature-algorithms/rsassa-pkcs1-v1_5.md)
  - [RSASSA-PSS](./primitives/digital-signature-algorithms/rsassa-pss.md)
  - [ECDSA](./primitives/digital-signature-algorithms/ecdsa.md)
  - [EdDSA](./primitives/digital-signature-algorithms/eddsa.md)
  - [ElGamal]()
  - [Schnorr]()
  - [DSA]()
- [Encryption algorithms](./primitives/encryption-algorithms/index.md)
  - [Block ciphers](./primitives/encryption-algorithms/block-ciphers/index.md)
    - [AES](./primitives/encryption-algorithms/block-ciphers/aes.md)
    - [Threefish]()
    - [DES](./primitives/encryption-algorithms/block-ciphers/des.md)
    - [3DES](./primitives/encryption-algorithms/block-ciphers/3des.md)
  - [Stream ciphers]()
    - [ChaCha20]()
  - [RSAES-OAEP](./primitives/encryption-algorithms/rsa.md)
  - [RSAES-PKCS1-v1_5]()
  - [ECIES](./primitives/encryption-algorithms/ecies.md)
  - [ElGamal]()
- [Authenticated encryption]()
  - [AES-GCM]()
  - [ChaCha20-Poly1305]()
  - [AEAD]()
- [KDF](./primitives/kdf.md)
    - [PBKDF2]()
    - [Bcrypt]()
    - [Scrypt]()
    - [Argon]()
- [Key exchange algorithms](./primitives/key-exchange-algorithms/index.md)
    - [DHKE](./primitives/key-exchange-algorithms/diffie-hellman.md)
    - [RSA key exchange](./cryptosystems/rsa/key-exchange.md)
    - [ECC-based](./cryptosystems/ecc/key-exchange.md)

---

# Cryptosystems

- [RSA](./cryptosystems/rsa/index.md)
- [ECC](./cryptosystems/ecc/index.md)
- [DSA](./cryptosystems/dsa.md)
- [PGP](./cryptosystems/pgp.md)
- [ElGamal]()

---

# Thing

- [Keys]()
    - [ECC](./applications/keys/ecc.md)
    - [Code](./applications/code.md)
    - [SSH](./applications/keys/ssh.md)
- [Salt]()
- [Signatures]()
- [Tokens]()
- [Claims]()
- [Initialisation vector]()
- [Digital certificates](./applications/digital-certificate.md)
- [Fingerprints](./applications/fingerprint.md)

---

# Schemas, formats, standards

- [ASN.1 schemas](./asn1-schemas/index.md)
    - [PKCS #1](./asn1-schemas/pkcs1.md)
    - [PKCS #7 / P7B](./asn1-schemas/pkcs7.md)
    - [PKCS #8](./asn1-schemas/pkcs8.md)
    - [PKCS #12 / PFX](./asn1-schemas/pkcs12.md)
    - [RFC 5915](./asn1-schemas/ecprivatekey.md)
    - [PKIPath](./asn1-schemas/pkipath.md)
    - [X.509](./asn1-schemas/x509.md)
- [Common formats](./common-formats/index.md)
    - [PEM](./common-formats/pem.md)
    - [ASN.1 DER](./common-formats/der.md)
    - [JWK / JWKS](./common-formats/jwk.md)
    - [JKS](./common-formats/jks.md)
    - [OpenSSH public key format](./common-formats/openssh-public-key-format.md)
    - [openssh-key-v1](./common-formats/openssh-key-v1.md)
    - [JWT](./common-formats/jwt.md)
    - [SAML token](./common-formats/saml-token.md)
- [Other standards](./standards.md)

---

# Applications??

- [Utils](./applications/utils.md)

---

# Scenarios

- [Scenarios](./scenarios.md)

---

# Attacks

- [Brute-force attack]()
- [Length extension attack]()
