# Message queue

Verbs: "produce" message, "consume" message

Actors:
* **Producer** — creates a message and pushes it into the queue
* **Consumer** — reads a message and deletes it from the queue

Purpose:
* [Short-term FIFO message **storage**](../core-functionalities/data-storage.md) – Messages can usually be stored up to a number of days. Additionally, the size of the message that can be stored usually has a limit. 
* [Processing messages in order](../core-functionalities/concurrency-control.md)
* "Routing" into groups

Features:

- [Locking mechanism](../distributed-system/concurrency-control.md) — Messages are locked during processing, so that multiple producers can send and multiple consumers can receive messages _at the same time_.
  
  How does it work?
  1. When a consumer receives a message, the message becomes _temporarily hidden_ from other consumers.
  2. The consumer has to process it within a period of time k, then it becomes visible to consumers again. This is the **visibility timeout** period.

  The visibility timeout should therefore be:
  * at least larger than the processing timeout to prevent more than once processing
  * extended to cover the time required to process a batch of messages (in long polling, especially)
 
  If you want to release the lock while processing, you can set the visibility timeout to 0.
    

- Short polling or long polling
- Integration with DLQ
- [Batching](../strategies/batching.md)
- [Rate limiting](../strategies/rate-limiting.md)
- Housekeeping — **message retention period** is the maximum period how long a message can stay in the queue
- Initial invisibility period / delivery delay — possibly used in situations where a system needs to 'stabilise' first, or when used in a retry queue where retries should not happen immediately
- TTL
- Deduplication — limited capability

Guarantees:
- [High availability](../goals/availability.md) — In Amazon SQS, messages are copied on multiple servers for redundancy and high availability. This [distributed](../strategies/distributed.md) nature results in:
  * absence of message in one of the servers
  * slightly delayed messages (mentioned in the docs)
  * messages delivered more than once
  * messages delivered out-of-order
  * Message deduplication (FIFO queue) — In FIFO queues, there is a 5-min deduplication window. (This feature helps to prevent accidental duplication while allowing for intentional re-sending of messages when necessary.
  

Cloud features
- Encryption at rest

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
* **Poison message queue** — a qurue that stores poison messages

  ~~~admonish note title="Poison message"
  A poison message or poison-pill message is a message that can be received but cannot be processed due to format issues.

  AWS recommends such messages to be pushed to DLQ.
  ~~~

* **Work queue** or **task queue** — designed to allow _multiple workers_ to consume tasks concurrently
* **Delay queue** — postpone the delivery of new messages to the queue for a period of time (why would you wanna do this...?)

  ~~~admonish example title="Use case"
  If you want to trigger new events at the granularity of seconds but can only do it at minute level.

  [Triggering Amazon EventBridge schedules in intervals less then 1 minute](https://repost.aws/questions/QURl9MC_sxTVWtJsMjDvwnlA/triggering-amazon-eventbridge-schedules-in-intervals-less-then-1-minute)
  ~~~
  
~~~admonish example title="Applications"
* [Retry mechanism](../strategies/retry-mechanism.md), usually meant for [transient failures](../failures.md)
* Batch messages for future processing. [Amazon SQS Developer Guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html)
* Decouple requests from intensive background work. [Amazon SQS Developer Guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html)

* Decouple microservices and process event-driven applications — Separate frontend from backend systems, such as in a banking application. Customers immediately get a response, but the bill payments are processed in the background. [Amazon SQS Product Page](https://aws.amazon.com/sqs/)

* Queues can act as buffers between 2 systems. This decouples the processing speed of the producer and the consumption rate of the downstream services. (or upstream vs. downstream)

* to make temporary outages survivable by stashing traffic-in-transit. [On SQS by Tim Bray](https://www.tbray.org/ongoing/When/201x/2019/05/26/SQS)
~~~

~~~admonish note title="Best practices"
* **Single Worker Responsibility** — to process end-to-end of a message (reading and deleting) — for simplicity (given by ChatGPT but citation needed)
* Avoid partial failures when reading from a batch of messages
~~~

~~~admonish question title="When to use a FIFO queue?"
You would use FIFO when the order of events is critical, or when duplicates cannot be tolerated:
* Integrating with a third-party systems where events need to be processed in order
* E-commerce order management system where order is critical

Based on [Getting started with Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html)
~~~

## Patterns

Reading and deleting patterns can differ by these characteristics:

* No. of workers
  * single worker
  * multiple workers — eg. fire and forget.
* Trigger — event-driven, or polling, or CloudWatch

Some things to consider based on the patterns:
* Concurrent message processing — cron jobs for example, might result in concurrent processing and might not be intended
* Rate of processing
* Network latency
* Error handling (if multiple workers)
* Whether duplicates might arise from the different workers (if no. of workers is more than 1)

keywords
inflight — Messages are considered to be in flight if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window
