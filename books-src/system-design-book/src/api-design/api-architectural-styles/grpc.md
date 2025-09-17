# RPC

RPC is designed to take advantage of features of HTTP/2, like bidirectional streams.

```admonish tip
gRPC is said to be 5x faster than JSON.

[Source](https://blog.bytebytego.com/p/ep32-how-does-grpc-work)
```

~~~admonish tip
RPC is usually used in microservice mesh because:
* binary
* built-in streaming
~~~

Examples
* Netflix[^netflix]

---

[^netflix]: [Practical API Design at Netflix](https://netflixtechblog.com/practical-api-design-at-netflix-part-1-using-protobuf-fieldmask-35cfdc606518)
