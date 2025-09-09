# Crockford's Base32

[Crockford's Base32](https://www.crockford.com/base32.html)

It's called base 32 because it encodes information of 5-bit long in one character ($32 = 2^5$).

~~~admonish question title="Who is Crockford even?"
Daniel Crockford is involved in the development of JavaScript.

He is also known for specifying the data format of JSON.
~~~

Characters:
* 0-9 (10 in total)
* A-Z except I, L, O and U (22 in total)

~~~admonish question
The exclusion of I, L and O avoids confusion with the digits 0 and 1.

U is excluded to avoid accidental obscenity.
~~~

~~~admonish example title="Usage"
Base32 is used in geohash
~~~
