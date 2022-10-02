# Scope functions

- Returns self
    - context is self: `apply`
    - context is arg: `also`
- Returns final result
    - context is self: `run`, `with`
    - context is arg: `let` (can pass function)

## **apply**

- When you need to (1) create an object & (2) set some things to it (useful for old Java libraries)

```kotlin
val adam = Person("Adam").apply {
  age = 32
  city = "London"   
	address = "bla"       
}
```

## **let**

- When you want to go to the happy path if you have ****nulls
- When you want to perform multiple actions on the object

```kotlin
val alice = Person("Alice", 20).let {
	println(this)
	this.moveTo("London")
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