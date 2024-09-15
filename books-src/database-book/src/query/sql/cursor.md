# Cursor

Faster because of locality of reference. 

~~~admonish tip title="Pagination"
Cursor allows you to paginate records.
~~~

~~~admonish example

Uhm idk how we can play around with this

```sql
BEGIN;

-- Declare the cursor
DECLARE my_cursor CURSOR FOR
SELECT *
FROM untitled_table_1
ORDER BY id ASC;

-- Fetch the first 10 rows
FETCH 1 FROM my_cursor;

-- Fetch the next 10 rows
FETCH 10 FROM my_cursor;

-- Close the cursor
CLOSE my_cursor;

END;
```
~~~
