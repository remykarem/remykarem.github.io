# Pretraining tasks

`[MASK]` tokens are tokens to predict

**(Traditional) Language modeling (LM)**

Given a word, predict the next word.

Egs: GPT-X, Transformer XL

**Masked language modeling (MLM)**

Erase some words randomly in the input, then predict the erased words during pretraining.

Egs: BERT, SpanBERT

**Next Sentence Prediction (NSP)**

??? (how is this different from SOP?)

Egs: BERT

**Sentence Order Prediction (SOP)**

Predict if two sentences are contiguous. Positive samples are contiguous fragments from a document; negative samples are the reverse order.

Egs: ALBERT

**Denoising autoencoder (DAE)**

Add noise to the input, reconstruct the input containing the noise. Noise includes erasing words, shuffling.

Egs: BART, Pegasus

**Permuted language modeling (PLM)**

??

Egs: XLNet

[Transformer models: an introduction and catalog](https://arxiv.org/abs/2302.07730)
