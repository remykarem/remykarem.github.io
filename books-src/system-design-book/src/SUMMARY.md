# Summary

[Preface](./preface.md)

---

# System architectural patterns

- [Single unit]()
  - [Monolithic]()
- [Collection of functionalities]()
  - [Service-oriented architecture]()
  - [Microservices](./patterns/microservices.md)
  - [Layered]()
- [Collection of functions]()
  - [Serverless]()
- [Collection of events]()
  - [Event-driven architecture](./patterns/event-driven-architecture.md)

---

# Components

- [Structural]()
  - [CDN](./components/cdn.md)
  - [Cache]()
  - [Firewall]()
  - [API gateway](./components/api-gateway.md)
  - [Forward proxy](./components/forward-proxy.md)
  - [Message broker](./components/message-broker.md)
  - [Reverse proxy ("load balancer")](./components/reverse-proxy.md)
- [Traits]()
  - [Caching](./components/caching.md)
  - [Routing](./components/routing.md)
  - [Rate limiting](./components/rate-limiting.md)
  - [Identity hiding](./components/identity-hiding.md)
  - [Load balancing](./components/load-balancing.md)
  - [Logging & monitoring](./components/logging-and-monitoring.md)
  - [Control outgoing requests](./components/control-outgoing-requests.md)
  - [SSL encryption & decryption](./components/ssl-encryption-and-decryption.md)
  - [Authentication & authorisation](./components/authentication-and-authorisation.md)

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

# API design

- [API architectural styles](./api-design/api-architectural-styles/index.md)
  - [REST](./api-design/api-architectural-styles/rest.md)
  - [GraphQL](./api-design/api-architectural-styles/graphql.md)
  - [gRPC](./api-design/api-architectural-styles/grpc.md)
  - [SOAP](./api-design/api-architectural-styles/soap.md)
- [Batch processing](./api-design/batch-processing.md)
- [API performance](./api-design/api-peformance.md)

---

# Messaging patterns

- [Overview](./messaging-patterns/overview.md)
- [Type I: Responsiveness]()
  - [Request/Response](./messaging-patterns/request-response.md)
  - [Fire and Forget](./messaging-patterns/fire-and-forget.md)
- [Type II: M-to-N messaging]()
  - [Producer/Consumer](./messaging-patterns/producer-consumer.md)
    - [Point-to-point]()
    - [Task queues]()
  - [Pub/Sub](./messaging-patterns/pub-sub.md)
- [Type III: Direction](./messaging-patterns/direction.md)
  - [Polling (Pull)](./messaging-patterns/polling.md)
  - [Webhook (Push)](./messaging-patterns/webhook.md)
- [Type IV: Streamingness]()
  - [Streaming](./streaming.md)

---

# Database

- [SQL vs. NoSQL](./sql-vs-nosql.md)
- [Consistency models](./consistency-models.md)

---

# Container orchestration

- [Amazon ECS]()

---

# Deployment strategies

- [Deployment strategies](./deployment-strategies.md)

---

# Interface description languages

- [Protobuf](./protobuf.md)
- [ASN.1](./asn1.md)
- [JSON schema]()
- [Apache Thrift]()

---

# Unclassified

- [Connections](./connections.md)
- [Network architecture and communication protocols]()
    - [Network architectures](./network-architectures.md)
- [Web architecture & software architecture](./web-architecture-and-software-architecture.md)
