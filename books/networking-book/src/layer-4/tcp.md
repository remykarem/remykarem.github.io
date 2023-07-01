# TCP

Transport Control Protocol

TCP is a connection-oriented protocol. It is full-duplex (both hosts on a TCP connection can send messages to each other simultaneously).

## Reliable delivery

| Goal                     | Solution                          |
| ------------------------ | --------------------------------- |
| In-order delivery        | Use sequence numbers              |
| No corrupted packets     | Use checksum. Discard if invalid. |
| No lost packets segments | Use retransmission timer.^        |

^TCP sends an acknowledgement for almost every segment

![TCP](./layer-4-2.png)

## Congestion control

- **Bandwidth allocation** — Bandwidth is allocated per connection. A host can open multiple connections. Bandwidth cannot be divided and allocated equally among end-systems because real traffic is transmitted in bursts and not in one continuous stream.
- **Fairness** — Increasing the transmission rate. Of one end-system necessarily decreases another.
- **Convergence** — Bandwidth should be allocated such that no one host hogs all of it.
  Congestion fixes:

Congestion fixes:

- Send packets at a slower rate in response to congestion
- Track changes in traffic

---

## TCP packet

Consists of:

- Ethernet or wifi header
- IP header
- TCP header
  - Source port number
  - Destination port number
  - Sequence number
  - Acknowledgement number
  - Header length
  - …
  - Flag (synchronise, finish, push, reset, acknowledge, urgent)
  - Window size
  - Checksum
  - Urgent pointer
  - …
- Data (payload)
