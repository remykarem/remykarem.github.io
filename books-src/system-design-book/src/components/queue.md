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

When you introduce a queue with a web server, we are [adding a layer of abstraction](../strategies/adding-layer-of-abstraction.md) between
* (i) the entities that produce the message (the clients that send request), and 
* (ii) the entities that consume the message (the web server responding to the request). 

In this way, the producer can produce messages at its pace, and the consumer can process messages at its pace.

The introduction of a queue provides a **buffer**, allowing for differences in consumption and production rates.

This _facilitates_ [scalability](../goals/scalability.md)

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
