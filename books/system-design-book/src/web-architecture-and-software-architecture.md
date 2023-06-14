# Web asrchitecture & software architecture

# **Client-server web architecture**

## **REST API**

Rest stands for representational state transfer. It is a design of the architecture of web services. The design revolves around having resources identified by logical URLs. This design dictates how you should interact with the resources. 

This implementations adheres to 6 REST architectural constraints:

- Client-server architecture
- Statelessness
- Cacheability: responses must implicitly or explicitly define themselves as cacheable or non-cacheable
- …

## **GraphQL API**

One of the major advantages of GraphQL is that it allows for naturally querying nested information.

https://www.howtographql.com/

## **HTTP PULL & HTTP PUSH**

For every response, there is has to be a request first (“HTTP PULL”). In order to avoid client sending requests over and over (there is a limit to the number of open connections a server can manage), there is the HTTP PUSH mechanism. Once the client has initiated a request, the server keeps pushing new updates to the client whenever they are available. Persistent connections are needed when the frequency of request-response between server and client is very high. Below are some HTTP PUSH technologies.

### AJAX (Asynchronous JavaScript & XML)

AJAX enables a particular section of the web page to be updated dynamically. AJAX uses XMLHttpRequest object for sending requests to the server which is built in the browser, and then uses JavaScript to update the HTML DOM. AJAX is commonly used with JQuery.

### WebSocket

A WebSocket connection is preferred when we need a persistent bi-directional low latency data flow from the client to the server and back. The connection is open for as long as we want. Eg. chat apps, real-time social streams, browser-based multiplayer games.

### Streaming over HTTP

This is ideal for cases where we need to stream large data over HTTP by breaking it into smaller chunks. Connection is persistent. Eg. stream multimedia content.

## **Client-side rendering**

When the browser receives an HTTP response, it uses the following components to render the page:

- Browser engine
- Rendering engine
- JavaScript interpreter
- Networking & UI backend
- Data storage

## **Server-side rendering**

The server renders the HTML and sends it to the client.

# **P2P architecture (Peer-to-peer)**

P2P networks have a decentralised architecture. The data is exchanged over TCP/IP.

## Decentralised architecture

Nobody has control over your data.

## Seeder

A node which hosts the data and provides bandwidth to upload data to network

## Leecher

A node which downloads the data from the network

## Segmented P2P file transfer

A node N hosts a large file.

Other nodes who need the file locate node N.

These nodes download the file in chunks, and re-host it.

## Types of networks

- Unstructured: peers connect to each other randomly. O(n) complexity. Eg. Gossip, Kazaa, Gnutella.
- Structured: peers have proper indexing of the topology (“distributed hash table”). Eg. BitTorrent.
- Hybrid: eg. digital cryptocurrencies (Bitcoin, Peercoin), decentralised microblogging (Twister).

# **Event-driven**

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

# **Message queue / task queue**

A queue system which routes from the source to destination. Manage background work that must be executed (outside the HTTP request-response cycle).

Messaging protocols

- AMQP
- STOMP

Message broker: Technologies implementing messaging protocols (translates a message from the formal messaging protocol of the sender to the formal messaging protocol of the receiver):

- RabbitMQ
- ActiveMQ
- Apache Kafka