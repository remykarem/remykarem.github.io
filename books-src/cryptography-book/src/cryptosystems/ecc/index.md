# ECC

Elliptic curve cryptography

2nd-gen cryptosystem.

Breaking ECC is an _elliptic curve discrete logarithm_ problem.

Note that unlike RSA, ECC does not inherently have an encryption algorithm. Instead, it is mainly used to establish a shared secret key that can be used for symmetric encryption.

~~~admonish warning title="Recommendation"
Based on the NIST recommendations in [Key strength](../../cryptographic-keys/key-strength.md), the order of the generator should be...
~~~

## Important concepts

* **Elliptic curve** and its properties
* **[Group theory](https://en.wikipedia.org/wiki/Group_(mathematics))**, group law for elliptic curves

* **Discrete logarithm problem**
  
    A logarithm problem is to find $n$ such that

    $$
    2^n = 16
    $$

    *Discrete logarithm problem* is finding $n$ such that

    $$
    2^n \equiv_{17} 16
    $$

* Characteristic of a ring
* Modular arithmetic: square root modulo (of prime number)
* Prime numbers
* Discrete logarithm

## Main idea

* $G$ — **generator point** (or base point) defined by the creator of the curve
* $n$ — the order of the generator $G$
* $d$ — **private key**; scalar value
* $(x,y)$ — **public key**; the point on the curve when performing the scalar multiplication $dG$.

## Trapdoor function

Scalar multiplication of a point on an EC over a prime field.

Finding the reverse of this is the discrete logarithm problem (which I have yet to figure out how to arrive at that).

## Common curves

Note that some curves are created by NIST eg. P-256, P-384.

|Curve name| Form | Prime field, p |
|----|---| --- |
|[Curve25519](https://en.wikipedia.org/wiki/Curve25519)| Montgomery | $2^{255} - 19$ |
|[Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519)| Twisted Edwards | $2^{255} - 19$ |
| NIST P-256 / secp256r1 / prime256v1|Weierstrass | $2^{256} - 2^{224} + 2^{192} + 2^{96} - 1$ |
|P-384| Weierstrass | $2^{384} - 2^{128} - 2^{96} + 2^{32} - 1$ |
|secp256k1| Weierstrass | $2^{256} - 2^{32} - 977$ |
|Ed448-Goldilocks| Edwards | $2^{448} - 2^{224} - 1$ |

## Small cyclic groups

Curve: $y^2 = x^3 + 2x + 1$ over $\mathbb{F}_{31}$.

$P = (17,9)$; subgroup has 3 points.


## References

* [Elliptic Curve Cryptography: a gentle introduction](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)
* https://trustica.cz/category/ecc/page/3/
* [SafeCurves](https://safecurves.cr.yp.to/)
* [Elliptic Curve visualisation tool](https://andrea.corbellini.name/ecc/interactive/reals-add.html)
