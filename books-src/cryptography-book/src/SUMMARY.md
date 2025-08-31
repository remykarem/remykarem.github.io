# Summary

- [Preface](./preface.md)

---

# Goals / guarantees

- [Authenticity](./goals/authenticity.md)
- [Non-repudiation](./goals/non-repudiation.md)
- [Integrity](./goals/integrity.md)
- [Confidentiality](./goals/confidentiality.md)
  - [Forward secrecy](./goals/forward-secrecy.md)
- [Anonymity and privacy]()
- [Performance](./goals/performance.md)
- [Portability](./goals/portability.md)

---

- [Secure randomness](./primitives/secure-randomness.md)
- [Uniqueness]()

---

# Software

- [OpenPGP](./software/openpgp.md)
- [SLIFT](./software/slift.md)
- [age](./software/age.md)

---

# Digital signature algorithms

- [Digital signature algorithms](./primitives/digital-signature-algorithms/index.md)
- [EC]()
  - [ECDSA](./primitives/digital-signature-algorithms/ecdsa.md)
  - [EdDSA](./primitives/digital-signature-algorithms/eddsa.md)
- [RSA]()
  - [RSASSA-PKCS1-v1_5](./primitives/digital-signature-algorithms/rsassa-pkcs1-v1_5.md)
  - [RSASSA-PSS](./primitives/digital-signature-algorithms/rsassa-pss.md)
- [Lattice-based]()
  - [CRYSTALS-Dilithium](./primitives/digital-signature-algorithms/crystals-dilithium.md)
- [Schnorr](./primitives/digital-signature-algorithms/schnorr.md)
- [ElGamal]()
- [DSA]()
 
# Encryption algorithms

- [Encryption algorithms](./primitives/encryption-algorithms/index.md)
  - [Authenticated encryption](./primitives/authenticated-encryption/index.md)
  - [AEAD](./primitives/authenticated-encryption/aead.md)
- [Block ciphers](./primitives/encryption-algorithms/block-ciphers/index.md)
  - [(Block cipher mode of operation)](./primitives/encryption-algorithms/block-cipher-mode-of-operation.md)
  - [AES](./primitives/encryption-algorithms/block-ciphers/aes.md)
  - [Others](./primitives/encryption-algorithms/block-ciphers/others.md)
- [RSA]()
  - [RSAES-OAEP](./primitives/encryption-algorithms/rsa-oaep.md)
  - [RSAES-PKCS1-v1_5](./primitives/encryption-algorithms/rsaes-pkcs1-v1_5.md)
  - [Native RSA](./primitives/encryption-algorithms/native-rsa.md)
- [Stream ciphers]()
  - [ChaCha20](./primitives/encryption-algorithms/stream-ciphers/chacha20.md)
  - [RC4](./primitives/encryption-algorithms/stream-ciphers/rc4.md)
  - [Salsa20](./primitives/encryption-algorithms/stream-ciphers/salsa20.md)
  - [XSalsa20](./primitives/encryption-algorithms/stream-ciphers/xsalsa20.md)
- [ElGamal]()

# Key exchange algorithms

- [Key exchange algorithms](./primitives/key-exchange-algorithms/index.md)
- [One party]()
  - [Random + RSA]()
    - [Static RSA key exchange](./primitives/key-exchange-algorithms/static-rsa-key-exchange.md)
- [Joint]()
  - [Classic DH]()
    - [DH](./primitives/key-exchange-algorithms/dh.md)
    - [DHE](primitives/key-exchange-algorithms/dhe.md)
  - [EC-based]()
    - [ECDH](./primitives/key-exchange-algorithms/ecdh.md)
    - [ECDHE](./primitives/key-exchange-algorithms/ecdhe.md)
    - [ECDH-ES](./primitives/key-exchange-algorithms/ecdh-es.md)
    - [X25519](./primitives/key-exchange-algorithms/x25519.md)
    - [ECIES](./primitives/encryption-algorithms/ecies.md)

# Primitives

