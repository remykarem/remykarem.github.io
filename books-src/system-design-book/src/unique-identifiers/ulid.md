# ULID

[Universally Unique Lexicographically Sortable Identifier](https://github.com/ulid/spec)

[ULID](https://ulid.page)

128 bits; base32-encoded:
* 48 bits — UNIX timestamp (ms)
* 80 bits — randomness

```
 01AN4Z07BY      79KA1307SR9X4MV3

|----------|    |----------------|
 Timestamp          Randomness
   48bits             80bits
```

~~~admonish example title="Mentioned in"
AWS DynamoDB [scenario](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/data-modeling-schema-social-network.html#data-modeling-schema-social-network-design-evolution)
~~~
