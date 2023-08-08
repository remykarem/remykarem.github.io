# WAL

Write-ahead log

Data is typically written to a write-ahead log before being indexed in a B-tree.

~~~admonish example
Postgres uses WAL
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
