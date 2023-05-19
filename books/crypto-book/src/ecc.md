# ECC

2nd-gen cryptosystem.

Breaking ECC is an _elliptic curve discrete logarithm_ problem.

Note that unlike RSA, ECC does not inherently have an encryption algorithm. Instead, it is mainly used to establish a shared secret key that can be used for symmetric encryption.

## Important concepts

* **Elliptic curve** and its properties
    * Order of the curve — an EC finite field has a finite set of (valid) *n* points (an EC can be defined over an infinite field).
    * Galois field / Finite field (defined by modulo) — For a finite field $F_7$, the elements of the field is $\{ 0, 1, 2, 3, 4, 5, 6 \}$. This means that the $x$ and $y$ values in the curve e.g. $ y^2 = x^3 + ax + b $ can take only one of these values. An EC finite field has a finite set of (valid) *n* points ("order of the curve"). The field is usually (or always?) a prime number in ECC. As such, it is also referred to as the **prime field**. Prime fields have special properties.
    * Elliptic curve point multiplication / scalar multiplication
    * Subgroup — a point P in a finite field can have a fixed number of valid points when multiplied with any integer.
    * Point addition
    * Point multiplication / scalar multiplication
    * Group — a point P in a finite field can have a fixed number of valid points ("**order of the group**") when multiplied with any integer. these points make up a group
    * Point of infinity
    * Cofactor — Order of the curve / order of a group

* **[Group theory](https://en.wikipedia.org/wiki/Group_(mathematics))**, group law for elliptic curves

* **Discrete logarithm problem**
  
    A logarithm problem is to find $n$ such that

    $$
    2^n = 16
    $$

    *Discrete logarithm problem* is finding $n$ such that

    $$
    2^n mod 17 = 16
    $$

* Characteristic of a ring
* Modular arithmetic: square root modulo (of prime number)
* Prime numbers
* Discrete logarithm

## Main idea

* `G` — **generator point** (or base point) defined by the creator of the curve
* `d` — **private key**; scalar value
* (`x`,`y`) — **public key**; the point on the curve when performing the scalar multiplication $dG$.

(No inherent encryption)
* To encrypt a message using ECC, the sender chooses a random scalar k and uses the recipient's public key P to derive a point Q on the curve: Q = kP. The sender then uses the x-coordinate of Q as a shared secret to encrypt the message. The encryption process is typically performed using a symmetric encryption algorithm such as AES.
* Decryption: To decrypt a message using ECC, the recipient uses their private key d to derive the point Q on the curve that was used to generate the shared secret: Q = dP. The recipient can then use the x-coordinate of Q to decrypt the message.

## Trapdoor function

Scalar multiplication of a point on an EC over a prime field.

Finding the reverse of this is the discrete logarithm problem (which I have yet to figure out how to arrive at that).

## Common curves

|Curve name| Form | Prime field, p |
|----|---| --- |
|[Curve25519](https://en.wikipedia.org/wiki/Curve25519)| Montgomery | $2^{255} - 19$ |
|[Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519)| Twisted Edwards | $2^{255} - 19$ |
|P-256 / secp256r1 / prime256v1|Weierstrass | $2^{256} - 2^{224} + 2^{192} + 2^{96} - 1$ |
|P-384| Weierstrass | $2^{384} - 2^{128} - 2^{96} + 2^{32} - 1$ |
|secp256k1| Weierstrass | $2^{256} - 2^{32} - 977$ |
|Ed448-Goldilocks| Edwards | $2^{448} - 2^{224} - 1$ |

## Elliptic curve forms

* Weierstrass form

    $$
    y^2 = x^3 + ax + b
    $$

* Montgomery form

    $$
    by^2 = x^3 + ax^2 + x
    $$

* Edwards form

    $$
    x^2 + y^2 = 1 + dx^2y^2
    $$

* Twisted Edwards form

    $$
    ax^2 + y^2 = 1 + dx^2y^2
    $$

## Simple example

Simple example of an elliptic curve over a finite field $\mathbb{F}_7$, i.e. the field of integers modulo 7.

This means the field consists of elements $\{0, 1, 2, 3, 4, 5, 6\}$.

Define an elliptic curve over $\mathbb{F}_7$:

$$ y^2 = x^3 + 2x + 1 $$

The set of points $(x,y)$ that satisfies this equation (along with a special point of infinity) forms the elliptic curve over $\mathbb{F}_7$.

To get this set of points, we need to cycle through values of $x \in \mathbb{F}_7$ to get the corresponding y.

For example, when $x = 1$, we have:

$$
\begin{align}
y^2 &\equiv (1^3 + 2 \times 1 + 1) \mod 7  \\
y^2 &\equiv 4 \mod 7 \\
\end{align}
$$

What are the values of $y \in \mathbb{F}_7$ that satisfy this congruence? Let's enumerate them:

* When $y = 0$, $0^2 = 0 \not \equiv 4 \mod 7 $
* When $y = 1$, $1^2 = 1 \not \equiv 4 \mod 7 $
* When $y = 2$, $2^2 = 4 \equiv 4 \mod 7 $
* When $y = 3$, $3^2 = 9 \not \equiv 4 \mod 7 $
* When $y = 4$, $4^2 = 16 \not \equiv 4 \mod 7 $
* When $y = 5$, $5^2 = 25 \equiv 4 \mod 7 $
* When $y = 6$, $6^2 = 36 \not \equiv 4 \mod 7 $

Therefore, when $x=1$, $y = 2,5$.

## Small cyclic groups

Curve: $y^2 = x^3 + 2x + 1$ over $\mathbb{F}_31$.

P = (17,9); subgroup has 3 points.


## References

* [Elliptic Curve Cryptography: a gentle introduction](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)
* https://trustica.cz/category/ecc/page/3/
* [SafeCurves](https://safecurves.cr.yp.to/)
* [Elliptic Curve visualisation tool](https://andrea.corbellini.name/ecc/interactive/reals-add.html)
