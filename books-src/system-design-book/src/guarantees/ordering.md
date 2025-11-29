# Order semantics

* Best-effort
* Global FIFO
* Per-aggregate FIFO
* Business-defined

~~~admonish warning title="FIFO queue with DLQ"
Note that using a FIFO queue with a DLQ **can break ordering** if a poison message is moved to DLQ.[^so]
~~~

---

[^so]: [AWS FIFO SQS: How does SQS maintain ordering in a group when a message is stuck in DLQ?](https://stackoverflow.com/questions/72499693/aws-fifo-sqs-how-does-sqs-maintain-ordering-in-a-group-when-a-message-is-stuck)
