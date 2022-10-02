# Mutability

> ⚠️ `List` is not immutable. You can cast it to mutable list. Its mutability can also change if you pass to a fnction that accepts mutablelist.

Immutable: state cannot be modified after it is created. String.

> 💡 For Immutable support, use Google's Guava or JetBrain's Kotlinx Immutable Collections Library

Mutable

Read-only: val, List. Compile-time

> 💡 `val` means cannot reassign

> 💡 `ReadOnlyDataStructure` means cannot write

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
