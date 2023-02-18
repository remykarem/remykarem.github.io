# ECC

2nd-gen cryptosystem.

Breaking ECC is an _elliptic curve discrete logarithm_ problem.

Note that unlike RSA, ECC does not inherently have an encryption algorithm. Instead, it is mainly used to establish a shared secret key that can be used for symmetric encryption.

## Important concepts

* Elliptic curve over an infinite field vs. Galois field and its properties
    * Galois field/Finite field (defined by modulo) - an EC finite field has a finite set of (valid) *n* points ("order of the curve"). The field is usually a prime number.
    * Point addition
    * Point multiplication / scalar multiplication
    * Subgroup - a point P in a finite field can have a fixed number of valid points when multiplied with any integer.
* Characteristic of a ring
* Modular arithmetic: square root modulo (of prime number)
* Prime numbers
* Discrete logarithm

## Main idea

* G - generator point / base point defined by the creator of the curve
* d - **private key**; scalar value
* (x,y) = dG - **public key**; a point on the curve

(No inherent encryption)
* To encrypt a message using ECC, the sender chooses a random scalar k and uses the recipient's public key P to derive a point Q on the curve: Q = kP. The sender then uses the x-coordinate of Q as a shared secret to encrypt the message. The encryption process is typically performed using a symmetric encryption algorithm such as AES.
* Decryption: To decrypt a message using ECC, the recipient uses their private key d to derive the point Q on the curve that was used to generate the shared secret: Q = dP. The recipient can then use the x-coordinate of Q to decrypt the message.

## Trapdoor function

Scalar multiplication of a point on an EC over a prime field.

## Common curves

|Curve name| Form | Field |
|----|---| --- |
|[Curve25519](https://en.wikipedia.org/wiki/Curve25519)| Montgomery | \\( 2^{255} - 19 \\) |
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

* https://trustica.cz/category/ecc/page/3/
* https://safecurves.cr.yp.to/