- [Cryptographic hash functions](./primitives/cryptographic-hash-functions/index.md)
    - [MD2]()
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
  - [PKCS #7 padding](./primitives/padding-schemes/pkcs7-padding.md)
  - [PKCS #5 padding](./primitives/padding-schemes/pkcs5-padding.md)
  - [PKCS #1 v1.5 padding](./primitives/padding-schemes/PKCS1-v1_5.md)
  - [OAEP](./primitives/padding-schemes/oaep.md)
- [KDF](./primitives/kdf/index.md)
    - [PBKDF1](./primitives/kdf/pbkdf1.md)
    - [PBKDF2](./primitives/kdf/pbkdf2.md)
    - [Bcrypt]()
    - [Scrypt]()
    - [Argon]()
- [KEM](./primitives/kem/index.md)
  - [Kyber](./primitives/kem/kyber.md)
- [HPKE](./primitives/hpke.md)

---

# Cryptosystems

- [Elliptic Curve](./cryptosystems/ecc/index.md)
  - [Curve25519](./cryptosystems/ecc/curve25519.md)
  - [Ed25519](./cryptosystems/ecc/ed25519.md)
  - [P-256 / secp256r1 / prime256v1](./cryptosystems/ecc/p-256.md)
  - [P-384](./cryptosystems/ecc/p-384.md)
  - [secp256k1]()
- [Integer factorisation](./cryptosystems/ifc/index.md)
  - [RSA](./cryptosystems/ifc/rsa/index.md)
- [Finite field]()
  - [DH]()
  - [DSA](./cryptosystems/ffc/dsa.md)
  - [Elgamal (OG)]()
  - [Schnorr (OG)]()
- [Lattice-based cryptography](./cryptosystems/lattice-based-cryptography/index.md)

---

# Cryptographic keys

- [Shared secret](./cryptographic-keys/shared-secret.md)
- [Private-public key pair](./cryptographic-keys/private-public-key-pair.md)
- [DEK](./cryptographic-keys/dek.md)
- [CEK](./cryptographic-keys/cek.md)
- [KEK](./cryptographic-keys/kek.md)
- [Security tokens](./cryptographic-keys/security-tokens.md)
- [Password / passphrase](./cryptographic-keys/password-passphrase.md)

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

# Formats, encodings, standards

- [Formats](./formats/index.md)
  - [ECPrivateKey](./formats/ecprivatekey.md)
  - [PFX](./formats/pfx.md)
  - [PKCS #1](./formats/pkcs1.md)
  - [PKCS #7 / P7B](./formats/pkcs7.md)
  - [PKCS #8](./formats/pkcs8.md)
  - [PKCS #12](./formats/pkcs12.md)
  - [PKIPath](./formats/pkipath.md)
  - [JKS](./formats/jks.md)
  - [JWK / JWKS](./formats/jwk.md)
  - [JWT](./formats/jwt.md)
  - [PGP key](./formats/pgp-key.md)
  - [PGP message](./formats/pgp-message.md)
  - [OpenSSH private key](./formats/openssh-private-key.md)
  - [OpenSSH public key](./formats/openssh-public-key.md)
  - [SSH2 public key](./formats/ssh2-public-key.md)
  - [SAML token](./formats/saml-token.md)
  - [X.509](./formats/x509.md)
- [Encodings](./encodings/index.md)
  - [PEM](./encodings/pem.md)
  - [DER](./encodings/der.md)
  - [OpenPGP: ASCII armor & binary](./encodings/openpgp.md)
- [Standards](./standards.md)

---

# Measure

- [Entropy](./measure/entropy.md)
- [Key strength](./measure/key-strength.md)

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
- [Replay attack](./attacks/replay-attack.md)
- [Side-channel attack]()
  - [Timing attack](./attacks/timing-attack.md)
- [Birthday attack](./attacks/birthday-attack.md)
- [Timing attack](./attacks/timing-attack.md)
- [Rainbow attack](./attacks/rainbow-attack.md)
- [Brute-force attack]()
- [Padding Oracle Attack](./attacks/padding-oracle-attack.md)
- [Length extension attack]()
