# Hash table

<aside>
💡 A hash map in Python is a `dict`.

</aside>

```python
class Hashmap:

    def __init__(self):
        self.table = [None] * 10

    def put(self, key, value):
        idx = hash(key) % 10
        if self.table[idx] is None:
            self.table[idx] = [(key, value)]
        else:
            for i, el in enumerate(self.table[idx]):
                k,v = el
                if k == key:
                    self.table[idx][0] = (key,value)
                    return
            self.table[idx].append((key,value))

    def get(self, key):
        idx = hash(key) % 10
        for k,v in self.table[idx]:
            if k==key:
                return v
        raise
```

<aside>
✅ **Hashing**
value  —hash function→  Hash value / collection of values
<key,value>  —hash function on key→  Hash value / collection of values

</aside>
