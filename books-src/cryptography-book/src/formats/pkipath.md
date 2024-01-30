# PKIPath

Found in [RFC 6066](https://datatracker.ietf.org/doc/html/rfc6066)

ASN.1 schema

This format can store multiple certificates together. It can't contain private keys.

```
PkiPath ::= SEQUENCE OF Certificate

PkiPath is used to represent a certification path.  Within the
sequence, the order of certificates is such that the subject of
the first certificate is the issuer of the second certificate,
etc.
```

~~~admonish example title="PKIPath in SOAP requests"
This format is used in a SOAP request to represent multiple X.509 certificates according to the [OASIS Web Services Security X.509 Certificate Token Profile](https://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0.pdf).
~~~
