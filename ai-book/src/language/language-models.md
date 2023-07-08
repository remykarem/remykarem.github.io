# Language models

<!-- toc -->

---

## Neural language model

We want to model the probability of the next word given the previous words.

$$
p(w_t | w_{t-1}, w_{t-2}, ..., w_1)
$$

## Word2Vec Skipgram

We want to model the probability of the context words given a target word.

$$
p(w_{t+j} | w_t)
$$

where $j \in [-k,k]$; $k$ is the window size.

## Word2Vec CBOW

We want to model the probability of a target word given its context words.

$$
p(w_t | w_{t-2}, w_{t-1}, w_{t+1}, w_{t+2})
$$

where the window size here is 2.

## ELMo

$$
p(w_t | w_{1:t-1}, w_{t+1:n})
$$

## Autoregressive LM

We want to model the probability of the next word given the previous words.

$$
p(w_t | w_{t-1}, w_{t-2}, ..., w_1)
$$

In this language model, every possible word is dependent on the previous word.

The joint probability of a sequence of words $w_1, w_2, ..., w_N$ is given by:

$$
\begin{aligned}
p(w_1, w_2, ..., w_N) 
    &= p(w_N | w_1, w_2, ..., w_N) \cdot p(w_3 | w_1, w_2) \cdot p(w_2 | w_1) \cdot p(w_1) \\\\
    &= \prod_{i=1}^N p(w_i | w_1, w_2, ..., w_{i-1})
\end{aligned}
$$

> The Bidirectional LM is also based on autoregressive LM.

## Contextual LM

$$
p(w_1, w_2, ..., w_N) = \prod_{i=1}^N p(w_i | w_1, w_2, ..., w_N)
$$
