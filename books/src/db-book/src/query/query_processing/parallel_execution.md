# Parallel execution

A **process model** defines how the system supports concurrent requests.

The DBMS is comprised of one or more **workers**. Each worker is responsible for executing tasks on behalf of the client and returning the results.

Process models:
* Process per worker
* Process pool
* Thread per worker


Database   | Process per worker | Process pool | Thread per worker
-----------|--------------------|--------------|------------------
Postgres   | y | |
Oracle     | y | |
IBM DB2    | y | |
SQLite     |  | |
SQL Server |  | |
MySQL      |  | |

Query parallelism:

* Inter-query parallelism
* Intra-query parallelism
    * Intra-Operator Parallelism (Horizontal)
    * Inter-Operator Parallelism (Vertical)
    * Bushy Parallelism

I/O parallelism:
* Multi-Disk Parallelism
* Database Partitioning