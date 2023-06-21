# Summary

[Preface](./preface.md)

---

# System architectural patterns

- [Single unit]()
  - [Monolithic]()
- [Collection of functionalities]()
  - [Service-oriented architecture]()
  - [Microservices]()
  - [Layered]()
- [Collection of functions]()
  - [Serverless]()
- [Collection of events]()
  - [Event-driven architecture](./patterns/event-driven-architecture.md)
- [?]()
  - [MVC]()
  - [MVVM]()
  - [MVP]()
  - [PM]()

---

# Application design

- [Hexagonal]()
- [DDD](./ddd.md)

---

# API design

- [API architectural styles](./api-design/api-architectural-styles/index.md)
  - [REST](./api-design/api-architectural-styles/rest.md)
  - [GraphQL](./api-design/api-architectural-styles/graphql.md)
  - [gRPC](./api-design/api-architectural-styles/grpc.md)
  - [SOAP](./api-design/api-architectural-styles/soap.md)
- [Batch processing](./api-design/batch-processing.md)
- [API performance](./api-design/api-peformance.md)

---

# Data management patterns

- [Overview](./data-management-patterns/overview.md)
- [Structural: Organising]()
  - [Shared database](./data-management-patterns/shared-database.md)
  - [Database-per-Service](./data-management-patterns/database-per-service.md)
- [Behavioural: Querying]()
  - [API composition](./data-management-patterns/api-composition.md)
  - [Saga](./data-management-patterns/saga.md)
  - [CQRS](./data-management-patterns/cqrs.md)
- [Creational: Storing data]()
  - [Event sourcing](./data-management-patterns/event-sourcing.md)

---

# Messaging patterns

- [Overview](./messaging-patterns/overview.md)
- [Type I]()
  - [Request/Response](./messaging-patterns/request-response.md)
  - [Fire and Forget](./messaging-patterns/fire-and-forget.md)
- [Type II: M-to-N messaging]()
  - [Producer/Consumer](./messaging-patterns/producer-consumer.md)
    - [Point-to-point]()
    - [Task queues]()
  - [Pub/Sub](./messaging-patterns/pub-sub.md)
- [Type III: Push/pull]()

---

# Components

- [Structural]()
  - [Reverse proxy]()
  - [Database]()
  - [Cache]()
  - [Message broker](./services/message-broker.md)
    - [Message queue]()
- [Behavioural]()
  - [Load balancer](./components/load-balancer.md)
  - [API gateway]()

---

# Database

- [SQL vs. NoSQL](./sql-vs-nosql.md)
- [Consistency models](./consistency-models.md)

---

# Unclassified

- [Streaming](./streaming.md)
- [Webhook?]()
- [CDN](./cdn.md)
- [Network architecture and communication protocols]()
    - [Connections](./connections.md)
    - [Network architectures](./network-architectures.md)
- [Web architecture & software architecture](./web-architecture-and-software-architecture.md)
- [Availability and fault tolerance]()
    - [Deployment strategies](./deployment-strategies.md)
- [Performance optimization]()
    - [Load testing](./load-testing.md)
- [Unique numbers](./unique-numbers.md)

---

# Interface description languages

- [Protobuf](./protobuf.md)
- [ASN.1](./asn1.md)
- [Apache Thrift]()
