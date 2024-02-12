# Unicode

Unicode is a mapping of a symbol to a number ("**code point**", in Unicode speak). Eg. the symbol 💩 is assigned to the (decimal) number `128169`.

Unicode is a **32-bit** character set, but only about 1 million code points are assigned a symbol.

The convention to write code point values is `U+1F4A9` where `1F4A9` is hexadecimal for `128169`.

The following are subsets of Unicode:
* [ASCII](./ascii.md)
* [Latin-1](./iso-8859.md)

~~~admonish warning title="Emojis"
An emoji that you see might be longer than 32 bits 😱.
~~~

~~~admonish note title="Storage"
Unicode can be stored as a byte array in multiple ways:
* [UTF-8](./unicode/utf-8.md)
* UTF-16
* UTF-32 — naïve way to store symbols; inefficient because for say certain use cases, you'll only use about 1 byte max.
~~~

Readings:
* [Unicode](https://tonsky.me/blog/unicode/)
