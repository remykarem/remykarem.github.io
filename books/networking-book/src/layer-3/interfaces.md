# Network interfaces

This is a _software_ abstraction of (but not limited to) physical network interfaces.

These interfaces are _logical_ interfaces: they can be linked to either physical hardware interfaces (eg. Wi-Fi, Ethernet card) or software-based interfaces (eg. VPN tunnels, loop interface).

Common types of network interfaces:

- Hardware-based
  - **Wi-Fi interface**
  - Ethernet interface
- Software-based
  - **Loopback interface** — special network interface used by a device to send _packets_ to itself
  - Virtual Network Interface — used in containerisation software
  - Tunnel interface — used in VPNs, to convert IPv4 to IPv6 and vice versa, etc.

````admonish tip
In macOS, you can list the network interfaces:

```
ifconfig / ip
ifconfig
```

The usual suspects are:

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

````
