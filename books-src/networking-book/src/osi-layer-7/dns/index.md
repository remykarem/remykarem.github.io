# DNS

Domain Name System

DNS is a client-server application layer protocol that translates hostnames on the Internet to IP addresses. DNS is a server and a database.

~~~admonish tip title="Hosts file"
The hosts file is a simple text file that maps hostnames to IP addresses. It is checked before DNS is used, so entries in your hosts file will override DNS. 

```
cat /etc/hosts
```
~~~

Get my DNS server

```
cat /etc/resolv.conf   
```

~~~admonish tip
prints the DNS servers for the specified network service.
networksetup -getdnsservers <networkservice>
~~~

where nameserver is the local dns server

The computer has a Local resolver library to cache DNS mappings.

or

```
nslookup <anywebsite>
```

Query DNS records

```
nslookup                       
    -type=A/mx <website>
    -debug <website> 
host -t a/ns/mx <website>
dig @8.8.8.8 jvns.ca   @ means querying a 8.8.8.8 DNS server
dig +trace jvns.ca     Works like recursive DNS server
time dig @1.1.1.1 twitter.com
time dig @8.8.8.8 twitter.com
```

Reverse DNS lookup

```
dig -x 172.17.13.217
```

Chrome DNS lookup

chrome://net-internals/#dns

~~~admonish info title="On 'DNS propagation'"
"DNS propagation" is a misleading term. 

You're not actually waitinf for DNS records to propagate, you're waiting for cached records to expire.
~~~

# **DNS as distributed hierarchical database**

The DNS database is distributed

- To avoid single point of failure
- To handle massive amounts of traffic
- To make it closer to certain locations
- To handle different domain hierarchies


# **Anatomy of domain name**

discuss.educative.io

```
<sub-domain>.<second level domain>.<top-level domain>
```

# **Types of DNS servers**

- Authoritative nameserver: source of truth
- DNS recursor (eg. 8.8.8.8)


# **DNS**

Point of contact for DNS query

1. Local DNS cache (local resolver library)
2. DNS recursor (eg. hosted by ISP or 1.1.1.1)
3. Root nameservers
4. TLD nameservers (.edu server) and sub-domain nameservers (cs.stanford.edu server)
5. Authoritative nameservers (stanford.edu server) (last stop)


![DNS](dns.png)

# **DNS records / resource records**

A DNS record is a list of mappings of hostname to IP address. An entry has the format:

```
(name, value, type, ttl)
```

where TTL (time-to-live) specifies how long the entry can be cached by the client. The values of “name”, “value”, and “type” vary from record types.
