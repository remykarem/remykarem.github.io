# How it works

A VPN works by
1. establishing a tunnel, and
2. encrypting the data.

## Establishing tunnel

1. **Client establishes connection with server**

   This is made using the existing network interface. 

   Different protocols establish the connection differently.

2. **Client initialises virtual network interface**

   The establishment of a VPN tunnel involves creating a virtual network interface on the client device.

   The VPN client software will then serve as an intermediary between the newly created virtual network interface and the physical network interface.

3. **Client updates host routing table**

   This update is based on the server's assignment of IP address to the client.

   The VPN server acts like a DHCP server.

4. **Client updates DNS settings**

~~~admonish question title="Why can't we just use existing network interfaces?"
Using a separate interface for the VPN allows for more precise control over network traffic and makes the implementation of the VPN features more straightforward.
~~~

## Data transmission

1. **Client encrypts data**

   Data is directed to this virtual network interface and then encrypted (and possibly compressed too).

   Different protocols encrypt the data differently.

   Some VPN protocols like OpenVPN **encrypt the entire packet**, then wraps it in a new one.

3. **Server decrypts data**

   The server receives the encrypted data and decrypts it.

4. **Server forwards packets if needed**

   The VPN server checks its own routing table to determine whether the packet should be forwarded.

~~~admonish note
The idea of a VPN can be extended to Cloudflare's edge.
~~~
