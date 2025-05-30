# Key exchange

In key exchange protocols, _both parties_ contribute to the negotiation of a [shared secret](../../cryptographic-keys/shared-secret.md).

This shared secret can be used for encryption, typically [block ciphers](../encryption-algorithms/block-ciphers/index.md) or stream ciphers.

In a key exchange algorithm, each party must have a private and public key respectively.

~~~admonish hint title="Analogy: Key exchange vs. shared secret"
In shared secret, in order to exchange messages in the regular "channel", both parties need to meet somewhere first to exchange the shared secret.

In key exchange, you don't have to.
~~~

~~~admonish hint title="Raw shared secret and KDF"
In practise, the raw shared secret that is generated is not used for encryption.

Instead, the raw shared secret undergoes KDF.
~~~

~~~admonish example title="Use case"
A common use case for key exchange algorithms is to establish a secure channel for communication.
~~~
