# Same-origin policy

A browser security policy

**Network access**
* ❌ cross-origin reads are typically disallowed
* ✅ cross-origin embeddings are typically allowed:
  * `<script src="..."></script>`
      ~~~admonish warning
      This is exploitable!
      ~~~
  * `<link rel="stylesheet" href="…">`
* ✅ cross-origin writes are typically allowed

  ~~~admonish warning
  This is exploitable!
  ~~~

**Data storage access**
* Cookie sent with request — depends on `SameSite` attribute
* IndexedDB — ❌ no cross-origin reads or writes from JavaScript

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy)

One method of accessing cross-origin resources is CORS.
