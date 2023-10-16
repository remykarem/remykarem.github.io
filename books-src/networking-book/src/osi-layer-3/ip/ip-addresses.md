# Host addressing

An IP address is mapped to a _network interface_ in the host.

~~~admonish
Hosts (computers) don’t have IP addresses. Network interfaces do.
~~~

32-bit numbers written as 4 octets (decimals), separated by `.` Eg. 1.2.3.4.

To identify each device in the world-wide web, Internet Assigned Numbers Authority (IANA) assigns IPV4 address as a unique identifier for each device on the Internet. Length of the IP address is 32 bits. Hence there are

~~~admonish tip
In Linux, you can get your IP address with

```
ipconfig getifaddr en0
```
~~~

## The CIDR notation

The CIDR notation is used to express a range of IP addresses.

## Special addresses

**Self-identification**

0.0.0.0/8

**Loopback address**

127.0.0.1/8

Each IPv4 host has a loopback interface that is not attached to a data link layer. This allows processes running on a host to use TCP/IP to contact other processes running on the same host. This is very useful for testing purposes.

**Private addresses**

10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16

Private networks that are not directly attached to the Internet.

**Link-local address**

169.254.0.0/16

~~~admonish question
What's this...
~~~
