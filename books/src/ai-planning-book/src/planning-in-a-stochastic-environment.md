# Planning in a stochastic environment

To model decision making in situations where outcomes are partly random and partly under the control of a decision maker, we use a mathematical model called **Markov decision process.**

Markov Decision Process = "if i see this state, i can forget about the history"

= (states, actions, rewards, transitions)

Settings

- Horizon (finite or infinite)
- Discounted or not discounted

Markov decision process: every decision point does not require you to know about the previous history

How to plan in a stochastic environment? We want a policy that tells us what action to take given a state. To get this policy, we need to run value iteration or policy iteration. Sometimes we don't need to have the entire policy possibly because there are too many states. In this case, we perform online search (finding the best action at that state).

---

<!-- toc -->

---

## State

$$
s
$$

## Action

$$
a
$$

## Transition matrix

> 💡 If I take action \\( a \\) at state \\( s \\), what is the probability that I end up at state \\( s' \\)?

> ⚠️ Note that action has already been determined.

$$
T(s, a) \rightarrow s'
$$

$$
P(s'|s,a) \rightarrow \mathbb{R}
$$

> ⚠️ Transitions must be Markovian

## Reward and reward function

A function ("**reward function**") that maps a state \\( s \\) to a value ("**reward**").

$$
R(s) \rightarrow \mathbb{R}
$$

Reward functions can also depend on both the state and the action:

$$
R(s,a) \rightarrow \mathbb{R}
$$

## Policy

A function ("**policy**") that maps a state to an action. It answers the question "what action should I take at a particular state?"

$$
\pi(s) \rightarrow a
$$

Utility of a sequence of states is the sum of (discounted) rewards

$$
U([s_0, s_1, ...]) \rightarrow \mathbb{R}
$$

## Utility of a state

The utility of a state is a measure of how “useful” a state is. To be used later to compare between utilities of other states.

$$
U(s) \rightarrow \mathbb{R}
$$

$$
\begin{aligned}
U(s) 
&= \mathbb{E} [\text{(discounted) sum of all rewards}] \\\\
&= \mathbb{E} [R(S_0) + \gamma R(S_1) + ... ] \\\\
&= \mathbb{E} \Big[ \sum_t \gamma^t R(S_t) \Big]
\end{aligned}
$$

= utility of a sequence of states as taken by some policy \\( \pi \\)

= rewards from current state + rewards from future states

## Value function

The value function is the utility of a state under an *optimal* policy. It is the Bellman equation itself.

> 💡 The value function of a state is the sum of (1) the current reward and (2) the expected (or weighted) value from taking the ‘best’ action.

$$
\begin{aligned}
V(s) 
&= R(s) + \gamma \max_{a \in A} \sum_{s'} P(s'|s,a)V(s') \\
\end{aligned}
$$

For MDPs where the reward function depends on both state and action,

$$
\begin{aligned}
V(s) 
&= \max_{a\in A} \Big(R(s,a) + \gamma \mathbb{E}[U(s')] \Big) \\\\
&= \max_{a\in A} \Big(R(s,a) + \gamma \sum_{s'} P(s'|s,a)V(s') \Big)
\end{aligned}
$$

From the value function \\( V \\), we can derive the optimal policy \\( \pi^* \\)

$$
\pi^*(s) = \arg \max_a \sum_{s'} P(s'|s,a)  V(s')
$$

> 💡 Suppose you are in a state \\( s \\). For every action in this state, compute its weighted value (based on the transition probabilities). Then find the action that returns the highest expected value.

## Q-function

Like the value function, the Q-function is the utility of taking an action at a given state under an *optimal* policy.

> 💡 (what's the expected reward given that you start from a certain state \\( s \\) and take a certain action \\( a \\))

$$
Q(s,a) = R(s) + \gamma \sum_{s'} P(s'|s,a) \max_{a'} Q(s', a')
$$

## Sum of rewards

The sum of rewards for an episode that starts with state \\( s \\).

$$
G(s)
$$

Two notations exist:

1. \\( G_k \\) indicates the cumulative rewards for the \\( k \\)th episode.
2. \\( G_{t:t+n} = R_t + R_{t+1} + ... +  R_{t+n-1} + \hat{U}(S_{t+n}) \\) (discounts are omitted for readability)

## Trajectory

A sequence of states that have been undertaken is called a "**trajectory**" or an "**episode**".

$$
\tau
$$

## Advantage function

$$
A(s,a) = Q(s,a) - V(s)
$$

> 💡 How much is a certain action good or bad given a certain state. how relatively happy you are taking the action a (given that you're in state s) = what's so good about taking action a = what's the advantage of taking action a. I used 'relatively' because Q(s,a) has a similar definition but without the relative.

Calculating no. of states:

- TSP
    
    \\( N \\) cities. A salesman must visit every city in a graph. Cannot visit any city twice. 
    
    State: visited 0, at city 4
    
    State: visited 1, at city 2
    
    For every time he is at a city, there are \\( n \le N \\) cities visited.
    
    There are \\( 2^N \\) combinations where he can be.
    
    $$O(N2^N)$$
    
- Inventory control
    
    Company has space to store \\( N \\).
