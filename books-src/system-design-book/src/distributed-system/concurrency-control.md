# Concurrency control

This offers the goals of [isolation](../goals/isolation.md).

In asynchronous processing, poor concurrency control might lead to a race condition.

Some strategies:
* Idempotency
* Concurrency control
  * Optimistic vs pessimisstic locking
* Request serialisation
* Transactional boundaries
* Timestamps, versioning
* Locking mechanism
* Deduplication
* Verification step
