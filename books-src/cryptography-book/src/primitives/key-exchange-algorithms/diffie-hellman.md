# DH

The Diffie–Hellman key exchange (**DH** or **DHKE**) method allows two parties that have no prior knowledge of each other to jointly establish a shared secret key over an insecure channel.

Breaking DH is a discrete logarithm problem.

```admonish note
Diffie-Hellman is considered a form of asymmetric cryptography because of the use of mathematically linked keys: a private key and a public key.
```

## Important concepts

- Cyclic groups
- Multiplicative group of integers modulo a prime number
- Modular arithmetic

## Trapdoor function

Modular exponentiation (discrete logarithm problem)

## How it works

Given

|       | Private key |
| ----- | ----------- |
| Alice | $a$         |
| Bob   | $b$         |

where $a$ and $b$ are large numbers,

how do we compute a shared secret?

The private keys _need_ a mathematically related number; the public key.

In order to generate a public key, we need a common operation $f$ (**commutative**) and a common (public) operand (?).

$$
f(?, a, b) \rightarrow s
$$

At the same time we also need this operation to be **one-way**.

We leverage on the properties of multiplicative group ("commutative operation") of integers modulo ("one-way ness") prime number $p$ (large for security).

$$
g^{ab} \equiv_p s
$$


|       | Private key | Public key | Secret              |
| ----- | ----------- | ---------- | ------------------- |
| Alice | $a$         | $A = g^a$  | $s = (g^b)^a = B^a$ |
| Bob   | $b$         | $B = g^b$  | $s = (g^a)^b = A^b$ |

~~~admonish example
Generate a large prime $p$ and generator $g$:

```
openssl dhparam -out dhparams.pem 256
```

Parse the DER encoding to get the values

```
openssl asn1parse -in dhparams.pem
```

Suppose $p$ is `0x94EC65835B717059AC19F5B0E914D6903DE00E61640464D844434C85C10425C3` and $g$ is `2`.

Alice:

```python
g = 2
p = 0x94EC65835B717059AC19F5B0E914D6903DE00E61640464D844434C85C10425C3
a = 123
A = pow(g,a,p)
```

Bob:

```python
g = 2
p = 0x94EC65835B717059AC19F5B0E914D6903DE00E61640464D844434C85C10425C3
b = 456
B = pow(g,b,p)
```

Alice:

```
s = pow(B,a,p)
```

Bob:

```
s = pow(A,b,p)
```

~~~
