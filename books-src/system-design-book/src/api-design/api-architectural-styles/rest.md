# REST

Representational state transfer

It is a design of the architecture of web services. The design revolves around having resources identified by logical URLs. This design dictates how you should interact with the resources.

```admonish note
REST is typically implemented over HTTP.
```

This implementations adheres to 6 REST architectural constraints:

- Client-server architecture
- Statelessness
- Cacheability: responses must implicitly or explicitly define themselves as cacheable or non-cacheable
- …

## Idempotency

Does not apply to POST.
