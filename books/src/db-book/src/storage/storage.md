# Access methods

When you run a database query, data needs to be accessed. We need to find a way to organise the data to support fast access.

Access methods organise [**pages**](page.md) into *database files*, and organise the data in these pages too. Here are some of the ways:

Data is stored on the disk as an OS file. A database file knows how to decode the contents of an OS file.

```kotlin
interface DatabaseFile {
    fun iterate() {}
}
```

> ⚠️ Note that a *database file* is **not** an OS file. It is an abstraction.

What happens when an iteration is requested from a heap file?

1. A heap file calls BufferManager to ensure that the necessary pages are loaded in memory.

2. If not in memory, the BufferManager calls (???) the database file to read page from disk.
