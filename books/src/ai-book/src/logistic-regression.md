# Logistic regression

**#parametric** **#probabilistic**

A model that predicts the probability using the logistic function $$\frac{1}{1+\exp(-x)}$$

Model:

$$
\hat{p}=\frac{1}{1+\exp(-\sum_i w_i x_i)} \in[0,1]
$$

A regression model whose output (termed as logits) is mapped from a real number to $(0,1)$ through the use of logistic function, which is the inverse of log odds. Log of odds is a measure of odds, which is a ratio (of probabilities).

To get the loss function, notice that each sample can be considered as a Bernoulli trial hence the model follows a Bernoulli distribution. Our objective is to maximise the likelihood, which is equivalent to minimising the negative of maximum likelihood.
