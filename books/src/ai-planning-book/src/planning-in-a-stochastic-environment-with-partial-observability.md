# Planning in a stochastic environment with partial observability (using POMDP)

We use a partially observable MDP as a mathematical framework to model an environment with partial observability.

POMDPs have (among others):

1. States
2. Actions
3. Transitions
4. Rewards
5. **Observation / sensor model**
    
The **probability** of perceiving evidence in a state.
    

$$
P(e|s)
$$

**Belief state** (current belief): probability of being in a state given the history. This is updateable as it uses the Markov property.

$$
b(s)
$$

If \\( b(s_1)=0.9 \\) and \\( b(s_2)=0.1 \\), it means that most likely we are in state 1.

> ⚠️ Belief space is continuous!

**Reward function**

$$
\rho(b) = \sum_s b(s) R(s)
$$

> 💡 Optimal policy can be described as a mapping from belief to action (in contrast to a mapping from a state to action).

Updating belief:

At \\( s \\), agent performs action \(( a \\) and to go into state \\( s' \\) and receives evidence \\( e \\).

$$
b'(s') = \frac{P(e|s') \sum_s P(s'|s,a)b(s)}{Z}  
$$

## Value iteration

Compute all alpha vectors

## Online search

- POMCP
- DESPOT
