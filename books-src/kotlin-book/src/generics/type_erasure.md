# Type erasure


Type information is only available at compile time but not available at runtime, hence "erased". So things like `is`, `as` are not allowed. Need to use `reified`. Used together with `inline`.

**Constraints**

```kotlin
fun <T : Comparable<T>> sort(list: List<T>) { ... }
```
