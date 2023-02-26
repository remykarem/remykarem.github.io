# Improving speed / accuracy

[https://myrtle.ai/how-to-train-your-resnet/](https://myrtle.ai/how-to-train-your-resnet/)

# **During training**

- Data
    - Perform preprocessing once before training
    - Curriculum learning - train on simple examples, then the hard ones
- Architecture
    - Mixed precision training
    - Smaller model
    - Engineering layers
    - Transfer learning
- Hyperparameters
    - High learning rates (super convergence)
    - Increase batch size
- Optimiser / regularisation / loss
    - Mixup regularisation
    - AdamW
    - Label smoothing

# **During inference**

- Quantisation. Stores weights in low precision formats
    - fixed point vs floating point
    - post-training quantisation vs quantisation-aware training
- Pruning
    - Set some weights to 0. This cuts connections.
- Low Rank Approximation.
    - convolution layer can be broken down into two layers
- Weight sharing
    - Use means clustering to cluster 2.09, 2.12, 1.92, 1.87 and make them be 2. Stick to 2 bits for FCN and 4 bits for CNN
- Pruning & training iteratively
    - Prune then retrain using a super small learning rate (1e-5)