# Event processing

The nature of events:
* might be duplicated
* might not come in the same order that they are generated.

Event processing is especially tricky if they are part of a state machine.

Strategies
* **Event sequencing** — use timestamps, sequence number
* **Buffering and reordering** — hold incoming events in a buffer; then use it to reorder
* **Timeouts and DLQ**
* **Idempotency** — this will mitigate duplicate events
