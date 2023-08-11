# Sequential scan

1. Read every row in the table from first to last
2. Check if row satisfies conditions specified in the query
3. Include row in result set if condition matches.

~~~admonish warning
For large tables, a sequential scan can lead to more I/O operations.
~~~
