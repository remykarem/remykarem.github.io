# Pub/Sub

Publish/Subscribe

Setup:
* There are multiple **topics** or **channels**.
* There are multiple **subscribers** for every topic.
* **Publishers** can send a message to any topic.
  1. A publisher sends a message to a topic.
  2. The message is distributed to all subscribers of the respective topic.

~~~admonish note title="Pub/Sub vs Webhook"
* **Decoupling / indirect communication** — Publisher doesn't know about subscribers (there's a message broker). For webhooks, producer needs to know the consumers URL.

* **Many-to-many vs. point-to-point communication** — one message can be received by many subscribers. For webhooks, a message is meant for a consumer.
~~~

~~~admonish tip
 If you need to "route" messages, it might also be a sign of the pub-sub pattern
~~~

Examples of AWS services:
* SNS
