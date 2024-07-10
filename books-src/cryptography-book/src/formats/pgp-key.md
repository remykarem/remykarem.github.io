# PGP key

Anatomy of a PGP key:
* a (primary) key pair
* subkeys — secondary key pairs that can be used for signing, encryption.
* a User ID
* expiration date
* ...

Each key pair has its own key ID.

~~~admonish note title="Key ID"
A key ID is a fingerprint of a subkey.

A key ID can be in multiple formats:
* full (fingerprint)
* long (truncated version of fingerprint)
* short (truncated version of long)

```
gpg --list-keys --keyid-format LONG|SHORT
```
~~~

There are usually 2 key pairs involved when you generate a "PGP key pair":
1. an `[SC]` key
2. an `[E]` key

* `S` — signing
* `C` — certifying (verifying)
* `E` — encrypting

