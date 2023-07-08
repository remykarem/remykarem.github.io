# Principal of optimality

The principle of optimality states that if we consider an optimal policy, then the subproblem yielded by our first action will have an optimal policy composed of remaining optimal policy actions.

This leads to the idea of recursion.

$$
\begin{aligned}
U(s_0) &= R(s_0) + \max_{s_0'}U(s_0') \\\\
&= R(s_0) + R(s_1) + \max_{s_1'} U(s_1')
\end{aligned}
$$
