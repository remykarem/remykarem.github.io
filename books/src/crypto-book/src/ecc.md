# ECC

2nd-gen cryptosystem.

Breaking ECC is an _elliptic curve discrete logarithm_ problem.

Note that unlike RSA, ECC does not inherently have an encryption algorithm. Instead, it is mainly used to establish a shared secret key that can be used for symmetric encryption.

## Important concepts

* Elliptic curve over an infinite field vs. Galois field and its properties
    * Order of the curve - an EC finite field has a finite set of (valid) *n* points
    * Galois field/Finite field (defined by modulo) - an EC finite field has a finite set of (valid) *n* points ("order of the curve"). The field is usually a prime number.
    * Elliptic curve point multiplication / scalar multiplication
    * Subgroup - a point P in a finite field can have a fixed number of valid points when multiplied with any integer.
    * Point addition
    * Point multiplication / scalar multiplication
    * Group - a point P in a finite field can have a fixed number of valid points ("**order of the group**") when multiplied with any integer. these points make up a group
    * Point of infinity
    * Cofactor - Order of the curve / order of a group

    Find \\( n \\) such that

    $$
    2^n = 16
    $$

* Discrete logarithm problem

    Find \\( n \\) such that

    $$
    2^n mod 17 = 16
    $$
* Characteristic of a ring
* Modular arithmetic: square root modulo (of prime number)
* Prime numbers
* Discrete logarithm
* [Group theory](https://en.wikipedia.org/wiki/Group_(mathematics)), group law for elliptic curves

## Main idea

* G - generator point / base point defined by the creator of the curve
* d - **private key**; scalar value
* (x,y) = dG - **public key**; a point on the curve

(No inherent encryption)
* To encrypt a message using ECC, the sender chooses a random scalar k and uses the recipient's public key P to derive a point Q on the curve: Q = kP. The sender then uses the x-coordinate of Q as a shared secret to encrypt the message. The encryption process is typically performed using a symmetric encryption algorithm such as AES.
* Decryption: To decrypt a message using ECC, the recipient uses their private key d to derive the point Q on the curve that was used to generate the shared secret: Q = dP. The recipient can then use the x-coordinate of Q to decrypt the message.

## Trapdoor function

Scalar multiplication of a point on an EC over a prime field.

Finding the reverse of this is the discrete logarithm problem (which I have yet to figure out how to arrive at that).

## Common curves

|Curve name| Form | Prime field, p |
|----|---| --- |
|[Curve25519](https://en.wikipedia.org/wiki/Curve25519)| Montgomery | \\( 2^{255} - 19 \\) |
|[Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519)| Twisted Edwards | \\( 2^{255} - 19 \\) |
|NIST P-256|Weierstrass | \\( 2^{256} - 2^{224} + 2^{192} + 2^{96} - 1 \\) |
|NIST P-384| Weierstrass | \\( 2^{384} - 2^{128} - 2^{96} + 2^{32} - 1 \\) |
|secp256k1| Weierstrass | \\( 2^{256} - 2^{32} - 977 \\) |
|Ed448-Goldilocks| Edwards | \\( 2^{448} - 2^{224} - 1 \\) |

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

## References

* [Elliptic Curve Cryptography: a gentle introduction](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)
* https://trustica.cz/category/ecc/page/3/
* [SafeCurves](https://safecurves.cr.yp.to/)
* [Elliptic Curve tool](https://andrea.corbellini.name/ecc/interactive/reals-add.html)
