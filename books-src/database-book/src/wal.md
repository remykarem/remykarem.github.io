# WAL

Write-ahead log

Data is typically written to a write-ahead log before being indexed in a B-tree.

~~~admonish example title="Postgres"
In Postgres, every change ot the database is first written to the WAL.

The actual database files are updated later, based on the WAL.
~~~

~~~admonish example title="SQLite"
In SQLite, the reader (processes querying the database) access data from both the main database file and the WAL files.
~~~

~~~admonish tip title="See WAL in Postgres"
Go to the directory

```shell
$ cd $PGDATA/waldump
```

View the log file

```shell
$ ls
```

Dump

```shell
$ pg_waldump <log-file>
```
~~~
