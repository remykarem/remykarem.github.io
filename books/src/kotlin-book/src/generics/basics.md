# Basics

Example 1

```kotlin
data class Box<T>(val item: T)

fun main() {
    val box = Box(10)
    println(box)
}
```

Example 2

```kotlin
fun <T> printItem(type: T): String {
    return when (type) {
        is Int -> "Int"
        is String -> "String"
        else -> "everything else"
    }
}

fun main() {
    println(printItem(10))
    println(printItem("Hello"))
}
```

Example 3

```kotlin
data class Box<S, T>(
    val item1: S,
    val item2: T,
)

fun main() {
    val box = Box(10, "100")
    println(box)
}
```
