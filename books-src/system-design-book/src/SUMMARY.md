# Summary

[Preface](./preface.md)
[Metrics](./metrics.md)

---

# Failures

- [Types of failures](./types-of-failures.md)

---

# Design principles

- [Idempotency](./design-principles/idempotency.md)
- [Data locality](./design-principles/data-locality.md)
- [Efficient use of resources](./design-principles/efficient-use-of-resources.md)
- [Single source of truth](./design-principles/single-source-of-truth.md)

# Guarantees

- [Uniqueness](./guarantees/uniqueness.md)
- [Delivery](./guarantees/exactly-once-processing.md)
- [Ordering](./guarantees/ordering.md)
- [Zero duplication]()

# Mitigations

- [Noisy neighbour]()
- [Race condition]()

---

# Goals

- [Scalability](./goals/scalability.md)
- [Availability](./goals/availability.md)
- [Performance](./goals/performance.md)
- [Reliability](./goals/reliability.md)
- [Fault tolerance?](./goals/fault-tolerance.md)
  - [Recoverability](./goals/recovery.md)
  - [Partition tolerance](./goals/partition-tolerance.md)
- [Consistency](./goals/consistency.md)
- [Atomicity](./goals/atomicity.md)
- [Integrity](./goals/integrity.md)
- [Isolation](./goals/isolation.md)
- [Durability](./goals/durability.md)
- [Maintainability](./goals/maintainability.md)
- [Adaptability](./goals/adaptability.md)
- [Traceability]()

---

# Core functionalities

- [Routing](./core-functionalities/routing.md)
  - [Load balancing](./core-functionalities/load-balancing.md)
- [Compute](./core-functionalities/compute.md)
- [Pipelining](./core-functionalities/pipelining.md)
- [Scheduling](./core-functionalities/scheduling.md)
- [Static hosting]()
- [State / statelessness/ Data storage](./core-functionalities/data-storage.md)
- [Identity hiding](./core-functionalities/identity-hiding.md)
- [Control outgoing requests](./core-functionalities/control-outgoing-requests.md)
- [SSL encryption & decryption](./core-functionalities/ssl-encryption-and-decryption.md)
- [High throughput data handling](./core-functionalities/high-throughput-data-handling.md)
- [Authentication & authorisation](./core-functionalities/authentication-and-authorisation.md)

---

# Strategies

- [Caching](./strategies/caching.md)
- [Failover](./strategies/failover.md)
- [Timeout](./strategies/timeout.md)
- [Batching](./strategies/batching.md)
- [Distributed](./strategies/distributed.md)
  - [Replication](./strategies/replication.md)
  - [Sharding]()
- [Backpressure](./strategies/backpressure.md)
  - [Buffering](./strategies/adding-buffer-between-services.md)
  - [Rate limiting](./strategies/rate-limiting.md)
  - [Vertical scaling](./strategies/vertical-scaling.md)
  - [Horizontal scaling](./strategies/horizontal-scaling.md)
- [Auto-scaling](./strategies/auto-scaling.md)
- [Throttling](./strategies/throttling.md)
- [Load balancing](./strategies/load-balancing.md)
- [Coupling, isolation]()
- [Logging & monitoring](./strategies/logging-and-monitoring.md)
- [Retry mechanism](./strategies/retry-mechanism.md)
- [Circuit breaker pattern]()
- [Fallback pattern]()
- [Redundancy](./strategies/redundancy.md)
- [Manual intervention](./strategies/manual-intervention.md)

# Strategies II

- [Stateless service](./strategies/stateless-service.md)
- [Loose coupling of services](./strategies/loose-coupling-of-services.md)
- [Adding layer of abstraction](./strategies/adding-layer-of-abstraction.md)

# Strategies III: Concurrency & parallelism

- [Concurrent processing]()
- [Concurrency control](./distributed-system/concurrency-control.md)
  - [Resolving write conflicts](./distributed-system/resolving-write-conflicts.md)
  - [Locking](./distributed-system/locking.md)
  - [Reserved concurrency]()
- [Noisy-neighbour]()

---

# Components / Resources

- [CDN](./components/cdn.md)
- [Cache]()
- [Firewall]()
- [Queue](./components/queue.md)
- [Lambda](./components/serverless-compute-service.md)
- [Compute]()
- [Database](./components/database.md)
- [API gateway](./components/api-gateway.md)
- [Event stream](./components/message-broker.md)
- [Forward proxy](./components/forward-proxy.md)
- [Step Functions](./components/step-functions.md)
- [Load balancer](./components/reverse-proxy.md)
- [Event bus service](./components/event-bus-service.md)
- [Notification service](./components/pub-sub-service.md)

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

# Messaging patterns

- [Overview](./messaging-patterns/overview.md)
- [Type I: Responsiveness]()
  - [Request/Response](./messaging-patterns/request-response.md)
  - [Fire and Forget](./messaging-patterns/fire-and-forget.md)
