# Decorator

Wrap functionality with other functionality in order to affect outputs.

```admonish note
⛔ Decorator pattern ≠ Python decorator
```

```python
greeting = Text("hello")
better_greeeting = BoldFace(greeting)
```

```python
class Text:
	def __init__(self, text: str):
		self.text = text
	def render(self):
		return self.text

class BoldFace:
	def __init__(self, wrapped: Text):
		self.wrapped = wrapped
	def render(self):
		return f"<b>{self.wrapped.render()}</b>"
```
