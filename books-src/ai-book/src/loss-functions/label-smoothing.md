# Label smoothing

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
