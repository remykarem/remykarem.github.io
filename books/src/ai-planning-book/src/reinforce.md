# REINFORCE

Extend \\( U(s_0) \\) to a *sequence* ("trajectory" or “episode” \\( \tau \\)) of states, actions and rewards (expectation).

$$
U(\theta) = \sum_\tau p_\theta(\tau)G(\tau)
$$

where \\( p_\theta(\tau) \\) is the probability of generating a sequence \\( \tau \\), and \\( G(\tau) \\) is the sum of rewards from trajectory \\( \tau \\).

Then we use policy gradient theorem

$$
\propto \sum_s p(s) \sum_a \nabla \pi(s,a) Q(s,a)
$$

Then use Monte Carlo sampling to approximate the gradient summing over \\( N \\) trials and \\( J \\) steps.

$$
\approx \frac{1}{N} \sum_{trials}^N \sum_{steps}^J \frac{\nabla \pi(s,a) G(s)}{\pi(s, a)}
$$

From here, we use an online update then we get

$$
\theta_{j+1}=\theta_{j}+\alpha G_{j} \nabla_{\theta} \ln \pi_{\theta}\left(s, a_{j}\right)
$$

where \\( G \\) is the total reward received from \\( j \\).
