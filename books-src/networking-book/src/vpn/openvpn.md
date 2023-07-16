# OpenVPN

OpenVPN is a protocol for VPNs.

It works by creating a secure connection between two points ("tunnel").

Workflow:

1. TLS handshake
2. Authentication
3. Negotiate session key
4. Tunnelling (encryption & decryption)

    The original IP packet is encrypted and becomes the payload of a new IP packet. The header in the new IP packet has the VPN server as its destination.
