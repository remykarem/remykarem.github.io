# OpenPGP

Pretty Good Privacy

[RFC 4880](https://datatracker.ietf.org/doc/html/rfc4880)

OpenPGP is a hybrid encryption system for authenticating and encrypting data. It uses both a symmetric and asymmetric key.

OpenPGP also uses a decentralised trust model called **Web of Trust**. 

```admonish note title="OpenPGP vs. PGP"
People use "PGP" and "OpenPGP" interchangeably.
```

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

```admonish info title="OpenPGP vs. PGP"
PGP was originally developed as a propietary software for encrypting and decrypting emails.

OpenPGP is developed to provide a standard for PGP-compatible software. 
```

```admonish info title="Implementations"
* GPG (GnuPG) — OpenPGP-compliant software
* [GPGTools](https://gpgtools.org)
* Symantec's PGP

[OpenPGP implementations](https://www.openpgp.org/software/developer/)
```

```admonish question title="Who's using PGP?"
* AWS Transfer Family: [Encrypt and decrypt files with PGP and AWS Transfer Family](https://aws.amazon.com/blogs/storage/encrypt-and-decrypt-files-with-pgp-and-aws-transfer-family/)
* GitHub: [Commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
* IntelliJ: [Set up GPG commit signing](https://www.jetbrains.com/help/idea/set-up-GPG-commit-signing.html)
* Apple: [Protecting Security Information](https://support.apple.com/en-us/HT201214)
```

```admonish warning
PGP is an [insecure](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) and [outdated](https://moxie.org/2015/02/24/gpg-and-me.html) ecosystem that hasn’t reflected cryptographic best practices in [decades](https://blog.cryptographyengineering.com/2014/08/13/whats-matter-with-pgp/).

Source: https://blog.yossarian.net/
```