# Layers

---

[https://twitter.com/fchollet/status/1627818199311069184?s=20](https://twitter.com/fchollet/status/1627818199311069184?s=20)

# **Dropout**

allows training on smaller datasets without over-fitting.

# **Batch normalization**

allows for faster training. Normalise each pixel value across mini-batch

Make sure to scale the data if it’s on a very different scales. If we don’t scale the data, the level curves (contours) would be narrower and taller which means it would take longer time to converge (see figure 3).

![Layers%206baf4091115f46f885e9a4718180f43f/Normalized.png](layers-Normalized.png)

# **Skip connections**

why do very deep nets perform worse as you keep adding layers?

Addressing the problem of training a really deep architecture by introducing skip connections: layers can copy their inputs to the next layer

Skip connections, which are employed in ResNet and DenseNet allow to build deeper architectures, while mitigating the vanishing gradient problem. All we have to do is to add the output of previous layers to the input of layers located deeper in our network, **before** the activation function is applied:

Skip connections work, because by connecting layers via shortcuts, we can at least learn the identity function. The intuition behind this technique is, that gradients do not have to be backpropagated solely through convolutional (or fully connected) layers, which cause gradients to diminish once they reach the earlier layers of the network. They can rather “skip” layers through the addition operation of the skip connection.

![Layers%206baf4091115f46f885e9a4718180f43f/18Vhd39FU4B-ZDmRQ2m-fPA.png](layers-18Vhd39FU4B-ZDmRQ2m-fPA.png)

Residual learning: instead of trying to learn some features, we try to learn some residual. Residual can be simply understood as subtraction of feature learned from input of that layer