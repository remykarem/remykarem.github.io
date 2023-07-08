# Upper bounds

The default upper bound is `Any?`.

Some upper bounds (defined in the standard library) that we can use are: `Number`, `List<T>`, `Set<T>` and `Collection<T>`.

Imo, I think it's always good to specify an upper bound for additional type safety (by enforcing constraints on the type parameter).

## Single upper bound

We can use the `Box<T: Minimisable>(...)` idiom:

```kotlin
interface Minimisable {
    fun minimise(): Int
}

class Box<T: Minimisable>(val item: T) {
    fun getMinimisedItem(): Int {
        return item.minimise()
    }
}

fun main() {
    val item = object : Minimisable {
        override fun minimise(): Int {
            return 100
        }
    }
    val box = Box(item)
    println(box)
}
```

or the `Box<T>(...) where T: Minimisable` idiom:

```kotlin
interface Minimisable {
    fun minimise(): Int
}

class Box<T>(val item: T) where T: Minimisable {
    fun getMinimisedItem(): Int {
        return item.minimise()
    }
}

fun main() {
    val item = object : Minimisable {
        override fun minimise(): Int {
            return 100
        }
    }
    val box = Box(item)
    println(box)
}
```

## Multiple upper bounds

For multiple upper bounds, only the `Box<T>(...) where T: Minimisable, Maximisable` syntax is valid:

```kotlin
interface Minimisable {
    fun minimise(): Int
}

interface Maximisable {
    fun maximise(): Int
}

class Box<T>(private val item: T)
    where T: Minimisable, T: Maximisable
{
    fun getMinimisedItem(): Int {
        return item.minimise()
    }
}

class Stuff: Minimisable, Maximisable {
    override fun minimise(): Int {
        return 5
    }
    override fun maximise(): Int {
        return 100
    }
}

fun main() {
    val item = Stuff()
    val box = Box(item)
    println(box)
}
```

## Multiple types with multiple bounds

```kotlin
interface Minimisable {
    fun minimise(): Int
}

interface Maximisable {
    fun maximise(): Int
}

class Box<S, T>(
    private val item1: S,
    private val item2: T,
)
    where S: Minimisable, S: Maximisable, T: Maximisable
{
    fun getItem1(): S {
        return item1
    }

    fun getItem2(): T {
        return item2
    }
}

class Stuff: Minimisable, Maximisable {
    override fun minimise(): Int {
        return 5
    }
    override fun maximise(): Int {
        return 100
    }
}

fun main() {
    val item = Stuff()

    val it = object : Maximisable {
        override fun maximise(): Int {
            return 10
        }
    }

    val box = Box(item, it)
    println(box)
}
```
