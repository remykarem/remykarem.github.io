# Compile-time constants

Compile-time constants must be `String` or primitive type.

- as a top-level property
- in an object declaration
- in a companion object

At compile-time, the compiler will inline all usages of the constant with its actual value.

As a top-level property

```kotlin
const val NAME = "Remy"

fun main() {
    println(NAME)
}
```

In an object declaration

```kotlin
object Person {
    const val NAME = "Remy"
}

fun main() {
    println(Person.NAME)
}
```

In a companion object

```kotlin
class Person {
    companion object {
        const val NAME = "Remy"
    }
}

fun main() {
    println(Person.NAME)
}
```

These values *must be known* at compile-time. The following will fail:

```kotlin
fun someName() = "Remy"

const val NAME = someName()

fun main() {
    println(NAME)
}
```

Some functions work, however, due to *const evaluation*:

```kotlin
const val CHARACTER = "Hello".get(0)

fun main() {
    println(CHARACTER)
}
```

If we look at the `get` method we see the annotation `@kotlin.internal.IntrinsicConstEvaluation`:

```kotlin
@kotlin.internal.IntrinsicConstEvaluation
public override fun get(index: Int): Char
```

Documentation for `IntrinsicConstEvaluation`:

```kotlin
/**
 * When applied to a function or property, enables a compiler optimization that evaluates that function or property
 * at compile-time and replaces calls to it with the computed result.
 */
@Target(AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY)
@Retention(AnnotationRetention.BINARY)
@SinceKotlin("1.7")
internal annotation class IntrinsicConstEvaluation
```
