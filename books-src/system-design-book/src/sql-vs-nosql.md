# SQL vs. NoSQL

SQL databases are designed for _referential data_ and _referential integrity_ ("consistency"), 
most easily achievable with a _single server_.

NoSQL databases are designed with _scalability_ in mind. This means data lives in _multiple servers_.

The question of SQL vs. NoSQL really boils down to whether you require:
* [high performance](./goals/performance.md), and
* [immediate consistency](./goals/consistency.md).

---

## Patterns, designs

|                      | SQL                                            | NoSQL                                        |
|----------------------|------------------------------------------------|----------------------------------------------|
| Design               | 1 server                                       | Multiple servers                             |
| Data structure       | Relation data, JOINs, referential integrity    | -                                            |
| \-> Storage          | Lower storage (because of reduced duplication) | Possible duplication                         |
| \-> Table design     | Multiple tables                                | Single-table design                          |
| Consistency          | Immediate consistency (ACID)                   | Mainly eventual consistency                  |
| Schema               | Schema-on-write (validated on write)           | Schema-on-read (schema is validated on read) |
| Scalability          | Typically vertical scaling^                    | Horizontal scaling                           |
| Goal                 | Minimise page reads                            | Minimise cross-partition I/O                 |
| Programmer's concern | - (database optimiser does this)               | Data locality (via proper indexing)          |
| Lookups / index      | Equality-based and range-based (B-tree)        | Hash-based (mainly), range-based             |

No matter whether it’s SQL or NoSQL, the slowest and most expensive part is almost always I/O 
(disk reads/writes, network hops between nodes).

---

My summary:

When choosing a database, one important consideration is the underlying data structure — particularly if there's a 
need to store a lot of relational data. Relational data requires maintaining relationships and integrity rules 
among tables, often necessitating **ACID** guarantees.

ACID guarantees are _more easily achievable_ with a single-server system due to the absence of any network latency, 
and no requirement to ensure data consistency across multiple nodes.

However, not all applications demand strict relational data structures or full ACID compliance. 

Furthermore, there are applications that need to handle a large volume of data or high traffic.

For these applications, a distributed system (NoSQL database) might be more suitable. Why?

Distributed systems can:
* **handle concurrent requests**. Why? To handle a lot of requests.
* **maintain high availability** — some services ("business requirement") require _continuous operation_; downtime can 
* lead to significant losses
* **handle large amounts of data** beyond the capacity of a single server

According to the **CAP theorem**, in the event of a network partition in a distributed system — a situation that 
distributed systems must be prepared for — the system must trade-off between **consistency** or **availability**. 
However, the extent of this trade-off varies among different systems. Many modern databases offer a tuneable balance.

Note that some distributed databases offer relational data support and therefore ACID (to different extents): MongoDB, 
Couchbase, and Amazon DynamoDB.

---

Reads:
* [JUST USE POSTGRES FOR EVERYTHING](https://www.amazingcto.com/postgres-for-everything/)
