# Similarity measures

Distance metrics

## Manhattan distance

(shortest path by along a grid) L1 norm

$$
|A-B|
$$

or

$$
\sum_i |a_i-b_i|
$$

## Euclidean distance

(shortest path) L2 norm

$$
||A-B||_2
$$

or

$$
\sqrt{\sum_i (a_i-b_i)^2}
$$

## Dot product

$$
A \cdot B
$$

or

$$
\sum_i a_i b_i
$$

<aside>
💡 Difference between dot product and inner product is that the dot product is a specific inner product that works on $\mathbb{R}^n$.

</aside>

## Cosine similarity

(we are interested in the orientation, not the magnitude of vectors). Value is bounded between $[-1,1]$.

$$
\cos(\theta) = \frac{A \cdot B}{||A||\cdot||B||}
$$

or

$$
\cos(\theta) = \frac{\sum_i a_i b_i}{\sqrt{\sum_i a_i^2} \cdot \sqrt{\sum_i b_i^2}}
$$

<aside>
💡 Difference between dot product and cosine similarity is that **cosine similarity ignores the magnitude** (scaled by magnitude).

</aside>

## Pearson correlation

$$
\text{Corr}(a,b) = \frac{\sum_i (a_i-\bar{a})(b_i-\bar{b})}{\sqrt{\sum_i (a_i-\bar{a})^2} \cdot \sqrt{\sum_i (b_i-\bar{b})^2}}
$$

<aside>
💡 Difference between cosine similarity and correlation is correlation is **invariant to shifts.**

</aside>

## Minkowski distance

$L_p$ norm

$$
(\sum_i (a_i-b_i)^p)^\frac{1}{p}
$$

- Jaccard distance: compare the unique items
- Mahalanobis distance
- Maximum distance
- Haversine distance - distance between 2 points on a sphere
- Hamming distance
- Levenshtein distance

![Euclidean distance](./Euclidean_Distance.png)
