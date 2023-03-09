# Learning the policy

AKA policy search

In policy search, we try to find a policy. One example to represent a policy is by using Q-functions.

The policy $\pi$ is parametrised by $\theta$. The goal is to adjust $\theta$ to improve policy.

Often use a stochastic policy $\pi_\theta(s,a)$ and often we want it to be differentiable (because we want to use gradient descent). An unbiased estimate for gradient ascent is sufficient; no need for exact gradient.

Recall that utility of a state $s_0$

$$
U(s_0) = \sum_a \pi(s_0,a)R(a)
$$

Parametrise it with $\theta$

$$
U_\theta(s_0) = \sum_a \pi_\theta(s_0,a)R(a)
$$

Then differentiate wrt to $\theta$:

$$
\begin{aligned}
& \nabla_\theta U_\theta(s_0) \\\\
&= \nabla_\theta \sum_a \pi_\theta(s_0,a)R(a) \\\\
&= \sum_a \nabla_\theta\pi_\theta(s_0,a)R(a)
\end{aligned}
$$

but we can sample from the gradient using Monte Carlo methods using importance sampling (where $\pi_\theta$ is a probability distribution)

$$
\begin{aligned}
&= \sum_a \nabla_\theta\pi_\theta(s_0,a)R(a) \\\\
&= \sum_a \pi_\theta(s_0,a) \frac{\nabla_\theta \pi_\theta(s_0,a)R(a)}{\pi_\theta(s_0,a)} \\\\
&= \mathbb{E}\Big[\frac{\nabla_\theta \pi_\theta(s_0,a)R(a)}{\pi_\theta(s_0,a)}\Big] \\\\
&\approx \frac{1}{N} \sum_{j=1}^N \frac{\nabla_\theta \pi_\theta(s_0,a_j)R(a_j)}{\pi_\theta(s_0,a_j)}
\end{aligned}
$$
