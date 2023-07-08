# Pub/Sub

Publish/Subscribe

1. A **publisher** sends a message ("**event**") to a **channel**/**topic**.
2. The message is distributed (via the message system) to all interested **subscribers**.

This pattern allows messages to be delivered to multiple consumers. Think "broadcasting".

```admonish note
A message is consumed by _mutiple subscribers_.
```

Examples of AWS services:
* SNS