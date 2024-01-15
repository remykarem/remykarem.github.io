# Message queue

Actors:
* **Producer** — creates a message and pushes it into the queue
* **Consumer** — reads a message and deletes it from the queue

Purpose:
* [Short-term FIFO data **storage**](../core-functionalities/data-storage.md) – Messages can usually be stored up to a number of days. Additionally, the size of the message that can be stored usually has a limit. 
* [Processing messages in order](../core-functionalities/concurrency-control.md)

Features:
- [High availability](../goals/availability.md) — In Amazon SQS, messages are copied on multiple servers for redundancy and high availability. This [distributed](../strategies/distributed.md) nature results in:
  * absence of message in one of the servers
  * slightly delayed messages (mentioned in the docs)
  * messages delivered more than once
  * messages delivered out-of-order
  * Message deduplication (FIFO queue) — In FIFO queues, there is a 5-min deduplication window. (This feature helps to prevent accidental duplication while allowing for intentional re-sending of messages when necessary.
  
- [Locking mechanism](../distributed-system/concurrency-control.md) — Messages are locked during processing, so that multiple producers can send and multiple consumers can receive messages _at the same time_.
  
  How does it work?
  1. When a consumer receives a message, the message becomes _temporarily hidden_ from other consumers.
  2. The consumer has to process it within a period of time k, then it becomes visible to consumers again. This is the **visibility timeout** period.

  The visibility timeout should therefore be:
  * at least larger than the processing timeout to prevent more than once processing
  * extended to cover the time required to process a batch of messages (in long polling, especially)
 
  If you want to release the lock while processing, you can set the visibility timeout to 0.
    
- [Retry mechanism](../strategies/retry-mechanism.md), usually meant for [transient failures](../failures.md)
- Short polling or long polling
- Integration with DLQ
- [Batching](../strategies/batching.md)
- [Rate limiting](../strategies/rate-limiting.md)
- Housekeeping — **message retention period** is the maximum period how long a message can stay in the queue
- Initial invisibility period / delivery delay — possibly used in situations where a system needs to 'stabilise' first

Benefits:

When you introduce a queue with a web server, we are [adding a layer of abstraction](../strategies/adding-layer-of-abstraction.md) between (i) the producers of the message, and (ii) the consumers of the message. 

This layer of abstraction allows the producer to produce messages _at its own pace_, and the consumer can similarly process messages _at its own pace_.

The introduction of a queue therefore provides a **buffer**, allowing for differences in consumption rates and production rates.

This _facilitates_ [scalability](../goals/scalability.md).

Types of queues

* **Standard queue** is designed to prioritise higher throughput. This means:
  * Not a strict FIFO ("Best-Effort Ordering")
  * Every message might be processed more than once
  * Unlimited throughput
* **FIFO queue** is designed to prioritise:
  * Strict FIFO
  * Every message is processed only once
  * High throughput (lower than that of Standard queue)
* **DLQ** — Dead Letter Queue. A queue that stores messages that couldn't be processed successfully. Used for [manual intervention](../strategies/manual-intervention.md).
* **Work queue** or **task queue** — designed to allow _multiple workers_ to consume tasks concurrently
* **Delay queue** — postpone the delivery of new messages to the queue for a period of time (why would you wanna do this...?)

~~~admonish example title="Applications"
* Batch messages for future processing
* Decouple requests from intensive background work

Adapted from [Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html)
~~~

~~~admonish example
AWS SQS
~~~

~~~admonish question title="When to use a FIFO queue?"
You would use FIFO when the order of events is critical, or when duplicates cannot be tolerated:
* Integrating with a third-party systems where events need to be processed in order
* E-commerce order management system where order is critical

Based on [Getting started with Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html)
~~~

keywords
inflight — Messages are considered to be in flight if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window
