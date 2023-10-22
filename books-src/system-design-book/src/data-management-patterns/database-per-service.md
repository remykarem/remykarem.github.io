# Database-per-service

Each service has its own dedicated database.

Pros:
* [**Decoupled**](../strategies/loose-coupling-of-services.md) from other services; easier to scale independently

Cons:
* Need to make **multiple queries** across different services
