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

## On REST purity and hybrid

It almost impossible to always modelling APIs as _resources_ only, for the sake of it. 

Modeelling as non-resource operations is inevitable. Here are some cases:

* **Commands (non-resource operations)**
    * `POST /password/reset`
    * `POST /auth/login`
* **Batch operations**
    * `POST /users/bulk-import`
* **Business workflows**
    * `POST /orders/123/confirm`
    * `POST /orders/123/cancel`

Some factors to consider:
* Clarity
* Simplicity
* Practicality

Forcing them into pure REST might confuse more than it helps.

Most real-world APIs are a _hybrid_ — largely RESTful, but with RPC-ish exceptions where it makes sense.
