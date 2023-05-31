# RSA

[RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017)

Rivest-Shamir-Adleman; 1995; 1st-gen cryptosystem.

Breaking RSA is an _integer factorisation_ problem.

RSA is an algorithm that generates public-private keys. You need to specify the length of the modulus $n$: one of 1024, 2048, 3072, 4096, 8192, 16,384 bits. NIST recommends 2048 [here](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57Pt3r1.pdf).

For PKCS1 v1.5, the message to encrypt should be **no longer than the public modulus minus 11 bytes**. [http://golang.org/pkg/crypto/rsa/#EncryptPKCS1v15](http://golang.org/pkg/crypto/rsa/#EncryptPKCS1v15).

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
m = (m^{ed}) \bmod n
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
(m^e)^d \equiv m (\bmod n)
$$

which when rewritten becomes

$$
\begin{equation} \tag{1}
    m^{ed} \equiv m (\bmod n)
\end{equation}
$$

```python
pow(m, e*d, n) == m
```

Because $m^{ed} = m^1 (\bmod n)$, we require $e$ and $d$ to be multiplicative inverse, i.e. 

$$
ed \equiv 1 (\bmod H)
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
m^{ed} &= m^{1 + kH} \\
       &= m \cdot m^{kH} (\bmod n) \\
\end{align}
$$

At this point, we somehow need $m^{kH} \equiv 1 (\bmod n)$ to satisfy $(1)$.

There's an equation that looks similar to this — **Euler's theorem**:

$$
a^{\phi(n)} \equiv 1 (\bmod n)
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

```admonish tip title="Homomorphism"
RSA is multiplicative homomorphic, i.e.

$$
E(m_1) \times E(m_2) = m_1^e \times m_2^e = (m_1 \times m_2)^e=E(m_1\times m_2)
$$
```

## Resources

* [A method for obtaining digital signatures and public-key cryptosystems](https://dl.acm.org/doi/10.1145/359340.359342)
* [RSA Algorithm](https://leimao.github.io/article/RSA-Algorithm/)
* [Speeding up modular exponentiation using CRT](https://exploringnumbertheory.wordpress.com/2015/11/16/speeding-up-modular-exponentiation-using-crt/)
