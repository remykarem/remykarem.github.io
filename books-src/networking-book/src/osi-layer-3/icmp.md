# ICMP

Internet Control Message Protocol

**Messages**

- Destination unreachable
    - Network unreachable
    - Host unreachable
    - Protocol unreachable
    - Port unreachable
- Fragmentation needed
- Redirect
- Time exceeded
- Echo request and echo reply
- …

~~~admonish example title="Use case"
ICMP is not commonly used for exchange of data.

Instead it's used as diagnostics. ping and traceroute use this.
~~~
