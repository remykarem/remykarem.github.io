# TD learning

aka Temporal difference learning

Online learning; update the value function at every step in an episode.

$$
\text{newestimate} \leftarrow \text{currentestimate} + \alpha(\text{TDtarget}-\text{currentestimate})
$$

$$
U(s) \leftarrow U(s) + \alpha[R(s) + \gamma U(s') - U(s)]
$$

where the TD target consists of reward from 1 time step.

**Variants**

- $n$-step TD learning
    
    Instead of using reward from 1 time step, use \\(n \\) steps.
    
- TD(\\(\lambda \\))
    
    Instead of taking the sum across \\(n \\) steps, use a *weighted* sum. \\(\lambda=0 \\) means no weighted sum.
