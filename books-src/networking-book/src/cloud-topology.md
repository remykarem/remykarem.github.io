# Cloud

![Cloud topology](./cloud-topology.png)

### Route 53

Mapping of domain name to AWS resource.

### VPC 

### Subnet

A subnet is associated with a VPC.

### Internet gateway

An Internet gateway is associated with a VPC.

### NAT gateway

A NAT gateway must be associated with a public subnet. 

It is used to enable instances in a _private subnet_ to initiate IPv4 outbound traffic to internet or other services. 

it only handles the inbound responses from those outbound requests. 

### Route table

A **main route table** is created for a VPC by default. 

Any subnets created within this VPC can either be associated with either
* the main route table (default), or
* a **custom route table**

