# File

A **database file** (or **file** or **table store**) is a _series_ of [pages](page.md).

~~~admonish note
This file is an actual file on the disk.
~~~

The file should support:
* iterating over the pages
* performing read, cread, update, delete on the pages.

~~~admonish example
Files are typically stores in `/var/lib/postgresql/data`.

In Postgres, we can see it via

```sql
SHOW data_directory;
```

Table data is stored in the `base` folder. To know which folder is for which table(s), you can do

```sql
SELECT oid, relname, relkind
FROM pg_class
WHERE relkind IN ('r', 'i');
```
~~~

The job of a disk space manager is:
* to manage the **database files**
* to keep track of what data has been read and written to **pages**
* to keep track of how much free space there is in the pages

There are different ways to do this. **File organisation** looks into this.

~~~admonish example title="Postgres"
In Postgres, a table or index is stored in one or more files.

When a table or index grows more than 1GB, Postgres uses additional files.
~~~

~~~admonish example title="SQLite"
SQLite uses 1 file for the entire database.
~~~

```kotlin
interface PageManagement {
    val pages: HashMap<PageId, Page>
    val freeSpaces: HashMap<PageId, Int>
    val records: HashMap<PageId, List<RecordId>>
}
```

## Pushing updates to disk

Event | Write page to disk?
-----|-----
Insert record | No
Delete record | No
Add new page | Yes
