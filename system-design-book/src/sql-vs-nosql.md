# SQL vs. NoSQL

When to pick SQL?

- **When you need to store a lot of relationships**
- When you need to be consistent

When to pick NoSQL?

- When you need to handle a lot of read write operations; O(1)
- When you are not sure with data modelling

---

My summary:

When choosing a database, one important consideration is the underlying data structure — particularly if there's a need to store a lot of **relational data**. Relational data requires maintaining relationships and integrity rules among tables, often necessitating **ACID** guarantees.

ACID guarantees are _more easily achievable_ with a **single-server system** due to lack of **network latency**, and no requirement to ensure **data consistency across multiple nodes**.

**SQL databases** are _designed_ with relational data in mind, offering robust support for complex joins and otherr relational operations, thereby ensuring data integrity.

However, not all applications demand strict relational data structures or full ACID compliance. 

Furthermore, there are applications that need to handle a large volume of data or high traffic.

For these applications, a distributed system ("**NoSQL database**") might be more suitable. Why?

Distributed systems can:
* **handle concurrent requests**. Why? To handle a lot of requests.
* **maintain high availability** — some services ("business requirement") require _continuous operation_; downtime can lead to significant losses
* **handle large amounts of data** beyond the capacity of a single server

According to the **CAP theorem**, in the event of a network partition in a distributed system — a situation that distributed systems must be prepared for — the system must trade-off between **consistency** or **availability**. However, the extent of this trade-off varies among different systems. Many modern databases offer a tuneable balance.

Note that some distributed databases offer relational data support and therefore ACID (to different extents): MongoDB, Couchbase, and Amazon DynamoDB.

---

### Scalability

SQL databases are typically sccaled vertically by increasing the horsepower of the machine (CPU, RAM, SSD).

NoSQL are _designed_ to scale horizontally.

### Atomicity (in ACID)

SQL databases are _designed_ to provide atomicity across multiple tables.

Some NoSQL databases can provide atomicity too.

### Consistency (in ACID)

```admonish note
Consistency here means data integrity.
```

SQL databases are _designed_ to provide consistency.

NoSQL databases are not designed to provide consistency by default.

### Isolation (in ACID)

This refers to the behaviour of transactions when they are executed _concurrently_.

Isolation ensures that concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially.

SQL databases are _designed_ to provide isolation.

NoSQL databases might not prioritise this.

### Durability (in ACID)

### Consistency (in CAP theorem)

```admonish note
Consistency here refers to every read from the database receiving the _most recent write_ or an error.
```

In SQL databases, databases can achieve immediate consistency.

In NoSQL databases, achieving this is challenging due to delays and failures in communication between database nodes.

### Availability (in CAP theorem)

SQL databases _can_ be highly available, but this involves implementing some methods like replication, failover, clustering and load balancing.

NoSQL databases are _designed_ to provide high availability.

### Partial ??? (in CAP theorem)
