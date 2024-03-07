# Locking

* **Optimistic locking**

  Assumes that conflicts are rare. No locks.

  1. Read the data
  2. Record the version (timestamp, hash etc.) associated with the data
  3. Process the data
  4. Check if the version is still the same in the database
  5. If all good, write to the database
 
  ~~~admonish note
  More common
  ~~~

* **Pessimistic locking**

  Assumes that conflicts are likely. Acquire lock (usually in the database).

* **2PL (2-Phase Locking)**
