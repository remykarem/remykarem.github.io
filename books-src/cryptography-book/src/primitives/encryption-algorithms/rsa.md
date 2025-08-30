# RSAES-OAEP

[RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447)

There are 2 main encryption and decryption schemes for RSA (as seen [here](https://en.wikipedia.org/wiki/PKCS_1#Schemes)):

* PKCS#1 v1.5 OAEP

* PKCS#1 v1.5 (old)

* (Native)

~~~admonish warning
Native encryption is deterministic
~~~

~~~admonish example title="OpenSSL"
See the `openssl-pkeyutl` docs (OpenSSL 3.0) [here](https://www.openssl.org/docs/man3.0/man1/openssl-pkeyutl.html). Note that `rsautl` is deprecated.
~~~

~~~admonish question title="Why is RSA slow?"
* Plaintext needs to be converted to numbers.
* Numbers undergo large arithmetic operations (modular exponentiation).
* Involves 2048/4096/8192 bits. AES involves 128/256/512 bits at a time.
~~~
