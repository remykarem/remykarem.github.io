# ECPrivateKey

[RFC 5915](https://datatracker.ietf.org/doc/html/rfc5915)

An EC private key is defined in [Appendix A](https://datatracker.ietf.org/doc/html/rfc5915#appendix-A):

```
ECPrivateKey ::= SEQUENCE {
    version        INTEGER { ecPrivkeyVer1(1) } (ecPrivkeyVer1),
    privateKey     OCTET STRING,
    parameters [0] ECParameters {{ NamedCurve }} OPTIONAL,
    publicKey  [1] BIT STRING OPTIONAL
}
```
