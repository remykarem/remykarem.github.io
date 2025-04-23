# Memory
Most JVM are 64-bit JVM, i.e. references are represented in 64 bits (8 bytes).

## Allocation

### Stack-allocated
* Primitives (not boxed)
* Value types
* Local variables (value itself or reference)

### Heap-allocated
* Boxed primitives
* Class instances eg. custom classes, String, List

## Size

### Primitives

The usuals. Char is 2 bytes (cos UTF-16).

### Objects

* ~12 bytes — header
* x1 bytes — value itself or reference to value
* x2 bytes — value itself or reference to value
* ... bytes
* 0-4 bytes — alignment/padding

#### String

* ~12 bytes — header
* 8 bytes — reference to value
* x bytes — value itself (stored as byte array)
