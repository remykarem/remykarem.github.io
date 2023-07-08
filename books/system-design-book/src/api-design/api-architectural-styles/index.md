# API architectural styles

```admonish hint title="What does this mean?"
"How to expose your data to the clients?
```

How do services communicate each other in terms of

- data format
- state management
- communication protocol
- patterns of interaction

**All these styles are commonly built on top of HTTP.**

|                   | REST                          | GraphQL                   | gRPC                        | SOAP |
| ----------------- | ----------------------------- | ------------------------- | --------------------------- | ---- |
| Data format       | JSON, HTML, etc.              | JSON                      | Protobuf, JSON, XML         | XML  |
| Schema            | (Verb, resource, JSON schema) | GraphQL                   | Function signature          | ?    |
| Schema definition | Server                        | Client                    | Server                      | ?    |
| Statefulness      | Stateless                     | ?                         | ?                           | ?    |
| Messaging pattern | Request/Response              | Request/Response, Pub/Sub | Request/Response, Streaming | ?    |

![Comparison](https://content.altexsoft.com/media/2020/05/word-image-53.png.webp)
