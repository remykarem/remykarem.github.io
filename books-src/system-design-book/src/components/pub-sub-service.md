# Pub/sub messaging service

Fan-out

Purpose:
* [Asynchronous message **routing**](../core-functionalities/routing.md)

~~~admonish tip
Such a service (eg. SNS) is like an event stream / Kakfa but with zero complex transformation capabilities, zero retention of messages.
~~~

Features:
* [Extremely scalable](../goals/scalability.md) — Unlimited messages per second[^unlimited]
* "Topics"
* Message filtering
* Message ordering
* DLQ integration

~~~admonish example
Amazon SNS
~~~

Examples of subscribers are a Lambda and a queue. 

Note that if a subscriber is not available at the time of message publication, the message is not stored for later retrieval.

---

[^unlimited]: [Amazon SNS features](https://aws.amazon.com/sns/features/)