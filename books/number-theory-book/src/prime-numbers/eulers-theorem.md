# Euler's theorem

If $a$ and $n$ are coprime, then

$$
a^{\phi(n)} \equiv_n 1
$$

Euler's theorem generalises Fermat's little theorem.

```admonish note title="Corollary 1"
For any integer $k$,

$$
a^{k\phi(n)} \equiv_n 1
$$

**Proof**
$$
\begin{align}
a^{k\phi(n)} &\equiv_n (a^{\phi(n)})^k \\
             &\equiv_n 1^k \\
             &\equiv_n 1
\end{align}
$$

for any integer $k$.
```

```admonish note title="Corollary 2"
For a prime modulus $p$ and any integer $k$,

$$
a^k \equiv_p a^{k \bmod (p-1)}
$$

**Proof**

For a prime $p$, we can write $k$ as a function of $p$

$$
k = r + q(p-1)
$$

where $0 \le r \lt (p-1)$, which is the same as $r \bmod (p-1)$.

So

$$
\begin{align}
a^k &\equiv_p a^{r + q(p-1)} \\
    &\equiv_p a^r \cdot a^{q(p-1)} \\
    &\equiv_p a^r \\
    &\equiv_p a^{k \bmod (p-1)} \\
\end{align}
$$
```