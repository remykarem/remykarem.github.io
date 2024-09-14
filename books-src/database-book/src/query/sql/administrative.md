# Administrative

See max connections

```sql
SHOW max_connections;
```

See current connections

```sql
SELECT *
FROM pg_stat_activity
WHERE datname = 'your_database_name';
```

Terminate a connection

```sql
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE pid = <PID_TO_TERMINATE>;
```
