# Transaction

**Transactional statements**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, and `ALTER TABLE`. These can be grouped within a `BEGIN ... COMMIT` block, or they can each be automatically committed if executed outside of an explicit transaction.

**Non-transactional statements**: Some SQL commands cannot be rolled back once executed, even if they are inside a transaction. Eg.
`CREATE DATABASE` or `DROP DATABASE`

**Autocommit behavior**: By default, PostgreSQL uses autocommit mode, meaning that every individual statement is wrapped in its own transaction and automatically committed unless you explicitly start a transaction block.

~~~admonish warning
Note that client libraries or frameworks might automatically rollback a transaction when an error occurs.

```sql
BEGIN;

-- operations...

COMMIT;
```
~~~
