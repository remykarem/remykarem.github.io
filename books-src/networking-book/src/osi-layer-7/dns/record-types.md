# Record types

## A Record (Address Record)

Associates a domain name or subdomain with an IPv4 address (32-bit / 4 bytes / 4 octets).

```
name            host    value         
------------------------------------
educative.io    @       104.20.7.183
```

## CNAME Record (Canonical Name)

Associates a domain name with an alias of another canonical name.

```
host    value (canonical name)       
------------------------------
www     educative.io
```

## MX Record

An MX (Mail) record is used to direct email to a specific mail server. Like a CNAME record, MX entries must point to a host name and should not be pointed directly to an IP address.

```
name=hostname
value=mailserver associated with host
type=MX
```

## NS Record (DNS name server)

What DNS servers have the records for that domain?

```
name=
value=
type=
ttl=
```

## AAAA Record (“quad-A” record)

IPv6 (8 bytes)

```
name=
value=
type=
ttl=
```
