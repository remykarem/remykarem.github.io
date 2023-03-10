# Fine-tuning

* Task-specific

* Instruction tuning / instruction fine-tuning [^instructgpt]

    Creating a dataset of instructions from scratch to fine-tune the model would take a considerable amount of resources. Therefore, we instead make use of templates to transform existing datasets into an instructional format.[^flan]

    Example: FLAN — Fine-tuned LAnguage Net

* CoT (Chain-of-Thought) fine-tuning [^cot]

    Decompose the problem into steps

* PaL (Program-aided Language) [^pal]

    Decompose the problem into *programmatic* steps

* RLHF (Reinforcement Learning from Human Feedback)

---

[^instructgpt]: [Training language models to follow instructions with human feedback](https://arxiv.org/pdf/2203.02155.pdf)

[^flan]: https://ai.googleblog.com/2021/10/introducing-flan-more-generalizable.html

[^cot]: [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
](https://arxiv.org/abs/2201.11903)

[^pal]: [PAL: Program-aided Language Models
](https://arxiv.org/abs/2211.10435)
