# Kotlin

## Class reference

A class reference has the type [`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/) with properties like:

* `java` - runtime Java class reference
* `javaClass` runtime Java class of an object
* `qualifiedName`

```kotlin
class Person(name: String, age: Int) {
    fun laugh() { 
        println("haha")
    }
}

fun main() {
    val klass = Person::class
    println(klass.java)
    // println(klass.javaClass)
    println(klass.qualifiedName)
    println(klass.simpleName)
    println(klass.members)
    // println(klass.declaredMemberProperties)
}
```
