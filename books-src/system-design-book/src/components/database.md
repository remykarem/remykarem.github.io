# Database

Purpose:
* [Data storage](../core-functionalities/data-storage.md)

Features:
* TTL (eg Redis, Dynamo DB)
* ACID (SQL databases, DynamoDB)

Non-features:
* [Locking](../distributed-system/concurrency-control.md) (unlike in queue)

  Locking is possible but requires a lot of work (???)

## What database to use?

[Just Use Postgres for Everything](https://www.amazingcto.com/postgres-for-everything/)
