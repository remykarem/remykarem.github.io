# Upper bounds

Default upper bound is `Any?`.

Simple

```kotlin
class Box<T>(item: T)

fun main() {
    val box = Box(10)
    println(box)
}
```

With methods

```kotlin
class Box<T>(val item: T) {
    fun getInnerItem(): T {
        return item
    }
}

fun main() {
    val box = Box(10)
    println(box.getInnerItem())
}
```

Single upperbound

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

```kotlin
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
}
```

Multiple upperbounds

```kotlin
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
```

```kotlin
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
}
```

multiple types

```kotlin
class Box<S, T>(private val item1: S,private val item2: T,) {
fun getItem1(): S {
return item1
    }
fun getItem2(): T {
return item2
    }
}
val box = Box(10, "item2")
```

multiple types & multiple bounds

```kotlin
class Box<S, T>(
private val item1: S,
private val item2: T,
)
where S:Minimisable, S:Maximisable, T:Maximisable
{
fun getItem1(): S {
return item1
    }
fun getItem2(): T {
return item2
    }
}
val item = Stuff()
val it =object:Maximisable{
override fun maximise(): Int {
return 10
    }
}
val box = Box(item, it)
```

Inheriting

```kotlin
class Box300(item:Minimisable): Box3<Minimisable>(item)
class Stufff:Minimisable{
override funminimise(): Int {
TODO("Not yet implemented")
    }
}
class Box301(item: Stufff): Box3<Stufff>(item)
class Box302<T:Minimisable>(item: T): Box3<T>(item)
```
