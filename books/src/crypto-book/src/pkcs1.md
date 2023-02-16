# PKCS #1

[RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017)

PKCS #1 is a specification for RSA keys only. The encoding is specified by the ASN.1 syntax.

PEM-encoded PKCS #1 RSA private key:

```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAI....
....
-----END RSA PRIVATE KEY-----
```

Running 

```
openssl asn1parse -in secret.pem -i
```

returns

```
    0:d=0  hl=4 l= 604 cons: SEQUENCE          
    4:d=1  hl=2 l=   1 prim:  INTEGER           :00
    7:d=1  hl=3 l= 129 prim:  INTEGER           :BE084...
  139:d=1  hl=2 l=   3 prim:  INTEGER           :010001
  144:d=1  hl=3 l= 128 prim:  INTEGER           :13B8660...
  275:d=1  hl=2 l=  65 prim:  INTEGER           :E94FFF...
  342:d=1  hl=2 l=  65 prim:  INTEGER           :D082DEBBDD...
  409:d=1  hl=2 l=  64 prim:  INTEGER           :2894A097FFF...
  475:d=1  hl=2 l=  65 prim:  INTEGER           :C68A4691B...
  542:d=1  hl=2 l=  64 prim:  INTEGER           :7D7A73E5A...
```

Note that OpenSSL 3.x refers to PKCS #1 keys as `traditional`. See `man openssl-genrsa`.

References
* [PKCS1 vs PKCS8 for RSA](https://stackoverflow.com/questions/48958304/pkcs1-and-pkcs8-format-for-rsa-private-key)
