# ASN.1 schemas

Private and public key data are often encoded into binary using the ASN.1 DER encoding rules.

Additionally, these binaries are also usually converted into the Base64 format.

The data that is encoded depends on the schemas used (e.g. PKCS #8).

The following can store a private key:
* [PKCS #1](./pkcs1.md)
* [PKCS #8](./pkcs8.md)
* [PKCS #12](./pkcs12.md)
* [PFX](./pfx.md)

The following can store a public key:
* [PKCS #1](./pkcs1.md)
* [PKCS #12](./pkcs12.md)
* [PFX](./pfx.md)
* [X.509](./x509.md)
* [PKIPath](./pkipath.md)
