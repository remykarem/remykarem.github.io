# Memory

## Stack

-

## Heap

String pool is stored in the regular heap.

## Interning
Case 1:

```java
String username = "Tom";
```

* `"Tom"` is interned.
* `username` points to the interned string object (like Rust's `&str`)

Case 2:

```java
String username = new String("Tom");
```

* `"Tom"` is interned.
* A new `String` object is created on the heap, pointing to the interned `"Tom"` instance.


## Passing around

* Stack-allocated — copies as value
* Heap-allocated — copies the reference of value

```admonish tip title="Memory location"
Use `System.identityHashCode(obj)` to get the memory location of the object (subjected to change because of GC).
```
