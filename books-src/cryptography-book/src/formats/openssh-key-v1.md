# openssh-key-v1

This is the OpenSSH "proprietary" private key format.

~~~admonish note
Traditionally OpenSSH has used the OpenSSL-compatible formats PKCS#1 (for RSA) and SEC1 (for EC) for private keys.
~~~

~~~admonish warning title="Looks like PKCS #1"
Note that OpenSSH can generate a PEM of that looks like PKCS #1 but it's not.

An example is when you encrypt the RSA private key.
~~~

~~~admonish example
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAaAAAABNlY2RzYS
1zaGEyLW5pc3RwMjU2AAAACG5pc3RwMjU2AAAAQQR9WZPeBSvixkhjQOh9yCXXlEx5CN9M
yh94CJJ1rigf8693gc90HmahIR5oMGHwlqMoS7kKrRw+4KpxqsF7LGvxAAAAqJZtgRuWbY
EbAAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBH1Zk94FK+LGSGNA
6H3IJdeUTHkI30zKH3gIknWuKB/zr3eBz3QeZqEhHmgwYfCWoyhLuQqtHD7gqnGqwXssa/
EAAAAgBzKpRmMyXZ4jnSt3ARz0ul6R79AXAr5gQqDAmoFeEKwAAAAOYWpAYm93aWUubG9j
YWwBAg==
-----END OPENSSH PRIVATE KEY-----
```
~~~

Links:
- [The OpenSSH Private Key Format](https://coolaj86.com/articles/the-openssh-private-key-format/)
- [OpenSSH private key binary format](http://dnaeon.github.io/openssh-private-key-binary-format/)
