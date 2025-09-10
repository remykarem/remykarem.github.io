# Replication

Having similar nodes run the workload together

Helps with
* [availability](../goals/availability.md)
* [scalability](../goals/scalability.md)

Strategies:
* Master-slave replication: 1 master node for writes, multiple slaves for reads (aka primary-secondary)

  Note that there will be replication delays.
