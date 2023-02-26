# Simple planning

# 1. Simple planning (using search)

Simple planning solves problems with **atomic representation**. A problem is defined by:

- Initial state
- Actions
- Transition model
    
    Returns the resulting state that results from performing an action from a state.
    
- Goal test
- Path cost

Problem-solving agents are goal-based agents that construct sequences of actions ("planning") to achieve its goals. This process is called search. An agent must formulate a problem, then identify the goal. It then proceeds with a search algorithm to find the solution.

AIAMA calls these agents as "search-based problem-solving agents."

**Examples:**

- Shortest path
- Travelling salesman problem

## Uninformed search algorithms

Strategies that do not care if a non-goal state is "more promising" than another.

- Uniform-cost search (Dijkstra's algorithm)
    
    Use priority queues to keep track of frontiers
    
- Breadth-first search
    
    Use queue to keep track of frontiers
    
- Depth-first search

## Informed search algorithms

Strategies that know whether a non-goal state is "more promising" than another.

> 💡 **Heuristic function** is an approximation function. An **admissible** heuristic means it does not overestimate the actual

> 🎒 **Is something an admissible heuristic?**
    1. Argue from the point of relaxed problem = does not overestimate = trajectory is a superset of the original problem
    2. Conclude that the optimal path is an optimistic estimate
    The optimal path to a superset ????

- Best-first search. Eg. A* search
    
    At every node, find the path that minimises
    
    $$
    f(n) = g(n) + h(n)
    $$
    
    where $n$ is the next node,
    $g(n)$ is the cost of the path from the start to $n$ ,
    and $h(n)$ is the heuristic function from $n$ to goal.
    
    A* uses a priority queue.
    
- Greedy best-first search
- Memory-bounded heuristic search
    - IDA* (iterative deepening A* search)
