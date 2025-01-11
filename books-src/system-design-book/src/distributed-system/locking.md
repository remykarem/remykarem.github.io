# Locking

The purpose of locking is to ensure **data consistency** and **data integrity** in a concurrent environment where multiple operations attempt to access the same data simultaneously.

Locking is a means of concurrency control.

The common locking mechanisms are optimistic locking and pessismistc locking.

**Stale saves** or **lost updates** can happen~

|                          | Optimistic locking                          | Pessimistic locking                                            |
|--------------------------|---------------------------------------------|----------------------------------------------------------------|
| Use case                 | Low-conflict scenarios (hence "optimistic") | High-conflict scenarios ("pessimistic")                        |
| Mechanism                | Versioning                                  | Database record locking                                        |
| Stale save / lost update | Zero, because you need to validate before save | Still can happen                                            |
| Concurrency              | Allows for high concurrency                 | Reduced concurrency because we lock records upfront            |
| Deadlocks                | No deadlocks                                | Might lead to deadlocks                                        |
| Resource (database)      | Low or none                                 | High, because of locks                                         |
| Retry overhead           | Needed after conflict                       | None                                                           |

Poor concurrency control might result in data corruption.

~~~admonish tip title="In simple terms..."
Optimistic locking — If I'm making changes to a record, I just need to make sure that it's **based on the latest record**.

Pessimistic locking — If I'm accessing a record, I wanna make sure that **no one else can accesses it until I'm done**.
~~~
