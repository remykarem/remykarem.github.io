# Sequence modelling

<!-- toc -->

## Motivation

Bag-of-words has no order

## Sequence modelling design criteria

The model must be able to

- Handle variable-length sequence
- Maintain information about the order
- Share parameters across the sequence
- Track long-term dependencies

## Backpropagation through time

Backpropagation through time involves many multiplication of the weight matrices and gradient such that

- Many values > 1: exploding gradients

Gradient clipping

- Many values < 1: vanishing gradients

Activation function - use ReLU

Weight initialisation - weights to Identity matrix ?, bias to zero

Network architecture - gates cells

## LSTMs and GRUs

Information is added or removed through structures called gates.

1. Forget
2. Store
3. Update
4. Output

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93cae719-3dcc-4f3b-9b3d-b9504524e787/Untitled.png](./rnn-gru-lstm.png)

## Attention

Decoder has access to all the states in the encoder. Network places attention on different parts of the input sentence.
