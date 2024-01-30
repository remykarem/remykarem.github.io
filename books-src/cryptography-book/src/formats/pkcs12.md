# PKCS #12

[RFC 7292](https://datatracker.ietf.org/doc/html/rfc7292)

Common filenames: `.p12`, `.pfx`

ASN.1 schema

This format can store _at least one_ of the following cryptographic objects:
* **private key**,
* server certificate, and
* CA certificates.

The individual certificates are in [X.509](./x509.md) format.

Note that the output can additionally be protected by password ("import password" / "export password") too.

Additionally, when importing a PKCS #12, you can encrypt the underlying private key before exporting the private key out.

~~~admonish example
```
openssl pkcs12 -export -inkey privatekey.pem -in cert.pem -certfile cacert.pem -out pkcs12.pfx
```
~~~
