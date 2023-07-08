# Hyperparameter search

- Grid search
- One learning rate cycle / one-fit cycle

(search for the right learning rate) start low lr, increase exponentially for every batch. Plot LOSS vs. LR. We need to select a point on the graph **with the fastest decrease in the loss**. In this example, the loss function decreases fast when the learning rate is between 0.001 and 0.01.

![Hyperparameter%20search%20729c5649a5ed47d1b28eaad2e1090ebc/Untitled.png](hyperparameter-search.png)

Subsequently, use a cyclic learning rate scheduler and use this learning rate as the max.