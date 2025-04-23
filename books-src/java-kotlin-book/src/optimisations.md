# Optimisations

## Inline

`inline` functions make sense to be used if they are *higher-order functions. inline is copy-and-paste.* 

Inline classes will use the `value` modifier. Use `@JvmInline` for java backends.

`const` for compile-time constants. These are read-only properties (so it's will always be `const val`) that must be initialised with a primitive type or `String` type. Declaration is done either at top-level, member of an object declaration, or a companion object. 

`reified` for generic types, so that the type information is available during runtime. This directive is used together with the `inline` function. Java's solution for this is very verbose.

```kotlin
fun <T: Any> doSomething(value: T, type: KClass<T>) {
    println("Doing something with type: ${type.simpleName}")       // OK
}
```

```kotlin
value class Person {

}
```

but Kotlin handles it better:

```kotlin
inline fun <reified T> doSomething(value: T) {
    println("Doing something with type: ${T::class.simpleName}")    // OK
}
```

While copying the body of an inline function, the compiler also replaces the type parameter T with the actual type argument that is specified or inferred in the function call.

## Tail recursion

## Arrays with primitives

https://kt.academy/article/ek-arrays

Also see JVM memory.

## Java 8 to Java 9+

For larger strings, Java 9+ is more space efficient. 

## Sequence

https://kt.academy/article/ek-sequence
