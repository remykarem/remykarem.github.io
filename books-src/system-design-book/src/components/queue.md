# Message queue

Purpose
* [Short-term data **storage** (FIFO)](../core-functionalities/data-storage.md)
* [Processing messages in order](../core-functionalities/concurrency-control.md)

Applications
* [Rate limiting](../strategies/rate-limiting.md)
* Monitoring
* [Batching](../strategies/batching.md)

Common characteristics:
* Managed queues are usually [distributed](../strategies/distributed.md)

Types of queues

* **Standard queue** —
  * not a strict FIFO
  * Every message is processed at least once
* **FIFO queue**
  * Strict FIFO
  * Every message is processed only once
* **DLQ** — Dead Letter Queue. A queue that stores messages that couldn't be processed successfully.
* **Work queue** or **task queue** — designed to allow _multiple workers_ to consume tasks concurrently
* **Delay queue** — postpone the delivery of new messages to the queue for a period of time

  Applications: rate limiting, batching (accumulate messages before processing) etc.

~~~admonish example
AWS SQS
~~~
