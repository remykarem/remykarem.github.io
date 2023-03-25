# Property with getter

If we want `area` to be computed on the fly,

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int
		get() {
			return this.width * this.height
		}
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.area)
	rectangle.height = 100
	println(rectangle.area)
}
```

```admonish note
Another pattern to compute `area` on the fly is to have a `getArea` method:

	class Rectangle(var height: Int, var width: Int) {
		fun getArea() = this.height * this.width
	}

	fun main() {
		val rectangle = Rectangle(10, 2)
		println(rectangle.getArea())
		rectangle.height = 100
		println(rectangle.getArea())
	}

For me... I prefer the getter properties pattern.
```

We can also use the single-line function expression:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int
		get() = this.width * this.height
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.area)
	rectangle.height = 100
	println(rectangle.area)
}
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

A getter is always read, not written to. So, this property cannot be a `var` (otherwise it would be an oxymoron) - it won't compile:

```kotlin
class Rectangle(var height: Int, var width: Int) {
	var area: Int
		get() = this.width * this.height
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
