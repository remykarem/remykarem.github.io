# MAC

A **MAC algorithm** or a keyed hash function is a function that takes in a key and a message to produce a digest called **message authentication code** (MAC). 

MACs offer [authenticity](../../goals/authenticity.md).

This is a **deterministic** operation.

$$
\text{(message, \textbf{key})} \rightarrow \text{mac}
$$

There are different types of MAC algorithms:

* HMAC - hash-based MAC eg. HMAC-SHA256
* CMAC- cipher-based MAC