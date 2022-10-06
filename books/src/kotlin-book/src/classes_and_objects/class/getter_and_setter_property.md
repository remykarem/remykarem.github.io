# Getter and setter property

For a property that has a getter and a setter, the property:
1. must be `var`
2. must be initialised

The rules of `get()` and `set()` come from the previous two sections.

```kotlin
class Person {
	var age: Int = 0 
		get() {
			return field + 1
		}
		set(value) {
			field = value + 100
		}
}

fun main() {
	val person = Person()
	person.age = 100
	println(person.age)
}
```

Having the getter-and-setter idiom written this way seems to set the focus on the data, which in this case is `age`. It is also an improvement from the Java way of having a lot of repetitions when defining getters and setters.
