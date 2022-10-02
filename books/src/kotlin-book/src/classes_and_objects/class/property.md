# Property

## Properties getter and setter

Getters and setters in Kotlin are... quite a headache.

### Read-only properties (no getter)

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int = this.height * this.width
}

val rectangle = Rectangle(10, 2)
println(rectangle.area)
rectangle.height = 100
println(rectangle.area)
```

Value of `area` is computed once.

### Read-only properties (getter)

We want `area` to be computed on the fly.

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int
		get() {
			return this.width * this.height
		}
}

val rectangle = Rectangle(10, 2)
println(rectangle.area)
rectangle.height = 100
println(rectangle.area)
```

> 💡 Another pattern to compute `area` on the fly is to have a `getArea` method:
>
> ```kotlin
> class Rectangle(var height: Int, var width: Int) {
> 	fun getArea() = this.height * this.width
> }
> fun main() {
>    val rectangle = Rectangle(10, 2)
>    println(rectangle.getArea())
>    rectangle.height = 100
>    println(rectangle.getArea())
> }
> ```
> 
> For me... I prefer the getter properties pattern.

We can also use the single-line function expression:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int
		get() = this.width * this.height
}

val rectangle = Rectangle(10, 2)
println(rectangle.area)
rectangle.height = 100
println(rectangle.area)
```

Whether we use the single-line function expression or the function block syntax, we can omit the type if it can be inferred:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area
		get() = this.width * this.height
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.area)
	rectangle.height = 100
	println(rectangle.area)
}
```

We can also reduce this getter property to one line:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area get() = this.width * this.height
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.area)
	rectangle.height = 100
	println(rectangle.area)
}
```

The read-only property cannot be a `var` (otherwise it would be an oxymoron):

```kotlin
class Rectangle(var height: Int, var width: Int) {
	var area get() = this.width * this.height
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.area)
	rectangle.height = 100
	println(rectangle.area)
}
```

We can set the read-only property to be private too:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	private val area: Int
		get() = this.width * this.height
}
```

The `private` in `private get()` is redundant:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	private val area: Int
		private get() = this.width * this.height
}
```

The visibility of `area` must match its `get` method. Otherwise, it won't compile:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int
		private get() = this.width * this.height
}
```

### Mutable properties (getter & setter)

> 💡 `value` is just a convention. The type is the same as the type of the property (hence no need to type it).

> 💡 `field` ("backing field") is like the "internal value" of the property, if you may

```kotlin
class Person {
	var age: Int = 0 // must be initialised!
		get() {
			return field + 1
		}
		set(value) {
			value + 100
		}
}

fun main() {
	val person = Person()
	println(person.age)
}
```

```kotlin
class Person {
	var age: Int = 0 // must be initialised!
		get() {
			return field + 1
		}
		set(value) {
			value + 100
		}
}

fun main() {
	val person = Person()
	println(person.age)
}
```

or

```kotlin
class Person {

	var age: Int = 0 // must be initialised!

		get() = field + 1

		set(value) {
			field = value + 100
		}
		
}
```