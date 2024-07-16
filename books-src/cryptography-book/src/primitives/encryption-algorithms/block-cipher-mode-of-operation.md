#  Block cipher mode of operation

A mode of operation is a way to use block cipher to encrypt (and authenticate) _arbitrary_ amounts of data.

This involves *repeated* transformations of a block.

$$
\text{(message, \textbf{key}, \textbf{modeofoperation})} \rightarrow \text{ciphertext}
$$

$$
\text{(ciphertext, \textbf{key}, \textbf{modeofoperation})} \rightarrow \text{message}
$$

Here are some of the different modes of operation:

| Mode of operation | Requires IV | Brief description                               |
|-------------------|-------------|-------------------------------------------------|
| ECB               | No          | Blocks encrypted independently                  |
| CBC               | Yes         | XOR current block with previous encrypted block |
| CFB               | Yes         | ?                                               |
| OFB               | Yes         | Turns a block cipher into a stream cipher       |
| CTR               | Yes         | Turns a block cipher into a stream cipher       |
| XTS               | Yes         |                                                 |

~~~admonish note title="Initialisation vector"
Some modes of operation use an **IV** to ensure that the same plaintext will not always get encrypted to the same ciphertext. 

The same IV is needed when decrypting the ciphertext.
~~~

~~~admonish warning title="Don't use ECB"
ECB is generally not recommended for use because identical plaintext blocks produce identical ciphertext blocks, making it vulnerable to pattern analysis.
~~~

~~~admonish warning title="Don't use CBC"
CBC is prone to [Padding Oracle Attacks](../../attacks/padding-oracle-attack.md) and [timing attacks](../../attacks/timing-attack.md).

* Cloudflare: [Padding oracles and the decline of CBC-mode cipher suites](https://blog.cloudflare.com/padding-oracles-and-the-decline-of-cbc-mode-ciphersuites)
* [The Padding Oracle Attack](https://robertheaton.com/2013/07/29/padding-oracle-attack/)
~~~

[AES-GCM and breaking it on nonce reuse](https://frereit.de/aes_gcm/)
