# MGFs

An MGF (mask generation function) is a cryptographic primitive similar to the hash function.

The difference is that while the outputs of hash functions have a fixed size, MGFs output a *variable* length.

$$
\text{(message, hashfunction, \textbf{length})} \rightarrow \text{digest}
$$

```admonish note
Like hash functions, MGFs are also deterministic.
```

The input is also known as a "seed" from which the mask is generated.

## Applications

MGFs are used in padding schemes eg. OAEP.
