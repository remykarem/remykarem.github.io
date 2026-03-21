# Authentication

## Basic authentication

By default, when the browser receives

```text
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Restricted"
Content-Length: 0
```

it will display a modal prompting for username and password.
