# Unicode & UTF-8

**Unicode** is a mapping of a symbol to a number ("**code point**"). Eg. the symbol 💩 is `128169`.

The convention to write code point values is `U+1F4A9` where `1F4A9` is hexadecimal for `128169`.

**UTF-8** is an encoding; a mapping of a code point to a byte array. Specifically, UTF-8 stores code points in 1 to 4 bytes.

~~~admonish example
💩 is stored as `f09f 92a9`.
~~~

Readings: [Unicode](https://tonsky.me/blog/unicode/)
