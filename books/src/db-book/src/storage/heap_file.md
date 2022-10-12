# Heap file

A *file* is a **collection of [pages](page.md)**. The file should support:
* iterating over the pages
* performing read, cread, update, delete on the pages.



```kotlin
interface PageManagement {
    val pages: HashMap<PageId, Page>
    val freeSpaces: HashMap<PageId, Int>
    val records: HashMap<PageId, List<RecordId>>
}
```

Example of a file:

```txt
+------------------------------+
|                              |
+------------------------------+
|                              | <- contains metadata
+------------------------------+
|                              |
+------------------------------+
|                              |
+------------------------------+
|                              | <- contains page 1
+------------------------------+
|                              | <- contains page 2
+------------------------------+
|                              | <- contains page 3
+------------------------------+
```

> **System catalogs** are where you can store metadata about the file structure (eg. heap file) etc.
