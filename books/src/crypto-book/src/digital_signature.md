# Digital signature

The goal of digital signature is... authenticity?

* [RSA](./rsa.md)
* [ECDSA](./ecdsa.md)
* [JWT](./jwe.md)

# JWS

JSON Web Signature, RFC 7515

- RSA PKCS1-v1.5
- RSA PSS
- ECDSA

## RSASSA-PKCS1-v1_5

[https://datatracker.ietf.org/doc/html/rfc7518#section-3.3](https://datatracker.ietf.org/doc/html/rfc7518#section-3.3)

- [RS256](https://static.javadoc.io/com.nimbusds/nimbus-jose-jwt/5.1/com/nimbusds/jose/JWSAlgorithm.html#RS256) - RSA PKCS#1 signature with SHA-256
- [RS384](https://static.javadoc.io/com.nimbusds/nimbus-jose-jwt/5.1/com/nimbusds/jose/JWSAlgorithm.html#RS384) - RSA PKCS#1 signature with SHA-384
- [RS512](https://static.javadoc.io/com.nimbusds/nimbus-jose-jwt/5.1/com/nimbusds/jose/JWSAlgorithm.html#RS512) - RSA PKCS#1 signature with SHA-512

💡 RFC 7518

## RSASSA-PSS

[https://datatracker.ietf.org/doc/html/rfc7518#section-3.5](https://datatracker.ietf.org/doc/html/rfc7518#section-3.5)

- [PS256](https://static.javadoc.io/com.nimbusds/nimbus-jose-jwt/5.1/com/nimbusds/jose/JWSAlgorithm.html#PS256) - RSA PSS signature with SHA-256
- [PS384](https://static.javadoc.io/com.nimbusds/nimbus-jose-jwt/5.1/com/nimbusds/jose/JWSAlgorithm.html#PS384) - RSA PSS signature with SHA-384
- [PS512](https://static.javadoc.io/com.nimbusds/nimbus-jose-jwt/5.1/com/nimbusds/jose/JWSAlgorithm.html#PS512) - RSA PSS signature with SHA-512

💡 RFC 7518
