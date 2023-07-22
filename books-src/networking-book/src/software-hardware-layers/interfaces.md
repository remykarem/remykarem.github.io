# Network interfaces

This is a _software_ abstraction of (but not limited to) physical network interfaces.

These interfaces are _logical_ interfaces: they can be linked to either physical hardware interfaces (eg. Wi-Fi, Ethernet card) or software-based interfaces (eg. VPN tunnels, loop interface).

~~~admonish info title="OSI model"
Network interface probably spans OSI Layers 1, 2 and 3.
~~~

Common types of network interfaces:

| Interface      | Use                      |
| -------------- | ------------------------ |
| `en0`          | Usually Wi-Fi            |
| `enXXX`        | Ethernet                 |
| `lo0`          | Loopback                 |
| `p2p0`         | Apple's AirDrop          |
| `awdl0`        | Apple's AirDrop, SideCar |
| `llw0`         | Apple's Low Data Mode    |
| `gif0`, `stf0` | Tunnel interfaces        |
| `utunXXX`      | Interfaces for VPN       |

- Hardware-based
  - **Wi-Fi interface**
  - Ethernet interface
- Software-based
  - **Loopback interface** — special network interface used by a device to send _packets_ to itself
  - `utun` (VPN tunnel) — userspace tunnel; used in VPNs
  - Virtual Network Interface — used in containerisation software

~~~admonish info title="Userspace tunnel"
The tunnel is created in the user space of the OS, instead of the kernel space.

This means the tunnel is managed by user-level process.
~~~

````admonish tip
In macOS, you can list the network interfaces:

```sh
ifconfig
```

whereas in Linux it's

```sh
ipconfig
```
````

~~~admonish note
You don't typically interact directly with network interfaces. The OS abstracts this away using sockets.
~~~

~~~admonish tip
Run `networkQuality` to run an Internet speed test from your Mac.
~~~

~~~admonish tip
To log all outgoing IP addresses from a specific network interface, do

```sh
sudo tcpdump -i en0 -n -tttt
```
~~~


~~~admonish tip
A network interface is like a network configuration:


* IP address
* Subnet mask
* Default gateway
* DNS servers

Configurations are retrieved from a DHCP ssrver. 
~~~
