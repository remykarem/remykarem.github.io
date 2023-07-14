# MGFs

An MGF (mask generation function) is a cryptographic primitive similar to the hash function.

$$
\text{(message, hashfunction, \textbf{length})} \rightarrow \text{digest}
$$

This is a **deterministic operation**.

~~~admonish hint title="Hash vs. MGF"
The difference is that while the outputs of hash functions have a fixed size, MGFs output a *variable* length.
~~~

The input is also known as a "seed" from which the mask is generated.

~~~admonish example title="Applications"
MGFs are used in padding schemes eg. OAEP.
~~~
