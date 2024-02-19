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
- Aggregate — a collection of Entity and Value Objects
- Domain Events — events that the software react and respond


Resources:
* [Best Practice - An Introduction To Domain-Driven Design](https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/best-practice-an-introduction-to-domain-driven-design)
* [Redis — DDD](https://redis.com/glossary/domain-driven-design-ddd/)
