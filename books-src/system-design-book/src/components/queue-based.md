# Queue-based

| Feature                   | SNS + SQS             | Kafka             | RabbitMQ                        | SQS                   | SQS FIFO              | SNS       | Kinesis         |
|---------------------------|-----------------------|-------------------|---------------------------------|-----------------------|-----------------------|-----------|-----------------|
| Type I                    | Queue                 | Partitioned log   | Queue                           | Queue                 | Queue                 | ?         | Partitioned log |
| Type III: Messaging model | Queue                 | Queue + Pub/Sub   | Queue                           | Queue                 | Queue                 | Pub/Sub   | ?               |
| Message retention         | Acknowledgement-based | Policy-based      | Acknowledgement-based           | Acknowledgement-based | Acknowledgement-based | Ephemeral | ?               |
| Store durably^            | 14 days               | Configurable      | ?                               | 14 days               | 14 days               | Ephemeral | Configurable    |
| Message delivery          | Pull                  | Pull              | ?                               | Pull                  | Pull                  | Push      | High?           |
| Delivery semantics        | Point-to-point        | Fanout            | Point-to-point                  | Point-to-point        | Point-to-point        | Fanout    | Fanout          |
| "Topics"                  | ✅                     | ✅                 | ✅                               |                       | ✅                     | -         | ✅               |
| Ordering                  | ✅ (FIFO)              | ✅ (per partition) | ?                               |                       | ✅ (per message group) |           | ✅ (per shard)   |
| Processing                | ✅ (EventBridge)       | ✅                 | ?                               |                       |                       |           | Basic           |
| Routing                   | ✅ (EventBridge)       | ❌                 | ✅                               |                       |                       |           |                 |
| Throughput                | Mid                   | High              | ?                               | High                  | Low                   | ?         | High?           |
| Fairness                  | ✅ (non fifo)          | ?                 | ✅                               | ✅                     | -                     | -         | ?               |
| Managed^^                 |                       |                   |                                 | ✅                     | ✅                     | ✅         | ✅               |
| Deduplication             |                       |                   | ? think yes                     | ✅                     | ✅                     | ?         | ?               |
| Protocol                  |                       |                   | Custom binary protocol over TCP |                       |                       |           |                 |
| Schema                    | Arbitrary             | ✅ Registry        | ?                               | Arbitrary             | Arbitrary             | Arbitrary | ?               |


Notes:
* by virtue of Type I
  * Replayability for log-based systems
* by virtue of managed service
  * No partition management required
* by virtue of multiple "topics":
  * allows _parallel processing_


Others: Fluvio, NATS, Pulsar
