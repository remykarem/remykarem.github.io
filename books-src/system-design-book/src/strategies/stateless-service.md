# Stateless service

~~~admonish note title="Definition 1"
A stateful service maintains session information or ("**state**") across multiple requests from the same client or user interaction.

Stateful doesn't mean having a database.
~~~

~~~admonish note title="Definition 2"
Having or not having a database.

https://www.seangoedecke.com/good-system-design/
~~~

Facilitates [horizontal scaling](./horizontal-scaling.md), helps with [recoverability](../goals/recoverability.md)[^stateless]

---

[^stateless]: [Good System Design](https://www.seangoedecke.com/good-system-design/)
