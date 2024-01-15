# Resolving write conflicts

Write conflicts occur when two or more clients try to update the same data at the same time, resulting in inconsistent updates.

Strategies:
* **Last Write Wins** (LWW)

  Attach a timestamp to each write. Pick the biggest timestamp as the most recent, and discard any writes with an earlier timestamp.

* **CRDT** (conflict-free replicated data type)

~~~admonish example title="Databases using LWW"
Cassandra, DynamoDB
~~~
