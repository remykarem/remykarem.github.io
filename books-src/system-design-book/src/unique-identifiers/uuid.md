# UUID

[RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122)

128-bit

| Version | Temporal | Node | Random |
|---------|----------|------|--------|
| UUIDv1  | Yes      | Yes  | ?      |
| UUIDv2  | Yes      | -    |        |
| UUIDv3  | -        | -    | ?      |
| UUIDv4  | -        | -    | 122    |
| UUIDv5  | -        | -    | ?      |
| UUIDv6  | 60       | Yes  | -      |
| UUIDv7  | 48 (Unix timestamp)     | -    | 74     |
| UUIDv8  | ?        | ?    |        |
  
Offers:
* Decentralised generation
* Global uniqueness
* Less guessable than sequential IDs
* Lexicographic sorting (for UUIDv7)

Features:
* **Temporal information**
* **Sequential**
  ~~~admonish question title="Why do we want sequential?"
  Helps with data locality in the database
  ~~~
* Privacy issues (e.g., UUIDv1 reveals MAC address information, leading to potential privacy concerns.)

~~~admonish question title="UUIDv7's risk of collision is lower than UUIDv4?"
A Redditor [says](https://www.reddit.com/r/programming/s/iufhhOQPAd) the risk of collision is reduced for UUIDs created close in time to each other.
~~~

References:
* [The Wild World of Unique Identifiers (UUID, ULID, etc)](https://blog.scaledcode.com/blog/wild-world-unique-id/) by Kyle Carter
* [Analyzing New Unique Identifier Formats (UUIDv6, UUIDv7, and UUIDv8)](https://blog.scaledcode.com/blog/analyzing-new-unique-id/) by Kyle Carter
* [UNEXPECTED DOWNSIDES OF UUID KEYS IN POSTGRESQL](https://www.cybertec-postgresql.com/en/unexpected-downsides-of-uuid-keys-in-postgresql/)
* [UUIDv7 generator](https://uuid7.com)
* [PostgreSQL and UUID as primary key](https://maciejwalkowiak.com/blog/postgres-uuid-primary-key/) by Maciej Walkowiak