# Composition over inheritance

You don’t have to keep inheriting.

Instead of

```python
class DbObject:
  pass

class User(DbObject):
  pass
```

We can do

```python
class User:
  _methods = ['get', 'save', 'delete']

  def __init__(self, methods):
    self._methods = methods

  def __getattr__(self, attr):
    if attr in self._methods:
        return getattr(self._methods, attr)

  def get(self):
    pass

  def save(self):
    pass

  def delete(self):
    pass
```

Such that we have some users who can only get stuff

```python
user1 = User("get")
user1.get(...)
```

And some users have only delete rights

```python
user2 = User("delete")
user2.delete(...)
```
