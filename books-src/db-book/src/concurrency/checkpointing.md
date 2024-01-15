# Checkpointing

A checkpoint is the moment when the database system ensures that all changes up to that point are written to the actual database files on disk.

Checkpoints can be triggered automatically or manually.

~~~admonish example title="Postgres"
Postgres has a dedicated `checkpointer` background process that is responsible
to ensure that the data recorded in WAL is periodically and safely written to the main database files on disk.

You can trigger checkpoints manually using the SQL command

```sql
CHECKPOINT
```
~~~
