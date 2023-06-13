# PKCS #12

[RFC 7292](https://datatracker.ietf.org/doc/html/rfc7292)

Common filenames: `.pfx`, `.p12`

From Wikipedia:

This standard defines an archive file format for storing multiple cryptographic objects in a single file. Additionally, like PKCS #8, it can be encrypted.

It is commonly used to *bundle* a private key with its X.509 certificate or to bundle all the members of a chain trust.

Java's [keystore](./jks.md) format is PKCS #12.
