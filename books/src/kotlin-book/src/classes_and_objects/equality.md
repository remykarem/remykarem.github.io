# Reference

### Referential `===`

```kotlin
class Person(var name: String)

fun main() {
    val person1 = Person("jonah")
    val person2 = person1
    println(person1 === person2)
}
```

### Structural `==`

```kotlin
class Person(name: String)

data class Home(
    val person: Person
)

fun main() {
    val person = Person("jonah")
    val home1 = Home(person)
    val home2 = Home(person)
    println(home1 === home2)
}
```