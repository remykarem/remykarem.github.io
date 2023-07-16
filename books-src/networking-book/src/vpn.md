# VPN

1. **VPN client establishes connection with VPN server**

   This is made using the existing network interface. 

2. **VPN client creates a new network interface**

~~~admonish question title="Why can't we just use existing network interfaces?"
Using a separate interface for the VPN allows for more precise control over network traffic and makes the implementation of the VPN features more straightforward.
~~~

3. **VPN server assigns an IP address to the new network interface**
