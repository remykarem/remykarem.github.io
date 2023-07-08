# Methods

* [`equals`](#equals)
* [`hashCode`](#hashcode)
* [`toString`](#tostring)
* Operator overloading - includes `invoke` and `compareTo`. See [docs](https://kotlinlang.org/docs/operator-overloading.html).

---

## `equals`

Suppose you have

```kotlin
class StringWrapper(private val str: String)

fun main() {
    val wrapper1 = StringWrapper("jonas")
    val wrapper2 = StringWrapper("jonas")
    println(wrapper1 == wrapper2)  // you want this to be true
}
```

To make `wrapper1 == wrapper2` return `true`, we can override the `equals` operator:

```kotlin
class StringWrapper(private val str: String) {
    override fun equals(other: Any?): Boolean {
        return when (other) {
            is StringWrapper -> str == other.str
            is String -> str == other
            else -> false
        }
    }
}

fun main() {
    val wrapper1 = StringWrapper("jonas")
    val wrapper2 = StringWrapper("jonas")

    println(wrapper1 == wrapper2)
    println(wrapper1.equals(wrapper2))
    // println(wrapper1 == "jonas")  // this won't work
    println(wrapper1.equals("jonas"))
}
```

⚠️ But that's not enough. You need to make sure that you fulfil the `hashCode` [contract](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html).

## `hashCode`

Afaik, you would normally implement `hashCode` and `equals` together.

This is the implementation of `StringWrapper` that overrides both `hashCode` and `equals` functions.

```kotlin
class StringWrapper(private val str: String) {

    override fun hashCode(): Int {
        return str.hashCode()
    }

    override fun equals(other: Any?): Boolean {
        return when (other) {
            is StringWrapper -> str.hashCode() == other.hashCode()
            is String -> str.hashCode() == other.hashCode()
            else -> false
        }
    }
}

fun main() {
    val wrapper1 = StringWrapper("jonas")
    val wrapper2 = StringWrapper("jonas")

    println(wrapper1 == wrapper2)
    println(wrapper1.hashCode() == wrapper2.hashCode())
    println("jonas".hashCode() == wrapper1.hashCode())
    println("jonas".hashCode() == wrapper2.hashCode())
}
```

## `toString`

The default string representation is the class name, followed by `@`, and the object's hash code (in hexadecimal):

```kotlin
class SecureString(str: String)

fun main() {
    val password = SecureString("pA55w0rd")
    println("Password is: $password")
    println("%x".format(password.hashCode()))
}
```

We can override `toString`:

```kotlin
class SecureString(str: String) {
    override fun toString(): String {
        return "***** (redacted)"
    }
}

fun main() {
    val password = SecureString("pA55w0rd")
    println("Password is: $password")
}
```
