# Binary cross entropy

Cross entropy loss (classification)

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

<h3 id="bce">Binary cross entropy</h3>
<p id="batch">$$ - \sum_{i=1}^N y_i \log \hat{y}_i + (1-y_i) \log(1- \hat{y}_i) $$</p>
<p id="single">$$ -y \log \hat{y} -(1-y) \log(1- \hat{y}) $$</p>
<p id="single"> $$\text{or} $$</p>
<p id="single"> $$ \left\{\begin{array}{ll}{-\log \hat{y}} & {\text { if } y=1} \\ {-\log (1-\hat{y})} & {\text
    {
    if }
    y=0}\end{array}\right. $$</p>
<p>Note that $\hat{y} \in [0,1]$.</p>