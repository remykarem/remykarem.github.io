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

> This contiguous storage is a setup for a row store.
