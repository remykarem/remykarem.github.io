# Query execution plan

A query execution plan is represented as a _tree_ ("**plan tree**").

The tree consists of nodes, where each node represents an operation.

~~~admonish tip title="See the execution plan"
In Postgres, you can view the plan for a given query:

```sql
EXPLAIN SELECT * FROM some_table;
```

To run the query and retrieve statistics:

```sql
EXPLAIN ANALYZE SELECT * FROM some_table;
```
~~~