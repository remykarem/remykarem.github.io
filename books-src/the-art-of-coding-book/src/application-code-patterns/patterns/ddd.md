# DDD

Domain-Driven Design

by Eric Evans "Domain-Driven Design: Tackling Complexity in the Heart of Software"

| Concerns                                            | DDD                |
| --------------------------------------------------- | ------------------ |
| [UI rendering](../concerns/ui-rendering.md)         | -                  |
| [Request handling](../concerns/request-handling.md) | ?                  |
| [Business logic](../concerns/business-logic.md)     | Domain Service     |
| [Persistence](../concerns/persistence.md)           | Entity, Repository |

Apart from the above, DDD also includes

- Entity — objects with unique identity (eg. customer)
- Value Objects (e.g. `Money` instead of `Decimal`, Address)
- Bounded Context — encapsulates its own Ubiquitous Language 
- Aggregate — a collection of Entity and Value Objects. The purpose is to model transactional invariants (relationships etc.). While databases can do that, not feasible in distributed. 
- Domain Events — events that the software react and respond
- Domain service — domain logic
- Application service — user authentication, sending SMS

DDD phases:
1. Strategic — define the large-scale structure of the system, focusing on business capabilities
2. Tactical — create the domain model using design patterns like entity, value objects etc. 

Resources:
* [Best Practice - An Introduction To Domain-Driven Design](https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/best-practice-an-introduction-to-domain-driven-design)
* [Redis — DDD](https://redis.com/glossary/domain-driven-design-ddd/)
