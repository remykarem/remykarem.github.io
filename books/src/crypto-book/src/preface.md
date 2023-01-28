# Preface

[https://cryptobook.nakov.com](https://cryptobook.nakov.com/)

[https://connect2id.com/products/nimbus-jose-jwt/examples](https://connect2id.com/products/nimbus-jose-jwt/examples)

https://developers.google.com/tink/deterministic-encryption

# Scenarios

* Only encrypting the HTTP payload ("confidentiality")

    An attacker might not be able to read the data in transit. But they may be able to flip bits without detection. A GET can be changed to PUT by flipping bits, without interfering with the ciphertext.

* Only appending a checksum ("data integrity")

    An attacker can generate a correct sum.

# Goals

Typically, you want to make sure that the *data* you receive:

1. came from a known source (**authenticity**)
2. was not altered during transmission (**integrity**)
3. (optional) not understood by anyone during the transmission (**confidential**)

You also want to make sure that *attackers*:

1. cannot reuse any submitted proofs (**resistance to replay attack**)
2. cannot find any pattern from the encryption (**high entropy**, dependent on the encryption algorithm)

You also want to make sure that the *sender*:

1. cannot deny sending the information or deny the authenticity of the signature (**non-repudiation**). This can be achieved by the concept of a unique key not meant to be shared (**private key**).

Based on these requirements, here is an example infrastructure:

* There are 2 sets of keys:
    * For encryption - sender has the public key X, receiver has a private key Y.
    * For signing - sender has the private key A, receiver has a public key B.
* Sender encrypts payload (confidentiality, authenticity) with the public key X.
* Sender signs payload together with current timestamp (resistance to replay attack) with private key A.

Definitions:

* Integrity — proof that the item is not altered

* Authenticity/authentication — proof that the item comes from a known source

* Confidentiality/privacy/secrecy — no one can read (and understand) the message in the item

* Symmetry — if there is content encryption, is the same key used for both encryption and decryption?

* Randomisation - if there is content encryption, will the same plaintext yield different ciphertexts?

* Non-repudiation — the signer cannot deny that they signed (because...?)

[https://en.wikipedia.org/wiki/Confusion_and_diffusion](https://en.wikipedia.org/wiki/Confusion_and_diffusion)

Ting | Confidentiality | Authenticity | Integrity | Symmetry | Output randomness
-----|-----------------|--------------|------------|----|---------------
MAC  | ❌ | ❌ | ✅ | Symmetric | Either
Digital signature, HMAC   | ❌ | ✅ | ✅ | Asymmetric | ?
Deterministic AEAD | ✅ | ✅ | - | Symmetric | Deterministic
AEAD ciphertext | ✅ | ✅ | -| Symmetric | Random
Basic AES ciphertext | ✅ | ? | -| Symmetric | Random
Public-key ciphertext | ✅ | ✅ | -| Asymmetric | Random
