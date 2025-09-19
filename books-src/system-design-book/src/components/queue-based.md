# Queue-based

| Feature         | **SNS**                                                                | **SQS**                                                             | **Kinesis**                                                              | **Kafka (MSK)**                                                                    |
|-----------------|------------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Ease of use** | Easiest (fire-and-forget, no scaling worries)                          | Easy (DLQ, retries, simple scale)                                   | Moderate (shards, scaling, retention)                                    | Harder (ops heavy, but most powerful)                                              |
| **Use Cases**   | Broadcast notifications, fan-out to Lambdas/SQS, SMS/email/mobile push | Async job queues, decoupling microservices, task/workflow buffering | Real-time analytics, log ingestion, IoT events, multi-consumer pipelines | Enterprise event backbone, stateful streaming joins, fraud detection, ML pipelines |

## My understanding...

| Feature             | SNS       | SQS     | SQS FIFO              | RabbitMQ | Kafka             | Kinesis       |
|---------------------|-----------|---------|-----------------------|----------|-------------------|---------------|
| Type                | ?         | Queue   | Queue                 | Queue    | Log-based         | Log-based     |
| Delivery            | Push      | Pull    | Pull                  | ?        | Pull              | High?         |
| 1 ch, p2p           |           | ✅       | ✅                     | ?        | ✅                 | ?             |
| 1 ch, fanout        | ✅         |         |                       | ?        | ✅                 | ?             |
| "Lanes"             | -         |         | ✅                     | ✅        | ✅                 | ✅             |
| Topics              | -         |         |                       | ✅        | ✅                 | ✅             |
| Multiple ch, p2p    |           |         | ✅                     | ?        | ✅                 | ?             |
| Multiple ch, fanout | ✅         |         |                       | ?        | ✅                 | ?             |
| Ordering            |           |         | ✅(per messageGroupId) | ?        | ✅ (per partition) | ✅ (per shard) |
| Processing          |           |         |                       | ?        | ✅                 | Basic         |
| Replay              |           |         |                       |          | ✅                 |               |
| Routing             |           |         |                       | ✅        |                   |               |
| Store durably       | Ephemeral | 14 days | 14 days               | ?        | Configurable      | Configurable  |
| Throughput          | ?         | High    | Low                   | ?        | High?             | High?         |
| Fairness            | -         | ✅       | -                     | ✅        | ?                 | ?             |

Having multiple channels allows _parallel processing_.

Others: Fluvio, NATS, Pulsar
