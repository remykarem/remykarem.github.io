# Property with setter

This is how you add a setter:

```kotlin
class Person {
    var age: Int = 30
        set(value) {
            field = value - 1  // alter the age every time we set it
        }
}

fun main() {
	val person = Person()
	person.age = 20
	println(person.age)
}
```

```admonish note
`set(value)` is actually `set(value: Int)`. The type of `value` is the same as the type of the property, hence you don't need to type it. The name `value` is a convention, but you can rename it just like you would any other function.
```

```admonish note
`field` ("backing field") is like the "internal value" of the property, if you may.
```

You cannot make `age` read-only because you are writing value to it ("setter"). So this will fail:

```kotlin
class Person {
    val age: Int = 30
        set(value) {
            field = value - 1  // alter the age every time we set it
        }
}

fun main() {
	val person = Person()
	person.age = 20
	println(person.age)
}
```

You also need to provide an initial value because it assigns the backing field `field` directly. This won't compile because none is set:

```kotlin
class Person {
    var age: Int
        set(value) {
            field = value - 1  // alter the age every time we set it
        }
}

fun main() {
	val person = Person()
	person.age = 20
	println(person.age)
}
```

~~~admonish bug title="Unintended recursion"
Be careful of recursion which will lead to stack overflow — the compiler doesn't warn. The following example set `age` to 20, which calls `alterAge`, which in turn sets `this.age`, which calls `alterAge`,  which in turn sets `this.age`, ...

```kotlin
class Person {
    var age: Int = 30
        set(value) {
            alterAge(value)
        }

    private fun alterAge(newAge: Int) {
        this.age = newAge - 1
    }
}

fun main() {
	val person = Person()
	person.age = 20
	println(person.age)
}
```
~~~

Like a getter, you can set the setter to be private:

```kotlin
class Person {
    private var age: Int = 30
        set(value) {
            field = value - 1  // alter the age every time we set it
        }
    fun setAge(age:)
}

fun main() {
	val person = Person()
	println(person.age)
}
```