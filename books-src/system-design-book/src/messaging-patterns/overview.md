# Messaging patterns

aka communication pattern

1. The **producer** sends a **message** to a specific location (eg. buffer or queue).
2. The **consumer** retrieves the message from this location.

A communication model describes the way that different components in a system communicate with each other to exchange information and data. Examples of communication models include request-response, publish-subscribe, and event-driven.

---

### topic / shard / message group / subscription

- higher level of abstraction
- topic in Kafka, shard in Kinesis Data Stream, message group in SQS FIFO

### partition / partition key / group

- lower level abstraction; order guarantees
- partition in Kafka, partition key in Kinesis Data Stream, (abstracted in SQS FIFO)

### point-to-point

consumers compete to get a message

### pub/sub

each consumer gets a copy
