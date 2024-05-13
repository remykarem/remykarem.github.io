# SSH2 public key

[RFC 4716](https://datatracker.ietf.org/doc/html/rfc4716)

~~~admonish example title="Example: SSH2 public key"
```txt
---- BEGIN SSH2 PUBLIC KEY ----
Comment: "2048-bit RSA, converted by ..."
AAAAB...
---- END SSH2 PUBLIC KEY ----
```
~~~

~~~admonish warning title="Like PEM but not PEM"
This format is not a PEM format.

It also does not use DER-encoding to serialise the crytographic objects.
~~~
