# Symbol to number to binary

A symbol is mapped to a number. This mapping is either Unicode, ASCII, etc.

This number, however big it is (i.e. how many bits), needs a way to be stored (efficiently). This efficiency is needed for mappings where the assigned number can be stored in 8 bits or more.

~~~admonish question title="Why learn about encodings at all?"
It helps to understand how much storage space is taken up by the "strings" that you see 
depending on the character set that you (unwittingly) use.

For example, the "length" of "🤦🏼‍♂️" is different in various languages:
* Python — 5
* JavaScript — 7
* Rust — 17
* Swift — 1
* Elixir — 1

So which is "correct"?

Read more in [String length](https://hsivonen.fi/string-length/) by Henri Sivonen.
~~~
