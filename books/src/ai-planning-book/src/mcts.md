# Online search: MCTS

Sample a problem space randomly and repeatedly in order to obtain a more accurate understanding ("**statistics**") and to decide which action to take next.

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78109082-b562-4648-b767-be5e484ddbce/video-output-19879316-4B55-4C39-99C9-7201375BE911.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78109082-b562-4648-b767-be5e484ddbce/video-output-19879316-4B55-4C39-99C9-7201375BE911.mov)

Q-function in MCTS is defined as

$$
Q(s,a) = \text{\#returns}
$$

And the action to take at state *s* is

$$
\pi(n) = \arg \max_{a \in A} Q(n,a)
$$

1. **Select a node**
    
    The policy to follow is \\( \pi_{UCT} \\). Calculate UCT (Upper Confidence Tree) for every child
    
    $$
    UCT =  \text{exploitation} + C \times \text{exploration}
    $$
    
    where
    
    $$
    \text{exploitation} = \frac{v_i}{n_i} \\\\
    \text{exploration} = \sqrt \frac{\log N}{n_i}
    $$
    
    and where
    
    - \\( v_i \\) is the sum of the returns from the \\( i \\)th child
    - \\( n_i \\) is the no. of visits of the \\( i \\)th child
    - \\( N \\) is the no. of visits of the current node
2. **Expand**
    
    At this node, we select an action that hasn't been taken. Selecting that action means we will enter the state.
    
3. **Simulate**
    
    In this part, the policy to follow is usually a uniform random policy.
    
4. **Backprop**
    
    Update rewards and n_visits.


```python
from __future__ import annotations
import numpy as np
from operator import itemgetter
import random

ACTIONS = [3, 2, 1, 0]
N_ACTIONS = len(ACTIONS)

class MonteCarloTree:
    def __init__(self, state, depth=0):
        self.n_visits = 0
        self.rewards = 0
        self.children = []
        self.actions_not_taken = ACTIONS.copy()
        self.state = state.copy()
        self.depth = depth
        self.is_terminal = False

        # to keep track of nodes needed for backprop
        # root node's responsibility
        self.stack = Stack()

    @property
    def deets(self):
        print(f"Fully expanded: {self.is_fully_expanded}")
        print(f"Depth: {self.depth}")
        print(f"Visits: {self.n_visits}")
        print(f"Rewards: {self.rewards}")

    def find_best_action(self,
                         max_depth=1,
                         n_rollouts=20,
                         **infos) -> int:
        """Only the root node should be calling this"""

        # 1. Perform rollouts
        for rollout_number in range(n_rollouts):
            print(rollout_number)
            # Step 1
            node = self.select(max_depth)
            # Step 2
            node = self.expand(node, **infos)
            # Step 3
            rewards = self.rollout(node, **infos)
            # Step 4
            self.backprop(rewards)

        # 2. Return action that had many visits
        visits = [child.n_visits for child in self.children]
        action, _ = max(enumerate(visits), key=itemgetter(1))

        return action

    def select(self, max_depth) -> MonteCarloTree:
        """
        Traverse from root
        If no. of children less than no. of actions, create new node.
        Otherwise, do UCT
        Only the root node should be calling this
        """
        node = self
        self.stack.push(node)

        while node.is_fully_expanded and node.depth < max_depth:
            node = node.find_best_child_uct()
            self.stack.push(node)

        return node

    def expand(self, node, **infos) -> MonteCarloTree:
        """
        Only the root node should be calling this
        Return a child node
        """
        action = node.actions_not_taken.pop()
        state_new = self.get_next_state(state=node.state, action=action, **infos)

        child = MonteCarloTree(state=state_new, depth=node.depth+1)
        self.children.append(child)
        self.stack.push(child)

        return child

    def rollout(self, node, **infos) -> int:
        """
        Only the root node should be calling this
        Play the game and return the reward
        """
        sim = Simulator.create(node.state, infos["max_speed"])
        reward = sim.step_through(node.state)
        return reward

    def backprop(self, rewards):
        """Only the root node should be calling this"""
        while self.stack.is_not_empty:
            node = self.stack.pop()
            node.n_visits += 1
            node.rewards += rewards

    def find_best_child_uct(self) -> MonteCarloTree:
        return self.children[0]

    @property
    def is_fully_expanded(self):
        return not self.actions_not_taken

    def get_next_state(self, state, action, **infos):
        sim = Simulator.create(state, infos["max_speed"])
        reward = sim.step(action)
        return reward

class Stack:
    def __init__(self):
        self.data = []

    def push(self, val):
        self.data.append(val)

    def pop(self):
        return self.data.pop()

    @property
    def is_not_empty(self):
        return len(self.data) > 0

class Simulator:
    def __init__(self, state, max_speeds):
        self.state = state
        self.max_speeds = max_speeds

    @classmethod
    def create(cls, state, max_speeds):
        return cls(state, max_speeds)

    def step(self, action) -> int:
        """Environment and agent"""

        # Environment
        speeds = [random.randint(1, max_speed)
                  for max_speed in self.max_speeds]
        next_state = predict(self.state,
                             speeds=speeds,
                             agent_coord=(None, None),
                             include_occupancy=True)
        self.state = next_state

        # Agent
        x, y = np.where(self.state[1] == 1)
        x, y = x[0], y[0]
        if action == 0:
            x = x-1
            y = y-1
        elif action == 1:
            x = x+1
        elif action == 2:
            y = y-3
        elif action == 3:
            y = y-2
        elif action == 4:
            y = y-1
        else:
            raise ValueError
        x = np.clip(x, 0, 9)
        y = np.clip(y, 0, 49)

        # State, reward, done
        if (x, y) == (0, 0):
            return 10, True
        elif next_state[0, x, y] == 1:
            return 0, True
        else:
            return 0, False

    def step_through(self, action) -> int:
        done = False
        while not done:
            reward, done = self.step(action)
        return reward
```
