# Queue-based

| Feature         | **SNS**                                                                | **SQS**                                                             | **Kinesis**                                                              | **Kafka (MSK)**                                                                    |
|-----------------|------------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Ease of use** | Easiest (fire-and-forget, no scaling worries)                          | Easy (DLQ, retries, simple scale)                                   | Moderate (shards, scaling, retention)                                    | Harder (ops heavy, but most powerful)                                              |
| **Use Cases**   | Broadcast notifications, fan-out to Lambdas/SQS, SMS/email/mobile push | Async job queues, decoupling microservices, task/workflow buffering | Real-time analytics, log ingestion, IoT events, multi-consumer pipelines | Enterprise event backbone, stateful streaming joins, fraud detection, ML pipelines |

## My understanding...

| Feature            | SNS       | SQS     | SQS FIFO              | Kafka            | SNS + SQS       | RabbitMQ | Kinesis       |
|--------------------|-----------|---------|-----------------------|------------------|-----------------|----------|---------------|
| Type I             | ?         | Queue   | Queue                 | Log-based        | Queue           | Queue    | Log-based     |
| Store durably^     | Ephemeral | 14 days | 14 days               | Configurable     | 14 days         | ?        | Configurable  |
| Consumer           | Push      | Pull    | Pull                  | Pull             | Pull            | ?        | High?         |
| Delivery semantics | Fanout     | Point-to-point | Point-to-point | Fanout           | Point-to-point  | ?        | Fanout        |
| "Topics"           | -         |         | ✅                     | ✅                | ✅               | ✅      | ✅             |
| Ordering           |           |         | ✅ (per message group) | ✅ (per partition) | ✅ (FIFO)        | ?        | ✅ (per shard) |
| Processing         |           |         |                       | ✅                | ✅ (EventBridge) | ?        | Basic         |
| Routing            |           |         |                       | ❌                 | ✅ (EventBridge) | ✅        |               |
| Throughput         | ?         | High    | Low                   | High             | Mid             | ?        | High?         |
| Fairness           | -         | ✅       | -                     | ?                | ✅ (non fifo)    | ✅        | ?             |
| Managed^^          | ✅        | ✅      | ✅                   |                  |                 |           | ✅            |
| Deduplication      | ?        | ✅      | ✅                   |                   |                 |  ? think yes         | ?            |


Notes:
* by virtue of Type I
  * Replayability for log-based systems
* by virtue of managed service
  * No partition management required
* by virtue of multiple "topics":
  * allows _parallel processing_


Others: Fluvio, NATS, Pulsar
