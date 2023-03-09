# DH

The Diffie–Hellman key exchange (**DH** or **DHKE**) method allows two parties that have no prior knowledge of each other to jointly establish a shared secret key over an insecure channel.

Breaking DH is a discrete logarithm problem.

## Important concepts

* Primitive root modulo
* Multiplicative group of integers modulo
* Modular exponentation
* Modular arithmetic

## Trapdoor function

Modular exponentiation?

## How it works

Define secret $s$ and an agreed modulo $p$ (which is prime):

$$
s = s \bmod p \\\\
$$

Letting $s = g^{ab}$, where $g$ is a primitive root modulo $p$, we have

$$
\begin{aligned}
g^{ba} \bmod p &= g^{ab} \bmod p \\\\
(g^b \bmod p)^a \bmod p &= (g^a \bmod p)^b \bmod p \\\\
\end{aligned}
$$

Let $a$ and $b$ be secrets that are individually chosen by Alice and Bob respectively. LHS: Alice's computation, RHS: Bob's computation.

$$
(g^{b_{secret}} \bmod p)^{a_{secret}} \bmod p = (g^{a_{secret}} \bmod p)^{b_{secret}} \bmod p
$$

Looking at Alice's computation, she would need to compute $(g^{b_{secret}} \bmod p)$. However, this can be provided by Bob because Bob owns $b_{secret}$. So now we have:

$$
(b_{public})^{a_{secret}} \bmod p = (g^{a_{secret}} \bmod p)^{b_{secret}} \bmod p
$$

Repeating the same for the other:

$$
(b_{public})^{a_{secret}} \bmod p = (a_{public})^{b_{secret}} \bmod p
$$
