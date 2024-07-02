# Authenticated encryption

Authenticated encryption is a symmetric encryption that offers:
* [confidentiality](../../goals/confidentiality.md)
* [authenticity](../../goals/authenticity.md) – only someone with the correct key could have generated an authentication tag that matches the one calculated by recipient
* [integrity](../../goals/integrity.md) – via authentication tag

The authentication tag is based on:
* the key
* the ciphertext
* the associated data

Examples:
* AES + GCM — includes an authentication tag
* AES + CCM — includes a MAC
* AES + EAX + OCB
* ChaCha20 + Poly1305

~~~admonish question tirle="What was it like previously?"
In TLS, it's referred to as MAC-then-Encrypt.

[Source](https://blog.cloudflare.com/padding-oracles-and-the-decline-of-cbc-mode-ciphersuites)
~~~

~~~admonish info title="In use"
TLS 1.3 uses ChaCha20-Poly1305 and AES-GCM.
~~~

References:
* [Lucid Multi-Key Deputies Require Commitment](https://scottarc.blog/2022/10/17/lucid-multi-key-deputies-require-commitment/)
