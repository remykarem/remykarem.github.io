# Positional encoding

Positional encoding encodes information about the position of the input. 

$$
PE_{r,2i} = \sin \frac{r}{10000^\frac{2i}{d}}
$$

and

$$
PE_{r,2i+1} = \cos \frac{r}{10000^\frac{2i}{d}}
$$

where
- $r$ is the word's position in the sequence
- $i$ is the position along the embedding dimension
- $d$ is the model dimension

There are several types of positional encoding:

- absolute positional encoding
- relative position encoding
- RoPE -- Rotary positional encoding
- sinusoidal positional encoding
