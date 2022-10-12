# Buffer management

The key idea is that reading and writing to disk is slow. We somehow need to cache data.

As such, data must be in RAM for DBMS to operate on it. However, we can;t keep all the data in memory.

*Buffer management* is the efficient use of main memory. It is used to store intermediate data between disk and process.

A buffer manager manages page requests from higher levels. It talks directly to the storage manager.

```kotlin
class BufferManager(
   storageManager: StorageManager
) {
   public fun requestPage() {}
}
```

What happens when a page is requested?

```txt
Is the requested page in the buffer pool?   --yes--> *pin* the page & return the address
   |
   No
   ↓
Is there a free frame?  --no--> choose a frame with unpinned pages
   |                                       ↓
   Yes                      /---no---- is frame dirty?
   ↓                       /               |  
     <-------------------- /                Yes
read requested page                        ↓
into frame                              Write to disk
   ↓
pin page and return address
