# Concurrency control

This offers the goals of [isolation](../goals/isolation.md).

In asynchronous processing, poor concurrency control might lead to a race condition.

Some strategies:
* Idempotency, deduplication
* Concurrency control
  * Optimistic vs pessimisstic locking
* Transactional boundaries
  * Single-call atomicity
  * 2PC, sagas
* Request serialisation
* Scoped mutations — focus on editing on thing at a time
