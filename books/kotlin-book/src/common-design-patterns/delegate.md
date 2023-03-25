# Delegate pattern

The delegation pattern is an alternative to implementation inheritance.

Personally, this pattern feels... quite awkward to use.

1. Inherits from a common interface
2. **Constructor takes in another object** that inherits from this interface

```kotlin
interface Base {
    fun print()
}

class BaseImpl(val x: Int) : Base {
    override fun print() { print(x) }
}

class Derived(b: Base) : Base by b

fun main() {
    val b = BaseImpl(10)
    Derived(b).print()
}
```

<aside>
⚠️ Only *interfaces* can be delegated to

</aside>
