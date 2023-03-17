# Activation functions

Non-linearity functions

Decides if a neuron should be on or off, and if on, how useful is it. They also ensure that values are contained and don’t explode.

The purpose of activation functions is to introduce non-linearities into the network. In real life, almost all of our data is non linear. Nonlinearities allow you to approximate arbitrarily complex functions by introducing nonlinearities into decision boundaries.

<!-- toc -->

## Sigmoid

$$
\sigma(x) = \frac{1}{1+\exp(-x)}\\\\
\sigma'(x) = \sigma(x)(1-\sigma(x))
$$

## Softmax

```admonish note
Softmax operations deal with vectors.
```

Given

$$
\boldsymbol{x} = 
\begin{bmatrix}
    x_1 \\\\
    x_2 \\\\
    \vdots \\\\
    x_n
\end{bmatrix}
$$

The softmax function is given by

$$
\text{softmax}(\boldsymbol{x})
= \frac{\exp(\boldsymbol{x})}{\sum_i\exp(x_i)}
= \frac{1}{\sum_i \exp(x_i)}
    \begin{bmatrix}
        \exp(x_1) \\\\
        \exp(x_2) \\\\
        \vdots \\\\
        \exp(x_n)
    \end{bmatrix}
$$

## Softwax with temperature

**Temperature**, $\theta \in (0,100]$, is a parameter used in NLP to increase or decrease a model's confidence. 

$$
\text{softmax}(\boldsymbol{x})
= \frac{\exp(\boldsymbol{x})}{\sum_i\exp(\frac{x_i}{\theta})}
= \frac{1}{\sum_i \exp(\frac{x_i}{\theta})}
    \begin{bmatrix}
        \exp(\frac{x_1}{\theta}) \\\\
        \exp(\frac{x_2}{\theta}) \\\\
        \vdots \\\\
        \exp(\frac{x_n}{\theta})
    \end{bmatrix}
$$

**Intuition**

A low confidence means that the distribution of the classes is roughly uniform:

$$
\frac{1}{Z}
\begin{bmatrix}
    1 \\
    1 \\
    \vdots \\
    1
\end{bmatrix}
$$

where $Z$ is the normalisation constant.

We can achieve this with the exponential function (for non-linearity purposes):

$$
\frac{1}{Z}
\begin{bmatrix}
    1 \\
    1 \\
    \vdots \\
    1
\end{bmatrix}
=
\frac{1}{Z}
\begin{bmatrix}
    \exp(0) \\
    \exp(0) \\
    \vdots \\
    \exp(0)
\end{bmatrix}
\approx
\frac{1}{Z}
\begin{bmatrix}
    \exp(x'_1) \\
    \exp(x'_2) \\
    \vdots \\
    \exp(x'_n)
\end{bmatrix}
=
\frac{1}{Z}
\begin{bmatrix}
    \exp(\frac{x_1}{\theta}) \\
    \exp(\frac{x_2}{\theta}) \\
    \vdots \\
    \exp(\frac{x_n}{\theta})
\end{bmatrix}
$$

where each of the $x'_i$ is very small (close to 0).

Softmax with temperature is easy to compute (via vectorised operations) (?).

See the blog post from [Luke Salamon](https://lukesalamone.github.io/posts/what-is-temperature/) to visualise varying the temperature.

## ReLU

Rectified Linear Unit

$$
\text{ReLU}(x)
= \begin{cases}
    0 & \text {if } x<0 \\\\
    x & \text {else}
\end{cases} \\\\
\text{ReLU}'(x)
= \begin{cases}
    0 & \text {if } x<0 \\\\
    1 & \text {else}
\end{cases}
$$

## LeakyReLU

$$
\text{LeakyReLU}(x) = 
\begin{cases}
    0.01x & \text {if } x<0 \\\\
    x     & \text {else}
\end{cases} \\\\
\text{LeakyReLU}'(x) = 
\begin{cases}
    0.01 & \text {if } x<0 \\\\
    1    & \text {else}
\end{cases} 
$$

## CeLU

Continuously Differentiable Exponential Linear Unit

## GeLU

Gaussian Error Linear Unit

## SwiGLU

## Swish
