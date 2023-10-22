# Lambda

Serverless compute service

Characteristics:
* [distributed](../distributed.md) by design
* **stateless** — every function is processed in isolation
* **serverless** — this means faster start time

Designed for
* **event-driven** architecture because of the stateless nature of event processing
* short-lived operations — aligned with event-driven tasks that are _designed to respond quickly to changes_

Soecific to AWS:
* [**automatic scaling**](../auto-scaling.md)

~~~admonish example
AWS Lambda
~~~

~~~admonish example
Spring Cloud Function is a framework built on top of Spring Boot that abstracts over the underlying serverless compute service.

It also offers local testing.
~~~
