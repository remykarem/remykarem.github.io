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

## How it works (WIP)

Define a secret $s$ and an agreed prime modulo $p$.

Find $g$, a primitive root modulo $p$. Recall that

$$
g^s \equiv_p a
$$

for every $a$ coprime to $p$.

Letting $s = g^{ab}$, where $g$ is a primitive root modulo $p$, we have

$$
\begin{aligned}
g^{ba} &\equiv_p g^{ab} \\
(g^b \bmod p)^a &\equiv_p (g^a \bmod p)^b
\end{aligned}
$$

Let $a$ be Alice's secret key and $b$ be Bob's secret key.

Their respective public keys are $a_{public} = g^a$ and $b_{public} = g^b$.

Here's the setup where LHS is Alice and RHS is Bob. Both sides need to calculate $s$.

$$
\begin{aligned}
g^{s} &\equiv_p g^{s} \\
g^{ba} &\equiv_p g^{ab} \\
\end{aligned}
$$

Let Alice initiate the exchange. Because Alice owns $a$, Alice computes $a_{public} = g^a$. Then sends Bob:

$$
\begin{aligned}
g^{ba} &\equiv_p a_{public}^b \\
\end{aligned}
$$

On the LHS, since Alice owns $a$, Alice computes $g^a = a_{public}$.

$$
\begin{aligned}
(a_{public})^b &\equiv_p (g^b)^a \\
\end{aligned}
$$

Let $a$ and $b$ be secrets that are individually chosen by Alice and Bob respectively. LHS: Alice's computation, RHS: Bob's computation.

$$
(g^{b_{secret}})^{a_{secret}} \equiv_p (g^{a_{secret}})^{b_{secret}}
$$

Looking at Alice's computation, she would need to compute $(g^{b_{secret}} \bmod p)$. However, this can be provided by Bob because Bob owns $b_{secret}$. So now we have:

$$
(b_{public})^{a_{secret}} \equiv_p (g^{a_{secret}} \bmod p)^{b_{secret}}
$$

Repeating the same for the other:

$$
(b_{public})^{a_{secret}} \equiv_p (a_{public})^{b_{secret}}
$$
