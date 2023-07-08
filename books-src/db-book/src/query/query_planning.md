# Query planning & optimisation

The job of the DBMS's optimiser is to pick an optimal plan for any given query.

## Relational algebra

## Cost model

A **cost model** is an estimation of the cost of executing a plan. DBMS use this. The cost of the query depends on:

* CPU
* Disk I/O - the no. of block transfers
* Memory - the amount of DRAM used
* Network
