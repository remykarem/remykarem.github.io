# Web asrchitecture & software architecture

# **Client-server web architecture**

## **HTTP PULL & HTTP PUSH**

For every response, there is has to be a request first (“HTTP PULL”). In order to avoid client sending requests over and over (there is a limit to the number of open connections a server can manage), there is the HTTP PUSH mechanism. Once the client has initiated a request, the server keeps pushing new updates to the client whenever they are available. Persistent connections are needed when the frequency of request-response between server and client is very high. Below are some HTTP PUSH technologies.

### Streaming over HTTP

This is ideal for cases where we need to stream large data over HTTP by breaking it into smaller chunks. Connection is persistent. Eg. stream multimedia content.

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

# **Message queue / task queue**

A queue system which routes from the source to destination. Manage background work that must be executed (outside the HTTP request-response cycle).

Messaging protocols

- AMQP
- STOMP

Message broker: Technologies implementing messaging protocols (translates a message from the formal messaging protocol of the sender to the formal messaging protocol of the receiver):

- RabbitMQ
- ActiveMQ
- Apache Kafka