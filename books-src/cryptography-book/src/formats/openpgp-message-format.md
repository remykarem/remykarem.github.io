# OpenPGP message format

[RFC 4880](https://datatracker.ietf.org/doc/html/rfc4880)

ASCII armor is an encoding used in OpenPGP.

It can be used to represent:
* PGP cryptographic objects (private key, public key)
* PGP encryption, signatures

~~~admonish example
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
