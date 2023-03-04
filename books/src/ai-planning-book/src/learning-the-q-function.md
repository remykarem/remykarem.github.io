# Learning the Q-function

aka value learning, model-free RL

Recall that if at every state, we know what is the best action to take,

$$
\begin{aligned}
U(s) 
&= \text{utility from best action} 
\end{aligned}
$$

this means we can create an optimal policy

$$
\pi^*(s)= \text{best action}
$$

So how do we get utility from the best action? By using the Q-function. Recall that Q-function is a mapping

$$
(s,a) \rightarrow utility
$$

So...

$$
U(s) = \max_a Q(s,a)
$$

$$
\pi^*(s)=\arg \max_a Q(s,a)
$$

Because Q is all we need, what makes up Q then becomes an abstraction to us:

- Don't need to know about the transition
- Don't need to know about the reward functions (after all we only need to take argmax of Q)

We can instead use what we've experienced to develop a more accurate representation of \\( Q \\), which in turn helps us to develop a more optimal policy to follow. This learning is incremental learning.
