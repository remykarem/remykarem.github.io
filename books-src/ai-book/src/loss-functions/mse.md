# MSE

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


<h3 id="mse">MSE (Mean Squared Error)</h3>
<p id="batch">$$ \frac{1}{N} \sum_{i=1}^N (\hat{y_i}-y_i)^2 $$</p>
<p id="single">$$ (\hat{y}-y)^2 $$</p>
<p>Layman: "Our predictions are off by ___ on average (for RMSE)."</p>
