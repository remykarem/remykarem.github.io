# Transfer learning

# Definitions / intuitions

- "Given a loss function, theoretically, the random model will have a higher loss (think loss landscape). This is what is meant by “knowing to do something”."
- “Transfer learning is the idea that, if you know how to solve a task well, you should be able to transfer some of that understanding to solving related problems.”
- “Transfer learning is a means to extract knowledge from a source setting and apply it to a different target setting.”
    - Train a model with a smaller dataset,
    - Improve generalisation, and
    - Speed up training.
- Transfer learning is a technique that takes a piece of a model that has already been trained on a related task and reusing it in a new model. The intuition behind this idea is, that also for other tasks or dataset the first layers of neural networks learn similar concepts to recognise basic structures such as blobs and edges. This concepts do not have be trained again from scratch when using pretrained models.
- [Transfer learning](http://cs231n.github.io/transfer-learning/) is a technique in machine learning in which we apply knowledge from a source domain (e.g. ImageNet) to a target domain that may have significantly fewer data points. In practice, this generally involves initialising a model with pre-trained weights from ResNet, Inception, etc. and either using it as a feature extractor, or fine-tuning the last few layers on a new dataset. With transfer learning, these models can be re-purposed for any related task we want, from object detection for self-driving vehicles to generating captions for video clips. Use when:
    - Similar domain
    - Small dataset
    - Extract feature
    - Fine-tune last few layers
- The underlying idea of transfer learning is that neural net architectures will generalise for similar types of problems: for example, that many images have underlying features (such as corners, circles, dog faces, or wheels) that show up in a variety of different types of images. In contrast, the underlying idea of promoting neural architecture search for every problem is the opposite: that each dataset has a unique, highly specialised architecture it will perform best with.

# How can knowledge be transferred?

1. From a task to a downstream task (via sequential transfer learning or multitask learning)
2. From a domain to another domain (domain adaptation)
3. From a language to another language (cross-lingual learning)

# Who can use?

- Small data
- Pathetic computer

# How to fine-tune?

Gradual unfreezing

Discriminative learning rates

One-cycle training

ImageNet pretraining has been quite successful

No. Of layers

Batch normalisation

ReLU

Dropouts

- architecture
    - Keep
    - Modify
- Weights
    - Don’t change (feature extraction)
    - Modify (fine-tuning the weights)
- Manner
    - One layer at a time (freezing)
    - Start with low learning rates
    - Regularisation (One way to minimise catastrophic forgetting is to encourage target model parameters to stay close to the parameters of the pretrained model using a regularisation term)

Given a loss function, theoretically, the random model will have a higher loss (think loss landscape). This is what is meant by “knowing to do something”.
