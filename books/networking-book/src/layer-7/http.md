# HTTP

Hypertext Transfer Protocol

HTTP is a client-server application layer protocol.

HTTP uses TCP as its underlying transport protocol so that messages are guaranteed to get delivered in order. A connection must first be made.

---

## Types of HTTP connections

- Non-persistent HTTP connections
  1. The client initiates a TCP connection with a server.
  2. The client sends an HTTP request to the server.
  3. The server retrieves the requested resource from its storage etc. and sends it back to the client.
  4. THe client receives the resource, say an HTML. If that file has references to more resources, steps 1-4 are repeated for each of those.
  5. The server closes the TCP connection.
- Persistent HTTP connections
  Because an HTTP session typically involves multiple non-persistent HTTP connections, the TCP connections which are established and torn down multiple times are inefficient. Persistent HTTP connections are developed such that the duration of the time before the server closes the connection is configurable. Hence, only 1 TCP connection is used to serve multiple requests.

## HTTP messages

### HTTP methods

- GET
- POST
- HEAD
- DELETE
- PUT
- OPTIONS
  - Identify allowed request methods (eg. GET etc.). Response contains an `Allow` header.
  - Preflighted requests in CORS

### HTTP headers

#### Request headers

| Header         | What it means                 | Example               |
| -------------- | ----------------------------- | --------------------- |
| Host           | Domain                        | `example.com`         |
| User-Agent     | Name of HTTP client           |
| Authorization  | Field for authentication etc. |
| Content-Type   | MIME type of body             | `application/json`    |
| Content-Length | Length of body in bytes       | `34`                  |
| Referer        | ???                           | `http://example.com`  |
| Accept         | MIME type for the response    | `image/png`           |
| Connection     | Keep TCP connection open      | `close`, `keep-alive` |
| Cookie         | -                             | `user=raimi`          |

#### Response headers

| Header         | What it means                  | Example                         |
| -------------- | ------------------------------ | ------------------------------- |
| Set-Cookie     | Set a cookie                   | `user=raimi; HttpOnly`          |
| Content-Type   | MIME type of body              | `application/json`              |
| Content-Length | Length of body in bytes        | `34`                            |
| Date           | When response was sent         | `Thu, 29 Jun 2023 15:08:47 GMT` |
| Last-Modified  | When content was last modified | `Thu, 29 Jun 2023 15:08:47 GMT` |
| Connection     | Keep TCP connection open?      | `close`, `keep-alive`           |

#### Security headers

| Header                    | What it means          | Example                                                |
| ------------------------- | ---------------------- | ------------------------------------------------------ |
| Strict-Transport-Security | Load website in HTTPS? | `max-age=31536000 includeSubDomains`                   |
| Content-Security-Policy   | Load assets?           |                                                        |
| X-Frame-Options           | Can website be framed? | `DENY`, `SAMEORIGIN`, `ALLOW-FROM https://example.com` |
| X-Content-Type-Options    | MIME-sniff resource?   | `nosniff`                                              |
| Referrer-Policy           | ??                     | `no-referrer`                                          |

~~~admonish note title="Cookie"
Cookies are unique string identifiers that can be stored on the client’s browser to keep track of client’s state (for the purpose of logging in, serving customised content). They are set by the server through HTTP headers. After the cookie is set, it’s sent along with subsequent HTTP requests to the same server to allow the server to know who is contacting it.

Things involved in the process of setting and using cookies: HTTP request, HTTP response, cookie file on the client’s browser and the database of cookie-user values on the server

Cookie file contains:

- Website’s domain
- String value of cookie
- Date that cookie expires

```
Set cookie: session=44ecb091; path=/servlets
```

Note: 3rd party cookies are cookies set for domains that are not being visited. Blocking them is not enough due to several workarounds like respawning cookies etc.
~~~


- Content-Security-Policy: XSS, data injection
- X-Frame-Options: Clickjacking
- X-Content-Type-Options: XSS
- Referrer-Policy: Privacy

Resources:
* [https://securityheaders.com](https://securityheaders.com/)
* [https://report-uri.com/home/analyse/](https://report-uri.com/home/analyse/)
