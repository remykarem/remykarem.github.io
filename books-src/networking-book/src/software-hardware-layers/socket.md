# Socket

A socket is a software object _provided by the OS_ to allow applications to send and receive data across the network.

```
man 2 socket
```

~~~admonish info title="OSI model"
Sockets is OSI Layer 4 and 5.
~~~

Sockets are an abstraction of the
1. route table, and
2. network interface,
hence encompassing Layer 3 (`SOCK_RAW`) and Layer 4 (`SOCK_STREAM` and `SOCK_DGRAM`; TCP and UDP respectively).

The system call allows you to:

* Create socket
* Bind socket to an IP address
* Connect socket to an IP address
* Write data to socket — using the routing table
* Read data from socket — using the destination IP address and port number from the data

```admonish note title="Socket vs. Unix domain socket"
A socket is not the same as the Unix domain socket.
```

```admonish note title="Socket vs. port"
A socket is not a port.

A port is another software construct defined by the OS to differentiate between different programs or processes running on the same machine.
```

```admonish note title="Socket vs. file"
A socket is not a file.

However, it uses file-like semantics like file descriptors.
```

