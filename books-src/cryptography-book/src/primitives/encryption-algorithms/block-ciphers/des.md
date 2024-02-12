# DES

Data Encryption Standard

[FIPS 46-3](https://csrc.nist.gov/pubs/fips/46-3/final)

DES operates on a **block of 64 bits** using a 64-bit key.

~~~admonish note title="Effective key bits"
The key is actually 56 bits long. 8 bits are for parity.
~~~

~~~admonish warning title="Obsolete"
NIST no longer approves of DES as a block cipher. See withdrawal document [here](https://csrc.nist.gov/news/2023/nist-to-withdraw-sp-800-67-rev-2).

OpenSSL considers this as a weak cipher.

[Source](https://www.openssl.org/blog/blog/2016/08/24/sweet32/)
~~~

Obsolete and broken.
