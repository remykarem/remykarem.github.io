# PGP

[RFC 4880](https://datatracker.ietf.org/doc/html/rfc4880)

PGP is an encryption program for encrypting data.

Encryption:

$$
\text{(message, \textbf{key})} \rightarrow \text{ciphertext}
$$

$$
\text{(\textbf{key}, \textbf{public key})} \rightarrow \text{\textbf{encrypted key}}
$$

Decryption:

$$
\text{(\textbf{encrypted key}, \textbf{private key})} \rightarrow \textbf{key}
$$

$$
\text{(\textbf{key}, \text{ciphertext})} \rightarrow \text{message}
$$

```admonish warning
PGP is an [insecure](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) and [outdated](https://moxie.org/2015/02/24/gpg-and-me.html) ecosystem that hasn’t reflected cryptographic best practices in [decades](https://blog.cryptographyengineering.com/2014/08/13/whats-matter-with-pgp/).

Source: https://blog.yossarian.net/
```

```admonish example title="Who's using PGP?"
AWS Transfer Family is.

[Encrypt and decrypt files with PGP and AWS Transfer Family](https://aws.amazon.com/blogs/storage/encrypt-and-decrypt-files-with-pgp-and-aws-transfer-family/)
```

```admonish info title="Variants"
* OpenPGP — open standard
* GPG (GnuPG) — OpenPGP-compliant software
* Symantec's PGP
```
