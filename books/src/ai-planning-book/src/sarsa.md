# SARSA

This is an

1. on-policy 
2. 1-step \\( TD(0) \\) learning
3. \\(\epsilon\\)-greedy for action selection.

Value of the state-action pair is updated as:

$$
\text{updatedvalue} \leftarrow \text{currentvalue + (target - currentvalue)}
$$

$$
Q(s,a) \leftarrow Q(s,a) +  \alpha [R(s) + \gamma Q(s',a') -Q(s,a)]
$$

where \\( a' \\) is the action already taken at \\( s' \\) and

$$
\text{TDtarget} = R(s) + Q(s',a')
$$

Data needed: \\( (s_1,a_1,r_1,s_2,a_2) \\)

Change: \\( Q(s_1,a_1) \\)
