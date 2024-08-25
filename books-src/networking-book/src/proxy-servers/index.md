# Proxy servers

A proxy server acts as an intermediary between a client and a server. It **forwards** client requests to the target server, and returning the server's response to the client.

Additionally, it can also act as an MITM proxy that **intercepts** the client requests.

~~~admonish example
```bash
curl --proxy "http://user:pwd@127.0.0.1:1234" "https://httpbin.org/ip"
```

Note that in cURL, the default proxy protocol is HTTP.

Environment variables: `http_proxy`, `https_proxy`.
~~~

## Protocols
* HTTP — Handle HTTP traffic
* HTTPS — Handle encrypted HTTP traffic. This uses the HTTP `CONNECT` method to establish a tunnel to the destination server.
* SOCKS — Handle multiple protocols including any TCP and UDP traffic
