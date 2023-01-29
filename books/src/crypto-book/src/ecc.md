# ECC

2nd-gen cryptosystem.

Breaking ECC is an _elliptic curve discrete logarithm_ problem.

Note that unlike RSA, ECC does not inherently have an encryption algorithm. It is mainly used to establish a shared secret key that can be used for symmetric encryption.

## Important concepts

* Elliptic curve, point multiplication
* Galois field / finite field
* Prime field
* Characteristic of a ring
* Square root modulo (of prime number)
* Prime numbers
* Discrete logarithm

## Main idea

???

## Elliptic curve forms

* Weierstrass form

    $$
    y^2 = x^3 + ax + b
    $$

    Examples: `secp256k1`

* Montgomery form

    $$
    by^2 = x^3 + ax^2 + x
    $$

    * [Curve25519](https://en.wikipedia.org/wiki/Curve25519)

* Edwards form

    $$
    x^2 + y^2 = 1 + dx^2y^2
    $$

    Examples: `Curve448`

## References

https://trustica.cz/category/ecc/page/3/
