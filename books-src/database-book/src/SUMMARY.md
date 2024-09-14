# Summary

[Preface](./preface.md)
- [The big picture](./storage/storage_management.md)

---

# Features

- [Crudding](./query/sql/crudding.md)
- [Transaction](./query/sql/transaction.md)
- [Rollback]()
- [Lock](./query/sql/lock.md)
- [Cursor](./query/sql/cursor.md)
- [Trigger](./query/sql/trigger.md)
- [Analyse](./query/sql/analyse.md)
- [JSON & JSONB](./query/sql/json-jsonb.md)
- [Administrative](./query/sql/administrative.md)

---

# Data storage

- [File](./storage/data_structures/file.md)
  - [???]()
    - [Heap file]()
    - [Sorted file]()
    - [Clustered file]()
  - [Types of file]()
    - [Database]()
    - [Index]()
    - [Table]()
    - [Sequence]()
    - [View]()
    - [Materialised view]()
    - [TOAST table]()
- [Page](./storage/data_structures/page.md)
  - [Page type]()
    - [Index page]()
        - [Clustered]()
        - [Non-clustered]()
    - [Data page]()
  - [Page format]()
    - [Slotted page](./storage/data_structures/slotted-page.md)
    - [Log-structured]()
- [Record](./storage/data_structures/record.md)
- [Free Space Map]()
 
---

# Disk I/O

- [Buffer management](./storage/buffer_management/buffer_management.md)
    - [Frame & buffer pool](./storage/buffer_management/frame_and_buffer_pool.md)
    - [Buffer manager](./storage/buffer_management/buffer_manager.md)
    - [Optimisations](./storage/buffer_management/optimisations.md)
    - [Background writer](./storage/buffer_management/background-writer.md)

---

# Indexing

- [Indexing](./indexing/indexing.md)
- [Ordered indices](./indexing/ordered-indices.md)
  - [B+ tree]()
  - [GIN]()
  - [BRIN]()
  - [GIST]()
  - [SPGIST]()
- [Hash indices](./indexing/hash-indices.md)
  - [Hash table]()

---

# Query execution

- [Query execution plan](./query-execution/execution-plan.md)
  - [Scan methods](./query/query_processing/access_methods.md)
    - [Sequential scan](./query-execution/scan-methods/sequential-scan.md)
    - [Index scan](./query-execution/scan-methods/index-scan.md)
    - [Index-only scan](./query-execution/scan-methods/index-only-scan.md)
    - [Bitmap heap scan]()
    - [Tuple ID scan]()
    - [Join strategies]()

---

# Query planning

- [Query planning & optimisation](./query/query_planning.md)

---

# Request handling

- [Parallel execution](./query/query_processing/parallel_execution.md)
- [Connections & connection pooling]()
- [Database driver, client, adapter]()

---

# Concurrency control

- [Transaction](./concurrency/transaction.md)
- [ACID](./concurrency/acid.md)
- [Timestamp ordering]()
- [MVCC]()
- [Locking](./concurrency/locking.md)
  - [Transaction lock]()
  - [Two-phase locking]()
- [Logging]()
  - [WAL](./wal.md)
  - [Transaction log](./transaction-log.md)
  - [Replication log](./replication-log.md)
- [Checkpointing](./concurrency/checkpointing.md)
- [MVCC](./concurrency/mvcc.md)

---

# Query language

- [Basic](./query/sql/basic.md)
- [Intermediate]()
- [Advanced](./query/sql/advanced.md)

---

# Process/thread-based model

---

# Security

---

# Appendix

- [Physical storage systems]()
- [Big Data]()
    - [Distributed file systems]()
    - [Streaming data]()
    - [Graph databases]()
