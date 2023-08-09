# Record

A **record** or **tuple** is a database row in a row-oriented column. Every record is associated with a **record ID**. A record ID is typically `(page_id, slot_number)`.

A record can have 2 different formats:

* Fixed length

    ```txt
    +----+----------+------+
    |    |          |      |
    +----+----------+------+
    ```

    Here you have 3 columns of fixed types.

* Variable length
    * Array of fields delimited by special symbols
    * Array of field offsets
 
~~~admonish example title="Postgres"
Postgres uses a variable-length record format.

Additionally it uses TOAST for large data values that don't fit a page.
~~~
