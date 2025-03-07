# RSA

[RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017)

Rivest-Shamir-Adleman; 1995; 1st-gen cryptosystem.

Breaking RSA is an _integer factorisation_ problem.

```admonish warning title="Prefer ECC to RSA"
ECC has more advantages than RSA.

"[T]he advantages of elliptic curve cryptography over traditional RSA are widely accepted." — from Cloudflare's post [A (Relatively Easy To Understand) Primer on Elliptic Curve Cryptography](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography).
```

```admonish warning
There are many problems that plague RSA.

https://www.youtube.com/watch?v=lElHzac8DDI
```

~~~admonish warning title="Minimum 2048 bits"
NIST recommends at least 2048 bits for the _size_ of the modulus. See [Key strength](../../cryptographic-keys/key-strength.md).
~~~

- secret exponent: $d $
- key exponent: $e $
- modulus: $n$
- message: $m $
- cipher: $c $

$$
(n, e, d)
$$

## Important concepts

* Number theory
  * Modular arithmetic
  * [Euler's theorem](https://en.wikipedia.org/wiki/Euler%27s_theorem)
  * Fermat prime
  * Prime numbers, coprimes, semiprimes
  * Prime factorisation
  * Euler's totient function
  * Multiplicative modulo inverse
  * Chinese remainder theorem

## Trapdoor function(s)

* Product of two large prime numbers

$$
n = pq
$$

* Euler's totient function, $\phi(n)$.

## Main idea

$$
m^{ed} \equiv_n m
$$

```admonish note
While the encryption-decryption symmetry exists between $e$ and $d$, this symmetry does not extend to most cryptosystems.
```

## How it works

![How RSA works](rsa.png)

### Basic operation

First of all, we need an operation that can offer the following:
* security
* size

**Modular arithmetic** is a good fit — modulo operations act as the trapdoor function, and maintains the size of results.

```admonish note
Explain why modular exponentation would be useful without mentioning Euler's theorem.
```

We require

$$
(m^e)^d \equiv_n m
$$

which when rewritten becomes

$$
\begin{equation} \tag{1}
    m^{ed} \equiv_n m
\end{equation}
$$

```python
pow(m, e*d, n) == m
```

Because $m^{ed} \equiv_n m^1$, we require $e$ and $d$ to be multiplicative inverse, i.e. 

$$
ed \equiv_H 1
$$

```python
e*d % H == 1
```

which can be written as

$$
\begin{equation} \tag{2}
    ed = 1 + kH
\end{equation}
$$

```admonish question
Why can it be any modulo though?
```

Substituting $(2)$ into $m^{ed} (\bmod n)$ we get

$$
\begin{align}
m^{ed} &\equiv_n m^{1 + kH} \\
       &\equiv_n m \cdot m^{kH} \\
\end{align}
$$

At this point, we somehow need $m^{kH} \equiv_n 1$ to satisfy $(1)$.

There's an equation that looks similar to this — **Euler's theorem**:

$$
a^{\phi(n)} \equiv_n 1
$$

Our choice of $H$ has to be $\phi(n)$. Euler's theorem also requires that $m$ and $n$ be coprime.

### Parameters

We are now left with producing $e$, $d$ and $n$.

How do we generate $n$?

$n$ needs to be constructed in a way such that $\phi(n)$ can be calculated in at least 2 ways — during generation (ideally easy) and when $n$ is public (ideally very difficult).

We can set $n$ to be very large, such that $\phi(n)$ is hard to calculate.

What about during generation?

We know that for a prime $p$, it's easy to calculate $\phi(p)$:

$$
\begin{equation} \tag{3}
    \phi(p) = p-1
\end{equation}
$$

For a **semiprime** of primes $p$ and $q$, then with the help of $(3)$:

$$
\begin{equation} \tag{4}
    \phi(pq) = \phi(p)\phi(q) = (p-1)(q-1)
\end{equation}
$$

With $(4)$, we can construct $n$ to be a **product of two primes** $p$ and $q$.

But is that sufficient? If I can factorise $n$ into $p$ and $q$, then I can calculate $\phi(n)$, then I will know $d$. We need something more.

We can construct $n$ to be a product of two _large_ primes, making the multiplication a trapdoor function.

What about $e$ and $d$?

Since $e$ is public, it can actually be a fixed value. But what value?

The inverse of $e$, $e^{-1}$, exists only if $e$ is coprime with $H = \phi(n)$ in $(2)$. The convention is to set this as a Fermat prime. This is usually $F_4 = 2^{2^4} + 1 = 65,537$.

Now that we have set $e$, we just need to find a $d$.

```admonish question
How to find $d$? Extended Euclidean Algorithm? Is it unique?
```

---

```admonish info title="Homomorphism"
RSA is multiplicative homomorphic, i.e.

$$
E(m_1) \times E(m_2) = m_1^e \times m_2^e = (m_1 \times m_2)^e=E(m_1\times m_2)
$$
```

## Gotchas

* If $p$ is reused for another $n = pq'$, attacker can factor using GCD.
* If $p$ and $q$ share approximately half of their upper bits, then $pq$ can be factored using Fermat's method (?).
* If $p-1$ or $q-1$ has small prime factors, then we can use Pollard's $p-1$ to factor $pq$.
* If either $p$ or $q$ contains too many contiguous zero bits, then $pq$ can be factored using Coppersmith's method.

Source: https://www.youtube.com/watch?v=lElHzac8DDI

## Resources

* [A method for obtaining digital signatures and public-key cryptosystems](https://dl.acm.org/doi/10.1145/359340.359342)
* [RSA Algorithm](https://leimao.github.io/article/RSA-Algorithm/)
* [Speeding up modular exponentiation using CRT](https://exploringnumbertheory.wordpress.com/2015/11/16/speeding-up-modular-exponentiation-using-crt/)
