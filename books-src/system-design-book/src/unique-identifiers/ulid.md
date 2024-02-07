# ULID

[Universally Unique Lexicographically Sortable Identifier](https://github.com/ulid/spec)

128 bits

base32-encoded

* 48 bits — UNIX timestamp (ms)
* 80 bits — randomness

~~~admonish example
```
 01AN4Z07BY      79KA1307SR9X4MV3

|----------|    |----------------|
 Timestamp          Randomness
   48bits             80bits
```
