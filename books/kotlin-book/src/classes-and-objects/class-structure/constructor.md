# Constructor

Perhaps the only idiomatic way is to have one primary constructor without the `constructor` keyword (first example). 

If there are multiple constructors, use either (i) a primary constructor with default parameters or (ii) the factory pattern.

### One primary constructor

```kotlin
class Person(name: String, age: Int)

fun main() {
	val person = Person("Jonah", 10)
	println(person)
}
```

### One primary constructor with computed property???

```kotlin
class Rectangle(
	height: Int, 
	width: Int, 
	val area: Int = height * width,
)

fun main() {
	val rectangle = Rectangle(2, 10)
	println(rectangle.area)
}
```

### One primary constructor (with `constructor` keyword)


```kotlin
class Person constructor(name: String, age: Int)

fun main() {
	val person = Person("Jonah", 10)
	println(person)
}
```

### One primary and one secondary constructor

```kotlin
class Person(name: String, age: Int) {
	constructor(name: String): this(name, 20)
}

fun main() {
	val person = Person("Jonah")
	println(person)
}
```

### One primary and one secondary constructor with block

```kotlin
class Person(name: String, age: Int) {
	constructor(name: String): this(name, 20) {
		println("Constructing...")
	}
}

fun main() {
	val person = Person("Jonah")
	println(person)
}
```

### One secondary constructor only

```kotlin
class Person {
	constructor(name: String) {
		println("Constructing $name")
	}
}

fun main() {
	val person = Person("Jonah")
	println(person)
}
```