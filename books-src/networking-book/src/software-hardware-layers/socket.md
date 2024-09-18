# Socket

aka POSIX socket, BSD socket

See [Socket](https://remykarem.github.io/books/os-book/socket.html) for more.

A socket is a software object _provided by the OS_ to allow applications to send and receive data across the network.

~~~admonish info title="OSI model"
Sockets is OSI Layer 4 and 5.
~~~

Sockets are an abstraction of the
1. route table, and
2. network interface,
hence encompassing Layer 3 (`SOCK_RAW`) and Layer 4 (`SOCK_STREAM` and `SOCK_DGRAM`; TCP and UDP respectively).
