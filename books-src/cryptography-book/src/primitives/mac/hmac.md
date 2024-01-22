# HMAC

[RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104, [RFC 4868](https://datatracker.ietf.org/doc/html/rfc4868)

Deterministic!

$$
\text{(message, key)} \rightarrow_\text{hashfunction} \text{mac}
$$

~~~admonish info title="AWS SigV4"
AWS SigV4 uses HMAC-SHA256 to create a signature that is included in the HTTP request.
~~~

~~~admonish example title="OpenSSL"
```
echo -n "someplaintext" | openssl dgst -sha384 -hmac "secretkey"
```

See `man openssl-dgst`.
~~~
