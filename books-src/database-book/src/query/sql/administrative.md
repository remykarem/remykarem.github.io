# Administrative

See max connections

```sql
SHOW max_connections;
```

See current sessions (aka connections)

```sql
SELECT *
FROM pg_stat_activity
WHERE datname = 'your_database_name';
```
