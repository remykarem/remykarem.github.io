# HTTP tunnel

Encapsulating another protocol's data using HTTP

This involves 3 components:
* Client — Initiates the communication with the encapsulated data in HTTP request
* Proxy server — Decapsulates the data and forwards it to the server
* Server

The `HTTP CONNECT` method is often used to set up an HTTP tunnel.

A common protocol that is being tunnelled is HTTPS (aka TLS tunnel):

1. **Client sends an HTTP CONNECT request to proxy server**

2. **Proxy server opens a TCP/IP connection to the desired server**

    At the same time, the proxy server sends an HTTP 200 OK response back to the client

3. **Client starts a TLS handshake with the web server**

    Note that the request is sent through the open connection on the proxy server. The proxy server simply relays the data.

4. **Once TLS handshake is complete, the client and the server can securely exchange HTTP requests and responses**

~~~admonish note title="On using HTTP CONNECT"
HTTP clients automatically uses the HTTP CONNECT method (transparent to user) when it detects that it is connected to a proxy server.
~~~
