# Weight initialisation

[https://www.deeplearning.ai/ai-notes/initialization/](https://www.deeplearning.ai/ai-notes/initialization/)

On weight initialisation in deep neural networks

# **Motivation**

Backpropagated gradients are either amplified or minimised. As a results, training is slowed down or diverges.

# **Goal**

Gradient signal should not be multiplied by values that are too small or too large in any layer.

# **Proposition**

It is proposed that across layers:

1. Mean of activations should be 0 (so that it’s easier to determine what is the right variance to use for different nonlinear activation functions)
2. Variance of nonlinear activations is the same (intuitively, it maintains magnitude of the signals)

such that the resulting backpropagated gradient signal will not be multiplied by values too small or too large in any layer.

$$
E[a^{[l-1]}] = E[a^{[l]}] \\
Var(a^{[l-1]}) = Var(a^{[l-1]})
$$

# **Assumptions**

- Weights are IID.
- Inputs to the first layer are IID with mean 0 and variance 1.
- Weights and inputs are mutually independent.

# **Types of initialisation**

- Initialise with the same number = symmetrical
    - Cases
        - All zeros => network will not learn
        - All ones => does not break symmetry
        - All small => vanishing gradients; network will not learn
        - All big => exploding gradients
- Initialise with different numbers i.e. random
    - Cases
        - Too large => exploding gradients
        - Too small => vanishing gradients
        - Just nice. We want the activations to have same mean and variance across, to prevent exploding or vanishing gradients

# **Initialisations to use for nonlinear activation functions**

- tanh: Xavier
    
    $$
    N(0,\frac{1}{n^{(l-1)}})
    $$
    
- sigmoid: Kumar
    
    $$
    N(0,\frac{3.6^2}{n^{(l-1)}})
    $$
    
- ReLU: He
    
    $$
    N(0,\frac{2}{n^{(l-1)}})
    $$
    

# Initialisation

## Xavier initialisation

$$
N(0,\frac{1}{n^{(l-1)}})
$$

## He initialisation

$$
N(0,\frac{2}{n^{(l-1)}})
$$

## Others

- Xavier uniform
- He uniform
- Standard normal
- Uniform
- Zeros / other constants
    - Initialising all the weights with zeros leads the neurons to learn the same features during training.
    - Thus, both hidden units will have identical influence on the cost, which will lead to identical gradients. Thus, both neurons will evolve symmetrically throughout training, effectively preventing different neurons from learning different things.

# **Terms**

Kaiming = Kaiming He

Glorot = Xavier Glorot
