# UTF-8

**UTF-8** is an encoding; a mapping of a code point to a byte array. Specifically, UTF-8 stores code points in 1 to 4 bytes.

~~~admonish example
💩 is stored as `f0 9f 92 a9`.
~~~

~~~admonish tip title="Rust"
Rust's `String` type is guaranteed to be UTF-8 valid.
~~~
