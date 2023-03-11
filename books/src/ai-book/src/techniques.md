# Techniques

> 💡 Reducing dimensionality helps with computational efficiency

- (Make deeper)
- Convolution
    - Feature learning
    - Complex gradient
    - Output
        
        padding = "valid"
        
        $$
        \Big\lfloor \frac{n+p-k_{size}}{s} \Big\rfloor + 1
        $$
        
        padding = "same" (output size is the same as input size), where s > 1
        
        $$
        \lceil \frac{n}{s} \rceil
        $$
        
- Nonlinearity (tanh)
- Max-pooling
    - Reduce feature map size (needed to aggregate information); derive higher levels of abstraction.
    - No. of strides is usually more than 1 to reduce dimensionality. **Pooling is applied to each channel separately.**
    - Forward
    - Backward
        
        Gradients only flow back to the unit that was used
        
- Nonlinearity: ReLU
- Dropout
    - Regularisation; "ensembling"
    - Forward
        
        Drop $p$ of the neurons.
        
        $$
        z_i = \text{Dropout}(h_i) 
        = \begin{cases}
        0 & \text{if dropped} \\\\
        h_i \times scale & \text{else}
        \end{cases}
        $$
        
        where $scale = \frac{1}{1-p}$.
        
    - Backward
        
        $$
        \frac{\partial z_i}{\partial h_i}
        = \begin{cases}
        0 & \text{if dropped previously} \\\\
        scale & \text{else}
        \end{cases}
        $$
        
    - Gradients flow back to the unit that didn't experience dropout
- Stacking uniform convolutional layers
    - Stacking consecutive $3 \times 3$ convolutional layers is equivalent to a $5 \times 5$ convolutional layer in *terms of receptive field size*. Computationally cheaper.
- [Modular] (concat)
    - "Ensembling" of different kernels; different information can be captured at different levels
- 1x1 convolution
    - Used before a convolutional layer to first reduce dimension; cross information learning (duh?)
- Average-pooling
    - Reduce feature map size (needed to aggregate information)
    - Forward
    ...
    - Backward
    Gradients flow back to all units
- Batch norm
    - Note that mean and std are *accumulated* during training.
        
        No. of samples is usually the no. of samples in the batch.
        
        (See table below)
        
        mean = 0.9*old_mean + 0.1*current_mean
        std  = 0.9*old_std  + 0.1*current_std
        
    - Normalisation improves loss contour (hence faster convergence); helps with covariate shift (distribution keeps changing at every layer); helps with regularisation because it is more robust to distribution changes
    
    > 💡 For CNN batch norm, every channel will have a mean and std. (Replace "neuron1", "neuron2", etc. with "channel1", "channel2", ...
    
- Kernel factorisation (spatially separable convolution)
    - $7 \times 7$ is equivalent to $1 \times 7$ and $7 \times 1$ in terms of receptive field (how?).Cos of computation is reduced.
- Skip connections
    - Gradient does not vanish → faster convergence; "ensembling"
- Kernel factorisation (depthwise separable convolution)
    - $c_{in} \times c_{out} \times 3 \times 3$ filter is equivalent to $c_{in} \times 3 \times 3$ followed by $c_{in} \times c_{out} \times 1 \times 1$. Cost of computation is reduced.
    - Depthwise = no. of kernels determined by input channels 
    Pointwise = 1x1 convolution
- Zero convolution


| d       | sample1 sample2 | mean* std* | sample1 sample2                 |
| ------- | --------------- | ---------- | ------------------------------- |
| neuron1 | 4 5             | 4.5 1      | w1*(4-4.5)/1+b1 w1*(5-4.5)/1+b1 |
| neuron2 | 3 0             | 1.5 2      | w2*(3-1.5)/2+b2 w2*(0-1.5)/2+b2 |
| neuron3 | 2 8             | 5.0 1      | w3*(2-5.0)/1+b3 w3*(8-5.0)/1+b3 |
| neuron4 | 1 2             | 1.5 1      | w4*(1-1.5)/1+b4 w4*(2-2.0)/1+b4 |
