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

## Address classes

| Class | Length of subnet ID | Range | Default subnet mask | Remarks |
| --- | --- | --- | --- | --- |
| Class A | 1 octet | 0.0.0.0 to 127.255.255.255 | 255.0.0.0 |  |
| Class B | 2 octets | 128.0.0.0 to 191.255.255.255 | 255.255.0.0 |  |
| Class C | 3 Octets | 192.0.0.0 to 223.255.255.255 | 255.255.255.0 |  |
| Class D |  |  |  | For multicast |
| Class E |  |  |  | Reserved |

## Subnetting

- Subnetting based on octets (deprecated).
- Variable-length subnetting.

| Subnet | No. of possible addresses | Lowest address | Highest address |
| --- | --- | --- | --- |
| 10.0.0.0/30 | 2^2 | 10.0.0.0 | 10.0.0.3 |
| 192.0.2.0/24 | 2^8 | 192.0.2.0 | 192.0.2.255 |

## Address assignment using subnetting

- Subnet mask: host bits set to 0
eg. 203.128.22.0 and a host can be 203.128.22.7
- Network address: host bits set to 0
eg. 203.128.22.0.
- Broadcast address: host bits set to 255 (all binary 1’s)
eg. 203.128.22.255
- Host address: host bits
eg. 203.128.22.18

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
