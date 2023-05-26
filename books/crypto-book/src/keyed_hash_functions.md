# MAC

A **keyed hash function** (aka MAC algorithm) is a hash function that takes in a key and a message to produce a digest called **message authentication code** (MAC). 

$$
\text{(message, \textbf{key})} \rightarrow \text{mac}
$$

There are different types of MAC algorithms:

* HMAC - hash-based MAC eg. HMAC-SHA256
* CMAC- cipher-based MAC
