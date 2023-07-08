# DDD

Domain-Driven Design

| Concerns                                            | DDD                |
| --------------------------------------------------- | ------------------ |
| [UI rendering](../concerns/ui-rendering.md)         | -                  |
| [Request handling](../concerns/request-handling.md) | ?                  |
| [Business logic](../concerns/business-logic.md)     | Domain Service     |
| [Persistence](../concerns/persistence.md)           | Entity, Repository |

Apart from the above, DDD also includes

- Ubiquitous Language
- Bounded Context
- Value Objects (e.g. `Money` instead of `Decimal`)
- Aggregate

```admonish faq title="First impressions"
DDD seems to apply to application code more than to system architecture. Spring Boot also seems to use these terms.
```

Resources:
* [Best Practice - An Introduction To Domain-Driven Design](https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/best-practice-an-introduction-to-domain-driven-design)