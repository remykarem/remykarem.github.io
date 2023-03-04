# Activation functions

Non-linearity functions

<!-- toc -->

## Sigmoid

$$
\sigma(x) = \frac{1}{1+\exp(-x)}\\\\
\sigma'(x) = \sigma(x)(1-\sigma(x))
$$

## Softmax

> 💡 Softmax operations deal with vectors.

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

## ReLU

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

## GeLU

## SwiGLU
