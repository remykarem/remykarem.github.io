# Same-origin policy

A browser security policy where
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


~~~admonish note
Resources like third-party libraries and images etc. are fine because **they are linked from the document source**.
~~~

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy)

One method of accessing cross-origin resources is CORS.
