# Key exchange

In key exchange protocols, _both parties_ contribute to the negotiation of a **shared secret** ("key").

This shared secret can be used for encryption, typically [block ciphers](../encryption-algorithms/block-ciphers/index.md) or stream ciphers.

In a key exchange algorithm, each party must have a private and public key respectively.

~~~admonish hint title="Raw shared secret and KDF"
In practise, the raw shared secret that is generated is not used for encryption.

Instead, the raw shared secret undergoes KDF.
~~~

~~~admonish example title="Use case"
A common use case for key exchange algorithms is to establish a secure channel for communication.
~~~
