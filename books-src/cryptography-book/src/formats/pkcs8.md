# PKCS #8

[RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208)

ASN.1 schema

PKCS #8 is a format that is commonly used for many public-private keys. It provides an option to encrypt the private key.

A private key is defined in [Section 5](https://datatracker.ietf.org/doc/html/rfc5208#section-5):

```
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL
}
```

```admonish question title="Public keys"
What about public keys? Where are they defined??
```
