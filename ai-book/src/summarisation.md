# Summarisation

# Benchmark

GigaWord benchmark; ROUGE-1, ROUGE-2, ROUGE-L

[https://paperswithcode.com/sota/text-summarization-on-gigaword](https://paperswithcode.com/sota/text-summarization-on-gigaword)

# Types

- Extractive: identify important sentences and reproduce verbatim
- Abstractive: interpret text and generate new summary text

Extractive

1. Construct an intermediate representation
2. Score the sentences
3. Select top k

([https://github.com/nlpyang/PreSumm](https://github.com/nlpyang/PreSumm))

# ROUGE scoring

Recall-Oriented Understudy fo Gisting Evaluation

(Works only for extractive summaries?)

```
**SYS**
the cat was found under the bed

**REF**
the cat was       under the bed
```

$$
\text{ROUGE-1} = \frac{6}{6}
$$

$$
\text{ROUGE-1}_{Precision} = \frac{6}{7}
$$

```
**SYS**
the cat, cat was, **was found, found under,** under the, the bed

**REF**
the cat, cat was,       **was under,**        under the, the bed
```

$$
\text{ROUGE-2} = \frac{4}{5}
$$

$$
\text{ROUGE-2}_{Precision} = \frac{4}{6}
$$

Datasets:
* XSum
* Newsroom
* Gigaword
* AESLC
* CNN-DM
* Wiki Lingua EN
