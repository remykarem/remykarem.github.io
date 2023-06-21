# Saga

A saga is a sequence of local transactions, where each local transaction updates the database and consequently publishes a message or event to trigger the next local transaction in this sequence.

The Database-per-Service would require this pattern.