# Database

Purpose:
* [Data storage](../core-functionalities/data-storage.md)

Features:
* TTL (eg Redis, AWS DynamoDB)
* ACID (SQL databases, AWS DynamoDB)
* CDC (AWS DynamoDB)
* Caching service (AWS DynamoDB)
* Integration with REST APIs (AWS DynamoDB via API Gateway)
* Analytics (AWS DynamoDB via S3)

Non-features:
* [Locking](../distributed-system/concurrency-control.md) (unlike in queue)

  Locking is possible but requires a lot of work (???)

## What database to use?

[Just Use Postgres for Everything](https://www.amazingcto.com/postgres-for-everything/)
