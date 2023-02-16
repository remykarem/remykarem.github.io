# ECC

2nd-gen cryptosystem.

Breaking ECC is an _elliptic curve discrete logarithm_ problem.

Note that unlike RSA, ECC does not inherently have an encryption algorithm. Instead, it is mainly used to establish a shared secret key that can be used for symmetric encryption.

## Important concepts

* Elliptic curve, point multiplication
* Galois field / finite field, prime field
* Characteristic of a ring
* Modular arithmetic: square root modulo (of prime number)
* Prime numbers
* Discrete logarithm

## Main idea

* nP is the public key, where n is the secret key and P is a curve point.

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


## References

* https://trustica.cz/category/ecc/page/3/
* https://safecurves.cr.yp.to/
