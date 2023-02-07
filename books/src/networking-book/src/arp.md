# ARP

Address Resolution Protocol

Data link layer protocol that maps end host’s IP address to data link’s address

To find the address,

1. Check the IPv4 host’s ARP cache
2. If none, send a broadcast ARP query frame on the LAN. This frame is received by all devices on the LAN. Host who knows the answer will reply
3. Sender updates ARP cache

Address Resolution Protocol

mapping of (MAC address) → (IP address). This table is an **ARP cache**.

Hosts have this table. If the host doesn’t know a MAC address for a certain IP address, it sends out an **ARP request packet**, asking other machines for the matching MAC address.

The Address Resolution Protocol (ARP) is used to map an IP address to a fixed MAC address. If a host does not know a MAC address for a certain IP address, it broadcasts an ARP request packet asking other machines who is this. The machine with the corresponding IP address responds to this with an ARP reply packet with the MAC address. This result is stored in the ARP cache of the host.

| MAC address | IP address |
| --- | --- |
| 5f:44:11 | 192.20.1.1 |
|  |  |
