# Entropy

Bits of entropy is used to measure the unpredictability or randomness of a piece of information.

$$
H = \log_2 N
$$

where $N$ is the total no. of possible values.

The higher the entropy, the more random is the information and the harder it is to guess or brute-force.

~~~admonish tip title="Intuition for metric"
We want to measure how _complex_ or uncertain the system is.

One way to define complexity is to equate it to the **no. of different outcomes**.

But how significant is the difference between one system and another if they only differ by a handful of outcomes? Is there another 'simpler' measure that is still monotonic?

A proxy for measuring no. of outcomes is the **no. of yes/no questions** to ask in order to arrive at any outcome.

The more yes/no questions there are, the more outcomes there will be.

This measure is easier to reason about because it is directly related to the **no. of bits** of a piece of data.
~~~

~~~admonish tip title="Direct count"
Using the total no. of outcomes wouldn't properly account for the "decision depth" of the system.
~~~

add javascript here
