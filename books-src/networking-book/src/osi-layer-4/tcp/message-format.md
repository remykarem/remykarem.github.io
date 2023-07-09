# Message format

A **TCP packet** consists of:

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
