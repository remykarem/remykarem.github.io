# Mutability

## Immutable

State cannot be modified after it is created. 

* `String`
* Other primitives

This means that copying (say via  these objects is cheap, because JVM copies the _reference_ only (because there's no risk that the instance could be modified after creation).

~~~admonish warning
`List` is not actually immutable. Rather, it is compile-time read-only.

You can cast a `List` into a `MutableList` and change the underlying data at runtime 😱.

Example how we can change the data in a `List`:

```kotlin
val list = listOf(1,2,3)

println(list)

(list as MutableList<Int>)[2] = 999

println(list)
```

For more immutable support, use Google's Guava or JetBrain's Kotlinx Immutable Collections Library.
~~~

## Mutable

Read-only: val, List. Compile-time

```admonish note
`val` means cannot reassign
```

```admonish note
`ReadOnlyDataStructure` means cannot write
```

Grammar

1. `val` + `ReadOnlyDataStructure`
    - Cannot write
    - Cannot reassign
2. `var` + `ReadOnlyDataStructure`
    - Cannot write
    - Can reassign
3. `val` + `MutableDataStructure`
    - Can write
    - Cannot reassign
4. `var` + `MutableDataStructure`
    - Can write
    - Can reassign
