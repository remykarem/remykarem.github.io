# PKCS #12

[RFC 7292](https://datatracker.ietf.org/doc/html/rfc7292)

Common filenames: `.p12`, `.pfx`

This format can store _multiple_ cryptographic objects:
* private key,
* server certificate, and
* CA certificates.

The individual certificates are in [X.509](./x509.md) format.

```admonish example
openssl pkcs12 -export -inkey privatekey.pem -in cert.pem -certfile cacert.pem -out pkcs12.pfx
```
