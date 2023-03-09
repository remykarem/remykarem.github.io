# Deep Q-learning

Deep Q-network

This is like Q-learning. It is

- off-policy
- 1-step $TD(0)$ learning
- Q-function is approximated using a deep neural network ("function approximation")

![DQN](./dqn.png)

It is still ‘Q’ in a sense that the action still affects the rewards. However, instead of returning the utility in the normal setting,

$$
s,a \rightarrow utility
$$

we return a “distribution of the utility for each action”

$$
s \rightarrow [a_1: 0.3, a_2: 0.1, ..., a_n: 0.5]
$$

Parameter updates

$$
\text{parameter} \leftarrow \text{parameter + (target - currentvalue)} \times \text{gradient}
$$

$$
w \leftarrow w + \alpha[R(s) + \gamma \max_{a'} Q(s',a') - Q(s,a)] \frac{\partial Q}{\partial w}
$$

Flow of events:

$$
s \rightarrow Q^{(curr)} \rightarrow a \rightarrow env \rightarrow r, s'
$$

Note that $Q$ here generates a probability vector. Given

$$
\text{TDpred} = Q^{(curr)}(s)
$$

$$
\text{TDtarget} = r + \gamma \max_{a'} Q^{(target)}(s')
$$

where these two are vectors of probabilities representing each action. We want to minimise the loss so that $Q^{(current)}$ gets smarter:

$$
L = LossFunction(\text{TDpred}, \text{TDtarget})
$$

$$
w^{(curr)} \leftarrow w^{(curr)} - \alpha \frac{\partial L}{\partial w^{(curr)}}
$$

Online Q-learning is tricky because of the *deadly triad*. It's common to use *experience replay*, a buffer of recent transitions that will be sampled randomly to train the network.

> 💡 It is learning the temporal difference.

1. Have 2 models (the behaviour `Q_curr` and  the target `Q_target`)
    
    ```python
    Q_curr = Q_target.copy()
    ```
    
2. Generate many experiences and save them
    
    ```python
        s = env.give_me_the_state()
        a = Q_curr(s)
    r, s' = env.step(a)
    ExperienceBuffer.save((s, a, r, s'))
    ```
    
3. Prepare to train model
    
    ```python
    s, a, r, s' = sample(ExperienceBuffer)
    ```
    
4. Calculate loss. Note that `Q_curr` should try to make it close
    
    ```python
    td_pred = Q_curr(s)
    td_true = r + Q_target(s')
       loss = MSE(td_pred, td_true)
    ```
    
5. Backprop. This will update `Q_curr`.
    
    ```python
    loss.backward()
    ```
    
6. Update the target policy once in a while
    
    ```python
    Q_target = Q_curr.copy()
    ```
    

Data needed: $(s,a,r,s')$

Change: $Q$
