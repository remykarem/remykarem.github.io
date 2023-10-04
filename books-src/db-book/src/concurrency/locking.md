# Locking

To prevent _concurrent writes_, databases often provide mechanisms to lock rows or tables.

When a process locks a row/table, other processes must wait until the lock is released before they can make their own changes. This ensures that updates are applied in a certain order.

~~~admonish warning
Locking may introduce performance bottlenecks.
~~~
