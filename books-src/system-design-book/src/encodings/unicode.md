# Unicode & grapheme

Unicode is a mapping of a _symbol_ to a number ("**code point**", in Unicode speak).

These numbers are represented in hexadecimal and are usually formatted as `U+FE0F`.

~~~admonish example title="Example of symbols"
The symbol 💩 is assigned to `U+1F4A9`.
The acute accent in European languages is assigned to `U+0301`.
~~~

~~~admonish tip title="See Unicode values in macOS"
In macOS, you can see go to **Character Viewer** (Ctrl+Cmd+Space), select a symbol, right-click, then select **Copy Character Info**. You'll get:

💩

pile of poop

Unicode: U+1F4A9, UTF-8: F0 9F 92 A9
~~~

A _human-readable character_ is called a **grapheme** or a **grapheme cluster**. A grapheme can be encoded with multiple code points.

~~~admonish example title="Example of graphemes"
The character 🤦 is made up of 1 code point: `U+1F926`.

```sh
echo -e '\U1F926'
```

😱🤟🏽🤟🏽
face screaming in fear
Unicode: U+1F631, UTF-8: F0 9F 98 B1

The character 🤦🏼‍♂️ is made up of 5 code points: `U+1F926`, `U+1F3FB`, `U+200D`, `U+2642`, `U+FE0F`.

```sh
echo -e '\U1F926\U1F3FB\U200D\U2642\UFE0F'
```
~~~

Unicode is a **32-bit** symbol set, but only about 1 million code points are assigned a symbol.

~~~admonish note title="Private Use"
There are also code points that are reserved for app developers and will never be defined by Unicode itself. These code points are called "Private Use".
~~~

The following are subsets of Unicode:
* [ASCII](./ascii.md)
* [Latin-1](./iso-8859.md)

~~~admonish warning title="Same same but different"
Two human-readable characters might look the same but they can be made up of different code points.

Example: Å and Å

```sh
echo -e '\U00C5'
echo -e '\U0041\U030A'
```

or `'` and `’`

```sh
echo -e '\U0027'
echo -e '\U2019'
```

or

In such cases, you need to perform normalisation on the Unicode data.

Normalisation is used to decompose characters into their base characters and optional marks. After decomposing, you can encode the string in ASCII ignoring non-ASCII characters, or alternatively, replace or remove them.
~~~

## Storage
Unicode can be stored as a byte array in multiple ways:
* [UTF-8](./unicode/utf-8.md)
* UTF-16
* UTF-32 — naïve way to store symbols; inefficient because for say certain use cases, you'll only use about 1 byte max.

---

Readings:
* [Unicode](https://tonsky.me/blog/unicode/)
