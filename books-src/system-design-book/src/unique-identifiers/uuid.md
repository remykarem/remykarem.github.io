x# UUID

[RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122)

128-bit


* UUIDv4

  * 122 bits pseudo randomly generated

    ~~~admonish note
    This is roughly 5 * 10^36
    ~~~
    
  * 6 bits for version and variant

* UUIDv7


| Version | Temporal | Name-based | Randomness |
|---------|----------|------------|------------|
| UUIDv1  | Yes      | MAC        | ?          |
| UUIDv2  |          |            |            |
| UUIDv3  | No       | URL/OID    | ?          |
| UUIDv4  | No       | No         | 122 bits   |
| UUIDv5  | No       | URL/OID    | ?          |
| UUIDv6  |          |            |            |
| UUIDv7  | Yes      |            | ?          |
  

References:
https://medium.com/geekculture/the-wild-world-of-unique-identifiers-uuid-ulid-etc-17cfb2a38fce
