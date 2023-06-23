# Program to an interface, not an implementation

Code should depend on interface abstractions and not on concrete classes. This can increase the flexibility of the code.

interface (Java, Kotlin) = duck typing (dynamic) = protocol (Swift)

aka "coding to interface"

Kotlin

Suppose a birdkeeper wants to make a bird move. We create a class for it and a method.

We could do

```kotlin
class BirdKeeper(bird: Bird) {
	fun moveBird() = this.bird.move() 
}
```

or we could

```kotlin
class BirdKeeper {
	fun moveBird(bird: Bird) = bird.move()
}
```

Suppose that a bird can only fly or run as the main method of travelling. We first create a model of what a bird can do, grouping (fly, run) under "move".

```kotlin
interface Bird {
	fun move(): String
}
```

Then create several implementations of this bird — one that flies and one than runs.

```kotlin
class FlyableBird implements Bird {
	override fun move() = "fly"
}
```

```kotlin
class RunnableBird implements Bird {
	override fun move() = "run"
}
```

```kotlin
class 
```

Use of Duck Typing. “Interface” = it has the methods/attributes we need.

Python:

```python
def get_moving(bird):
	if hasattr(bird, "fly"):
	  bird.fly()
	else:
	  bird.run()
```
