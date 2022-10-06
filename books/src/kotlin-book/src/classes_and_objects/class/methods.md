# Methods

* `hashCode`
* [`toString`](#tostring)
* Operator overloading - includes `invoke` and `compareTo`. See [docs](https://kotlinlang.org/docs/operator-overloading.html)

---

## `toString`

The default string representation is the class name, followed by `@`, and the object's hashcode (in hexadecimal):

```kotlin
class Person

fun main() {
    val person = Person()
    println(person)
    println("%x".format(person.hashCode()))
}
```

We can override `toString`:

```kotlin
class Person {
    override fun toString(): String {
        return "Person()"
    }
}

fun main() {
    val person = Person()
    println(person)
}
```


