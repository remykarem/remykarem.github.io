# ECDSA

[RFC 6979](https://datatracker.ietf.org/doc/html/rfc6979), [FIPS 186](https://csrc.nist.gov/pubs/fips/186-5/final)

Elliptic Curve Digital Signature Algorithm

ECDSA is **probabilistic**. It is based on DSA.

An ECDSA signature is a tuple of $(h, r,s)$.

### 1. Hash the message

$$
(m) \rightarrow h
$$

```admonish hint title="Intuitions"
To ensure the right size?
```

### 2. Generate a random number $k$

$$
k \in [0,n-1]
$$

```admonish warning
$k$ must be kept private.
```

### 3. Generate $r$

Compute a point $(x,y)$ on the curve where

$$
kG = (x,y)
$$

```admonish hint title="Intuitions"
This is another point in the subgroup of $G$.
```

The $r$ value is

$$
r \equiv_n x
$$

```admonish warning
Regenerate $k$ if $r = 0$.
```

```admonish hint title="Intuitions"
If we don't mod this, one can find out something?

$r$ can be seen as the new modulo?

We are just playing along the $x$ axis?
```

### 4. Generate $s$ such that

$$
s \cdot k \equiv_n h + dr
$$

```admonish hint title="Intuitions"
Hmmm why??

Could it be that this is similar to 

$$
s \cdot k \equiv_r h
$$

thus reducing this to a multiplicative group of integers modulo $r$?
```

```admonish warning
Regenerate $k$ if $s = 0$.
```

### 5. Verify the message
