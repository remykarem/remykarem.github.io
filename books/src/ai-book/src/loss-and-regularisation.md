# Loss and regularisation

## MLE & MAP

- All the loss functions below use MLE (???)
- L2 regularisation (not sure about L1) is actually finding the \\( \theta_{MAP} \\) of a distribution whose prior on \\( \theta \\) is a normal distribution! (MAP interpretation is we are maximising a combination of prior and likelihood functions).

## Cross entropy

Binary cross entropy and categorical cross entropy

![Cross entropy](./loss-regularisation-01.png)

## L1

## L2

Given \\( \alpha = 0.5 \\), \\( \lambda=1 \\), \\( w=(1,2)^T \\), \\( \frac{\partial L}{\partial w}=(2,-2)^T \\), \\( L_2=L+\frac{\lambda}{2}||\text{w}||^2 \\), find the final \\( w \\) after one SGD update.

$$
\frac{\partial L_2}{\partial w} = \frac{\partial L}{\partial w} + ||w|| = (2,-2)^T+(1,2)^T
$$

## Label smoothing

**Binary / categorical cross entropy:**

$$
y_\text{true(hard)} =\begin{bmatrix}
0 \\\\
0 \\\\
1
\end{bmatrix}, y_\text{pred} =\begin{bmatrix}
0.3 \\\\
0.5 \\\\
0.2
\end{bmatrix}
$$

$$
\text{loss}=-\log(0.2)
$$

**Cross entropy with label smoothing regularisation:**

$$
y_\text{true(smooth)} =\begin{bmatrix}
0.1 \\\\
0.1 \\\\
0.8
\end{bmatrix}, y_\text{pred} =\begin{bmatrix}
0.3 \\\\
0.5 \\\\
0.2
\end{bmatrix}
$$

$$
\text{loss}=-0.1 \times \log(0.3)  -0.1 \times \log(0.5) -0.8 \times \log(0.2)
$$

**with smoothing parameter \\( \epsilon=0.3 \\) such that**

$$
y_\text{true(smooth)} =\begin{bmatrix}
0 \\\\
0 \\\\
1
\end{bmatrix} - \begin{bmatrix}
0 \\\\
0 \\\\
\epsilon
\end{bmatrix} + \frac{1}{3} \begin{bmatrix}
\epsilon \\\\
\epsilon \\\\
\epsilon
\end{bmatrix} = \begin{bmatrix}
0.1 \\\\
0.1 \\\\
0.8
\end{bmatrix}
$$
