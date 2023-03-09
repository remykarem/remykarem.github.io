# Intro to DL

# **Terminologies**

- architecture = model = network = algorithm
- input = image = tensor = image matrix
- output = convolved feature
- input channels = input maps = depth
- output channels = feature maps = activation map
- filter = kernel = weights = feature extractor = convolution = feature detector
- feature = structure (low-level, high-level)
- resolution = dimension = size
- depth = no. of channels/filters
- class
- example = observation = sample
- Epoch = training step
- Batch = iteration
- Filter
- Downsample = encode
- Upsample = decode

# **Why deep learning?**

- Classical ML: Features are hand engineered. Hand engineered features are
    1. Time-consuming
    2. Brittle
    3. Not scalable
- DL: Features are **learned**. Deep learning is able to extract salient information from raw data by developing a hierarchical representation of features. This automatic feature extraction is an intrinsic component of the architecture. For this reason, deep learning is often described as **representation learning**.

Why now?

1. Big data. Data is becoming more pervasive.
2. Hardware
3. Software

# **Universal approximation theorem**

A feedforward network with a single (hidden) layer is sufficient to approximate, to an arbitrary precision, any continuous function. (Neural networks are excellent function approximators.)

[https://twitter.com/gabrielpeyre/status/1304645917648269312](https://twitter.com/gabrielpeyre/status/1304645917648269312)

# **Normalising feature values**

- Roughly zero-centered, -1 to 1 often works well and roughly **all our inputs are of the same scale**.
- Helps gradient descent converge. Avoid NaN
- Avoiding outlier values can also help
- Can use:
    - Linear scaling
    - Log scaling
    - Max min clipping

# **Networks**

Perceptron (no hidden layer, with nonlinearity)

Deep neural network (multi-layer perceptron)

# **Perceptron components**

- Inputs + Weights + bias. A high bias means that a neuron is more likely activated despite its weights.
- Linear combination
- Non-linearity (nonlinear activation functions)
- Output

Note that a combination of linear models is still linear ie b + wx + wx.

# **Activation functions**

Decides if a neuron should be on or off, and if on, how useful is it. They also ensure that values are contained and don’t explode.

- Sigmoid
- Softmax
- ReLU (Rectified Linear Unit)
- Leaky ReLU
- CELU (Continuously Differentiable Exponential Linear Unit)
- GELU (Gaussian Error Linear Unit)
- Swish

Importance of activation function and nonlinearity

The purpose of activation functions is to introduce non-linearities into the network. In real life, almost all of our data is non linear. Nonlinearities allow you to approximate arbitrarily complex functions by introducing nonlinearities into decision boundaries.

# **Optimisation**

Solving the weights of a network with loss function is a non-convex optimisation. Proper initialisation matters. If network is composed of differentiable functions, then we can probably learn from it using gradient descent.

# **Gradient descent**

[https://www.youtube.com/watch?v=aircAruvnKk](https://www.youtube.com/watch?v=aircAruvnKk)

Compute gradient using backpropagation = chain rule. How does a small change in one weight affect the final loss? Should a weight get nudged up or down? Which ones give most bang for buck (which one will have more effect on the cost function)?

We can compute the **best direction** that is mathematically guaranteed to be the direction of the steepest descend. This direction is related to the gradient of the loss function.

Backpropagation

Backpropagation can be thought of as gates communicating to each other, whether they want their outputs to increase or decrease, so as to make the final output value higher or lower.

Backpropagation will ensure that weights that need to be updated are updated **proportionately** to the loss function. Gradient signals are “distributed” to everyone.

Gradient on x*w

If x were extremely large (no preprocessing done), gradient of w will be very large too. As a result, one needs to compensate by lowering the learning rate by that factor. Another method is to perform **batch normalisation**. Gradients can also vanish because each additional layer can successfully reduce signals through activation functions like sigmoid. One way to prevent this is to use other activation functions like ReLU.

Learning rate

If you set your learning rate too small, you’re not really trusting your gradient on each step. What can happen is that you can get stuck in local minima, because you’re not being as aggressive as you should be to escape them. If you set your learning rate too large, you can overshoot completely and diverge. Setting the learning rate can be challenging in practice such that you avoid the local minima but small off such that you still converge.

How to set learning rate?

- Try different learning rates
- Design a learning rate that ‘adapts’ to the landscape.
- Learning rate schedulers
- One-fit cycle
- Depends on batch size (larger batch size means you are trusting the gradient more so learning rate can be increased)

Learning rate schedulers

- Constant
- Time-based decay
- Step decay
- Exponential decay
- Lambda
- Multistep LR
- Cosine annealing LR
- ReduceLR on plateau
- Cyclic

# **Gradient descent optimisation algorithms**

- Vanilla
- Momentum
- NAG
- RMSProp
- Adam
- RAdam
- SWA

# **(Batch) gradient descent, mini-batch gradient descent, stochastic gradient descent**

Gradient in gradient descent is expensive to compute over all data points. Stochastic gradient descent computes over **a single data point chosen randomly**. The term "stochastic" comes from the fact that the gradient based on a single training sample is a "stochastic approximation" of the "true" cost gradient. The downside of using a single point is that it’s going to be too noisy. Middle ground is to take a mini-batch, where true gradient is approximated by taking the average of the gradients.

- More accurate estimation of gradient
    - Smoother convergence
    - **Allows for larger learning rates** (because we trust the gradients more)

Stochastic gradient descent can be also taken to mean batch gradient descent.

# **Overfitting & regularisation**

- Dropout: randomly set some of the activation of the hidden neurons to 0 with some probability (usually 50%)
- Early stopping
- JUMP START
