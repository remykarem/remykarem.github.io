# ARP

Address Resolution Protocol

ARP maps an end host's IP address to a MAC address.

Hosts maintain a table of these mappings, called an **ARP cache**.

| MAC address | IP address |
| ----------- | ---------- |
| 5f:44:11    | 192.20.1.1 |

If the host doesn't know a MAC address for a certain IP address, it sends out an **ARP request packet**, asking other machines for the matching MAC address. The result is then updated in the host's ARP cache.

~~~admonish tip
To see the ARP cache:

```
arp -na
```
~~~
