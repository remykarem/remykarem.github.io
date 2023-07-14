# Encryption schemes

There are 2 main encryption and decryption schemes for RSA (as seen [here](https://en.wikipedia.org/wiki/PKCS_1#Schemes)):

* PKCS#1 v1.5 OAEP

* PKCS#1 v1.5 (old)

* (Native)

```admonish warning
**PKCS#1 v1.5** decryption is intrinsically vulnerable to timing attacks, demonstrated by Bleichenbacher's attack. See [here](https://en.wikipedia.org/wiki/PKCS_1#Attacks).
```

~~~admonish warning
Native encryption is deterministic
~~~
