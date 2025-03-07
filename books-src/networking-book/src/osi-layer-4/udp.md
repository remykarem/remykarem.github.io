# UDP

User Datagram Protocol

UDP is a connectionless protocol.

**How it works**

- UDP does not involve any initial handshaking.
- Message may not get delivered.
- Message may have some changes.
- Message may be delivered in the wrong order.
- Checks for corrupted message but does not correct them.

**Multiplexing and demultiplexing**

**UDP message**

Consists of:

- Source port number
- Destination port number
- Length of datagram (max 2^16)
- Checksum
- Data

```admonish faq title="Who uses UDP?"
- Xbox Live
- Network management
- Live audio/video streaming
```

```admonish faq title="Why would I use UDP?"
UDP is commonly used in time-sensitive communications where occasional drops of packet (from the network) is better than waiting.
```
