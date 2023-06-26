# Layer 3 - Network (Internet)

IP: “You;re not supposed to be here!”

**What are involved?**

- Routers
- End-systems
- Middleboxes (software)
    
    **Firewall**
    
    Possible filters
    
    - Source address (blacklist)
    - Destination address
    - Protocol number
    - TCP or UDP port number
    - TCP flags
    
    Types
    
    - Stateless
    - Stateful (session-based i.e. all subsequent packets are allowed through)
    
    **NATs**
    
    Network Address Translation
    
    **A NAT allows all of the hosts of a router share one or a few public IPv4 addresses (usually between private and public).** This is to deal with shortage of IPv4 addresses. What it does is to modify the IP addresses in the IP header.
    

**Responsibility**

- Host addressing
- Message forwarding: Since many networks are partitioned into subnetworks and connect to other networks for wide-area communications, networks use specialised hosts, called gateways or routers, to forward packets between networks.

**Protocols**

**packets**

The unit of information in the network layer

**Routing**

The process of selecting a path for traffic in a network / between networks / across multiple networks

**Datagram**

A basic transfer unit

**IP address**

To identify each device in the world-wide web, Internet Assigned Numbers Authority (IANA) assigns IPV4 address as a unique identifier for each device on the Internet. Length of the IP address is 32 bits. Hence there are

**2**

32

2

32

IP addresses. Local IP is given by local router.

**Router**

A network device that can (i) bridge between different networks together, (ii) assign IP addresses using a protocol called DHCP, and (iii) determine what traffic can pass between them (most routers have a built-in Firewall).

# **Devices**

- End host
- Router
- Middleboxes: eg. firewalls, network address translation devices

# **Organisation of the network layer**

- Datagram organisation: use forwarding table
- Virtual circuit organisation
- Two conceptual planes:
    - Data plane: protocols for hosts and routers to exchange packets carrying user data
    - Control plane: protocols for routers to efficiently forward packets to final destination

Routing protocols

- Static: manually compute routes
- Dynamic

# **Routing table**
