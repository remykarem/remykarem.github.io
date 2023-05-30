# Elliptic curves

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

$$ y^2 \equiv_7 x^3 + 2x + 1 $$

The set of points $(x,y)$ that satisfies this equation (along with a special point of infinity) forms the elliptic curve over $\mathbb{F}_7$.

To get this set of points, we need to cycle through values of $x \in \mathbb{F}_7$ to get the corresponding y.

For example, when $x = 1$, we have:

$$
\begin{align}
y^2 &\equiv_7 1^3 + 2 \times 1 + 1  \\
y^2 &\equiv_7 4 \\
\end{align}
$$

What are the values of $y \in \mathbb{F}_7$ that satisfy this congruence? Let's enumerate them:

* When $y = 0$, $0^2 \equiv 0 \not \equiv_7 4 $
* When $y = 1$, $1^2 \equiv 1 \not \equiv_7 4 $
* When $y = 2$, $2^2 \equiv 4 \equiv_7 4 $
* When $y = 3$, $3^2 \equiv 9 \not \equiv_7 4 $
* When $y = 4$, $4^2 \equiv 16 \not \equiv_7 4 $
* When $y = 5$, $5^2 \equiv 25 \equiv_7 4 $
* When $y = 6$, $6^2 \equiv 36 \not \equiv_7 4 $

Therefore, when $x=1$, $y = 2,5$.
