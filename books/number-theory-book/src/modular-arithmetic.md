# Modular arithmetic

## Congruence

$a$ is said to be **congruent** to $b$ modulo $m$.

$$
a \equiv_m b
$$

or

$$
a \equiv b (\bmod m)
$$

or 

$$
a = b + km
$$

```admonish note title="Example"
For a congruence

$$
x \equiv_{12} 4
$$

Possible values of $x$:

$$
4 \equiv_{12} 4 \\
16 \equiv_{12} 4 \\
28 \equiv_{12} 4 \\
...
$$
```

## Modular multiplication

$$
38 \equiv_m 14 \\
38c \equiv_m 14c
$$

## Modular exponentiation

To find $49^{19}$ modulo 25, instead of evaluating $49^{19}$, we do:

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

## Modular multiplicative inverse

## Primitive root modulo

A number $g$ is a primitive root modulo $p$ (where $p$ is prime) if for any integer $k$,

$$
g^k \equiv_p a
$$

exhibits $a$ coprime to $n$.

💡 Related to Fermat’s Little Theorem.
