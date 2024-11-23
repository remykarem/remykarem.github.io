# HTTP client

~~~admonish warning title="Expensive"
Spinning up an HTTP client is usually expensive.
~~~

In established libraries, an HTTP client usually maintains
* Connection pool
    * Every connection = socket
* DNS resolver
    * DNS lookups may be cached
* SSL/TLS handshake
    * CPU usage and network latency
which use up resources

Connection re-use is important
* overhead of establishing new connections
    * TCP handshake
    * TLS handshake
    * DNS resolution
    * Opening a new socket
* More control over no of connections. There is a limit to no of sockets that can be opened. Exhausting will prevent new connections from being established. 
