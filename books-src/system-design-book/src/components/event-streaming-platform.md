# Event streaming platform

~~~admonish tip title="Terminology"
Apache Kafka, AWS Kinesis Data Streams.
~~~

Purposes:
* [Message **storage** (FIFO)](../core-functionalities/data-storage.md)
* [**Routing** of messages](../core-functionalities/routing.md)
* Message transformation
* Multiple subscribers ([pub/sub](../messaging-patterns/pub-sub.md))

Features:
* Messages / events are **ordered** by _shard_ or _partition_
* Replay messages
* Longer retention period (than message queue)

Best for:
* Logs
* Real-time streaming pipelines
* Analytics
* Complex streaming with joins & state — An event might need to be processed with other events
* Stream–stream join (orders ↔ payments) with a sliding time window.
* Stream–table joins (enrich with customer_risk, check inventory).
* Stateful aggregations (rolling per-customer spend in last 24h).
* De-dup and out-of-order handling (watermarks/grace period).
* Repartitioning by keys to co-locate state.
* Exactly-once processing to avoid double-emitting shipments.

