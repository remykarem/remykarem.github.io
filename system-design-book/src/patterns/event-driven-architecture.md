# Event-driven architecture

Blocking

Flow of execution is blocked waiting for another process to complete

Non-blocking

Flow of execution is not blocked does not wait for another process to complete

Events

AKA “IO / input-output”. Eg. button click, HTTP request, change in variable

Non-blocking architecture

Reactive / event-driven architecture.

This means the code is written to react to the events (IO) occurring regularly, as opposed to sequentially moving through the lines of code. Event-driven architecture is all about processing asynchronous data streams. Eg. Nodejs is a single-threaded non-blocking framework written to handle more IO intensive tasks. It has an event loop architecture.

Webhooks

The server fires an HTTP event to all registered endpoints of the consumer

**Scalability**

Scalability is the ability of an application to handle or withstand increased workload without sacrificing latency. Types of scaling:

- Vertical scaling / scaling up: improve hardware
- Horizontal scaling / scaling out: add more hardware

**Latency**

Latency is the amount of time a system takes to respond to a user request. It is usually divided into 2 parts:

- Network latency
- Application latency

**Cloud elasticity**

Scaling up and down dynamically

**Improving scalability**

- Profiling
- Caching
- CDN
- Data compression
- Avoid unnecessary client-server requests

**Testing scalability**

Run load & stress tests on the system by simulating concurrent traffic

**High availability**

High availability is the ability of the system to stay online despite having failures at the infrastructural level in real-time.

**Why do systems fail?**

- Software crashes
- Hardware failures
- Human errors (flawed configurations)
- Planned downtimes

**How to achieve high availability?**

Fault tolerance

A fault-tolerant system is equipped to handle faults. To achieve this, the entire massive service is architecturally broken down into smaller loosely coupled services called the microservices.

Replication

Having similar nodes run the workload together

Redundancy

Duplicating components and keeping them active and on standby
