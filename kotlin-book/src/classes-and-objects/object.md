# Object declaration

Used for singleton or one-time class overrides.

Simple object declaration

```kotlin
val someObject = object {
    val num = 5
}
println(someObject.num)
```

Object declaration with a method

```kotlin
val someObject = object {
    fun greet() {
        println("Hello!")
    }
}
someObject.greet()
```

Object that inherits from an interface

```kotlin
interface Minimisable {
    fun minimise(): Int
}

fun main() {
    val item = object : Minimisable {
        override fun minimise(): Int {
            return 1
        }
    }
    println(item.minimise())
}
```

Object declarations work with multiple interfaces too.

```kotlin
interface Minimisable {
    fun minimise(): Int
}

interface Maximisable {
    fun maximise(): Int
}

fun main() {
    val item = object : Minimisable, Maximisable {
        override fun minimise(): Int {
            return 1
        }
        override fun maximise(): Int {
            return 100
        }
    }
    println(item.minimise())
    println(item.maximise())
}
```
