# Load balancing

**Distributes** requests across multiple servers.

Load balancing is the process of distributing the load across multiple instances of a component, such as a database or service, in order to improve the [availability](../goals/availability.md) and [scalability](../goals/scalability.md) of the system.

~~~admonish warn title="Spikes"
Load balancing does not absorb spikes in traffic. 

They just fan requests out.
~~~

Load balancing algorithms:
* Round Robin
* Weighted Round Robin
* Least Connections

Load balancing can be done at:
* Layer 4 (transport) — looks at source, destination, port
* Layer 7 (application) — looks at content eg. HTTP header

Visualisation: [https://samwho.dev/load-balancing/](https://samwho.dev/load-balancing/)
