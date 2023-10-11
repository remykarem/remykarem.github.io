# Message queue

Purpose
* [Message **storage** (FIFO)](../data-storage.md)
* [Processing messages in order](../concurrency-control.md)

Types of queues

* **Standard queue** —
  * not a strict FIFO
  * Every message is processed at least once
* **FIFO queue**
  * Strict FIFO
  * Every message is processed only once
* **DLQ** — Dead Letter Queue. A queue that stores messages that couldn't be processed successfully.

~~~admonish example
AWS SQS
~~~
