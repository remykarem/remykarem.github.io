# Data class

Data class is like a `class` but implements for you:

* `equals()` and `hashCode()`
* `toString()`
* `copy()`

Data class is the idiomatic way to define objects that contains only data. A common operation you would perform on data is comparison - this is where the `equals` function comes in handy.

Note that data classes, however, do not translate to Java's Records. You need the `@JvmRecord` annotation.

~~~admonish note title="Copy"
`.copy()` performs a _shallow_ copy.
~~~
