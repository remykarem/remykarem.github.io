# Proxy servers

`CONNECT`

~~~admonish example
```bash
curl --proxy "http://user:pwd@127.0.0.1:1234" "https://httpbin.org/ip"
```

Note that in cURL, the default proxy protocol is HTTP.
~~~

Protocols
* SOCKS4, SOCKS5
* HTTP
* HTTPS
