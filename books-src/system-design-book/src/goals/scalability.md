# Scalability

The ability of a system to **adapt to increased or decreased workloads** without sacrificing performance or (**resource**) efficiency.

This include **spikes** in traffic.

~~~admonish note
The keyword here is resource efficiency.

We can put a price tag to the resource, and optimise towards reducing the cost.

Any unused resources count towards the cost.
~~~

General strategies:

- Offload heavy work
- Smoothing resource usage (eg. doing things off-peak)
- Horizontal scaling / scaling out: add more hardware / add more workers ("concurrency")
- Vertical scaling / scaling up: improve hardware

**Cloud elasticity**

Scaling up and down dynamically

**Strategies to improve scalability**

Inter-service
- Caching layer
- Load balancing
- Asynchronous processing / queues / batch jobs — offloading heavy or long-running tasks
- Horizontal scaling
- Microservices / modular architecture
- CDN

Service itself
- Data structure optimisation etc.
- Database sharding

**Testing scalability**

Run load (no. of users, transactions, data volume) & stress tests on the system by simulating concurrent traffic. This helps to identify bottlenecks.

~~~admonish warning title="Scalability mismatches"
When part of the system is more scalable than the downstream services.
~~~

How to measure scalability?

* [Performance metrics](../metrics.md)
* [Resource usage](../metrics.md)

## Metrics

* Throughput
  * Queries — QPS (Queries per second) / RPS (requests per second)
  * Data — MB/s, rows/s, events/s
* Latency — usually measured in percentiles:
  * p50 — 50% of users
  * p95 — 95% of users
* Resource — CPU, memory, I/O

~~~admonish example
“System handles 20k QPS with p95 latency under 200 ms.”
~~~

## OOM (Out of memory) issues
* Memory leaks
* Large data loads (loading large files, large requests, large record sets fromdatabase)
* Heap size configuration
* High concurrency — applications that handle anhigh number of concurrent requests can consume anlot of memory especially if each thread holds onto significant amounts if data
* Unbounded collections
* Improper use of cache
* Excessive logging — logging frameworks that store memory buffers
