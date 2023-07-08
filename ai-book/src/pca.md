# PCA

Principal Component Analysis

**#parametric** **#nonprobabilistic**

[https://towardsdatascience.com/visualizing-principal-component-analysis-with-matrix-transforms-d17dabc8230e?gi=2dbc0f4e5157](https://towardsdatascience.com/visualizing-principal-component-analysis-with-matrix-transforms-d17dabc8230e?gi=2dbc0f4e5157)

Premise: the useful information is the underlying axes of data that gives you most variance

- Linear dimension reduction technique
- Things that are different end up very far apart
- Maximises variance and preserves large pairwise distances
- Computationally cheap
- “Redefine new axes”

**Principal components**

They are the

- Underlying “axes” of data
- = “directions” (= eigenvectors) where the data is most spread out, i.e have the most variance (variance = eigenvalues)
    - No. of eigenvalues/eigenvectors equals to no. of dimensions of data
    - The eigenvectors are perpendicular (= orthogonal) to each other

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA

# Generate data
angle = np.radians(30.)
x1 = np.random.normal(scale=8, size=100)
x2 = x1*np.tan(angle) + np.random.normal(scale=3, size=100)
# x2 = np.random.normal(scale=3, size=100)
x1 = x1-np.mean(x1)
x2 = x2-np.mean(x2)
data = np.array([x1, x2])

# PCA
pca = PCA()
pca.fit(data.T)

# Matrix transformation
# angle = np.radians(30. - 360.) # same
angle_derotate = -angle
derotate = np.array([[np.cos(angle_derotate), -np.sin(angle_derotate)],
                     [np.sin(angle_derotate), np.cos(angle_derotate)]])
derotated_data = np.matmul(derotate, data)

rotate = np.array([[np.cos(angle_derotate), np.sin(angle_derotate)],
                     [-np.sin(angle_derotate), np.cos(angle_derotate)]])
rotated_data = np.matmul(data.T, rotate)

# Get explained variances
print("Variance in X: {:0.1f}".format(np.var(derotated_data[0])))
print("Variance in Y: {:0.1f}".format(np.var(derotated_data[1])))
print(pca.explained_variance_)

# Get the principal components
print(derotate)
print(rotate)
print(pca.components_.T)

# Covariance
# print(np.cov(data))
# print(np.matmul(np.matmul(derotate, data).T, rotate)) ????
```
