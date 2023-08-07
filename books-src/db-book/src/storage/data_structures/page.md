# Page

A *database page* (or simply a *page*) is a block is a **fixed-size block of data** consisting of records, indexes etc. (most systems will not mix the different types together within a page).

~~~admonish example title="Postgres"
In Postgres, the page size is 8KB.

See this for yourself in `/var/lib/postgresql/data/base`.
~~~

~~~admonish note
A database page is not the same as the *hardware page* or *OS page*.
~~~

A page is the unit of (i) storage allocation and (ii) data transfer.
