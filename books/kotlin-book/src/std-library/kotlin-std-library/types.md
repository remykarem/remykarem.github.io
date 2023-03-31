# Types

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