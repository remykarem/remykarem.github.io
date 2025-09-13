# Availability

**AWS definition**

Availability = percentage of uptime[^aws]

**Generic definition**

The ability of a system to remain operational and accessible, even in the face of failures or other disruptions.
~~~

~~~admonish note title="Definition 2"
High availability is the ability of the system to stay online despite having failures at the infrastructural level in real-time.
~~~

~~~admonish note title="CAP theorem definition"
Any request (read or write) received by a non-failing node in a system must result in a response.
~~~

_Single point of failure_ is directly tied to poor availability. 

## Metrics

* Number of 9's

  * 99% — 2h
  * 99.9% — 10mins
  * 99.99% — 1min

  (per week)

~~~admonish tip title="High availability vs. fault tolerance"
High availability aims to **minimise downtime**.

Fault tolerance ensures continuous operation with **no disruption** to users.

Based on Couchbase blog[^couchbase].
~~~

---

[^aws]: [Availability and Beyond: Understanding and Improving the Resilience of Distributed Systems on AWS](https://docs.aws.amazon.com/whitepapers/latest/availability-and-beyond-improving-resilience/understanding-availability.html)
[^couchbase]: [High Availability vs. Fault Tolerance: Key Differences](https://www.couchbase.com/blog/high-availability-vs-fault-tolerance/)