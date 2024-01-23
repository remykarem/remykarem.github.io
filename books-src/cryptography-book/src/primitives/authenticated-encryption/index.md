# Authenticated encryption

Authenticated encryption offers:
* [confidentiality](../goals/confidentiality.md)
* [authenticity](../goals/authenticity.md) – only someone with the correct key could have generated an authentication tag that matches the one calculated by recipient
* [integrity](../goals/integrity.md) – via authentication tag

The authentication tag is based on:
* the key
* the ciphertext
* the associated data

Examples:
* AES + GCM — includes an authentication tag
* AES + CCM — includes a MAC
* AES + EAX + OCB
* ChaCha20 + Poly1305
