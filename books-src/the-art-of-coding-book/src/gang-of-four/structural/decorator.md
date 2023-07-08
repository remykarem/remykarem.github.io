# Decorator

Wrap an **inner functionality** with an **outer functionality** (the decorator).

~~~admonish example title="Text, BoldFace text"
Given an **inner functionality** `Text`:

```kotlin
class Text(text: String) {
	fun render() -> String {
		return text
	}
}
```

we wrap it with an **outer functionality** `BoldFace`:

```kotlin
class BoldFace(wrapped: Text) {
	fun render() -> String {
		return "<b>{wrapped.render()}</b>"
	}
}
```
~~~

```admonish note
Decorator pattern ≠ Python decorator
```
