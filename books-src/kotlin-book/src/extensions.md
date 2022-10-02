# Extensions

Property extension: (same like getters and setters)

```kotlin
val StringBuilder.lastChar: Char
	get() = get(length - 1)
	set(value: Char) {
		this.setCharAt(length - 1, value)
	}
```

```kotlin
fun Class<*>.someMethod() = "hello"
```
