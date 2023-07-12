# Setup

For this protocol to work:
1. the server must have an **SSL certificate**
2. the client must have a list of ???

## 1. The server must have an SSL certificate

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

## 2. The client must have ???
