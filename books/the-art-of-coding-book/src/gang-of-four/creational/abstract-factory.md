# Abstract factory

Not Pythonic and awkward. Rarely seen.

```python
clf = DecisionTree(Classification)
rgr = DecisionTree(Regression)
```

```python
class DecisionTree:
	def __init__(self, Tree_type):
		self.Tree_type = Tree_type
		self.tree = None
	def fit(self):
		self.tree = self.Tree_type()
		self.tree.fit()
	def predict(self):
		return self.tree.predict()
```
