# ECDSA

2nd-gen cryptosystem.

## Trapdoor function

$$
f_{\text {curve}}(P_\text{start_point},n_\text{hops}) \rightarrow P_\text{end_point}
$$

Private key: n_hops
Public key: P_endpoint

where the curve is of the form

$$
y^2 = x^3 + ax + b
$$

Computing the private key from the public key is called the elliptic curve discrete logarithm function.

* NIST curve secp256k1

    $$
    y^2 = x^3 + 7
    $$

Forms

* Weierstrass form

    $$
    y^2 = x^3 + ax + b
    $$

    Examples: `secp256k1`

* Montgomery form

    $$
    by^2 = x^3 + ax^2 + x
    $$

    Examples: `Curve25519`

* Edwards form

    $$
    x^2 + y^2 = 1 + dx^2y^2
    $$

    Examples: `Curve448`
