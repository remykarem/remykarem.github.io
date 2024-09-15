# HTTP

Hypertext Transfer Protocol

HTTP is a client-server application layer protocol.

HTTP/2 and earlier use TCP as its underlying transport protocol so that messages are guaranteed to get delivered in order. A connection must first be made.

---

~~~admonish example title="Docker API"
Docker API is like "HTTP over Unix socket".
~~~

## Types of HTTP connections

- Non-persistent HTTP connections
  1. The client initiates a TCP connection with a server.
  2. The client sends an HTTP request to the server.
  3. The server retrieves the requested resource from its storage etc. and sends it back to the client.
  4. THe client receives the resource, say an HTML. If that file has references to more resources, steps 1-4 are repeated for each of those.
  5. The server closes the TCP connection.
- Persistent HTTP connections
  Because an HTTP session typically involves multiple non-persistent HTTP connections, the TCP connections which are established and torn down multiple times are inefficient. Persistent HTTP connections are developed such that the duration of the time before the server closes the connection is configurable. Hence, only 1 TCP connection is used to serve multiple requests.

https://jviide.iki.fi/http-redirects
