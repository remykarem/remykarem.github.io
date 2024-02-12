# UUID

[RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122)

128-bit

| Version | Temporal | Node | Random |
|---------|----------|------|--------|
| UUIDv1  | Yes      | Yes  | ?      |
| UUIDv2  | Yes      | No   |        |
| UUIDv3  | No       | No   | ?      |
| UUIDv4  | -        | No   | 122    |
| UUIDv5  | No       | No   | ?      |
| UUIDv6  | 60       | Yes  | -      |
| UUIDv7  | 48       | No   | 74     |
| UUIDv8  | ?        | ?    |        |
  
Offers:
* Decentralised generation
* Global uniqueness
* Less guessable than sequential IDs

Features:
* **Temporal information**
* **Sequential**
  ~~~admonish question title="Why do we want sequential?"
  Helps with data locality in the database
  ~~~
* Privacy issues (MAC address)

References:
* [The Wild World of Unique Identifiers (UUID, ULID, etc)](https://blog.scaledcode.com/blog/wild-world-unique-id/) by Kyle Carter
* [Analyzing New Unique Identifier Formats (UUIDv6, UUIDv7, and UUIDv8)](https://blog.scaledcode.com/blog/analyzing-new-unique-id/) by Kyle Carter
* [UNEXPECTED DOWNSIDES OF UUID KEYS IN POSTGRESQL](https://www.cybertec-postgresql.com/en/unexpected-downsides-of-uuid-keys-in-postgresql/)
* [UUIDv7 generator](https://uuid7.com)
