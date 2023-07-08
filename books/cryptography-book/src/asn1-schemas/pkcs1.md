# PKCS #1

[RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017)

PKCS #1 is a specification for RSA keys only. The encoding is specified by the ASN.1 syntax.

The RSA private key is defined in [Appendix A.1.2](https://datatracker.ietf.org/doc/html/rfc8017#appendix-A.1.2):

```
RSAPrivateKey ::= SEQUENCE {
    version           Version,
    modulus           INTEGER,  -- n
    publicExponent    INTEGER,  -- e
    privateExponent   INTEGER,  -- d
    prime1            INTEGER,  -- p
    prime2            INTEGER,  -- q
    exponent1         INTEGER,  -- d mod (p-1)
    exponent2         INTEGER,  -- d mod (q-1)
    coefficient       INTEGER,  -- (inverse of q) mod p
    otherPrimeInfos   OtherPrimeInfos OPTIONAL
}
```

The RSA public key is defined in [Appendix A.1.1](https://datatracker.ietf.org/doc/html/rfc8017#appendix-A.1.1):

```
RSAPublicKey ::= SEQUENCE {
    modulus           INTEGER,  -- n
    publicExponent    INTEGER   -- e
}
```

References:
[PKCS1 vs PKCS8 for RSA](https://stackoverflow.com/questions/48958304/pkcs1-and-pkcs8-format-for-rsa-private-key)
