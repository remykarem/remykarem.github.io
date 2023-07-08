# Basic auth

In Basic auth, the username and password are concatenated together (with a colon in between), then base64-encoded.

It is then included in the HTTP request under the `Authorization` header.

```
Authorization: Basic <username+password>
```

```admonish example title="Example"

For a username `hello` and password `world`, the header looks like this:

    Authorization: Basic aGVsbG87d29ybGQ=

```
