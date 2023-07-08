# Sparse matrices

- CSR (compressed sparse column)
    
    Write-once-read-many
    
    matrix is represented using three 1D arrays for the non zero values
    
    value = [5 8 3 6]
    
    col = [0 1 2 1]
    
    row = [0 0 2 3 4]
    
    Fast row access and matrix-vector multiplications.
    
- LIL (list of list)
    
    `[(row,col,val), (row,col,val), (row,col,val)]`
    
- DOK (dictionary of keys)
    
    ```
    {(row,col): val,
     (row,col): val}
    ```
    
- COO (coordinate list)
    
    `(row,col,val), (row,col,val), (row,col,val)]`
    
- CSC (compressed sparse row)
- Block sparse row

**Code**

```python
from scipy.sparse import csr_matrix, csc_matrix
from scipy.sparse import random

matrix = random(3,3, format='csr', density=0.4)

.todense()
.toarray()
.nnz
.data
```
