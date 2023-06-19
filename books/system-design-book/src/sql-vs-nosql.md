# SQL vs. NoSQL

When to pick SQL?

- **When you need to store a lot of relationships**
- When you need to be consistent

When to pick NoSQL?

- When you need to handle a lot of read write operations; O(1)
- When you are not sure with data modelling

---

When choosing a database, you would consider the underlying data structure — in particular, whether you need to store a lot of **relational data**. With relational data, there is a _need_ to maintain relationships and the integrity rules among tables. Such guarantees are given by **ACID**.

ACID guarantees are easily achieved with **single-server systems**.

If we don't need relational data (and therefore ACID and therefore the single-server system), then we can opt for a **distributed system**. Why?
* Can **handle concurrent requests**. Why? To handle a lot of requests.
* Can **maintain high availability** — some services ("business requirement") require _continuous operation_; downtime can lead to significant losses
* Can **handle large amounts of data** — single machines often can't store all the data

However, one should also note that by the CAP theorem, and the constraint that distributed systems must be partitian-tolerant (the P in CAP), distributed systems must **forgo either consistency or availability**.

Note that some distributed systems can also guarantee ACID (to different extents): MongoDB, Couchbase, and Amazon DynamoDB.

---

### Data structure and data integrity

SQL databases are relational.

NoSQL databases are non-relational and can handle a variety of data models.

Because of how data is organised, stored and retrieved, it impacts the design and behaviour of:
* Transaction handling
* Distributed-ness

### Transaction handling

Because SQL databases need to **maintain the relationships and integrity rules among tables**, they are typically ACID-compliant (properties that affect transactions).

NoSQL databases do not need to maintain such relationships and strict integrity rules. MongoDB provides atomicity only at document level.

Properties related to transaction:
* atomicity (ACID)
* consistency (ACID)
* isolation (ACID)
* durability (ACID)

### Distributed-ness

SQL databases usually runs on a single server.

NoSQL databases are _designed_ to run across many servers.

Distributed data store affects the following:
* scalability
* consistency (CAP)
* availability (CAP)
* partitioning (CAP)

---

### Scalability

SQL databases are typically sccaled vertically by increasing the horsepower of the machine (CPU, RAM, SSD).

NoSQL are _designed_ to scale horizontally.

### Atomicity (in ACID)

SQL databases are _designed_ to provide atomicity across multiple tables.

NoSQL databases can provide atomicity at the document level (eg. MongoDB), but not at multi-document or table level.

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
