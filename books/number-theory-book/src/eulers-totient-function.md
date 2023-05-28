# Euler's totient function

*Count* of coprimes (from 1 (inclusive) to $n$ (exclusive)) of a number $n$ 

If $p$ is prime, then

$$
\phi(p)=p-1
$$

If $p$ and $q$ are prime, then

$$
\phi(pq) = \phi(p)\phi(q)=(p-1)(q-1)
$$

```admonish question
Why is this true? Any proofs?
```

```admonish note title="Why study counts?"
We'll see that count of coprimes play an important role in multiplicative group of integers modulo $n$.
```