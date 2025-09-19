# Queue-based

| Feature         | **SNS**                                                                | **SQS**                                                             | **Kinesis**                                                              | **Kafka (MSK)**                                                                    |
|-----------------|------------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Ease of use** | Easiest (fire-and-forget, no scaling worries)                          | Easy (DLQ, retries, simple scale)                                   | Moderate (shards, scaling, retention)                                    | Harder (ops heavy, but most powerful)                                              |
| **Use Cases**   | Broadcast notifications, fan-out to Lambdas/SQS, SMS/email/mobile push | Async job queues, decoupling microservices, task/workflow buffering | Real-time analytics, log ingestion, IoT events, multi-consumer pipelines | Enterprise event backbone, stateful streaming joins, fraud detection, ML pipelines |

## My understanding...

| Feature             | SNS       | SQS     | SQS FIFO              | RabbitMQ | Kafka             | Kinesis       |
|---------------------|-----------|---------|-----------------------|----------|-------------------|---------------|
| Type I              | ?         | Queue   | Queue                 | Queue    | Log-based         | Log-based     |
| Store durably^      | Ephemeral | 14 days | 14 days               | ?        | Configurable      | Configurable  |
| Replay^             |           |         |                       |          | ✅                |               |
| Delivery            | Push      | Pull    | Pull                  | ?        | Pull              | High?         |
| P2P / fanout        | Fanout     | Point-to-point | Point-to-point | ?        | Fanout           | Fanout        |
| "Lanes"             | -         |         | ✅                     | ✅        | ✅                 | ✅             |
| Topics              | -         |         |                       | ✅        | ✅                 | ✅             |
| Ordering            |           |         | ✅ (per message group) | ?        | ✅ (per partition) | ✅ (per shard) |
| Processing          |           |         |                       | ?        | ✅                 | Basic         |
| Routing             |           |         |                       | ✅        |                   |               |
| Throughput          | ?         | High    | Low                   | ?        | High?             | High?         |
| Fairness            | -         | ✅       | -                     | ✅        | ?                 | ?             |

Having multiple channels allows _parallel processing_.

^by virtue of Type I

Others: Fluvio, NATS, Pulsar
