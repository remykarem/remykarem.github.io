# SSL/TLS

Secure Sockets Layer / Transport Layer Security

https://tls13.xargs.org/

Used for:

1. Privacy: SSL encrypts data transmitted across the web
2. Authentication: make sure when you connect to google it’s actually Google
3. Data integrity: verifying data is not tampered with before reaching its intended recipient

IN other words, HTTPS = HTTP + TLS.

**SSL certificate**

A SSL certificate contains:

- the hostname(s) it’s valid for
- a public key
- an expiration date
- signature(s) from a CA

**How SSL is issued**

CA (Certificate Authority), server, web browser

1. CA signs the certificate with its own private key.
2. Server installs certificate.

Free certificates are just as secure

WHo can sign? Certificate authority or you.

![SSL](./ssl.png)

See a server's SSL cert

```
openssl s_client -connect jvns.ca:443 -servername jvns.ca
```
