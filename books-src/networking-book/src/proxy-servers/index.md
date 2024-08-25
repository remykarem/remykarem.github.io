# Proxy servers

A proxy server acts as an intermediary between a client and a server. It **forwards** client requests to the target server, and returning the server's response to the client.

Additionally, it can also act as an MITM proxy that **intercepts** the client requests.

## Protocols
* HTTP — Handle HTTP traffic
* HTTPS — Handle encrypted HTTP traffic. This uses the HTTP `CONNECT` method to establish a tunnel to the destination server.
* SOCKS — Handle multiple protocols including any TCP and UDP traffic

## Authentication
* Basic authentication
* Digest authentication
* NTLM

~~~admonish tip title="Clients need to know if they're connecting via a proxy server"
Some clients rely on the system's proxy configuration by default (eg. browsers like Chrome).

For other clients, you'll need to see its settings (eg. Postman, IntelliJ, cURL).
~~~

~~~admonish example title="cURL"
```bash
curl --proxy "http://user:pwd@127.0.0.1:1234" "https://httpbin.org/ip"
```

Note that in cURL, the default proxy protocol is HTTP.

Environment variables: `http_proxy`, `https_proxy`.
~~~
