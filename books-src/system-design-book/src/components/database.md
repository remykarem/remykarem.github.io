# Database

Purpose:
* [Data storage](../core-functionalities/data-storage.md)

Design:
* [Distributed (replicated)](../strategies/replication.md) — DynamoDB

Features:
* TTL deletion (eg Redis, DynamoDB)
* TTL archival
* Consistency models
  * Transactional (SQL databases, DynamoDB)
  * Strongly consistent (DynamoDB)
* CDC (DynamoDB)
* Caching service (DynamoDB)
* Integration with REST APIs (DynamoDB via API Gateway)
* Analytics (DynamoDB via S3)

Non-features:
* [Locking](../distributed-system/concurrency-control.md) (unlike in queue)

  Locking is possible but requires a lot of work (???)

## What database to use?

[Just Use Postgres for Everything](https://www.amazingcto.com/postgres-for-everything/)
