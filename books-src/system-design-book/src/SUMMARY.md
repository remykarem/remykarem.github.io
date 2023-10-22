# Summary

[Preface](./preface.md)

---

# In the event of

- [Why systems fail](./why-systems-fail.md)

---

# Goals

- [Scalability](./scalability.md)
- [Availability](./availability.md)
- [Performance](./performance.md)
- [Reliability](./reliability.md)
- [Fault tolerance?](./fault-tolerance.md)
  - [Partial tolerance]()
- [Consistency]()
- [Atomicity]()
- [Data integrity]()
- [Isolation]()
- [Durability]()

---

# Strategies

- [Caching](./components/caching.md)
- [Batching](./batching.md)
- [Redundancy](./redundancy.md)
- [Replication](./replication.md)
- [Distributed](./distributed.md)
- [Auto-scaling](./auto-scaling.md)
- [Rate limiting](./components/rate-limiting.md)
- [Load balancing](./components/load-balancing.md)
- [Coupling, isolation]()
- [Logging & monitoring](./components/logging-and-monitoring.md)
- [Loose coupling of services]()

---

# Core functionalities

- [Routing](./components/routing.md)
- [Scheduling](./components/scheduling.md)
- [Data storage](./components/data-storage.md)
- [Identity hiding](./components/identity-hiding.md)
- [Concurrency control](./components/concurrency-control.md)
- [Control outgoing requests](./components/control-outgoing-requests.md)
- [SSL encryption & decryption](./components/ssl-encryption-and-decryption.md)
- [Authentication & authorisation](./components/authentication-and-authorisation.md)

---

# Components

- [CDN](./components/cdn.md)
- [Cache]()
- [Firewall]()
- [Queue](./components/queue/index.md)
- [Lambda](./components/serverless-compute-service.md)
- [Compute]()
- [Database](./components/database.md)
- [API gateway](./components/api-gateway.md)
- [Forward proxy](./components/forward-proxy.md)
- [Message broker](./components/message-broker.md)
- [Event bus service](./components/event-bus-service.md)
- [Reverse proxy ("load balancer")](./components/reverse-proxy.md)

---

# Data management patterns

- [Overview](./data-management-patterns/overview.md)
- [Structural: Organising]()
  - [Database-per-Service](./data-management-patterns/database-per-service.md)
  - [Shared database](./data-management-patterns/shared-database.md)
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

---

# Consistency models

- [Consistency models](./consistency-models.md)

---

# ???

- [Request-driven]()
- [Event-driven architecture](./patterns/event-driven-architecture.md)

---

# System architectural patterns / coupling patterns / composing components

- [Single unit]()
  - [Monolithic]()
- [Collection of functionalities]()
  - [Service-oriented architecture]()
  - [Microservices](./patterns/microservices.md)
  - [Layered]()

---

# Correction

- [Backoff policies]()

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
- [JSON schema](./json-schema.md)
- [Apache Thrift]()

---

# Unclassified

- [Connections](./connections.md)
- [Network architecture and communication protocols]()
    - [Network architectures](./network-architectures.md)
- [Web architecture & software architecture](./web-architecture-and-software-architecture.md)
