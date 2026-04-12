# CORS

Cross-origin resource sharing

https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/

- SOP & CORS only applies to browser!


For a successful cross-origin resource sharing,

1. Proper response headers from the server

    ```bash
    Access-Control-Allow-Origin: *
    ```

2. Proper request headers from the client

## Preflight request

A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and server is aware using specific methods and headers. It is an `OPTIONS` request.

Preflight request is **only applicable for "non-simple" requests** like 
* PUT/DELETE/PATCH methods
* Headers with Authorization and Content-Type application/json

Request:

```
Access-Control-Request-Method: **GET** (the actual request is a GET)
Access-Control-Request-Headers: ...
Origin: ...
```

Response:

```
Access-Control-Allow-Origin: ...
Access-Control-Allow-Methods: ...
Access-Control-Allow-Headers: ...
Access-Control-Max-Age: ...
```
