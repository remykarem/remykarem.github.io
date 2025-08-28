# Summary

[Preface](./preface.md)
[OSI model](./osi-model.md)

---

# Topology

- [Cloud](./cloud-topology.md)

---

# Software/hardware layers

- [Application]()
- [Socket](./software-hardware-layers/socket.md)
  - [SOCK_STREAM](./software-hardware-layers/socket/sock-stream.md)
  - [SOCK_DGRAM](./software-hardware-layers/socket/sock-dgram.md)
  - [SOCK_RAW](./software-hardware-layers/socket/sock-raw.md)
- [Route table](./software-hardware-layers/route-table.md)
- [Network interface](./software-hardware-layers/network-interface.md)
- [Network Interface Controller](./software-hardware-layers/network-interface-controller.md)

---

# Tunnels

- [SSH tunnel](./tunnels/ssh-tunnel.md)
- [TLS tunnel](./tunnels/tls-tunnel.md)
- [VPN tunnel](./tunnels/vpn-tunnel.md)

---

# Proxy server

- [Proxy servers](./proxy-servers/index.md)

---

# VPN

- [How it works](./vpn/index.md)
- [Protocols]()
  - [WireGuard](./vpn/wireguard.md)
  - [OpenVPN](./vpn/openvpn.md)
  - [IPSec](./vpn/ipsec.md)
    - [IKE]()
    - [IKEv2](./vpn/ikev2.md)
  - [SSL VPN]()
- [Cloudflare tunnel]()
- [Split tunnelling](./vpn/split-tunnelling.md)

---

# Firewalls

- [Strategies](./firewall/strategies.md)
- [Application-level]()
  - [Stateless]()
  - [Stateful]()
- [Packet-level]()
  - [Stateless]()
  - [Stateful]()

---

# Protocols: OSI Layer 7 — Application

- [Overview](./osi-layer-7/index.md)
- [HTTP](./osi-layer-7/http.md) 
  - [Workflow]()
  - [Message format](./osi-layer-7/http/message-format.md)
  - [Features](./osi-layer-7/http/features.md)
  - [HTTP tunnel](./osi-layer-7/http/tunnel.md)
  - [Browser](./osi-layer-7/http/browser.md)
  - [HTTPS](./osi-layer-7/https.md)
- [SSH](./osi-layer-7/ssh/index.md)
  - [Features](./osi-layer-7/ssh/features.md)
  - [SFTP](./osi-layer-7/sftp.md)
- [DNS](./osi-layer-7/dns/index.md)
  - [Setup: DNS registrars]()
  - [Setup: DNS servers]()
  - [Setup: Client-server]()
  - [Workflow]()
  - [DNS record](./osi-layer-7/dns/dns-record.md)
  - [DoH](./osi-layer-7/dns/doh.md)
  - [ODoH](./osi-layer-7/dns/odoh.md)
  - [DoT]()
- [MQTT]()
- [NTP]()
- [SCP]()
- [WebSocket](./osi-layer-7/websocket.md)
  - [WebSocket Secure](./osi-layer-7/websocket-secure.md)
- [Telnet](./osi-layer-7/telnet.md)
- [BGP](./osi-layer-7/bgp.md)
- [DHCP](./osi-layer-7/dhcp.md)
- [POP, IMAP](./osi-layer-7/pop-imap.md)
- [SMTP](./osi-layer-7/smtp.md)
- [Tor](./osi-layer-7/tor.md)
- [iCloud Private Relay](./osi-layer-7/icloud-private-relay.md)
- [LDAP]()

---

# Protocols: OSI Layer 6 — Presentation

- [Overview](./osi-layer-6/overview.md)
- [TLS](./osi-layer-6/tls/index.md)
  - [Workflow](./osi-layer-6/tls/workflow.md)
  - [Setup: Client-server](./osi-layer-6/tls/setup.md)
  - [TLS cipher suite](./osi-layer-6/tls/cipher-suite.md)
  - [SSL proxying](./osi-layer-6/tls/ssl-proxying.md)
  - [SSL pinning](./osi-layer-6/tls/ssl-pinning.md)
- [SSH](./osi-layer-6/ssh/index.md)
  - [Workflow](./osi-layer-6/ssh/workflow.md)
  - [Setup: Client-server](./osi-layer-6/ssh/setup.md)
- [DTLS](./osi-layer-6/tls/dtls.md)

---

# Protocols: OSI Layer 5 — Session

- [SOCKS](./osi-layer-5/socks/index.md)

---

# Protocols: OSI Layer 4 — Transport

- [Overview](./osi-layer-4/transport-layer.md)
- [TCP](./osi-layer-4/tcp.md)
  - [Workflow](./osi-layer-4/tcp/3-way-handshake.md)
  - [Message format](./osi-layer-4/tcp/message-format.md)
  - [Tools](./osi-layer-4/tcp/inspect.md)
- [UDP](./osi-layer-4/udp.md)
- [QUIC](./osi-layer-4/quic.md)
- [SSH tunnel](./osi-layer-4/ssh/ssh-tunnel.md)
- [Unix domain socket]()

---

# Protocols: OSI Layer 3 — Network

- [Overview](./osi-layer-3/network-layer.md)
- [IP](./osi-layer-3/ipv4.md)
  - [Workflow: Message routing](./osi-layer-3/ip/routing.md)
  - [Message format](./osi-layer-3/ip/ip-packet.md)
  - [IP addressing](./osi-layer-3/ip/ip-addresses.md)
  - [Fragmentation and reassembly](./osi-layer-3/ip/fragmentation-and-reassembly.md)
- [ICMP](./osi-layer-3/icmp.md)

---

# Protocols: OSI Layer 2 — Link

- [802.11 Wi-Fi]()
- [802.3 Ethernet]()

---

# Protocols: OSI Layer 1 — Physical

- [Overview](./osi-layer-1/index.md)
- [3G]()
- [4G]()
- [Optical fibre]()
- [ARP](./osi-layer-1/arp.md)
- [NFC]()
- [Bluetooth]()

---

# ?

- [Access networks](./access-networks.md)
- [Router](./osi-layer-3/router.md)

---

# Others

- [Type a URL on the browser](./others/what-happens.md)
- [Troubleshooting](./others/troubleshooting.md)
- [Compression]()
- [MIME]()
- [Noise protocol](./others/noise-protocol.md)
- [Signal protocol](./others/signal-protocol.md)
