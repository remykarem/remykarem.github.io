# Type erasure

Type erasure is perhaps a misnomer.

All possible forms of a generic type will be reduced to a simple raw type after compilation. This reduction is known as *type erasure*. What this means is that `List<String>` and `List<Int>` will be `List` at runtime.

So this would work:

```kotlin
class Box(private val name: String) {
    companion object {
        fun <T> from(value: T): Box {
            return when (value) {
                is Double -> Box("Double")
                else -> Box("Not double")
            }
        }
    }
    override fun toString(): String {
        return "Box(\"$name\")"
    }
}

fun main() {
    println(Box.from(5))
    println(Box.from("Hello"))
}
```

But it will not compile here, because of the type erasure behaviour:

```kotlin
class Item<T>(value: T)

class Box(private val name: String) {
    companion object {
        fun <T> from(value: T): Box {
            return when (value) {
                is Item<T> -> Box("Generics")  // this line is problematic!
                else -> Box("Not generics")
            }
        }
    }
    override fun toString(): String {
        return "Box(\"$name\")"
    }
}

fun main() {
    println(Box.from(Item(1000)))
    println(Box.from("Hello"))
}
```

Change `Item<T>` to `Item<*>` and it works!

```kotlin
class Item<T>(value: T)

class Box(private val name: String) {
    companion object {
        fun <T> from(value: T): Box {
            return when (value) {
                is Item<*> -> Box("Generics")  // change this line
                else -> Box("Not generics")
            }
        }
    }
    override fun toString(): String {
        return "Box(\"$name\")"
    }
}

fun main() {
    println(Box.from(Item(1000)))
    println(Box.from("Hello"))
}
```

Notice the decompiled Java for the `Item<T>` class - it doesn't have any information about the type `T` at all!

```java
public final class Item {
   public Item(Object value) {}
}
```

Let's look at the decompiled Java code for creating the objects:

```java
public static final void main() {
    Box var0 = Box.Companion.from(new Item(1000));
    System.out.println(var0);
    var0 = Box.Companion.from("Hello");
    System.out.println(var0);
}
```

The `from` function only checks for the "outermost" instance, which is either `Item` or not:

```java
public final class Box {

    private final String name;

    public static final class Companion {
        public final Box from(Object value) {
            return value instanceof Item ? new Box("Generics") : new Box("Not string");
        }
    }

    // omitted for brevity
}
```

Need to use `reified`. Used together with `inline`.

```kotlin
class Item<T>(value: T) {
    inline fun accessValue(): T
}

class Box(private val name: String) {
    companion object {
        fun <T> from(value: T): Box {
            return when (value) {
                is Item<*> -> Box("Generics")  // change this line
                else -> Box("Not generics")
            }
        }
    }
    override fun toString(): String {
        return "Box(\"$name\")"
    }
}

fun main() {
    println(Box.from(Item(1000)))
    println(Box.from("Hello"))
}
```
