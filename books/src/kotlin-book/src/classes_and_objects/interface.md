# Interface

Note that in Kotlin, interfaces can declare functions *and/or properties*. Here is an example with a property:

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