- [Type II: M-to-N messages]()
  - [Point-to-point](./messaging-patterns/point-to-point.md)
  - [Fan-out](./messaging-patterns/fan-out.md)
  - [Fan-in](./messaging-patterns/fan-in.md)
- [Type III: M-to-N actors]()
  - [Producer/Consumer](./messaging-patterns/producer-consumer.md)
  - [Pub/Sub](./messaging-patterns/pub-sub.md)

---

# Distributed system

- [Number of nodes](./distributed-system/number-of-nodes.md)
- [CAP theorem](./distributed-system/cap-theorem.md)
- [Consistency models](./consistency-models.md)
  - [Immediate consistency](./distributed-system/consistency-models/immediate-consistency.md)
  - [Strong consistency](./distributed-system/consistency-models/strong-consistency.md)
  - [Eventual consistency]()
    - [BASE]()
  - [Eventual consistency]()
  - [Weak consistency]()
- [Distributed database]()
  - [SQL vs. NoSQL](./sql-vs-nosql.md)
- [Partitioning](./distributed-system/partitioning.md)
- [Sharding](./distributed-system/sharding.md)
- [Sparse indexing](./distributed-system/sparse-indexing.md)
- [Atomic vs. partial updates]()

---

# ???

- [Request-driven]()
- [Event-driven architecture](./patterns/event-driven-architecture.md)
  - [Event processing](./patterns/event-processing.md)
  - [Event source mapping](./patterns/event-source-mapping.md)
  - [Change data capture](./patterns/change-data-capture.md)

---

# System architectural patterns / coupling patterns / composing components

- [Single unit]()
  - [Monolithic]()
- [Collection of functionalities]()
  - [Microservices](./patterns/microservices.md)
  - [Service-oriented architecture]()
  - [Layered]()

---

# Domain: Data sync / getting new data patterns

- [Polling](./data-sync/polling/index.md)
  - [Event-based](./data-sync/polling/event-based.md)
  - [Differential sync](./data-sync/polling/differential-sync.md)
- [Webhook](./data-sync/webhook/index.md)
- [Webhook vs. polling](./data-sync/webhook-vs-polling.md)

---

# Deployment strategies

- [Deployment strategies](./others/deployment-strategies.md)

---

# API design

- [API designs](./api-design/api-architectural-styles/index.md)
  - [REST](./api-design/api-architectural-styles/rest.md)
  - [GraphQL](./api-design/api-architectural-styles/graphql.md)
  - [gRPC](./api-design/api-architectural-styles/grpc.md)
  - [SOAP](./api-design/api-architectural-styles/soap.md)
- [API versioning](./api-design/versioning.md)
- [Interaction patterns](./api-design/interaction-patterns.md)
- [Batch processing](./api-design/batch-processing.md)
- [API performance](./api-design/api-peformance.md)
- [Encoding signatures](./api-design/encoding-signatures.md)
- [Retry-safe]()
- [Handling large payloads](./api-design/handling-large-payloads.md)
- [Retention period](./api-design/retention-period.md)

---

# Encodings

- [Symbol to number to binary](./encodings/index.md)
  - [ASCII](./encodings/ascii.md)
  - [ISO 8859](./encodings/iso-8859.md)
  - [Unicode](./encodings/unicode.md)
    - [UTF-8](./encodings/unicode/utf-8.md)
  - [Windows code pages](./encodings/windows-code-pages.md)
- [Binary to text]()
  - [Base64](./encodings/base64.md)
  - [Crockford's Base32](./encodings/crockfords-base32.md)
- [Symbol to ASCII]()
  - [URL encoding]()
- [Arbitrary data to binary]()
  - [DER](./encodings/der.md)

---

# Topics

- [Soft deletion](./topics/soft-deletion.md)
- [Storing money](./topics/storing-money.md)

---

# Standards

- [Data URI](./other-standards/data-uri.md)
- [API specs](./other-standards/api-specs.md)
- [MIME type](./other-standards/mime-type.md)
- [S/MIME type](./other-standards/s-mime-type.md)
- [Locale](./other-standards/locale.md)
- [Language](./other-standards/language.md)
- [Date, time](./other-standards/dates.md)
- [Country code](./other-standards/country-code.md)
- [Floating point numbers](./other-standards/floating-point-numbers.md)

---

# Unique identifiers

- [UUID](./unique-identifiers/uuid.md)
- [ULID](./unique-identifiers/ulid.md)
- [TSID](./unique-identifiers/tsid.md)
- [GUID]()

---

# Interface description languages / schema types

- [Data class/struct definition]()
- [JSON schema](./others/json-schema.md)
- [GraphQL schema](./others/sdl.md)
- [ASN.1 definition](./others/asn1.md)
- [Protobuf definition](./others/protobuf.md)

---

# Unclassified

- [Connections](./others/connections.md)
- [Network architecture and communication protocols]()
    - [Network architectures](./others/network-architectures.md)
- [Web architecture & software architecture](./others/web-architecture-and-software-architecture.md)
