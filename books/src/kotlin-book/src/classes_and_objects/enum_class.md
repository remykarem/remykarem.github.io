# Enum class

Useful Kotlin built-in extensions:

* [`enumValueOf`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/enum-value-of.html)

    ```kotlin,noplayground
    public inline fun <reified T : Enum<T>> enumValueOf(name: String): T
    ```

    Usage:

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

    ⚠️ Gotcha: You have to remember to catch the exception yourself if the parse fails (yucks) (instead of the API returning a nullable). Below will throw an `IllegalArgumentException`:

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

* [`enumValues`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/enum-values.html)

    ```kotlin,noplayground
    public inline fun <reified T : Enum<T>> enumValues(): Array<T>
    ```

    Usage:

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
