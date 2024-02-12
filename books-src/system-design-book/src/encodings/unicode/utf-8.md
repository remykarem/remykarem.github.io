# UTF-8

**UTF-8** is a mapping of Unicode code point to a sequence of bytes. 

It is basically a way to "store" code points. Specifically, UTF-8 stores code points in 1 to 4 bytes.

~~~admonish example
💩 is stored as `f0 9f 92 a9`.
~~~

~~~admonish tip title="See UTF-8 values in macOS"
In macOS, you can see go to **Character Viewer** (Ctrl+Cmd+Space), select a symbol, right-click, then select **Copy Character Info**. You'll get:

💩

pile of poop

Unicode: U+1F4A9, UTF-8: F0 9F 92 A9
~~~

~~~admonish tip title="Rust"
Rust's `String` type is guaranteed to be UTF-8 valid.

See [Storing UTF-8 Encoded Text with Strings](https://doc.rust-lang.org/book/ch08-02-strings.html#storing-utf-8-encoded-text-with-strings).
~~~
