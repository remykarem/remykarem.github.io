# File

aka file storage, storage management

The job of a disk space manager is:
* to manage the **database files**
* to keep track of what data has been read and written to **pages**
* to keep track of how much free space there is in the pages

There are different ways to do this. **File organisation** looks into this.

Design choice: how many OS files? One OS file for each relation?

> 💡 SQLite uses 1 OS file for the entire database.

aka stores

* Unsorted (heap) file organisation
    * List
    * Page directory
* Sorted file organisation
* Clustered file organisation
