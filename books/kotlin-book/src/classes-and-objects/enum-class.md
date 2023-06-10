# Enum class

Useful Kotlin built-in extensions:
- [Enum class](#enum-class)
  - [`enumValueOf`](#enumvalueof)
  - [`enumValues`](#enumvalues)

---

## `enumValueOf`


```kotlin
enum class Status {
    Approved,
    Rejected,
}

fun main() {
    val status = enumValueOf<Status>("Approved")
    println(status)
}
```

~~~admonish warning title="Gotcha"
You have to remember to catch the exception yourself if the parse fails (yucks) (instead of the API returning a nullable). Below will throw an `IllegalArgumentException`:

```kotlin
enum class Status {
    Approved,
    Rejected,
}

fun main() {
    val status = enumValueOf<Status>("Approvedssss")
    println(status)
}
```
~~~

[Reference](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/enum-value-of.html)


## `enumValues`

```kotlin
enum class Status {
    Approved,
    Rejected,
}

fun main() {
    val statuses = enumValues<Status>().toList()
    println(statuses)
}
```

[Reference](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/enum-values.html)
