# Setup: Client-server

For this protocol to work,
* the server must have an **SSL certificate**
* the client must have a **the corresponding root CA's certificate**

There are also 3 entities at play:
1. the server
2. the client
3. the CA

## 1. The server must have an SSL certificate

This is an X.509 certificate.

- the server hostname(s)
- a public key 
- an expiration date
- signature(s) from a CA (signed with their private key)

This certificate is issued _out-of-band_ by a CA.

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

## 2. The client must have the corresponding root CA's certificate

The client needs to trust the CA that issued the server's certificate.

To do that, the client needs to have the corresponding CA certificate or the root CA (usually this).
