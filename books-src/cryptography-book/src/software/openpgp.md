# OpenPGP

Pretty Good Privacy

[RFC 4880](https://datatracker.ietf.org/doc/html/rfc4880), [RFC 6637](https://datatracker.ietf.org/doc/html/rfc6637)

[OpenPGP options](https://www.gnupg.org/(es)/documentation/manuals/gnupg/OpenPGP-Options.html)

OpenPGP is an open _standard_ for hybrid encryption system to authenticate and encrypt data using existing cryptosystems like RSA, ECC, ElGamal and DSA. It uses both a symmetric and asymmetric key.

Functions:

* encryption/decryption
  * RSA
  * ECC-based key exchange protocol
* signature
  * RSA
  * ECC-based
* certification

OpenPGP has the concept of keys and subkeys.

```admonish note title="OpenPGP vs. PGP"
People use "PGP" and "OpenPGP" interchangeably.

PGP was originally developed as a propietary software for encrypting and decrypting emails.

The OpenPGP standard was later developed, based on PGP, to provide a standard for PGP-compatible software.

Modern versions of PGP are designed to be compatible with the OpenPGP standard.
```

## Encryption/decryption

Encryption:

$$
\text{(message, \textbf{cek})} \rightarrow \text{ciphertext}
$$

$$
\text{(\textbf{cek}, \textbf{public key})} \rightarrow \text{\textbf{encrypted cek}}
$$

~~~admonish note
The ciphertext is usually sent together with the encrypted CEK. 
~~~

Decryption:

$$
\text{(\textbf{encrypted cek}, \textbf{private key})} \rightarrow \textbf{cek}
$$

$$
\text{(\textbf{key}, \text{ciphertext})} \rightarrow \text{message}
$$

The shared secret isn't explicitly present in the key structure. 

Instead, a unique symmetric key is generated for every message.

## Signature

In addition to encryption, OpenPGP allows the sender to sign the message using the private key.

## Trust

You can include information about which keys you trust or have signed in your public key ring when you distribute your public key.

~~~admonish note title="Keyring"
A collection of keys that a user has stored on their system.

There are 2 types of keyrings:
* public key ring
* private key ring
~~~

## Subkeys

* **Enhanced security** — Subkeys can be rotated or revoked independently of the primary key, minimizing the risk if a subkey is compromised.
* **Separation of duties** — Different subkeys can be assigned for different purposes (encryption, signing, authentication), making it easier to manage and use them securely.

---

```admonish info title="Implementations"
* PGP by Symantec — commercial encryption tool
* GPG (Gnu Privacy Guard) — OpenPGP-compliant software
* [GPGTools](https://gpgtools.org)

[OpenPGP implementations](https://www.openpgp.org/software/developer/)
```

```admonish question title="Who's using PGP?"
* AWS Transfer Family: [Encrypt and decrypt files with PGP and AWS Transfer Family](https://aws.amazon.com/blogs/storage/encrypt-and-decrypt-files-with-pgp-and-aws-transfer-family/)
* GitHub: [Commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
* IntelliJ: [Set up GPG commit signing](https://www.jetbrains.com/help/idea/set-up-GPG-commit-signing.html)
* Apple: [Protecting Security Information](https://support.apple.com/en-us/HT201214)
* NIST: [Encrypting Software/Data for Transmission to NIST](https://www.nist.gov/itl/iad/image-group/products-and-services/encrypting-softwaredata-transmission-nist)
* GitHub: [Storing large secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#storing-large-secrets)
```

~~~admonish question title="Why does GPG require TTY? What is a GPG agent?"
When a GPG requires a passphrase or private key, it communicates with the GPG agent.

A GPG agent handles keys, caches passphrases etc.

A TTY is needed to prompt the user for passphrase when GPG performs signing, encrypting etc.

An alternative is to use a graphical interface like Pinentry, which is part of the GPG suite. This is configured in GPG agent config.

Places to configure: `~/.gnupg/gpg-agent.conf`, `~/.gnupg/gpg.conf`.
~~~

```admonish warning
PGP is an [insecure](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) and [outdated](https://moxie.org/2015/02/24/gpg-and-me.html) ecosystem that hasn’t reflected cryptographic best practices in [decades](https://blog.cryptographyengineering.com/2014/08/13/whats-matter-with-pgp/).

Source: https://blog.yossarian.net/
```
