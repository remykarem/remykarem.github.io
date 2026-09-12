# Saga

A saga is a sequence of local transactions, where each local transaction updates the database and consequently publishes a message or event to trigger the next local transaction in this sequence.

The Database-per-Service would require this pattern.

Two types:
* Orchestrator pattern
* Choreography pattern

Keywords:
* saga participants
* compensation
* stack data structure
* chain-of-responsibility pattern
* idempotency
* error-handling
* saga-agnostic participants: compensation is the orchestrator's concern (in orchestrator pattern)

