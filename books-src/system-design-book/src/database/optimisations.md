# Optimisations

### 1. Sparse indexing / partial indexing

* SQL

  Postgres supports partial indexing.
  
  It's not common in Postgres probably because sparsity is pushed into schema design (by normalisation).

* NoSQL

  Common pattern in DynamoDB.

### 2. Functional indexing

???

### 3. Atomic vs. partial updates
### 4. Full scans

Avoid full scans in DynamoDB.

### 5. Vertical partitioning
### 6. Write sharding

Helps to distribute workloads evenly across partitions. See [Write sharding](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html).

### 7. Distribute queries
### 8. Random page reads

* SQL

  Reduce the no. of I/Os by using monotonically increasing unique identifiers.

### 9. Avoid "hot" partitions

* NoSQL

    You should design your application for uniform activity across all partition keys in the table and its secondary indexes.
    
    A partition key design that doesn't distribute I/O requests effectively can create "hot" partitions that result in _throttling_ and use your provisioned I/O capacity inefficiently.
    
    See [Designing partition keys to distribute your workload in DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-uniform-load.html).

---

Reads:
* [Handling Growth with Postgres: 5 Tips From Instagram](https://instagram-engineering.com/handling-growth-with-postgres-5-tips-from-instagram-d5d7e7ffdfcb)
