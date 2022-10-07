# Scope functions

There are 5 scoped functions - `let`, `apply`, `run`, `also` and `with`.

The only scoped functions that I use are `let` and `apply`.

## **let**

For me I use the `let` idiom mainly when dealing with `null`s.

```kotlin
fun printName(name: String) {
	println(name)
}

fun main() {
	val name: String? = "Harry"
	name?.let { printName(it) }
}
```

or use a function reference:

```kotlin
fun printName(name: String) {
	println(name)
}

fun main() {
	val name: String? = "Harry"
	name?.let(::printName)
}
```

## **apply**

I use `apply` a lot, especially with old Java libraries.

Instead of:

```kotlin,noplayground
val person = Person("Adam")
person.age = 32
person.city = "London"   
person.address = "bla"  
```

do:

```kotlin,noplayground
val person = Person("Adam").apply {
	age = 32
	city = "London"   
	address = "bla"       
}
```

## **run**

- When you need to *initialise and compute* *to derive at one goal*
- When you don't need an object but only use it to compute something

```kotlin
class Person {
	var age = 0
	fun futureAge(years: Int) = age + years
}
val person = Person()
```

```kotlin
person.age = 50
person.doThis()
person.thenThat()
val ageInTenDecades = futureAge(100)
```

```kotlin
val ageInTenDecades = person.run {
	age = 50
	doThis()
	thenThat()
	getFinalFutureAge(100)
}
```

## **with**

- When you already have an object but you need to keep *calling* its members (maybe useful in tests when you need to assert several things).

Similar to `run`

```kotlin
data class Persona(val name: String, val age: Int, val address: String, val occupation: String)

val person = Persona("Alice", 100, "Sesame Street", "Coder")
```

```kotlin
require(person.name == "Alice")
require(person.age == 100)
require(person.address == "Sesame Street")
require(person.occupation == "Coder")
```

```kotlin
with(person) {
	require(name == "Alice")
	require(age == 100)
	require(address == "Sesame Street")
	require(occupation == "Coder")
}
```

```kotlin
with(person) {
	applyForBusinessName()
	registerAddress()
	applyForLicence()
}
```

## **~~also (duplicate?)~~**

When you want to create an object and add some side effects to it. Similar to `apply`.

before

```kotlin
val alice = Person("Alice", 20)
println(alice)
alice.moveTo("London")
```

after

```kotlin
val alice = Person("Alice", 20)
println(alice)
alice.moveTo("London")
```