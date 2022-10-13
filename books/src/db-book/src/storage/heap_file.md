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

## Pushing updates to disk

Event | Write page to disk?
-----|-----
Insert record | No
Delete record | No
Add new page | Yes
