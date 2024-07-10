# Message format

## HTTP methods

- GET
- POST
- HEAD
- DELETE
- PUT
- OPTIONS
  - Identify allowed request methods (eg. GET etc.). Response contains an `Allow` header.
  - Preflighted requests in CORS

## HTTP headers

### Request headers

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

~~~admonish example title="User-Agent"

```text
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15
```

1. Product name
   * `Mozilla/5.0` — convention for modern browsers to indicate they are full-featured browsers
   * `Opera/9.80` — used by Opera browser
   * `Mozilla/4.0` — used by older versions of Internet Explorer
2. OS
   * `(Macintosh; Intel Mac OS X 10.15; rv:89.0)`
3. Layout engine
   * `AppleWebKit/XXX` (WebKit engine used by Chrome, Safari)
   * `Gecko/XXX` (Gecko engine used by Firefox)
   * `Trident/XXX` (Trident engine used by Internet Explorer)
   * `Blink/XXX` (Blink engine used by newer versions of Chrome and Opera)
4. Browser
   * `Chrome/XXX`
   * `Firefox/XXX`
   * `Safari/XXX`
   * `Edge/XXX`
5. Compatibility
~~~~

### Response headers

| Header         | What it means                  | Example                         |
| -------------- | ------------------------------ | ------------------------------- |
| Set-Cookie     | Set a cookie                   | `user=raimi; HttpOnly`          |
| Content-Type   | MIME type of body              | `application/json`              |
| Content-Length | Length of body in bytes        | `34`                            |
| Date           | When response was sent         | `Thu, 29 Jun 2023 15:08:47 GMT` |
| Last-Modified  | When content was last modified | `Thu, 29 Jun 2023 15:08:47 GMT` |
| Connection     | Keep TCP connection open?      | `close`, `keep-alive`           |

### Security headers

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
