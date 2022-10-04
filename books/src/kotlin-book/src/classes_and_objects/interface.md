# Interface

Note that interfaces can declare functions *and/or properties*.

```kotlin
interface Hello {
    val name: String
}

class Greeter : Hello {
    override val name: String
        get() = "Jonas"
}

fun main() {
    val greeter = Greeter()
    println(greeter.name)
}
```

Interfaces cannot have private abstract properties or functions unless they are concrete implementations.

```kotlin
interface Hello {
    private fun greet()
}
```
