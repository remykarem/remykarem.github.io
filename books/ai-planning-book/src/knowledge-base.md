# Knowledge base

Predicate: `At`

Fluent:  `At(loc, grid)` 

Successor state axiom: a statement to define ways to get to a fluent

$$
\begin{aligned}
F^{t+1} \leftrightarrow
&(ActionCausingF^t \vee ... \vee ActionCausingF^t) \\\\
&\vee \\\\
&(F^t \wedge \neg (ActionNotCausingF^t \vee .. \vee ActionNotCausingF^t))
\end{aligned}
$$

> ⚠️ Don't need to include actions that don't have any effect

> ⚠️ Include all possible combinations!

Propositionalise: grounding 

Description: A set of states. `~Poor ∧ Famous(agent)`
