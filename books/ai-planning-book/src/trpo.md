# TRPO

Trust Region Policy Optimization

Higher-level motivation: Sometimes a poor update (in policy gradient methods) can cause a bad decrease in performance. TRPO & PPO avoids this by trying to get monotonic improvements of policy value.

Motivation: Example trajectories (sampled from a policy in production) depend on the policy itself. But **we are also changing the policy as we optimise it**. This makes optimisation difficult.

What do we do?

1. We discern the objective in terms of **old and new** policy ($U(\pi)$ is to be maximised)
    
    $$
    U(\pi) = U(\pi_{old}) + \frac{1}{N(s)}\sum_s \sum_a \pi(s|a) A^{\pi_{old}}(...)
    $$
    
2. We **weight** the states (in a trajectory) according to whether they come from the old policy or the new policy.
    
    $$
    U(\pi) = U(\pi_{old}) + \sum_s \rho_\pi(s) \sum_a \pi(s|a) A^{\pi_{old}}(...)
    $$
    
3. The resulting equation becomes hard to optimise, so we use a sampled approximation.
    
    $$
    L(\pi) = U(\pi_{old}) + \sum_s \rho_{\pi_{old}}(s) \sum_a \pi(s|a) A^{\pi_{old}}(...)
    $$
    
    It can be shown that the expression below (RHS) has a lower bound (hence resulting in monotonic improvements of the policy). "Minorise-maximisation" algorithm.
    
    $$
    U(\pi) \ge L(\pi) - C \max_s \text{KL}[\pi_{old}(\cdot|s)||\pi(\cdot|s)]
    $$
    
    If $\pi = \pi_{old}$, $U(\pi_{old}) = L(\pi_{old})$. Otherwise, $U(\pi_{old}) > L(\pi_{old})$.
    
4. Apply trust region constraint (for faster convergence). Take larger steps in a robust manner.
5. Further approximate the second term using importance sampling.
6. Further approximate using expected KL divergence instead of maximum KL divergence.
