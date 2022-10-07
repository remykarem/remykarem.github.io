# Extensions

Property

```kotlin
val String.someChar: Char
	get() {
		return 'X'
	}

fun main() {
	println("hello".someChar)
}
```

Companion object

```kotlin
class SomeClass {
	companion object {}
}

fun SomeClass.Companion.someFunction(): String {
	return "dd"
}

fun main() {
	println(SomeClass.someFunction())
}
```

This won't work if there isn't an existing companion object

```kotlin
class SomeClass

fun SomeClass.Companion.someFunction(): String {
	return "dd"
}

fun main() {
	println(SomeClass.Companion.someFunction())
}
```

Anything

```kotlin
fun Any?.someMethod() = "hello"

fun main() {
	val num = 5
	println(num.someMethod())
}
```

> I personally won't do this, because how are you going to test this for all the different types?
