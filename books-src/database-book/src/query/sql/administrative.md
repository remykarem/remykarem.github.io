# Administrative

See max connections

```sql
SHOW max_connections;
```

See current sessions

```sql
SELECT COUNT(*) AS total_sessions
FROM pg_stat_activity
WHERE datname = 'your_database_name';
```
