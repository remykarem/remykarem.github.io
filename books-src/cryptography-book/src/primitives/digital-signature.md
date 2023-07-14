# Digital signature algorithms

aka digital signature schemes, signature schemes

Digital signatures typically involve a private-public key pair.

You typically _generate signatures_:

$$
(\text{claim}) \rightarrow \text{signature}
$$

and _verify signatures_:

$$
(\text{signature}) \rightarrow \text{valid|invalid}
$$

```admonish note
Typically we say _sign_ with the private key and _verify_ with the public key instead of "encrypt" and "decrypt" respectively.
```

Signing usually involves a hash function and padding.
