# Tensor libraries

Frameworks

- NumPy
- PyTorch & TorchScript
- TensorFlow
- JAX = JIT + Autograd + XLA
- Numba
- Keras
- PyTorch lightning

---

[ipython-books/cookbook-2nd](https://github.com/ipython-books/cookbook-2nd/blob/master/chapter04_optimization/05_array_copies.md)

Why are NumPy arrays efficient?

1. Data is stored stored contiguously (unlike Python)
2. Spatial locality (???)
3. Because of contiguity, vectorised instructions can be used (Intel's SSE and AVX).

# View

```python
X.view()

To check if an array is a view of another

y1.base is y

If none, it’s a copy
```

# **Creation**

```python
x = np.zeros((3,4,5))              # zeros
x = np.ones((3,4,5))               # ones
x = np.random.rand(3,4,5)          # uniform [0,1]
x = np.random.randint(0,21,15)
x = np.random.normal(size=(3,4,5)) # N(0,1)
x = np.random.rand(4)              # U(0,1)
x = np.array([0,0,0])              # from array
x = np.arange(0,15)
x = np.eye(3)                      # diagonal 3x3 matrix ones
```

```python
x = torch.zeros((3,4,5))           # zeros
x = torch.ones((3,4,5))            # ones
x = torch.rand(3,4,5)              # uniform [0,1]
x = torch.randn(3,4,5)             # N(0,1)
x = torch.tensor([3.,4.,2.])       # from array
x = torch.empty(1,5,3)             # zeros
```

# **Mathematical operations**

```python
x.dot(x)           # matrix multiplication
x.argmin()         # index of min
```

```python
torch.matmul(x, y)
torch.mm(x, y)
```

# **Info**

```python
x.shape
```

```python
x.size()
```

# **Shape manipulation**

```python
x = x.reshape(1,-1)
x = x.reshape(1,5,2) 
np.reshape(x,(1,5,2))
x = x.view(1,5,-1)  reshape to (1,5,?) where ? Is inferred
np.squeeze([[[[1,2,3,4]]]])

TOrch:
xy.squeeze()
```

# **Permute**

```python
x.transpose(2, 0, 1)
```

```python
x.permute
```

# **Expand dimension**

```python
x[:, np.newaxis]
np.expand_dims(axis=)

x.expand()
```

# **Sorting**

```python
x.sort(axis=)
np.argsort(a)
```

# **Concat**

```python
torch.cat()
```

# Mask

https://stackoverflow.com/questions/19984102/select-elements-of-numpy-array-via-boolean-mask-array/58365403#58365403

# Gotchas

- Gradiemts are accumulated. Must zero accordingly
- `with torch.nograd` ensures that in manual gradient update, a computation graph for differentiation isnt created
- Optimiser.step() updates weights for you
- Forward and callable
- Requires_grad
- When inheriting from nn.Module, the weights must be wrapped with torch.nn.Parameter() to be automatically registered as parameter. (Not sure if this is the right way but it’s something like that)
