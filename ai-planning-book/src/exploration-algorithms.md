# Exploration algorithms

### Explore, then exploit

1. Try each arm $N$ times.
2. Select arm with the highest reward.
3. Stick with this arm for the rest of the game.

### ε-greedy

Select greedy action with probability $(1-\epsilon)$

Select random action with probability $\epsilon$

Can set $\epsilon=\frac{1}{t}$ to make it GLIE

### UCB

Choose Arm 3 (choose action 3)

```
Arm 1   [    ]
Arm 2     [   ]
Arm 3           [   ]
Arm 4  [       ]
```

"Optimism in the face of uncertainty heuristic"

1. Add the error bound to the Q value
2. Select the action that maximises the new Q

### Thompson sampling

Using Bayes' rule to compute posterior. What's the distribution of the reward given past info and prior?
