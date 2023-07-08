# Naive Bayes

**#probabilistic**

Assumes strong independence assumption between features, where each feature x is a particular distribution (usually Gaussian), so need to get the mean and std dev.

[https://remykarem.github.io/blog/naive-bayes.html](https://remykarem.github.io/blog/naive-bayes.html)

Inference time:

$$
\mathbf{P}(\text{class} | x) = \frac{\mathbf{P}(\text{class}) × \mathbf{P}(x | \text{class})}{\mathbf{P}(\text{data})}
$$
