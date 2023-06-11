# PKCS #8

[RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208)

PKCS #8 applies to all PKI keys. It provides an option to encrypt the private key.

A private key is defined in [Section 5](https://datatracker.ietf.org/doc/html/rfc5208#section-5):

```
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL }
```

```admonish question title="Public keys"
What about public keys? Where are they defined??
```

PEM-encoded keys will have the following headers:

```
----BEGIN PRIVATE KEY----
```

```
----BEGIN ENCRYPTED PRIVATE KEY----
```

```
----BEGIN PUBLIC KEY----
```
