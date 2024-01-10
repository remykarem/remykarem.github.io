# Scalability

The ability of a system to **adapt to increased or decreased workloads** by adding or removing **resources** efficiently.

~~~admonish note
The keyword here is resource efficiency.

We can put a price tag to the resource, and optimise towards reducing the cost.

Any unused resources count towards the cost.
~~~

Types of scaling:

- Vertical scaling / scaling up: improve hardware
- Horizontal scaling / scaling out: add more hardware

**Cloud elasticity**

Scaling up and down dynamically

**Improving scalability**

- Profiling
- Caching
- CDN
- Data compression
- Avoid unnecessary client-server requests

**Testing scalability**

Run load (no. of users, transactions, data volume) & stress tests on the system by simulating concurrent traffic. This helps to identify bottlenecks.

How to measure scalability?

* [Performance metrics](../metrics.md)
* [Resource usage](../metrics.md)
