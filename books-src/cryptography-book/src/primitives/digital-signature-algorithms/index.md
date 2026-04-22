# Digital signature algorithms

aka digital signature schemes, signature schemes

Digital signatures offer:
* [authenticity](../../goals/authenticity.md)
* [non-repudiation](../../goals/non-repudiation.md), and
* [integrity](../../goals/integrity.md).

They typically involve a private-public key pair.

You typically _sign a message_ with a private key:

$$
(\text{message, privatekey}) \rightarrow \text{signature}
$$

and _verify a signature_ with a public key:

$$
(\text{signature, publickey}) \rightarrow \text{valid|invalid}
$$

```admonish note
Typically we say _sign_ with the private key and _verify_ with the public key instead of "encrypt" and "decrypt" respectively.
```

Signing usually involves a hash function and padding.
