# Logistic regression

**#parametric** **#probabilistic**

A model that predicts the probability using the logistic function $$\frac{1}{1+\exp(-x)}$$

Model:

$$
\hat{p}=\frac{1}{1+\exp(-\sum_i w_i x_i)} \in[0,1]
$$

A regression model whose output (termed as logits) is mapped from a real number to $(0,1)$ through the use of logistic function, which is the inverse of log odds. Log of odds is a measure of odds, which is a ratio (of probabilities).

To get the loss function, notice that each sample can be considered as a Bernoulli trial hence the model follows a Bernoulli distribution. Our objective is to maximise the likelihood, which is equivalent to minimising the negative of maximum likelihood.

**Why is it called logistic regression?**
    
It's because its underlying technique is quite the same as linear regression. The term *logistic* is taken from the logit function which is used as the method of classification. A logit function is

$$
\text{logit}(p) = \log(\text{odds})= \log \frac{p}{1-p}
$$

which maps values from $(0,1)$ to $(-\infty,\infty)$.

**What is the relation between the logistic function and the logit function?**

A logistic function is inverse-logit:

$$
\begin{align}
x &= \log \frac{p}{1-p} \\
e^x &= \frac{p}{1-p} \\
e^x-pe^x &= p \\
p + pe^x &= e^x \\
p(1 + e^x) &= e^x \\
p &= \frac{e^x}{1 + e^x} \\
  &= \frac{e^{-x}(e^x)}{e^{-x}(1 + e^x)} \\
  &= \frac{1}{1 + e^{-x}}
\end{align}
$$

which will map values from $(-\infty,\infty)$ to $(0,1)$, which will be convenient for binary classification tasks.

The last form of the equation is probably easier to compute in libraries (?).
