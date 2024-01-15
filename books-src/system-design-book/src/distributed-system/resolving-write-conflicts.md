# Resolving write conflicts

Write conflicts occur when two or more clients try to update the same data at the same time, resulting in inconsistent updates.

Strategies:
* **Last Write Wins** (LWW) — use timestamp to identify which write is the final write

~~~admonish example title="Databases using LWW"
Cassandra, DynamoDB
~~~
