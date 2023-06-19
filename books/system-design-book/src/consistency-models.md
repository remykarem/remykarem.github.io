# Consistency models

|  | ACID | BASE |
| --- | --- | --- |
| Atomic |  |  |
| Consistent |  |  |
| Isolated |  |  |
| Durable |  |  |
| Basic Availability |  |  |
| Soft state |  |  |
| Eventual consistency |  |  |

..

|  | ACID | BASE |
| --- | --- | --- |
| Consistency | Immediate | Eventual |
| Availability | ? | High |
| Partition tolerance (Soft state) |  |  |

CAP theorem 

## **ACID**

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

Language
