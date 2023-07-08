# Gaussian process

```python
import numpy as np
from sklearn.metrics.pairwise import rbf_kernel

class Kernel:
    @staticmethod
    def rbf(x_1, x_2):
        K = rbf_kernel(x_1, x_2)
        return K

class GaussianProcess:

    def __init__(self, X, y, kernel="rbf"):
        self.X = X
        self.y = y

        # Prepare kernel
        self.k = Kernel.rbf(self.X, self.X)

        # Invert kernel
        self.k_inv = np.linalg.inv(self.k)

    def hey(self):
        pass

    def update(self, X_new, y_new):
        """Not used"""

        self.X = np.concatenate(self.X, X_new, axis=0)
        self.y = np.concatenate(self.y, y_new, axis=0)

        # Update the covariance matrix for existing training points
        self.k = Kernel.rbf(self.X, self.X)
        self.k_inv = np.linalg.inv(self.k)

    def predict(self, X_new):
        """Predict a value"""

        # Get all the kernel parts
        k_new = np.array(
            [Kernel.rbf(X_new, np.array([x])).reshape(-1) for x in self.X])
        k_newnew = Kernel.rbf(X_new, X_new)

        # Mean
        y_pred = np.dot(k_new.T, self.k_inv).dot(self.y)
        y_pred = y_pred.squeeze()

        # Covariance
        sigma = k_newnew - np.dot(k_new.T, self.k_inv).dot(k_new)
        sigma = sigma.squeeze()

        return y_pred, sigma
```

```python
import numpy as np
from gp import Kernel, GaussianProcess
import matplotlib.pyplot as plt

# Real
X = np.linspace(1,20,10000)
X = X.reshape(1,-1)
y = np.sin(X)
plt.scatter(X,y, color='black')

# Data
SIZE = 5
X = np.random.uniform(low=1, high=20, size=SIZE)
X = X.reshape(-1,1)
y = np.sin(X) + np.random.normal(0, 0.3, SIZE).reshape(-1,1)
plt.scatter(X,y, color='yellow')

# New data
X_new = np.random.uniform(low=1, high=20, size=100)
X_new = X_new.reshape(-1,1)

# GP
gp = GaussianProcess(X, y)
y_new = gp.predict(X_new)
plt.scatter(X_new,y_new, color='red', alpha=0.5)

# Plot
plt.show()
```
