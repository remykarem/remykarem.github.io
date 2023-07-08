# Loss functions

<!-- toc -->

## MSE (regression)

$$
\boldsymbol{x} = 
\begin{bmatrix}
x_1 \\\\
x_2 \\\\
\vdots \\\\
x_n
\end{bmatrix}, 
X_{m\times n} = 
\begin{bmatrix}
x_{1,1} & x_{1,2} & ... & x_{1,n} \\\\
x_{2,1} & x_{2,2} & ... & x_{2,n} \\\\
\vdots \\\\
x_{m,1} & x_{m,2} & ... & x_{m,n} \\\\
\end{bmatrix}, 
\boldsymbol{w}_{n\times1} = 
\begin{bmatrix}
w_1 \\\\
w_2 \\\\
\vdots \\\\
w_n
\end{bmatrix}
$$

General:

$$
\frac{\partial L}{\partial w} = \frac{\partial L}{\partial \hat{y}} \frac{\partial \hat{y}}{\partial w}
$$

**univariate, 1 example**

$$
\begin{aligned}
    \hat{y} &= wx \\\\
    L &=\frac{1}{2}(\hat{y}-y)^{2} \\\\
    \frac{\partial L}{\partial w} &= (\hat{y}-y) x \quad \\\\
\end{aligned}
$$

**univariate, multiple examples**

?

**multivariate, 1 example**

$$
\begin{aligned}\hat{y} &= \boldsymbol{w}^\top_{n \times 1}\boldsymbol{x}_{n \times 1} \\\\ L &=\frac{1}{2}(\hat{y}-y)^{2} \\\\ \frac{\partial L}{\partial \boldsymbol{w}} &= (\hat{y}-y) \boldsymbol{x} \quad \\\\ \end{aligned}
$$

**multivariate, multiple examples**

$$
\begin{aligned}
    \boldsymbol{y} &= X_{m \times n} \boldsymbol{w}_{n \times 1} \\\\
    J &=\frac{1}{2 m}(\hat{\boldsymbol{y}}-\boldsymbol{y})^{\top}(\hat{\boldsymbol{y}}-\boldsymbol{y}) \\\\
    \frac{\partial J} {\partial \boldsymbol{w}} &=\frac{1}{m} X^{\top}(\hat{\boldsymbol{y}}-\boldsymbol{y})
\end{aligned}
$$

## Cross entropy loss (classification)

Binary cross entropy / negative log loss

Formulated by Claude Shannon, this loss function compares how different two distributions (true and predicted) are.


![Cross entropy](./loss-regularisation-01.png)

Gradient descent with

- Logistic regression (= binary cross entropy)
- Softmax regression ( = softmax cross entropy)

> 💡 Note that softmax cross entropy is a generalisation of binary cross entropy.

$$
\boldsymbol{p}_{k \times 1} = 
\begin{bmatrix}
p_1 \\\\
p_2 \\\\
\vdots \\\\
p_k
\end{bmatrix}
$$

$\boldsymbol{p}$ is vector of logits with $k$ classes.

General:

$$
\frac{\partial L}{\partial w} 
= \frac{\partial L}{\partial p} \cdot \frac{\partial p}{\partial z} \cdot \frac{\partial z}{\partial w}
$$

### Binary cross entropy (2-class)

**univariate, 1 example**

$$
\begin{aligned}
    z &= wx \\\\
    p &= \sigma(z) \\\\
    L &=-y \log p-(1-y) \log (1-p) \\\\
    \frac{\partial L}{\partial w} &=(p-y) x \\\\
\end{aligned}
$$

**univariate, many examples**

**multivariate, 1 example**

$$
\begin{aligned}
    z &= \textbf{w}^\top\textbf{x}\\\\ 
    p &= \sigma(z) \\\\
    L &=-y \log p-(1-y) \log (1-p) \\\\
    \frac{\partial L}{\partial \textbf{w}} &=(p-y) \textbf{x} \\\\
\end{aligned}
$$

**multivariate, many examples**

$$
\begin{aligned}
    \textbf{z} &= X\textbf{w} \\\\
    \textbf{p} &= \sigma(\textbf{z}) \\\\
    J &=\frac{1}{m}\left[-\textbf{y}^{\top} \log \textbf{p}-(1-\textbf{y})^{\top} \log (1-\textbf{p})\right] \\\\
    \frac{\partial J}{\partial \textbf{w}} & =\frac{1}{m} X^{T}(\textbf{p}-\textbf{y})
\end{aligned}
$$

## With L2

$$
\begin{aligned}
z &= \textbf{w}^\top\textbf{x}\\\\ 
p &= \sigma(z) \\\\
L &=-y \log p-(1-y) \log (1-p) + \frac{\lambda}{2}||\textbf{w}||^2_2 \\\\
L &=-y \log p-(1-y) \log (1-p) + \frac{\lambda}{2}(w_1^2 + w_2^2 + ... + w_n^2)\\\\
\frac{\partial L}{\partial \textbf{w}} &=(p-y) \textbf{x} + \lambda \textbf{w} \\\\
\end{aligned}
$$

---

## MLE & MAP

- All the loss functions below use MLE (???)
- L2 regularisation (not sure about L1) is actually finding the $\theta_{MAP}$ of a distribution whose prior on $\theta$ is a normal distribution! (MAP interpretation is we are maximising a combination of prior and likelihood functions).

## L1

## L2

Given $\alpha = 0.5$, $\lambda=1$, $w=(1,2)^T$, $\frac{\partial L}{\partial w}=(2,-2)^T$, $L_2=L+\frac{\lambda}{2}||\text{w}||^2$, find the final $w$ after one SGD update.

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

**with smoothing parameter $\epsilon=0.3$ such that**

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

