# Data class

Data class is like a `class` but automatically allows you to:

* compare between objects (via `equals()`/`hashCode()`)

    Two `Person`s with the same name are equal:

    ```kotlin
    data class Person(val name: String)

    fun main() {
        val person1 = Person("jonas")
        val person2 = Person("jonas")
        println(person1 == person2)
    }
    ```

    In contrast, two `Person`s defined with `class` are not equal.

    ```kotlin
    class Person(name: String)

    fun main() {
        val person1 = Person("jonas")
        val person2 = Person("jonas")
        println(person1 == person2)
    }
    ```

* stringify the object (via `toString()`)
* copy the existing object (via `copy()`)

Data class is also the idiomatic way to define objects that contains only data.

Note that data classes, however, do not translate to Java's Records.
