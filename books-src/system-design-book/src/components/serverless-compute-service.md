# Lambda

Serverless compute service

Purpose:
* Lightweight [**compute**](../core-functionalities/compute.md)

Characteristics:
* [distributed](../strategies/distributed.md) by design
* **stateless** — every function is processed in isolation
* **serverless** — this means faster start time

Features:
* [Auto-scalable](../strategies/auto-scaling.md)
* Concurrency limiting — you can limit the no. of concurrent invocations (i.e. control the rate of processing)
* [Rate limiting](../strategies/rate-limiting.md)
* [Retry mechanism](../strategies/retry-mechanism.md)
* Integrations
  * With other services via Event source mapping (from SQS etc.); batches
  * DLQ integration
* [Caching](../strategies/caching.md) — can store static assets in `/tmp` for reuse by subsequent invocation by the same instance

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

~~~admonish note
AWS Lambda invocations are generally cheap.
~~~

~~~admonish warning
When considering a fire-and-forget pattern, concurrency limiting has no effect because all invocations are short-lived.
~~~
