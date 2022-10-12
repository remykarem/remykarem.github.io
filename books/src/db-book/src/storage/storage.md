# Disk space management

How data is persisted onto the disk is managed by the disk space manager.

The disk space manager provides APIs for [**records**](tuple.md).

```kotlin
interface DiskSpaceManager {
    fun getRecord(recordId: RecordId) {}
    fun insertRecord(record: Record) {}
    fun deleteRecord(recordId: RecordId) {}
    fun modifyRecord(recordId: RecordId) {}
    fun scanAllRecords(): List<Record> {}
}
```

Internally, the disk space manager organises the records as [**pages**](page.md) of records. A collection of pages is called a *file*. There are different ways to organise the pages of a file:

* Unordered (heap) file organisation
    * List
    * Page directory
* Sorted file organisation
* Clustered file organisation
