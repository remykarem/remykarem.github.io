# Buffer manager

The **buffer manager** manages page requests.

For every frame in the buffer pool, it needs to keep track of
* the frame's page ID
* **pin count** - a counter
* **dirty flag** - if the frame's page has been modified

The buffer pool has a limited number of frames available. **Eviction policy** or buffer replacement policy chooses a frame for replacement when the buffer pool needs to free up a frame. Some policies are:
* LRU (Least Recently Used)
* MRU (Most Recently Used)
* Clock
