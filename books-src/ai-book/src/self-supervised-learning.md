# Self-supervised learning

Specifically for deep learning:

* Masked language modelling
* VAE and GAN are generative SSL methods
* Contrastive learning
    * SimCLRv2

Training a model using labels that are inherent in the data, rather than requiring a separate set of labels.

The task that is used for pretraining is the **pretext task**. The tasks that we then use for fine-tuning are called **downstream tasks**. This is also **transfer learning**.

- Colorisation
- Guessing image patches
- Placing frames in thr right order
- Inpainting
- Classify corrupted images

Choosing a pretext task

The tasks that you choose needs to be something that, if solved, would require an understanding of your data which would also be needed to solve your downstream task.
