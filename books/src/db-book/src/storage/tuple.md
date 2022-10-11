# Tuple/record

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

A **record ID** identifies a tuple. A record ID is typically `(page_id, slot_number)`.
