# Summary

[Preface](./preface.md)

---

# Failures

- [Types of failures](./types-of-failures.md)

---

# Goals

- [Scalability](./goals/scalability.md)
- [Availability](./goals/availability.md)
- [Performance](./goals/performance.md)
- [Reliability](./goals/reliability.md)
- [Fault tolerance?](./goals/fault-tolerance.md)
  - [Partition tolerance](./goals/partition-tolerance.md)
- [Consistency](./goals/consistency.md)
- [Atomicity]()
- [Maintainability](./goals/maintainability.md)

---

# Core functionalities

- [Routing](./core-functionalities/routing.md)
- [Scheduling](./core-functionalities/scheduling.md)
- [Data storage](./core-functionalities/data-storage.md)
- [Identity hiding](./core-functionalities/identity-hiding.md)
- [Concurrency control](./core-functionalities/concurrency-control.md)
- [Control outgoing requests](./core-functionalities/control-outgoing-requests.md)
- [SSL encryption & decryption](./core-functionalities/ssl-encryption-and-decryption.md)
- [Authentication & authorisation](./core-functionalities/authentication-and-authorisation.md)

---

# Ideal state

- [Redundancy](./strategies/redundancy.md)

---

# Strategies

- [Caching](./strategies/caching.md)
- [Failover](./strategies/failover.md)
- [Batching](./strategies/batching.md)
- [Distributed](./strategies/distributed.md)
  - [Replication](./strategies/replication.md)
  - [Sharding]()
- [Auto-scaling](./strategies/auto-scaling.md)
- [Rate limiting](./strategies/rate-limiting.md)
- [Load balancing](./strategies/load-balancing.md)
- [Coupling, isolation]()
- [Logging & monitoring](./strategies/logging-and-monitoring.md)
- [Vertical scaling](./strategies/vertical-scaling.md)
- [Horizontal scaling](./strategies/horizontal-scaling.md)
- [Retry mechanism](./strategies/retry-mechanism.md)
- [Manual intervention](./strategies/manual-intervention.md)
- [Adding layer of abstraction](./strategies/adding-layer-of-abstraction.md)

# Strategies II

- [Stateless service](./strategies/stateless-service.md)
- [Loose coupling of services](./strategies/loose-coupling-of-services.md)

---

# Components

- [CDN](./components/cdn.md)
- [Cache]()
- [Firewall]()
- [Queue](./components/queue.md)
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
  - [Fan-out](./messaging-patterns/fan-out.md)
  - [Fan-in](./messaging-patterns/fan-in.md)
- [Type III: Responsibility & direction](./messaging-patterns/direction.md)
  - [Polling (Pull)](./messaging-patterns/polling.md)
  - [Webhook (Push)](./messaging-patterns/webhook.md)
- [Type IV: Streamingness]()
  - [Streaming](./messaging-patterns/streaming.md)

---

# Distributed system

- [CAP theorem](./distributed-system/cap-theorem.md)
- [Consistency models](./consistency-models.md)
  - [Immediate consistency]()
    - [ACID](./distributed-system/consistency-models/immediate-consistency/acid.md)
    - [Two-Phase Commit]()
    - [Paxos & Raft consensus protocols]()
    - [Locks and distributed lock manager]()
    - [Consistent hashing]()
    - [Gossip protocols]()
  - [Eventual consistency]()
    - [BASE]()
  - [Eventual consistency]()
  - [Weak consistency]()
- [Distributed database]()
  - [SQL vs. NoSQL](./sql-vs-nosql.md)
- [Concurrency control]()

---

# ???

- [Request-driven]()
- [Event-driven architecture](./patterns/event-driven-architecture.md)

---

# System architectural patterns / coupling patterns / composing components

- [Single unit]()
  - [Monolithic]()
- [Collection of functionalities]()
  - [Microservices](./patterns/microservices.md)
  - [Service-oriented architecture]()
  - [Layered]()

---

# Design principles

- [Idempotency](./design-principles/idempotency.md)
- [Efficient use of resources](./design-principles/efficient-use-of-resources.md)
- [Single source of truth](./design-principles/single-source-of-truth.md)

# Container orchestration

- [Amazon ECS]()

---

# Deployment strategies

- [Deployment strategies](./others/deployment-strategies.md)

---

# Interface description languages

- [Protobuf](./others/protobuf.md)
- [ASN.1](./others/asn1.md)
- [JSON schema](./others/json-schema.md)
- [Apache Thrift]()

---

# Unclassified

- [Connections](./others/connections.md)
- [Network architecture and communication protocols]()
    - [Network architectures](./others/network-architectures.md)
- [Web architecture & software architecture](./others/web-architecture-and-software-architecture.md)
