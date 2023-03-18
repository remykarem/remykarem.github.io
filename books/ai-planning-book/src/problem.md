# Problem

A problem is formally defined by 5 components:

- Initial state
- Actions
- Transition model (the different results for taking different actions)
- Goal
- Path cost

The initial state, actions and transition model implicitly define the **state space:** the set of all states reachable from initial state by any sequence of actions. The state space forms a directed graph.

---

"Planning problem": Given a starting point ("initial state") and a goal, what are the actions to take?

Applications:

- High-level planning for intelligent robots
- Autonomous systems
- Problem-solving

Properties of planning problems

- Are the actions *deterministic* or *nondeterministic*?
- Are there probabilities?
- Is there *full* or *partial* observability?

Single-agent planning:

- Simple problem → Problem with many states → Problem with many states + uncertainty

Multi-agent planning:

- Problem with multiple agents (game theory)

Types of planning algorithms:

- Classical planning
- Markov decision process

Planning means to devise a plan of action to achieve one's goals (goal-based agent). Types of planning agents:

- Search-based problem-solving agents (atomic representation)
- Classical planning agents (factored representation)

Planning

- Simple planning
    
    Dijkstra's algorithm. This is not feasible. Planning algorithms try to avoid constructing the whole graph.
    
- Classical planning
- Nondeterministic planning
- Probabilistic planning
