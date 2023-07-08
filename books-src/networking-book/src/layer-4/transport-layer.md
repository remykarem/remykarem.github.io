# Layer 4 - Transport

What problems are we trying to solve?

- Network is unreliable due to **congestion** — when more packets than the network has bandwidth for are sent through, some packets get dropped ("**lost packets**") and some get delayed ("**out-of-order**").
- Not all packets go through the same route. Some packets might arrive earlier ("out-of-order").
- Packets might get altered along the way ("**corrupted data**")

```admonish info title="Definition: Bandwidth"
Rate at which the network can transport bits
```

Therefore, the goals of Layer 4 (not guaranteed by all protocols) are:

- **Provide reliable delivery** of packets
  - No lost packets
  - In-order delivery
  - No corrupted data
- **Control rate of data transmission** to prevent congestion
- **Multiplexing and demultiplexing**

  Transport layer labels packets with the port number of the application a message is from and the one it is addressed to. This allows the layer to multiplex and demultiplex the data. TCP and UDP implement these differently.

  ![TCP](./tcp1.png)

## Overview

|                          | QUIC              | TCP                | UDP            |
| ------------------------ | ----------------- | ------------------ | -------------- |
| Stateful connection      | Connection ID     | (IP address, port) | Connectionless |
| RTT                      | 0                 | 1                  | 0              |
| With TLS?                | ✅                | ❌                 | ❌             |
| Loss recovery mechanism  | ✅                | ✅                 | ❌             |
| Corrupted data mechanism | ✅; No retransmit | ✅; Retransmit     | ❌             |
| Data integrity check     | ✅                | ✅                 | ✅             |

```admonish info title="Definition: RTT"
Round-trip time
```
