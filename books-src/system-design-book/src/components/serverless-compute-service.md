# Lambda

Serverless compute service

Characteristics:
* [distributed](../strategies/distributed.md) by design
* **stateless** — every function is processed in isolation
* **serverless** — this means faster start time

Designed for
* **event-driven** architecture — execute code in response to events
* **short-lived** operations — _designed to respond quickly to changes_, aligned with event-driven tasks

Soecific to AWS:
* [**automatic scaling**](../strategies/auto-scaling.md)

~~~admonish example
AWS Lambda
~~~

~~~admonish example
Spring Cloud Function is a framework built on top of Spring Boot that abstracts over the underlying serverless compute service.

It also offers local testing.
~~~
