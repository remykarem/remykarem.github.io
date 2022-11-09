# Gotchas

* Unsafe cast
* Unhandled exceptions in Kotlin collections
* Platform types
* 1..10 iteration inclusive

```kotlin
var s = String(encryption.encrypt("fatcow"), StandardCharsets.UTF_8)
```

"The common mistake is trying to use the bytes.toString() to get the string from the bytes; The bytes.toString() only returns the address of the object in memory, NOT converting byte[] to a string!"
