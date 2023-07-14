# JWT

[RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)

JSON Web Token

A JWT is a text-based dot-separated Base64 URL-safe representation of **signature**, **claims** (eg. who you claim to be), **ciphertext**, and other metadata.

JWTs can either be a:
* JWS
* JWE

This token is normally used in HTTP requests under the Authorization header.

## JWS

[RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515) (JSON Web Signature)

A JWS token consists of:
* header
* payload
* signature

~~~admonish example

This token is a JWS token.

(newline spaces added for readability):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
~~~

~~~admonish note
The [jwt.io](https://jwt.io) playground generates signatures i.e. JWS tokens.
~~~

## JWE

[RFC 7516](https://datatracker.ietf.org/doc/html/rfc7516) (JSON Web Encryption)

A JWE token consists of
* header
* key (encrypted) — this key is used to encrypt the payloads, which is the purpose of JWEs
* initialisation vector
* ciphertext
* signature

