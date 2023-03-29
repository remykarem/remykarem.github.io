# Basic

<!-- toc -->

---

## **Expectation**

The expectation, or expected value, of some function f(x) with respect to a probability distribution P(x) is the average, or mean value, that f takes on when x is drawn from P.

$$
\mathbb{E}_{X\sim P} [f(x)] = \sum_x P(x)f(x)
$$


Random is not limited to uniformly random. Can be normally random etc.

Random variable

- a variable whose possible values are outcomes of a random phenomenon
- random variable has a probability distribution, which specifies the probability of its values
- is a variable (specifically a dependent variable), in the sense that it depends on the outcome of an underlying process providing the input to this function
- it is random in the sense that the underlying process is assumed to be random.

### Population mean

$$
\mu_X
$$

### Sample mean

$$
\bar{X}
$$

## Variance

How much does a single variable vary?

> 💡 A measure of spread by looking at how every value is different from the "leader" (mean)

## Population variance

$$
1,6,3
$$

If the above were the population, then

$$
\frac{1}{3}[(1-5)^2+(4-5)^2+(3-5)^2]
$$

## Unbiased sample variance

$$
1,6,3
$$

If the above were the sample, then

$$
\frac{1}{3-1}[(1-5)^2+(4-5)^2+(3-5)^2]
$$

## Covariance

Covariance is a measure of how much two random variables vary together.

> 💡 A measure of spread by looking at how every pair of values is different from their "leaders" (means).

Covariance matrix for $X$ and $Y$:

```
Cov(X,X)  Cov(X,Y)
Cov(Y,X)  Cov(Y,Y)
```

## Population covariance

$$
\text{Cov}(X,Y)=\frac{\sum_{i=1}^{N}(X_i-\bar{X})(Y_i-\bar{Y})]}{N}
$$

## Unbiased sample covariance

$$
\hat{\text{Cov}}(X,Y)=\frac{\sum_{i=1}^{N}(X_i-\bar{X})(Y_i-\bar{Y})]}{N-1}
$$

$$
X = \{1,6,3\}
$$

$$
Y = \{2,9,7\}
$$

$$
\frac{1}{3-1}[(1-\bar{X})(2-\bar{Y})+(6-\bar{X})(9-\bar{Y})+(3-\bar{X})(7-\bar{Y})]
$$

## Correlation

Correlation measures dependence (whether causal or not) between two random variables. The most common is Pearson's correlation.

> 💡 How the measure of average pairwise product spread compares to the product of average spread.

## **Pearson's correlation**

aka: Pearson product-moment correlation coefficient (PPMCC), correlation coefficient.

$$
\rho_{X,Y} = \frac{\text{cov}(X,Y)}{\sigma_X \sigma_Y}
$$

> 💡 Average of the product of pointwise spread : product of average pointwise spread

## Hoeffding's inequality

The probability that the sample mean differs from the expectation by some number is at most a  function of that number.

$$
P(\big|\bar{X} - E[X] \big| > u) \le 2e^{-2Nu^2}
$$

where $\bar{X} = \frac{1}{N} \sum_{i=1}^N X_i$.

## Union bound

$$
P(A_1 \cup A_2 \cup ... \cup A_N) \le \sum_i^N P(A_i)
$$

## MLE

Maximum Likelihood Estimation

$$
\begin{aligned}
\theta^*
&= \arg \max_\theta P(data|\theta) \\
&= \arg \max_\theta \prod_{i=1}^N P(data_i|\theta) \\
&= \arg \max_\theta \sum_{i=1}^N \log P(data_i|\theta)
\end{aligned}
$$

which maximises the likelihood

## MAP

Maximum A Posteriori.  Similar to MLE.

Recall that posterior distribution is

$$
P(\theta|data) = \frac{P(data|\theta)P(\theta)}{P(data)}
$$

MAP is

$$
\begin{aligned}
\theta^*
&= \arg \max_\theta P(data|\theta) P(\theta) \\
&= \arg \max_\theta \sum_{i=1}^N \Big[ \log P(data_i|\theta) + \log P(\theta) \Big] \\
&= \arg \max_\theta \sum_{i=1}^N \log P(data_i|\theta)
\end{aligned}
$$

## Law of large numbers

For a random variable $X$ with mean $\mu$ and variance $\sigma^2$, and a sequence of independent and identically distributed random variables $X_1, X_2, ..., X_n$, the **sample average random variable**

$$
\bar{X}_n =\frac{1}{n} \sum_{i=1}^n X_i \xrightarrow{n \rightarrow \infty} \mu
$$

So how is this useful? To estimate the mean of a distribution, we simply sample where $n$ is sufficiently large.

> ⚠️ Wrong: "I have been unlucky for a while, I will be lucky next time because of the Law of Large Numbers?" Each throw is independent of the previous ones. LLN just says that if we toss a coin *a lot of times*, the average outcome almost surely converges to the expected. **It doesn't reveal anything about the next outcome**. The independent throws can be rigged, however, like in casinos.

## CLT

Central limit theorem

Like the law of large numbers, but it says that the distribution of the **sample mean** converges to a normal standard normal distribution.
