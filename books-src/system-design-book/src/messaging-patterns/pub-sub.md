# Pub/Sub

Publish/Subscribe

1. A **publisher** sends a message ("**event**") to a **channel**/**topic**.
2. The message is distributed (via the message system) to all **subscribers** who have **registered**/**subscribed** to the respective topic

This pattern allows messages to be delivered to multiple consumers. Think "broadcasting".

```admonish note
A message is consumed by _mutiple subscribers_.
```

~~~admonish note title="Pub/Sub vs Webhook"
* **Decoupling / indirect communication** — Publisher doesn't know about subscribers (there's a message broker). For webhooks, producer needs to know the consumers URL.

* **Many-to-many vs. point-to-point communication** — one message can be received by many subscribers. For webhooks, a message is meant for a consumer.
~~~

Examples of AWS services:
* SNS
