# HMAC

Deterministic!

$$
\text{(message, key, \textbf{hashfunction})} \rightarrow \text{mac}
$$

~~~admonish example title="AWS SigV4"
AWS SigV4 uses HMAC-SHA256 to create a signature that is included in the HTTP request.
~~~