# JDBC

Java Database Connectivity

[JSR-54](https://jcp.org/en/jsr/detail?id=54), [JSR-221](https://jcp.org/en/jsr/detail?id=221)

JDBC provides a standard API for _accessing_ relational databases.

Examples of API:

* **Connection**

    `java.sql.DataSource`:

    ```kotlin
    interface Connection {
        fun createStatement(): Statement
    }
    ```

    `javax.sql.DataSource`:

    ```kotlin
    interface DataSource {
        fun getConnection()
    }
    ```

* **Execution**

    ```kotlin
    interface Statement {
        fun executeQuery(): ResultSet
    }
    ```

    Others: `PreparedStatement`

* **Result**

    `ResultSet`

```admonish note title="Connection pool management"
JDBC doesn't provide connection pooling. 

The JDBC API primarily focuses on providing a low-level, driver-based interface for executing SQL queries against a database. This includes creating and managing connections, but it doesn't include connection pooling out of the box.
```
