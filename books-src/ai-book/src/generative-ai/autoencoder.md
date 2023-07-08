# Autoencoder

![Autoencoders_background.png](Autoencoders_background.png)

```admonish note title="Autoencoders"
In autoencoders, the bottleneck hidden layer forces the network to learn a compressed latent representation. Reconstruction loss forces the latent representation to capture as much information about the data as possible.
```

Encoder learns mapping from the data x to a low-dimensional latent space z (“compressed”).

Decoder learns mapping from latent z to a reconstructed observation, x_hat.

Loss function is L(x, x_hat). It doesn’t use any labels.

Reconstruction loss forces the latent representation to capture as much information about the data as possible.
