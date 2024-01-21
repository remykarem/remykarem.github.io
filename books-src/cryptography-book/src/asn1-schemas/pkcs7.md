# PKCS #7 / P7B

aka CMS (Cryptographic Message Syntax)

[RFC 2315](https://datatracker.ietf.org/doc/html/rfc2315)

This format can store _multiple_ certificates together. It can't contain private keys.

The individual certificates are in [X.509](./x509.md) format.
