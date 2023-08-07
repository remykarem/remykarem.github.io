# File

A **database file** (or **file** or **table store**) is a collection of [pages](page.md). The file should support:
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

Design choice: how many OS files? One OS file for each relation?

Database   | OS files
-----------|--------------------
Postgres   |  
Oracle     | 
IBM DB2    | 
SQLite     | 1 OS file for the entire database
SQL Server |
MySQL      |

* Unsorted (heap) file organisation
    * List
    * Page directory
* Sorted file organisation
* Clustered file organisation




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
