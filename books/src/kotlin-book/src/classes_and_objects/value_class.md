# Inline class

Inline classes are used to wrap a type.

You would usually do this in place of typealias, or (data) class for performance reasons.

Here is one where we wrap the `String` type:

```kotlin
@JvmInline
value class SecureString(val str: String)

fun main() {
    val password = SecureString("pa55w0rd")
    println(password)
}
```

Inline classes only work for a single property (initialised in the primary constructor). The following won't compile because it has two properties:

```kotlin
@JvmInline
value class SecureString(val str: String, val numChars: Int)

fun main() {
    val password = SecureString("pa55w0rd", 1)
    println(password)
}
```