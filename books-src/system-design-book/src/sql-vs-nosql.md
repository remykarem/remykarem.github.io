# SQL vs. NoSQL

Factors
* Throughput
* Relationships
* Data types
* Transactions & integrity

~~~admonish tip title="Postgres benchmarking"
Use `pgbench`
~~~

When to pick SQL?

- **When you need to store a lot of relationships**
- When you need to be consistent

When to pick NoSQL?

- When you need to handle a lot of read write operations; O(1)
- When you are not sure with data modelling

~~~admonish note title="schema-on-read, schema-on-write"
In SQL, schema is validated on write. Akin to statically typed languages.

in NoS, schema is validated on read, akin to dynamically typed languages.
~~~

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
