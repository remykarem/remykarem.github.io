# Route table

Maps a **destination address** to the **gateway** (i.e. next hop IP address) or **host** (intended destination), which is tied to a particular network interface.

~~~admonish info title="OSI model"
Routing is parked under OSI Layer 3.
~~~

This is maintained via a **routing table**:

| Destination | Gateway / Host       | Network interface |
| ----------- | --------------------------- | -- |
| 127.0.0.1   | 127.0.0.1                   | lo0 |
| (others)    | 192.168.1.254 (home router) | en0 |

````admonish tip title="View routing table"
You can see the routing table using

```
netstat -rn
```

Output:

```
Internet:
Destination        Gateway            Flags           Netif Expire
default            192.168.1.254      UGScg             en0
127                127.0.0.1          UCS               lo0
127.0.0.1          127.0.0.1          UH                lo0
169.254            link#5             UCS               en0      !
```

The headers have the following meaning:
* `Destination`: The destination IP address or network. `Default` is the one that is used when no other route matches the destination IP address.
* `Gateway`: The next hop IP address that will be used to reach the destination. `link#X` refers to the index `X` of an interface when you run `ifconfig` on macOS.
* `Flags`: A set of flags that give more information about the route. For example, `U` means the route is up, `G` means to use this route as a gateway, `H` means the destination is a host, etc.
* `Refs`: The reference count (how many routes refer to this route).
* `Use`: The count of the number of packets sent using this route.
* `Netif`: The network interface used for this route.
* `Expire`: The time in seconds until the route expires (only used for some types of routes).

````

````admonish hint title="Find default gateway"
In macOS, use `route`:

```
route -n get default
```

In Linux:

```
ip route show default
```
````

````admonish hint title="Find gateway for an IP address"
In macOS, use `route`:

```
route -n get <ipaddress>
```
````
