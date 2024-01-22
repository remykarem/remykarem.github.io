# Lambda

Serverless compute service

Characteristics:
* [distributed](../strategies/distributed.md) by design
* **stateless** — every function is processed in isolation
* **serverless** — this means faster start time

Features:
* [Auto-scalable](../strategies/auto-scaling.md)
* [Rate limiting](../strategies/rate-limiting.md)
* [Retry mechanism](../strategies/retry-mechanism.md)
* DLQ integration
* Event source mapping (from SQS etc.); batches
* Caching — can store static assets in `/tmp` for reuse by subsequent invocation by the same instance

Designed for
* **event-driven** architecture — execute code in response to events
* **short-lived** operations — _designed to respond quickly to changes_, aligned with event-driven tasks

~~~admonish example
AWS Lambda
~~~

~~~admonish example
Spring Cloud Function is a framework built on top of Spring Boot that abstracts over the underlying serverless compute service.

It also offers local testing.
~~~
