# RSASSA-PKCS1-v1_5

Based on RSA

[RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017#section-8)

$$
(\text{message, hashfunction}) \rightarrow \text{signature}
$$

This algorithm is **deterministic**. It uses the [PKCS1-v1_5](../padding-schemes/PKCS1-v1_5.md) padding scheme.

~~~admonish warning
This signature scheme is an older method of creating digital signatures with RSA; it is **not as secure as the more probabilistic RSASSA-PSS**.
~~~

~~~admonish warning title="Bleichenbacher's Signature Forgery Attack"
In this attack, due to flaws in the padding scheme, an attacker is able to create a valid signaure from the public key, without needing access to the corresponding private key.
~~~