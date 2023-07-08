# JWT

[RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)

A JWT (JSON Web Token) is a text-based dot-separated Base64 URL-safe representation of *signature*, claims, metadata, and ciphertext.

~~~admonish example

(newline spaces added for readability):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
~~~

This token is normally used in HTTP requests under the Authorization header.

JWTs can either have the following structures:
* JWS (JSON Web Signature)
* JWE (JSON Web Encryption)

See [jwt.io](https://jwt.io) for more info.
