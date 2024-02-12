# ECDH

Suppose A has
* private key: $d_A$

Given an agreed base point $G$ and shared secret to compute $S$:

$$
\begin{aligned}
S &= S \\
? \times G &= ? \times G \\
d_A \times d_B \times G &= d_A \times d_B \times G \\
d_A \times (d_B \times G) &= d_B \times (d_A \times G) \\
d_A \times Q_B &= d_B \times Q_A
\end{aligned}
$$

where the public keys are
* $Q_B = d_B \times G$, and
* $Q_A = d_A \times G$

This means that LHS needs to use its private key $d_A$ and multiply it by the other party's public key $Q_B$.

~~~admonish example
X25519 (Curve25519), used in TLS 1.3
~~~

~~~admonish warning title="No forward secrecy"
ECDH doesn't offer forward secrecy.
~~~
