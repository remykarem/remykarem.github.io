# PKCS #8

[RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208)

PKCS #8 applies to all PKI keys. It provides an option to encrypt the private key.

PKCS #8 can be PEM-encoded as the following:

**Private key**

```
----BEGIN PRIVATE KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
...
-----END PRIVATE KEY-----
```

**Encrypted private key**

```
----BEGIN PRIVATE KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
...
-----END PRIVATE KEY-----
```

**Public key**

```
----BEGIN PUBLIC KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
...
-----END PUBLIC KEY-----
```

The ASN.1 syntax returns

```
    0:d=0  hl=4 l=1212 cons: SEQUENCE          
    4:d=1  hl=2 l=   1 prim:  INTEGER           :00
    7:d=1  hl=2 l=  13 cons:  SEQUENCE          
    9:d=2  hl=2 l=   9 prim:   OBJECT            :rsaEncryption
   20:d=2  hl=2 l=   0 prim:   NULL              
   22:d=1  hl=4 l=1190 prim:  OCTET STRING      [HEX DUMP]:308204A2...
```