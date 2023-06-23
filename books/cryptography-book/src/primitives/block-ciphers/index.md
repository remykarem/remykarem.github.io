# Block ciphers

A **deterministic** encryption algorithm operating on blocks.

```admonish note
A **block** is a fixed-length group of bits.
```

The algorithm should be able to perform both operations:

$$
\text{(message, \textbf{key})} \rightarrow \text{ciphertext}
$$

$$
\text{(ciphertext, \textbf{key})} \rightarrow \text{message}
$$

Additionally, block ciphers can operate in a **mode of operation**. This involves *repeated* transformations of a block, in order to achieve confidentiality and authentication. 

$$
\text{(message, \textbf{key}, \textbf{modeofoperation})} \rightarrow \text{ciphertext}
$$

$$
\text{(ciphertext, \textbf{key}, \textbf{modeofoperation})} \rightarrow \text{message}
$$

Here are some of the different modes of operation:

- GCM
- EAX
- CBC — each block depends on the proper encryption block before it
- ECB
- CFB
- CTR

```admonish note title="Initialisation vector"
Some modes of operation use an **IV** to ensure that the same plaintext will not always get encrypted to the same ciphertext. 

The same IV is needed when decrypting the ciphertext.
```
