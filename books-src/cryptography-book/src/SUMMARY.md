# Summary

- [Preface](./preface.md)

---

# Goals

- [Authenticity](./goals/authenticity.md)
- [Non-repudiation](./goals/non-repudiation.md)
- [Integrity](./goals/integrity.md)
- [Confidentiality](./goals/confidentiality.md)
- [Forward secrecy](./goals/forward-secrecy.md)
- [Anonymity and privacy]()
- [Performance](./goals/performance.md)

---

# Cryptographic keys

- [Shared secret]()
- [Private-public key pair](./cryptographic-keys/private-public-key-pair.md)
- [DEK](./cryptographic-keys/dek.md)
- [KEK](./cryptographic-keys/kek.md)

---

# Cryptosystems

- [Lattice-based cryptography](./cryptosystems/lattice-based-cryptography.md)
- [ECC](./cryptosystems/ecc/index.md)
- [IFC]()
  - [RSA](./cryptosystems/rsa/index.md)
- [FFC]()
  - [DSA](./cryptosystems/dsa.md)
- [ElGamal]()

---

- [OpenPGP](./cryptosystems/openpgp.md)
- [SLIFT](./cryptosystems/slift.md)

---

# Algorithms, primitives

- [Secure randomness](./primitives/secure-randomness.md)
- [Cryptographic hash functions](./primitives/cryptographic-hash-functions/index.md)
    - [MD5](./primitives/cryptographic-hash-functions/md5.md)
    - [SHA](./primitives/cryptographic-hash-functions/sha.md)
    - [BLAKE2](./primitives/cryptographic-hash-functions/blake2.md)
    - [BLAKE3](./primitives/cryptographic-hash-functions/blake3.md)
- [MGFs](./primitives/mask-generation-functions/index.md)
  - [MGF1](./primitives/mask-generation-functions/mgf1.md)
- [MAC](./primitives/mac/index.md)
    - [HMAC](./primitives/mac/hmac.md)
    - [SipHash]()
    - [Poly1305](./primitives/mac/poly1305.md)
- [Padding schemes](./primitives/padding-schemes/index.md)
  - [PKCS1-v1_5](./primitives/padding-schemes/PKCS1-v1_5.md)
  - [OAEP](./primitives/padding-schemes/oaep.md)
  - [PKCS #7](./primitives/padding-schemes/pkcs7.md)
- [Digital signature algorithms](./primitives/digital-signature-algorithms/index.md)
  - [RSASSA-PKCS1-v1_5](./primitives/digital-signature-algorithms/rsassa-pkcs1-v1_5.md)
  - [RSASSA-PSS](./primitives/digital-signature-algorithms/rsassa-pss.md)
  - [ECDSA](./primitives/digital-signature-algorithms/ecdsa.md)
  - [EdDSA](./primitives/digital-signature-algorithms/eddsa.md)
  - [CRYSTALS-Dilithium](./primitives/digital-signature-algorithms/crystals-dilithium.md)
  - [ElGamal]()
  - [Schnorr](./primitives/digital-signature-algorithms/schnorr.md)
  - [DSA]()
- [Encryption algorithms](./primitives/encryption-algorithms/index.md)
  - [Block ciphers](./primitives/encryption-algorithms/block-ciphers/index.md)
    - [AES](./primitives/encryption-algorithms/block-ciphers/aes.md)
    - [Threefish]()
    - [DES](./primitives/encryption-algorithms/block-ciphers/des.md)
    - [3DES](./primitives/encryption-algorithms/block-ciphers/3des.md)
  - [Stream ciphers]()
    - [ChaCha20](./primitives/encryption-algorithms/stream-ciphers/chacha20.md)
    - [RC4](./primitives/encryption-algorithms/stream-ciphers/rc4.md)
  - [RSAES-OAEP](./primitives/encryption-algorithms/rsa.md)
  - [RSAES-PKCS1-v1_5](./primitives/encryption-algorithms/rsaes-pkcs1-v1_5.md)
  - [ECIES](./primitives/encryption-algorithms/ecies.md)
  - [ElGamal]()
- [Key exchange algorithms](./primitives/key-exchange-algorithms/index.md)
    - [Static RSA key exchange](./primitives/key-exchange-algorithms/static-rsa-key-exchange.md)
    - [DH](./primitives/key-exchange-algorithms/dh.md)
    - [DHE](primitives/key-exchange-algorithms/dhe.md)
    - [ECDH](./primitives/key-exchange-algorithms/ecdh.md)
    - [ECDHE](./primitives/key-exchange-algorithms/ecdhe.md)
- [KEM](./primitives/kem/index.md)
  - [Kyber](./primitives/kem/kyber.md)
- [KDF](./primitives/kdf.md)
    - [PBKDF2]()
    - [Bcrypt]()
    - [Scrypt]()
    - [Argon]()

---

# Other schemes

- [Authenticated encryption](./other-schemes/authenticated-encryption.md)
- [AEAD](./other-schemes/aead.md)
- [HPKE](./primitives/hpke.md)

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
    - [PKCS #12](./asn1-schemas/pkcs12.md)
    - [PFX](./asn1-schemas/pfx.md)
    - [ECPrivateKey](./asn1-schemas/ecprivatekey.md)
    - [PKIPath](./asn1-schemas/pkipath.md)
    - [X.509](./asn1-schemas/x509.md)
- [Formats](./formats/index.md)
    - [JWT](./formats/jwt.md)
    - [PEM](./formats/pem.md)
    - [ASN.1 DER](./formats/der.md)
    - [JWK / JWKS](./formats/jwk.md)
    - [JKS](./formats/jks.md)
    - [OpenSSH private key](./formats/openssh-private-key.md)
    - [OpenSSH public key](./formats/openssh-public-key-format.md)
    - [OpenPGP ASCII armor](./formats/openpgp-ascii-armor.md)
    - [OpenPGP binary](./formats/openpgp-binary.md)
    - [SAML token](./formats/saml-token.md)
- [Standards](./standards.md)

---

# Applications??

- [Utils](./applications/utils.md)

---

# Scenarios

- [Scenarios](./scenarios.md)

---

# Attacks

- [CPA](./attacks/chosen-plaintext-attack.md)
- [CCA]()
- [Replay attack]()
- [Brute-force attack]()
- [Length extension attack]()
