# Summary

[Preface](./preface.md)
- [The big picture](./storage/storage_management.md)

---

# Data storage

- [File](./storage/data_structures/file.md)
     - [Heap file]()
     - [Sorted file]()
     - [Clustered file]()
- [Page](./storage/data_structures/page.md)
  - [Page type]()
    - [Index page](./indexing/indexing.md)
        - [Clustered]()
        - [Non-clustered]()
    - [Data page]()
  - [Page format]()
    - [Slotted page](./storage/data_structures/slotted-page.md)
    - [Log-structured]()
- [Record](./storage/data_structures/record.md)
- [Others](./storage/data_structures/others.md)
- [Free Space Map]()

- [Database]()
- [Index]()
- [Table]()
- [Sequence]()
- [View]()
- [Materialised view]()
- [TOAST table]()
 
---

# Disk I/O

- [Buffer management](./storage/buffer_management/buffer_management.md)
    - [Frame & buffer pool](./storage/buffer_management/frame_and_buffer_pool.md)
    - [Buffer manager](./storage/buffer_management/buffer_manager.md)
    - [Optimisations](./storage/buffer_management/optimisations.md)

---

# Indexing

- [Ordered indices]()
- [Hash indices]()

---

# Searching

- [Query execution](./query/query_execution.md)
    - [Processing models](./query/query_processing/processing_models.md)
    - [Access methods](./query/query_processing/access_methods.md)
    - [Parallel execution](./query/query_processing/parallel_execution.md)
- [Query planning & optimisation](./query/query_planning.md)

---

# Concurrency control

- [Concurrency in DBMS](./concurrency/concurrency.md)
- [Transaction](./concurrency/transaction.md)
- [ACID](./concurrency/acid.md)
- [Transaction lock]()
- [Two-phase locking]()
- [Timestamp ordering]()
- [MVCC]()
- [Logging]()
  - [WAL](./wal.md)
  - [Transaction log](./transaction-log.md)
  - [Replication log](./replication-log.md)

---

# Query language

- [SQL]()
    - [Basic](./query/sql/basic.md)
    - [Intermediate]()
    - [Advanced](./query/sql/advanced.md)

---

# Security

---

# Connections

- [Connections & connection pooling]()
- [Database driver, client, adapter]()

---

# Appendix

- [Physical storage systems]()
- [Big Data]()
    - [Distributed file systems]()
    - [Streaming data]()
    - [Graph databases]()
