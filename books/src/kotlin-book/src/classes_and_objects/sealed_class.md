# Sealed class

Sealed classes or interfaces provide more control to the inheritance hierarchy.

A (parent) class with **enumerated** (child) classes

(Recall that Kotlin's classes are final)

Sealed class

```kotlin
sealed class Employee

data class Manager(val name: String, val age: Int): Employee()
data class SeniorDev(val name: String): Employee()

val employee: Employee = SeniorDev("al")
val message = when(employee) {
	is Manager -> "Hello sir"
	is SeniorDev -> "Hi!"
}
```

Class

```kotlin
open class Employee2

data class Manager(val name: String, val age: Int): Employee2()
data class SeniorDev(val name: String): Employee2()

val employee: Employee2 = SeniorDev("al")
val message = when(employee) {
	is Manager -> "Hello sir"
	is SeniorDev -> "Hi!"
	else -> "??"
}
```


> 💡 Sealed classes cannot be inherited outside of this file.


> 💡 Sealed classes can list down ("enumerate") all the subclasses. Normal classes can do that too, but you need to add an else branch.

