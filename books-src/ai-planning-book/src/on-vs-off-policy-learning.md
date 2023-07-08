# On-policy vs. off-policy learning

In off-policy learning, a problem we face is that the distributions from both policies are different. As a result, things we calculate from each distribution (eg. during calculating loss?) will produce different results. So what do we do?

We need a method that can adjust the averages so that the estimates from the target policy are the same from the behaviour policy's distribution. One way to do this is **importance sampling**.

How we do it is we calculate the importance sampling ratio $\rho$ of the sequences (trajectory) between both policies.

Based on this value, we can update the Q values accordingly.

> 💡 On-policy learning: agent follows the same policy which is iteratively improving

> 💡 Off-policy learning: agent doesn't follow the same policy which it is learning. It instead follows a **behaviour policy** while learning a **target policy**.
