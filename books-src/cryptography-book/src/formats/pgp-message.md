# PGP message

aka OpenPGP message

[RFC 4880](https://datatracker.ietf.org/doc/html/rfc4880)

The PGP message format can be used to represent:
* cryptographic objects (eg. private key, public key)
* encryption, signatures

A PGP message contains:
* Encrypted Session Key Packet — the encrypted shared secret
* the encrypted message

  Types of encrypted data packet:
  * SEP — Symmetrically Encrypted Data Packet
  * SEIPD — Symmetrically Encrypted Data Integrity Protected Data Packet (it's like SEP++)
  * AEAD
  
* signature, if any

~~~admonish example title="OpenPGP public key"
```txt
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZSjy8BYJKwYBBAHaRw8BAQdA90Fe3DSjPtYFKmMp0huFxxS8CS21LyCoPKNw
2jjB8P60LlJhaW1pIGJpbiBLYXJpbSA8YnJ1c2hlZC1wYXNjYWwuMDlAaWNsb3Vk
LmNvbT6IkwQTFgoAOxYhBHggHL+sWg1YCZAXS389rrWv7DZXBQJlKPLwAhsDBQsJ
CAcCAiICBhUKCQgLAgQWAgMBAh4HAheAAAoJEH89rrWv7DZXS3oBALOhJnecFfKT
tpaVjKSc4ANsaJcCuDzO+03GQqaNKUhqAP46xoS626H+p8uVyRfcxn0M1h8qSnmy
4gckefnbUiBHAg==
=ujb1
-----END PGP PUBLIC KEY BLOCK-----
```

The `=ujb1` is the checksum.
~~~

~~~admonish tip title="Inspecting a PGP message"
```
gpg --list-packets <file>
```

Fyi this option is not in the `--help` -.-
~~~
