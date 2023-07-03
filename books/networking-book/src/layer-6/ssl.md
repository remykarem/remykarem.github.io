# SSL/TLS

Secure Sockets Layer / Transport Layer Security

TLS _typically_ operates on top of TCP.

This protocol provides

- **Privacy** — data is encrypted
- **Data integrity** — verifying data is not tampered with before reaching its intended recipient
- **(Server) authentication** — make sure when the client connects to the server, the server is indeed who it is

~~~admonish note title="Client _and_ server authentication"
While server authentication is the most common, the client can also be additionally requested for authentication. This is known as **mTLS** or mutual TLS.
~~~

For this protocol to work, the server must first have an **SSL certificate** that contains:

- the server hostname(s)
- a public key 
- an expiration date
- signature(s) from a Certificate Authority (signed with their private key)

This certificate is issued _out-of-band_ by a **Certificate Authority** (CA).

To request for an SSL certificate from a CA, the owner of the server needs to submit a **Certificate Signing Request** (CSR) to the CA. The workflow is as such:

1. The server generates a key pair.
2. Generate a CSR using the private key. A CSR requests information like:
      * the server hostname
      * public key (gotten from private key)
      * company details
      * country
3. Submit the CSR to the CA.
4. The CA validates the domain ownership (via DCV etc.).

Once validated, the CA will issue the SSL certificate to the owner of the server (via email etc.).
