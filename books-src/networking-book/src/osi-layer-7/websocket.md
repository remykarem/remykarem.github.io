# WebSocket

[RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455)

`ws://`

WebSocket is built on top of TCP.

A WebSocket connection is preferred when we need a persistent bi-directional ("**full duplex**") low latency data flow from the client to the server and back.

A WebSocket connection is established **by upgrading an existing HTTP or HTTPS connection**. As such it uses port 80 or 443. 

Upgrading an HTTP connection might look like this:

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

~~~admonish example title="Example applications"
Chat apps, real-time social streams, browser-based multiplayer games.
~~~
