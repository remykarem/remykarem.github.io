# Primitive root modulo n

$g$ is a primitive root modulo $n$, i.e.

$$
g^k \equiv_n a
$$

for every $a$ coprime to $n$.

This means that the powers of $g$ generate all numbers that are coprime with n in the modulo $n$ sense. In other words, $g$ is a *generator* (hence "g") for the multiplicative group of integers modulo $n$.

💡 Related to Fermat’s Little Theorem.

```admonish example title="Example 1: Primitive root prime modulo"
3 is the primitive root modulo 7.

$$
3^k \equiv_7 a
$$

Cycling through the values of $k$:

$$
3^1 \equiv_7 3 \\
3^2 \equiv_7 2 \\
3^3 \equiv_7 6 \\
3^4 \equiv_7 4 \\
3^5 \equiv_7 5 \\
3^6 \equiv_7 1 \\
$$

5 is also the primitive root modulo 7.

$$
5^k \equiv_7 a
$$

Cycling through the values of $k$:

$$
5^1 \equiv_7 5 \\
5^2 \equiv_7 4 \\
5^3 \equiv_7 6 \\
5^4 \equiv_7 2 \\
5^5 \equiv_7 3 \\
5^6 \equiv_7 1 \\
$$
```

```admonish note
Primitive roots modulo $n$ is used in Diffie-Hellman key exchange (iirc).
```
