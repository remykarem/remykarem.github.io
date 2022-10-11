# Heap file

A *file* is a **collection of [pages](page.md)**. The file should support:
* iterate over the pages
* perform read, cread, update, delete on the pages.

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

Implementations:

* Heap file
    * Linked list
    * Page directory
* Sorted file
* Clustered file

> **System catalogs** are where you can store metadata about the file structure (eg. heap file) etc.
