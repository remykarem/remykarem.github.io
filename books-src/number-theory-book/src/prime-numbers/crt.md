# CRT

The Chinese remainder theorem states that for a system of congruences

$$
x \equiv_{n_1} a_1 \\
x \equiv_{n_2} a_2 \\
x \equiv_{n_3} a_3 \\
...
$$

if $n_i$ are **pairwise coprime**,

then there exists a solution

$$
x \equiv_N s
$$

where $N = \prod_i n_i$.

## Intution

This is like finding the 'common denominator' when we perform arithmetic with fractions.

In fraction arithmetic, we first need to find the 'common denominator'.

When finding the common denominator, we update the values of both the numerator and denominator. We also need to know what to multiply to the respective denominators.

| numerator | denominator   | diff       | new numerator        | new denominator      |
| --------- | ------------- | ---------- | -------------------- | -------------------- |
| $n_1$     | $d_1$         | $d_2, d_3$ | $n_1 \times d_2 d_3$ | $d_1 \times d_2 d_3$ |
| $n_2$     | $d_2$         | $d_1, d_3$ | $n_2 \times d_1 d_3$ | $d_2 \times d_1 d_3$ |
| $n_3$     | $d_3$         | $d_1, d_2$ | $n_3 \times d_1 d_2$ | $d_3 \times d_1 d_2$ |
|           | $d_1 d_2 d_3$ |            | (sum)                | $d_1 d_2 d_3$        |

so the new denominator is $n_1 n_2 n_3$ and the new numberator is the (sum).

Similarly in modular arithmetic, we want to find the 'common modulus'.

When finding the common modulus, we update the remainder and the modulus. We also need to know what to multiply to the respective moduli.

| r     | mod           | diff       | new r                | new mod              |
| ----- | ------------- | ---------- | -------------------- | -------------------- |
| $r_1$ | $n_1$         | $n_2, n_3$ | $r_1 \times n_2 n_3$ | $n_1 \times n_2 n_3$ |
| $r_2$ | $n_2$         | $n_1, n_3$ | $r_2 \times n_1 n_3$ | $n_2 \times n_1 n_3$ |
| $r_3$ | $n_3$         | $n_1, n_2$ | $r_3 \times n_1 n_2$ | $n_3 \times n_1 n_2$ |
|       | $n_1 n_2 n_3$ |            | (sum)                | $n_1 n_2 n_3$        |

so the new modulo is $n_1 n_2 n_3$ and the new remainder is the (sum).

The only difference is that **multiplication is under a modulo**. This means the way we find the inverses for mod is using **modular multiplicative inverse**.

This 'diff' for moduli is known as the *CRT coefficient*.

```admonish example title="Example 1"

For a system of congruences

$$
\begin{align}
x &\equiv_{5} 2 \\
x &\equiv_{7} 3 \\
x &\equiv_{11} 10 \\
\end{align}
$$

where the moduli are pairwise coprime,

          a      n  |     N n  m    y        m      n    a*m*y
     x ≡  2 mod  5  |   385/5=77    3 ≡ inv 77 mod  5      462
     x ≡  3 mod  7  |   385/7=55    6 ≡ inv 55 mod  7      990
     x ≡ 10 mod 11  |  385/11=35    6 ≡ inv 35 mod 11     2100
     --------------------------------------------------------
             N=385                                 sum,s=3552

then

$$
x \equiv_{385} 3552 \equiv_{385} 87
$$

If we take $87+385=472$ to be a possible solution, then we can verify that

$$
\begin{align}
472 &\equiv_{5} 2 \\
472 &\equiv_{7} 3 \\
472 &\equiv_{11} 10 \\
\end{align}
$$
```

```admonish note title="How to realise the benefits of CRT?"
If we could break down $N$ into, say, its prime factorisation, then we can simplify problems (by means of say faster computation) from

$$
x \equiv_N c
$$

to

$$
x \equiv_{p_1} c \\
x \equiv_{p_2} c \\
x \equiv_{p_3} c \\
$$

and calculate

$$
x \equiv_N s
$$

instead.
```

```admonish example title="Application of CRT: RSA"
In the decryption process of RSA, to find the original message $m$ in

$$
m \equiv_n c^d
$$

where $c$ is the ciphertext and $d$ the private key,

knowing that $n = pq$,

we instead solve for $m$ based on the system of congruences

$$
m \equiv_p c^d \\
m \equiv_q c^d \\
$$

which has a solution since $p$ and $q$ are pairwise coprime (because they are prime).

We can simplify this system of congruences using Euler's theorem:

$$
m \equiv_p c^d \equiv_p c^{d \bmod (p-1)} \\
m \equiv_q c^d \equiv_q c^{d \bmod (q-1)} \\
$$

Therefore, the values
* $d \bmod (p-1)$ and
* $d \bmod (q-1)$

can be computed once.

Working:

         a       n          n m    y              a*m*y
     x ≡ c^d mod p   |    N/p=q    inv q mod p        g
     x ≡ c^d mod q   |    N/q=p    inv p mod q        h
     --------------------------------------------------
              N=pq                            sum,s=g+h

then

$$
m \equiv_N (g+h)
$$

This makes the computation faster in several ways:
* $a$ — Reducing $c^d$ to moduli $p$ and $q$ (instead of $n$)
* $m$ — This number can be computed once
* $y$ — This number can be computed once
```
