# DHKE

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

Define a secret $s$ and an agreed prime modulo $p$.

Find $g$, a primitive root modulo $p$. Recall that

$$
g^s \equiv_p a
$$

for every $a$ coprime to $p$.

Let $a_{private}$ be Alice's private key and $b_{private}$ be Bob's private key.

Their respective public keys are $a_{public} = g^{a_{private}}$ and $b_{public} = g^{b_{private}}$.

Here's the setup where LHS is Alice and RHS is Bob. Both sides need to calculate $s = a_{private}b_{private}$.

$$
\begin{aligned}
g^{s} &\equiv_p g^{s} \\
g^{b_{private}a_{private}} &\equiv_p g^{a_{private}b_{private}} \\
\end{aligned}
$$

Let Alice initiate the exchange. Alice computes $a_{public} = g^{a_{private}}$. Then sends to Bob:

$$
\begin{aligned}
g^{b_{private}a_{private}} &\equiv_p (g^{a_{private}})^{b_{private}} \\
g^{b_{private}a_{private}} &\equiv_p (a_{public})^{b_{private}} \\
\end{aligned}
$$

Bob computes $b_{public} = g^{b_{private}}$. Then sends to Alice:

$$
\begin{aligned}
(g^{b_{private}})^{a_{private}} &\equiv_p (a_{public})^{b_{private}} \\
(b_{public})^{a_{private}} &\equiv_p (a_{public})^{b_{private}} \\
\end{aligned}
$$
