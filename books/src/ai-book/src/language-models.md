# Language models

## Autoregressive LM

In this language model, every possible word is dependent on the previous word.

The joint probability of a sequence of words $w_1, w_2, ..., w_N$ is given by:

$$
\begin{aligned}
p(w_1, w_2, ..., w_N) &= p(w_N | w_1, w_2, ..., w_N) \cdot p(w_3 | w_1, w_2) \cdot p(w_2 | w_1) \cdot p(w_1) \\\\
 &= \prod_{i=1}^N p(w_i | w_1, w_2, ..., w_{i-1})
\end{aligned}
$$

> The Bidirectional LM is also based on autoregressive LM.

## Contextual LM

$$
p(w_1, w_2, ..., w_N) = \prod_{i=1}^N p(w_i | w_1, w_2, ..., w_N)
$$
