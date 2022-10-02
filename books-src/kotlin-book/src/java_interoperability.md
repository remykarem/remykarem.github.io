# Java interoperability

## Named arguments

Not supported when calling Java code.

## Platform types

[Notation for platform types](https://kotlinlang.org/docs/java-interop.html#notation-for-platform-types)

* `T!` = `T` or `T?`
* `(Mutable)Collection<T>!` = `Collection<T>` or `Collection<T>?` or `MutableCollection<T>` or `MutableCollection<T>?`
* `Array<(out) T>!` = `Array<T>` or `Array<T>?` where `T` can be a subtype

Example

```kotlin,noplayground
import org.springframework.http.HttpHeaders

val requestHeader = HttpHeaders()
val headerValue = requestHeader["header-key"]
```

where the notation of `headerValue` is given by `(Mutable)List<String!>?`. This means it is one of the following 😲:

* `List<String>?`
* `List<String?>?`
* `MutableList<String>?`
* `MutableList<String?>?`

## Static

Previously

```kotlin
object Utils {
    fun doSomething() {
        // logic here
    }
}
```

But if we 

```kotlin
object Utils {

    @JvmStatic
    fun doSomething() {
        // logic here
    }
}
```

JvmOverloads

such that in Java

```java
Utils.INSTANCE.doSomething();
```

then in Java

```java
Utils.doSomething();
```

## Inline

`@JvmInline`

An `inline` function with `reified` is not callable from Java.

## Java records

Available in JDK 16

```kotlin,noplayground
@JvmRecord
data class User(val name: String, val age: Int)

fun main() {
    val user = User(name = "Me", age = 27)
    println(user)
}
```
