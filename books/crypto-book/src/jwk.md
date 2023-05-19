# JWK / JWKS

[RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)

A JWK (JSON Web Key) is a JSON representation of cryptographic keys — PKI (private or public) and symmetric keys. The values are all Base64 URL-safe.

A JWK set can hold multiple keys.

## RSA key

A JWK representing a _public_ RSA key looks like this (taken from [here](https://datatracker.ietf.org/doc/html/rfc7517#appendix-A.1)).

```json
{
    "kty":"RSA",
    "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx
     4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMs
     tn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2
     QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbI
     SD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqb
     w0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw",
    "e":"AQAB",
    "alg":"RS256",
    "kid":"2011-04-29"
}
```

## EC key

For example, a JWK representing a _private_ EC key looks like this (taken from [here](https://datatracker.ietf.org/doc/html/rfc7517#appendix-A.2)).

```json
{
    "kty": "EC",
    "crv": "P-256",
    "x": "MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4",
    "y": "4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM",
    "d": "870MB6gfuTJ4HtUnUvYMyJpr5eUZNP4Bk43bVdj3eAE",
    "use": "enc",
    "kid": "1"
}
```

```admonish warning
The `"d"` key means that this JWK is an EC *private* key, where `d` is a convention in ECC to refer to the private key.
```

## Symmetric key

An example JWK representing a symmetric key looks like this (taken from [here](https://datatracker.ietf.org/doc/html/rfc7517#appendix-A.3)):

```json
{
    "kty":"oct",
    "alg":"A128KW",
    "k":"GawgguFyGrWKav7AX4VKUg"
}
```
