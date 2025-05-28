# RSAES-PKCS1-v1_5

[RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447); republication of PKCS #1

~~~admonish question title="Why is RSA slow?"
* Plaintext needs to be converted to numbers.
* Numbers undergo large arithmetic operations (modular exponentiation).
* Involves 2048/4096/8192 bits. AES involves 128/256/512 bits at a time.
~~~
