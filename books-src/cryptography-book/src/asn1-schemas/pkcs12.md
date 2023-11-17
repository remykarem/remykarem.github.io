# PKCS #12

[RFC 7292](https://datatracker.ietf.org/doc/html/rfc7292)

Common filenames: `.pfx`, `.p12`

This format can store _multiple_ cryptographic objects:
* private key,
* server certificate, and
* intermediate certificates.

The individual certificates are in [X.509](./x509.md) format.
