# Distributed

Results in [high availability](../goals/availability.md)

Might result in:
* absence of message in one of the servers
* slightly delayed messages (mentioned in the docs)
* messages delivered more than once
* messages delivered out-of-order
* Message deduplication (FIFO queue) — In FIFO queues, there is a 5-min deduplication window. (This feature helps to prevent accidental duplication while allowing for intentional re-sending of messages when necessary.
