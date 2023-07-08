# Models

"Foundation language models" / PFM (Pretrained Foundation Models) / LLMs (Large Language Models)

| Year | Model                   | Arch            | Pretraining | Params     | Applications                              |
| ---- | ----------------------- | --------------- | ----------- | ---------- | ----------------------------------------- |
| 2023 | Vicuna [^vicuna]        | ?               |             | 7B,13B     | Instruction-following                     |
|      | GPT4All                 | ?               | ?           |            |                                           |
|      | Cerebras-GPT            | ?               | ?           | 13B        |                                           |
|      | GPT-4                   | ?               | ?           |            |                                           |
|      | Alpaca                  | ?               | ?           | 7B,13B     | Instruction-following                     |
|      | LLaMA                   | ?               | ?           | 7B,13B,65B | Instruction-following                     |
|      | OpenChatKit             | ?               | ?           | ?          | ?                                         |
| 2022 | GPT-3.5                 | Decoder         | LM          | 175B       | Code generation, dialog                   |
|      | GPT-NeoX-20B [^gptneox] | ?               |             |            |                                           |
|      | OPT                     | ?               |             |            |                                           |
|      | LAMDA                   | Decoder         | LM          | 137B       | General language modelling                |
|      | ChatGPT                 | Decoder         | LM          | 175B       | Dialog                                    |
|      | BLOOM                   | Decoder         | LM          | 176B       | Code generation                           |
|      | Minerva                 | Decoder         | LM          | 540B       | Mathematical reasoning                    |
|      | Chinchilla              | Decoder         | LM          | 70B        | Dialog                                    |
|      | PaLM [^palm]            | Decoder         | LM          | 62B,540B   | (general language tasks)                  |
| 2021 | HTML                    | Encoder/Decoder | DAE         | 400M       | HTML prompting                            |
|      | Gopher [^gopher]        | Decoder         | LM          | 280B       | General language modelling                |
|      | GPT-J                   | Decoder         | LM          | 6B         | General language modelling                |
| 2020 | GPT-3[^gpt3]            | Decoder         | LM          | 175B       | Code generation, audio generation         |
|      | Big Bird                | Encoder         | MLM         | -          | Longer sequence                           |
|      | ELECTRA                 | Encoder         | RTD         | 110M-330M  | Longer sequence                           |
|      | mBART                   | Encoder/Decoder | DAE         | 110M       | Translation                               |
| 2019 | XLM-RoBERTa             | Encoder         | MLM         | 270M-550M  | Translation, cross-lingual tasks          |
|      | BART                    | Encoder/Decoder | DAE         | 110M       | Text generation                           |
|      | ERNIE                   | Encoder         | MLM         | 114M       | Entity recognition                        |
|      | GPT-2                   | Decoder         | LM          | 1.5B       | Text generation, (general language tasks) |
|      | Transformer XL          | Decoder         | LM          | 151M       | (general language tasks)                  |
|      | RoBERTA                 | Encoder         | MLM         | 356M       | Language understading, QA                 |
|      | T5                      | Encoder/Decoder | DAE         | 11B        | MT, QA, abstractive summarisation         |
|      | Pegasus                 | Encoder/Decoder | DAE,MLM     | 223M-568M  | Summarisation                             |
|      | ALBERT                  | Encoder         | MLM/NSP     | 12M-60M    | Language understading, QA                 |
|      | DistilBERT              | Encoder         | MLM/NSP     | 66M        | Language understading, QA                 |
|      | XLNet                   | Decoder         | PLM         | 117-360M   | (general language tasks)                  |
| 2018 | BERT                    | Encoder         | MLM/NSP     | 110M       | Language understading, QA                 |
|      | GPT                     | Decoder         | LM          | 117M       | Text generation                           |
| 2017 | Transformer             | Encoder+Decoder |             |            |                                           |
| ?    | ELMO                    | RNN             | LM          |            |                                           |
| ?    | seq2seq                 | RNN             |             |            |                                           |
| ?    | UniLM                   | ?               |             |            |                                           |
| ?    | ERNIE                   | ?               |             |            |                                           |

Encoder or Decoder refers to the Transformer encoder or decoder.

## Benchmarks: https://www.lunasec.io/docs/blog/cerebras-gpt-vs-llama-ai-model-comparison/

[^vicuna]: [Vicuna: An Open-Source Chatbot Impressing GPT-4 with 90%* ChatGPT Quality](https://vicuna.lmsys.org/)

[^gptneox]: [GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745)

[^palm]: [PaLM: Scaling Language Modeling with Pathways](https://arxiv.org/abs/2204.02311)

[^gopher]: [Scaling Language Models: Methods, Analysis & Insights from Training Gopher](https://arxiv.org/abs/2112.11446)

[^gpt3]: [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)
