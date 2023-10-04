# Summary

[Preface](./preface.md)
[OSI model](./osi-model.md)

---

# Topology

- [Cloud](./cloud-topology.md)

---

# Network architectures

- [Client-server]()
- [P2P]()
- [Hybrid]()
- [Data centres]()

---

# Software/hardware layers

- [Application]()
- [Socket](./software-hardware-layers/socket.md)
  - [SOCK_STREAM](./software-hardware-layers/socket/sock-stream.md)
  - [SOCK_DGRAM](./software-hardware-layers/socket/sock-dgram.md)
  - [SOCK_RAW](./software-hardware-layers/socket/sock-raw.md)
- [Route table](./software-hardware-layers/route-table.md)
- [Network interface](./software-hardware-layers/interfaces.md)
- [Network Interface Controller](./software-hardware-layers/network-interface-card.md)

---

# Tunnel protocols

- [VPN goals]()
- [VPN](./vpn/index.md)
  - [IPSec](./vpn/ipsec.md)
    - [IKE]()
    - [IKEv2](./vpn/ikev2.md)
  - [SSL VPN]()
  - [OpenVPN](./vpn/openvpn.md)
  - [WireGuard](./vpn/wireguard.md)
- [Cloudflare tunnel]()
- [Split tunnelling](./vpn/split-tunnelling.md)

---

# Firewalls

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
- [SSH](./osi-layer-7/ssh.md)
- [DNS](./osi-layer-7/dns/index.md)
  - [Setup: DNS registrars]()
  - [Setup: DNS servers]()
  - [Setup: Client-server]()
  - [Workflow]()
  - [Record types](./osi-layer-7/dns/record-types.md)
  - [DoH](./osi-layer-7/dns/doh.md)
  - [DoT]()
- [SFTP](./osi-layer-7/sftp.md)
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
  - [Setup: Trust chain](./osi-layer-6/tls/trust-chain.md)
  - [Setup: Client-server](./osi-layer-6/tls/setup.md)
  - [Workflow]()
  - [DTLS]()
  - [TLS cipher suite](./osi-layer-6/tls/cipher-suite.md)
  - [SSL proxying](./osi-layer-6/tls/ssl-proxying.md)
  - [SSL pinning](./osi-layer-6/tls/ssl-pinning.md)
- [SSH](./osi-layer-6/ssh/index.md)
  - [Setup: Client-server](./osi-layer-6/ssh/setup.md)
  - [Workflow](./osi-layer-6/ssh/workflow.md)

---

# Protocols: OSI Layer 5 — Session

- [SOCKS]()

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

---

# Protocols: OSI Layer 3 — Network

- [Overview](./osi-layer-3/network-layer.md)
- [IP](./osi-layer-3/ipv4.md)
  - [Workflow: Message routing](./osi-layer-3/ip/routing.md)
  - [Message format](./osi-layer-3/ip/ip-packet.md)
  - [Host addressing](./osi-layer-3/ip/ip-addresses.md)
  - [Fragmentation and reassembly](./osi-layer-3/ip/fragmentation-and-reassembly.md)
- [ICMP](./osi-layer-3/icmp.md)

---

# Protocols: OSI Layer 1 — Datalink

- [Overview](./osi-layer-1/index.md)
- [ARP](./osi-layer-1/arp.md)
- [802.11 Wi-Fi]()
- [802.3 Ethernet]()
- [NFC]()
- [Bluetooth]()

---

# ?

- [Access networks](./access-networks.md)
- [Router](./osi-layer-3/router.md)

---

# Unclassified

- [Standards](./standards.md)
- [Type a URL on the browser](./what-happens.md)
- [Troubleshooting](./troubleshooting.md)
- [Compression]()
- [MIME]()
