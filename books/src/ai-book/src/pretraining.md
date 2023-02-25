# Pretraining tasks

`[MASK]` tokens are tokens to predict

| Pretraining task                 | Given input                                                    | Predict         | Examples                |
| -------------------------------- | -------------------------------------------------------------- | --------------- | ----------------------- |
| Language modeling (LM)           | Token                                                          | Next token      | GPT-XXX, Transformer XL |
| Masked language modeling (MLM)   | Sentence with some `[MASK]` tokens                             | `[MASK]` tokens | BERT                    |
| Permuted language modeling (PLM) |                                                                |                 | XLNet                   |
| Denoising autoencoder (DAE)      | Sentence with some `[MASK]` tokens, random deletion, shuffling | Original input  | BART, Pegasus, DAE      |
| Next Sentence Prediction (NSP)   | Inputs A and B                                                 | If A precedes B | BERT                    |
| Machine Translation (MT)         |                                                                |                 | CoVe                    |

[Transformer models: an introduction and catalog](https://arxiv.org/abs/2302.07730)
