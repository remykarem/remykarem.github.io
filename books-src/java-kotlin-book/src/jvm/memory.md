# Memory
Most JVM are 64-bit JVM, i.e. address space is 8 bytes. 

Although references are represented in 64 bits (8 bytes), **compressed oops** is enabled by default which would be 4 bytes.

```admonish tip title="Memory location"
Use `System.identityHashCode(obj)` to get the memory location of the object (subjected to change because of GC).
```



## Allocation

### Stack-allocated

* Primitives (not boxed)
* Value types
* Local variables (value itself or reference)

### Heap-allocated

* String pool
* Boxed primitives
* Class instances eg. custom classes, String, List

~~~admonish tip title="Interning"
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
~~~

## Pass by value vs. reference

* Stack-allocated — copies as value
* Heap-allocated — copies the reference of value


## Size

### Primitives

The usuals. Char is 2 bytes (cos UTF-16).

### Objects

* ~12 bytes — header
* x1 bytes — value itself or reference to value
* x2 bytes — value itself or reference to value
* ... bytes
* 0-7 bytes — alignment/padding

#### String

Metadata
* ~12 bytes — header
* 4 bytes — reference to underlying value
* 1 byte — encoding (in Java 9+)
* 4 bytes — hash

Underlying value
* ~12 bytes — header
* 4 bytes — array length
* x bytes — value itself, where x = 2k (char, used in Java 8 or below) or x = k (byte; used in Java 9+), and k is the length of the string.
* 0-7 bytes — alignment/padding

Therefore, a String would roughly occupy (36 + k) bytes or (36 + 2k) bytes.

~~~admonish
Java 8 or below uses a character array for the underlying value, whereas Java 9+ uses a byte array for the underlying value.

More savings for Java 9+ than Java 8 for larger strings because of the backing array.
~~~

#### Primitive array

eg. IntArray (Kotlin), int[] (Java)

* 12 bytes — header
* 4 bytes — count
* x bytes — no. of items * size of each item
* ? bytes — padding

#### Object array

Eg. List<T> (Kotlin), Object[] (Java)

Metadata
* 12 bytes — header
* 4 bytes — count
* x bytes — no. of items * 4 bytes (size of each item pointer)
* ? bytes — padding

each boxed item
* 12 bytes — header
* x bytes — value itself
* ? bytes — padding

#### MutableList / ArrayList

* Initial capacity of backing array is 10.
* Object is copied to another if capacity of backing array is full.
* Growth factor is 1.5.

## Padding

To maintain 8-byte alignment. 

