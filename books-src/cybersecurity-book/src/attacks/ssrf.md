# SSRF

Server-side request forgery

This usually happens if a URL has a component that allows that to happen.

Attacker can abuse some functionality on the server to
* access/read/write internal services
* access cloud metadata for cloud services ("cloud metadata service non-routable IP address")
* map the internal network (eg. by trying the different ports like 127.0.0.1:22, 127.0.0.1:6379)
* file retrieval (eg. `file:///etc/passwd`)

~~~admonish example

Suppose an application has an endpoint:

```
GET /update-profile-picture?url=https://nice-pictures.com/cat.png
```

But this URL can be abused
~~~
