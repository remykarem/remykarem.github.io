# Modular exponentiation

Find $49^{19}$ modulo 25.

Here are some ways we can do it:

- [Naïve](#naïve)
- [Simplify the base](#simplify-the-base)
- [Simplify the exponent](#simplify-the-exponent)
- [Rewrite as a system of congruences](#rewrite-as-a-system-of-congruences)

---

## Naïve

The naïve way is to evaluate $49^{19}$ first then simplify it. But...

## Simplify the base

Instead of evaluating $49^{19}$, we do:

$$
\begin{align}
49^{19} &\equiv_{25} (49-25-25)^{19} \\
        &\equiv_{25} (-1)^{19} \\
        &\equiv_{25} -1 \\
        &\equiv_{25} 24
\end{align}
$$

```admonish question
Why though...
```

## Simplify the exponent

We can simplify the exponent using Euler's theorem.

## Rewrite as a system of congruences

This makes use of the CRT.
