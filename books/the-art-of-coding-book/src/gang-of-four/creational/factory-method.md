# Factory method

A special function or method that creates instances.

Python

```python
import numpy as np
X = np.array([1,2,3])
```

Kotlin

Use companion object

```kotlin
class SomeClass { 
  companion object { 
    fun someFn(): SomeClass {
      return SomeClass()
    }
  } 
}
```
