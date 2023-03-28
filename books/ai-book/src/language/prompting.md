# Prompting

Pre-trained language models can solve tasks using zero-shot or few-shot prompting as in the paper [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165).

This technique requires _prompt engineering_ — designing tasks that look like the data the model has seen during training.

| Prompting method        | Reasoning | Acting |
| ----------------------- | --------- | ------ |
| ReAct [^react]          | ✅        | ✅     |
| Chain-of-Thought [^cot] | ✅        |        |
| Self-Ask [^selfask]     | ✅        |        |

---

[^cot]: [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)
[^react]: [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
[^selfask]: [Press et al 2022](https://ofir.io/self-ask.pdf)
