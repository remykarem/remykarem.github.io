# Q-learning

This is an

1. off-policy 
2. 1-step $TD(0)$ learning

$$
\text{updatedvalue} \leftarrow \text{currentvalue + (target - currentvalue)}
$$

$$
Q(s,a) \leftarrow Q(s,a) +  \alpha [R(s) + \gamma \max_{a'} Q(s',a') -Q(s,a)]
$$

where $a'$ is the action taken at $s'$ (need to find the max of all the different actions taken from $s'$!) and

$$
\text{TDtarget} = R(s) + \gamma \max_{a'} Q(s',a')
$$

Data needed: \\((s_1,a_1,r_1,s_2,[a_{21}, a_{22}, ...]) \\)

Change: $Q(s_1,a_1)$
