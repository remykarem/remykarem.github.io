# Memory leak

Why need to close InputStream?

**Resource management** — InoutStreams often hold onto file resources or network connections. If you don't close them, these resources remain occupied.

**Memory leak** — garbage collector may not promptly reclaim the resources tied to an open stream. 
