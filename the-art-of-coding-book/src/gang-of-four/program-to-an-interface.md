# Program to an interface, not an implementation

aka "coding to interface"

Code should depend on **interface abstractions** and not on concrete classes. This can increase the flexibility of the code.

Different languages have different constructs for such abstractions:

* `trait` — Rust
* `interface`, `abstract class` — Java, Kotlin
* `protocol` — Swift
* `abc.ABC` — Python

Some languages bank on the use of _duck typing_ to achieve this abstraction — "if it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

~~~admonish example title="Duck typing in Python"
Here is an example, though imo isn't idiomatic.
```python
def get_moving(bird):
	if hasattr(bird, "fly"):
	  bird.fly()
	else:
	  bird.run()
```

Personally, me nolikey because of the use of the `hasattr` reflection here.
~~~
