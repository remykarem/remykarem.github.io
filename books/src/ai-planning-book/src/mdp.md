# MDP

An MDP is a sequence of $(S, A, P, R)$.

If probabilities or rewards are unknown, then it's a reinforcement learning

## Exploration algorithms

### ε-greedy

### Thompson sampling

Only if transition and reward functions can be maintained and well approximated

### RMAX

Optimism in the face of uncertainty heuristic.

- If you don't know (after seeing the state $m$ times) the reward of (s,a) set it to $R_{max}$ i.e. the largest possible reward.
- If you don't know (after seeing the state $m$ times) the transition probabilities of an (s,a), assume it goes deterministically to some state s' where
    - R(s',a) = $R_{max}$
    - P(s'|s',a) = 1

Eventually you get MDP, then you can solve.

RMAX is a PAC-MDP (Probably Approximately Correct in MDP).
