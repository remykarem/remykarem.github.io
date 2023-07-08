# Policy iteration

Policy iteration is a variant of value iteration.

1. Initialise $U$ to 0. Initialise $\pi$ randomly.
2. **Policy evaluation** (similar to Bellman update). Run for all states.
    
    $$
    U(s) = R(s) + \gamma \sum_{s'} P(s'|s,a) U(s')
    $$
    
    > 💡 For every state, the utility is (i) its own reward and (ii) the (discounted) sum of the expected utility of its neighbours.
    
3. **Policy improvement**: For every state, get the best action from the value function using max.
    
    $$
    \pi(s) = \arg \max_a \sum_{s'} P(s'|s,a) U(s')
    $$
    
    > 💡 For every state, see which action transits me into a state giving me the highest utility.
    
