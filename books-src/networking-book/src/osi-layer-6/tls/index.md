# TLS

Transport Layer Security, SSL (Secure Sockets Layer)

TLS _typically_ operates on top of TCP. It relies on the Chain of Trust infrastructure.

This protocol provides:

- **Privacy** — data is encrypted
- **Data integrity** — verifying data is not tampered with before reaching its intended recipient
- **Server authentication** — make sure when the client connects to the server, the server is indeed who it is

  ~~~admonish note title="Client _and_ server authentication"
  While server authentication is the most common, the client can also be additionally requested for authentication. This is known as **mTLS** or mutual TLS.
  ~~~

## References:
* [https://tls13.xargs.org/](https://tls13.xargs.org/) (Visualisation)
  
