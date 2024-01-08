# Message queue

Actors:
* Producer — creates a message and pushes it into the queue
* Consumer — reads a message and deletes it from the queue

Purpose
* [Short-term limited data **storage** (FIFO)](../core-functionalities/data-storage.md) – Messages can usually be stored up to a number of days. Additionally, the size of the message that can be stored usually has a limit. 
* [Processing messages in order](../core-functionalities/concurrency-control.md)

Messages in managed queues are stored redundantly. This [distributed](../strategies/distributed.md) nature results in:
* messages delivered more than once
* messages delivered out-of-order

Additionally, in AWS, SQS messages can be encrypted at rest using SQS-managed encryption or KMS.

Messages are locked during processing, sothat multiple producers can send and multiple consumers can receive messages _at the same time_.

When you introduce a queue with a web server, we are [adding a layer of abstraction](../strategies/adding-layer-of-abstraction.md) between (i) the producers of the message, and (ii) the consumers of the message. 

This layer of abstraction allows the producer to produce messages _at its own pace_, and the consumer can similarly process messages _at its own pace_.

The introduction of a queue therefore provides a **buffer**, allowing for differences in consumption rates and production rates.

This _facilitates_ [scalability](../goals/scalability.md).

Types of queues

* **Standard queue** is designed to prioritise higher throughput. This means:
  * Not a strict FIFO
  * Every message might be processed more than once
* **FIFO queue** is designed to prioritise:
  * Strict FIFO
  * Every message is processed only once
* **DLQ** — Dead Letter Queue. A queue that stores messages that couldn't be processed successfully.
* **Work queue** or **task queue** — designed to allow _multiple workers_ to consume tasks concurrently
* **Delay queue** — postpone the delivery of new messages to the queue for a period of time

Applications: rate limiting, batching (accumulate messages before processing) etc.

~~~admonish example
AWS SQS
~~~

Queues usually offer some features for the consumers:
- [Retry mechanism](../strategies/retry-mechanism.md), usually meant for [transient failures](../failures.md)
- Integration with DLQ to help with [manual intervention](../strategies/manual-intervention.md)
- [Batching](../strategies/batching.md)
- [Rate limiting](../strategies/rate-limiting.md)

How does it work?
1. When a consumer receives a message, the message becomes _temporarily hidden_ from other consumers.
2. The consumer has to process it within a period of time k, then it becomes visible to consumers again. This is the **visibility timeout** period.
