# Storing money

Banker's rounding

~~~admonish tip title="What's the underlying problem?"
Decimal fractions cannot be represented exactly using IEEE 754.

Floats cannot exactly represent many decimal fractions (e.g., 0.1 + 0.2 != 0.3)

This introduces rounding errors, which are dangerous for money.
~~~

Use either **string** or **integer** (in cents) to represent amount.

Because in JSON there's no "integer" type, **string** is the best way to represent amount.

Using this representation minimises precision loss at every step of the way:
1. Serialisation
2. Deserialisation
3. Database

~~~admonish example
[Stripe Prices API](https://docs.stripe.com/api/prices)
~~~
