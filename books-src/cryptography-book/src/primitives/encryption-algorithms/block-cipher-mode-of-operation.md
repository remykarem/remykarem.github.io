#  Block cipher mode of operation

Block ciphers (eg. AES, DES) usually operate in a **mode of operation**. This involves *repeated* transformations of a block, in order to achieve confidentiality and authentication. 

$$
\text{(message, \textbf{key}, \textbf{modeofoperation})} \rightarrow \text{ciphertext}
$$

$$
\text{(ciphertext, \textbf{key}, \textbf{modeofoperation})} \rightarrow \text{message}
$$

Here are some of the different modes of operation:

| Mode of operation | Requires IV | Brief description                    |
|-------------------|-------------|--------------------------------------|
| ECB               | No          | Blocks encrypted independently       |
| CBC               | Yes         | Each block depends on previous block |
| CFB               | Yes         | ?                                    |
| OFB               | Yes         | ?                                    |
| CTR               | Yes         | ?                                    |

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
