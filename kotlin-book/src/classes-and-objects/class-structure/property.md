# Property

Class properties are computed once in the lifetime of a class.

```kotlin
class Rectangle(var height: Int, var width: Int) {
	val area: Int = this.height * this.width
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.area)
	rectangle.height = 100
	println(rectangle.area)
}
```

(JVM only, I think) The getter and setter methods will be generated accordingly for the `val` and `var` properties. Attempting to redefine any of these methods throws a compilation error:

```kotlin
class Rectangle(val height: Int, val width: Int) {
	fun getHeight(): Int {
		return 9
	}
}

fun main() {
	val rectangle = Rectangle(10, 2)
	println(rectangle.getHeight())
}
```
