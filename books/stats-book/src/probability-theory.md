# Probability theory

**Random variable**

A random variable is a mapping from probability space onto the number line. "Variable" is a misnomer.

**Conditioning (product rule)**

$$
\begin{aligned}

& p(w,x,y,z) \\
&= p(w,x,y|z)p(z) \\
&= p(w,x|y,z)p(y,z)=p(w,x|y,z)p(y|z)p(z) \\
&= p(w|x,y,z)p(x,y,z)= p(w|x,y,z)p(x|y,z)p(y,z) \\
&= p(w|x,y,z)p(x|y,z)p(y|z)p(z)

\end{aligned}
$$

💡 Monty Hall problem

**Marginalisation (sum rule)**

We have $p(x,y)$.

| $x$                                | $y$ | $p(x,y)$                              |
| ---------------------------------- | --- | ------------------------------------- |
| <span style="color:blue">0</span>  | 1   | <span style="color:blue">0.30</span>  |
| <span style="color:green">1</span> | 0   | <span style="color:green">0.25</span> |
| <span style="color:green">1</span> | 2   | <span style="color:green">0.10</span> |
| <span style="color:red">2</span>   | 2   | <span style="color:red">0.35</span>   |

Find $p(x)$. We sum over all possible values of $y$:

$$
p(x) = \sum_y p(x,y)
$$

| $x$                                | $p(x)$                                       |
| ---------------------------------- | -------------------------------------------- |
| <span style="color:blue">0</span>  | <span style="color:blue">0.3</span>          |
| <span style="color:green">1</span> | <span style="color:green">0.25 + 0.10</span> |
| <span style="color:red">2</span>   | <span style="color:red">0.35</span>          |
