# Encryption schemes

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