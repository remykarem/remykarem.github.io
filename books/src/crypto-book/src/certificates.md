# Certificates

A certificate authority is a trusted 3rd party that does:

- Issues certificates
- Confirms identity of the certificate owner
- Provides proof that the certificate is valid

![req](req.png)

Signed certificates can be used for different security protocols:

- HTTPS
- SSH

Nearly every modern browser checks that a server certificate is issued by a trust certificate authority. I the browser detects that the server certificate is self-signed or not signed by an approved trusted certificate authority then visitors will receive a. Warning that the server certificate cannot be trusted.
