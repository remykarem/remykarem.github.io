# Indexing

The DBMS ensures that the contents of the table and the index are logically in sync. Note that primary keys are always indexed.

Two types of indices:

* **Ordered indices - B+ tree (common)**
* Hash indices - Hash table

## Ordered indices

Every inner node: `<node*>|<key>`

Every leaf node:
* Level (how far we are from the root)
* No. of free slots remaining
* Previous and next page IDs (?)
* Array of sorted `<key>`s
* Values (which correspond to the sorted keys) - can be record ID or the record itself

    Database | Leaf node value
    ---------|------------------
    Postgres | Record ID
    SQLite   | Record
    MySQL    | Record
    Oracle   | Record ID (default)

bla

* Clustering index
* Secondary index
* Index-sequential file

B+-tree file organisation
* leaf nodes store records instead of pointers

## Hash indices

-
