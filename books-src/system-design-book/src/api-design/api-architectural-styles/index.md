# API designs

aka API architectural styles

~~~admonish hint title="What does this mean?"
How to expose your data to the clients?

How do services communicate each other in terms of:
- Interface — resources vs. procedure
- data format — JSON, binary
- schema definitions
- state management
- communication protocol
- patterns of interaction
~~~

~~~admonish note title="Underlying transport"
All these designs are commonly built on top of HTTP.
~~~

|                   | REST                          | GraphQL                   | gRPC                        | SOAP |
| ----------------- | ----------------------------- | ------------------------- | --------------------------- | ---- |
| Interface         | Resource-oriented             | Hybrid                    | Procedure-oriented          |   |
| Data format       | JSON, HTML, etc.              | Graph-like language       | Protobuf, JSON, XML         | XML  |
| Schema            | (Verb, resource, JSON schema) | GraphQL                   | Function signature          | ?    |
| Schema definition | Server                        | Client                    | Server                      | ?    |
| Messaging pattern | Request/Response              | Request/Response, Pub/Sub | Request/Response, Streaming | ?    |
| Statefulness      | Stateless                     | ?                         | ?                           | ?    |

![Comparison](https://content.altexsoft.com/media/2020/05/word-image-53.png.webp)
