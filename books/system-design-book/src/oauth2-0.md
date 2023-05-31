# OAuth 2.0

OAuth 2.0 is primarily an _authorisation_ protocol.

It might be easier to first think in terms of accessing a *resource*:

* **resources** — eg. photos.
* **resource owner** — the owner of the photos
* **resource server** — the server that hosts the photos

An application that makes use of such photos would need to access those resources on behalf of the users' photos. This application is the **client**. 

```admonish note title="Client vs. resource server"
The application can be the same server that hosts the photos.
```

Finally, the server that authenticates the user is called an **authorization server**.

OAuth 2.0 uses *tokens* to represent several states:
* **access token** — a credential used by an application to *access* an API
* **refresh token**
