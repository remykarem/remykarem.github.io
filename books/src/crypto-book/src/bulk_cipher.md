# Bulk cipher

A *deterministic* symmetric encryption algorithm operating on blocks

aka "secret key", "encryption key", "shared key", "private key"

|  | Type | Bytes at a time |
| --- | --- | --- |
| AES | Block | 16 |
| DES | Block | 8 |
| TDES | Block | 8 |
| RC4 | Stream | 1 |

---

# Block cipher

<aside>
💡 A **block** is a fixed-length group of *bits*

</aside>

- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)
- ARIA
- Blowfish
- IDEA

Block ciphers can operate in a *mode of operation*. This involves *repeated* XOR-ing a block etc. to achieve confidentiality and authentication. Involves some initial randomness (IV). Here are some:

- Confidentiality + Authentication
    - GCM
    - EAX
- Confidentiality
    - CBC — each block depends on the proper encryption block before it
    - ECB
    - CFB
    - CTR

# Stream cipher

Operates on 1 byte at a time

## RC
