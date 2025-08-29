# Types

## Mapping

| Kotlin code                          | JVM compiled type | Notes |
| ------------------------------------ | ----------------- | ------|
| `val x = 42`                         | `int` (primitive) | |
| `val x: Int = 42`                    | `int`             | |
| `val x: Int? = 42`                   | `Integer` (boxed) | |
| `val x: Any = 42`                    | `int` / `Integer` | |
| `val xs: List<Int> = listOf(42)`     | `List<Integer>`   | listOf uses generics. JVM can't use generics with primitives so the integer has to be boxed. |
| `val arr: Array<Int> = arrayOf(42)`  | `Integer[]`       | |
| `val arr: IntArray = intArrayOf(42)` | `int[]`           | |
| `val arr = listOf(null, 1, "d")`     | `Object[]`        | |

The compiler will optimise away accordingly if say the null-ness isn't used elsewhere even though a variable is declared `Int?`.

## Primitive types

Note that Kotlin compiles non-nullable primitive types to their corresponding primitive types in Java.

**Nullable primitive types, on the other hand, are compiled to the corresponding boxed types in Java.**

## `Any`

~~~admonish warning title="Gotcha"

`Any` type *can* be `null` 😱.

```kotlin
val foo: Any = null as Any
```
~~~

## `Any?`

`Any?` type can be `null`.

```kotlin
val foo: Any? = null
```

## `List<*>`

Wildcard types `*` are basically `Any?` (?).

```kotlin
val foo: List<*> = listOf(null, 1)
foo.forEach { println(it) }
```

```kotlin
val foo: List<Any?> = listOf(null, 1)
foo.forEach { println(it) }
```