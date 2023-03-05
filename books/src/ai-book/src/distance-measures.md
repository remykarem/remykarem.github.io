# Distance measures

Axioms:

- Non-negativity — d(a,b) ≥ 0
- Symmetry — dist(a,b) = dist(b,a)
- Identity — d(a,b) = 0 iff a=b
- Triangle equality — d(a,b) ≤ d(a,x) + d(x,b)
    
    ```python
           a *
     
                           * x
    
               b *
    ```
    

- Jaccard distance
- Edit distance
    
    Min. no. of inserts and deletes of characters to convert one to another
    
    ```python
    d("abcde", "acfdeg") = 3
    ```
    
    1. Remove g
    2. Insert f
    3. Insert b
- Cosine distance
- Euclidean distance
- Manhattan distance
- Mahalanobis distance
    
    "how many standard deviations away"
    
    Euclidean distance, but normalised with standard deviation
    

For $n$ datapoints, computing pairwise distance is $O(n^2)$ because 

$$
{n \choose {2}} = \frac{n(n-1)}{2}
$$
.
