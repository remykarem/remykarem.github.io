# API designs

aka API architectural styles

~~~admonish hint title="What does this mean?"
How to expose your data to the clients?

How do services communicate each other in terms of:
- Interface — resources vs. procedure (operation)
- schema definitions
- data format — JSON, binary
- state management
- communication protocol
- patterns of interaction
~~~

~~~admonish note title="Underlying transport"
All these designs are commonly built on top of HTTP.
~~~

|                   | REST                          | GraphQL                   | RPC                               | SOAP |
| ----------------- |-------------------------------|---------------------------|-----------------------------------| ---- |
| Interface         | Resource-oriented             | Hybrid                    | Procedure-oriented                |   |
| Schema            | (Verb, resource, JSON schema) | GraphQL                   | Function signature                | ?    |
| Schema definition | Server                        | Client                    | Server                            | ?    |
| Data format       | JSON, HTML, etc.; text        | Graph-like language; text | Protobuf, JSON, XML; text & binary | XML  |
| Messaging pattern | Request/Response              | Request/Response, Pub/Sub | Request/Response, Streaming       | ?    |
| Statefulness      | Stateless                     | ?                         | ?                                 | ?    |

![Comparison](https://content.altexsoft.com/media/2020/05/word-image-53.png.webp)

---

Articles
* [Good API design](https://www.seangoedecke.com/good-api-design/)
