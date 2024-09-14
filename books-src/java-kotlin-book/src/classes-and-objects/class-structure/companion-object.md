# Companion object

An object declaration inside a class is called a `companion object`. These are singleton objects that are tied to a class, not the instance.

Companion objects are usually used for:
1. Declaring constants (see **Compile-time constants**)
2. Declaring factory methods

Here is an example of using a `companion object` to declare both a constant and a factory method:

```kotlin
class Person(val age: Int) {
    companion object {
        const val AGE_AT_ENROLMENT = 18

        fun createStudent(): Person {
            return Person(age = AGE_AT_ENROLMENT)
        }
    }
}

fun main() {
    val person = Person.createStudent()
    println(person.age)
}
```

You can access the properties in a companion object from a class:

```kotlin
class Person {
    companion object {
        val hobbies = listOf("swimming", "jogging")
    }
}

fun main() {
    println(Person.hobbies)
}
```

You can even access the `object` itself:

```kotlin
class Person {
    companion object {
        val hobbies = listOf("swimming", "jogging")
    }
}

fun main() {
    println(Person.Companion)
    println(Person.Companion.hobbies)
}
```

You cannot, however, access these objects from an instance (you need reflection for that):

```kotlin
class Person {
    companion object {
        val hobbies = listOf("swimming", "jogging")
    }
}

fun main() {
    val person = Person()
    println(person.hobbies)
}
```
