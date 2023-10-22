# ACID

```admonish example title="Analogy"
Transaction — document sent to printer 

* atomicity — printer prints 2 pages of a document or none 
* consistency — printer prints half page and the page gets stuck. The printer restarts itself and prints 2 pages with all content
* isolation — while there were too many print outs in progress - printer prints the right content of the document
* durability — while printing, there was a power cut- printer
again prints documents without any errors
```

- Atomicity — if one part of transaction fails, entire transaction fails (all or nothing)
- Consistency - any transaction must go from one valid state to another valid state
- Isolation — ensures correctness in concurrent transactions
- Durability — the transaction gets stored in disk

ppp

Flexibility (data structure) **—** sql dbs are relational. Nosql has no fixed schema

Scalability — scaling dbs require vertical scaling ie increasing cpu, ram ssd. Scaling nosqls is horizontal scaling ie require more servers (cheaper) 

Guarantees

Many NoSQL choose not to implement provide full acid to achieve other goals like flxibility, scalability, and performance


### Atomicity (in ACID)

SQL databases are _designed_ to provide atomicity across multiple tables.

Some NoSQL databases can provide atomicity too.

### Consistency (in ACID)

```admonish note
Consistency here means data integrity.
```

SQL databases are _designed_ to provide consistency.

NoSQL databases are not designed to provide consistency by default.

### Isolation (in ACID)

This refers to the behaviour of transactions when they are executed _concurrently_.

Isolation ensures that concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially.

SQL databases are _designed_ to provide isolation.

NoSQL databases might not prioritise this.

### Durability (in ACID)
