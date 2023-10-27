# Evolutionary algorithms

Subject a **population** to a heuristic survival-of-the-fittest competition. Individuals that score higher on the **fitness function** are granted more **offspring** in the next generation through **crossover** and **mutation** (slightly perturbed copes of themselves or combinations of themselves with other individuals). Individuals that score poorly are removed from the population.

- Genetic algorithm
- Evolution strategy
- Natural evolution strategy

# Natural Evolution Strategies (OpenAI)

Individuals come from a probability distribution (usually Gaussian) around a single set of parameters. Iteratively update this population distribution such that average fitness of individuals drawn from population is maximised. Objective function is differentiable.
