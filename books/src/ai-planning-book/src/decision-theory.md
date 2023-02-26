# Decision theory

Making rational decisions means making decisions that follow the 4 axioms of decision theory:

1. Orderability (comparability)
2. Transitivity
3. Continuity
4. Substitutability

When deciding between 2 options which can either be a fixed outcome ("**state**") or a  gamble ("**lottery**"), we compare the usefulness ("**utility**") between them, i.e. assigning a function \\( U \\) to them.

$$
U(\text{have car}) \\ U(\text{have car with prob 0.9}) 
$$

Every lottery has a number of possible outcomes or states and their probabilities attached to them. The utility of any lottery is the same as its expectation ("**expected utility**").

$$
L = [0.1, S_1; 0.9; S_2] \\
U(L) = EU(L)=0.1U(S_1)+0.9U(S_2)
$$

where "S" is used to denote state.

By the principle of maximum utility, an agent is said to act rationally ("**rational**") if it chooses an action ("**action**") that maximises the expected utiltity. So apparently you can also calculate the expected utility of an action: for every possible outcome, multiply its utility and its probability, then sum all these products.

> 💡 **von Neumann-Morgenstern utility theorem** says that utility of a lottery is the expected value of the utilities of the outcomes

$$
U([p_1,S_1; ...; p_n,S_n]) = \sum_{i=1}^N p_i U(S_i)
$$
