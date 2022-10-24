# Digital certificate

CSR

openssl

[http://www.cs.toronto.edu/~arnold/427/19s/427_19S/tool/ssl/notes.pdf](http://www.cs.toronto.edu/~arnold/427/19s/427_19S/tool/ssl/notes.pdf)

![Untitled](csr.png)

[https://superuser.com/questions/620121/what-is-the-difference-between-a-certificate-and-a-key-with-respect-to-ssl](https://superuser.com/questions/620121/what-is-the-difference-between-a-certificate-and-a-key-with-respect-to-ssl)

A certificate contains

- public key
- name of the issuer etc.

A certificate is signed by a CA using CA's private key (other people like browsers usually already have their public keys)

---

A certificate authority is a trusted 3rd party that does:

- Issues certificates
- Confirms identity of the certificate owner
- Provides proof that the certificate is valid

![req](req.png)

Signed certificates can be used for different security protocols:

- HTTPS
- SSH

Nearly every modern browser checks that a server certificate is issued by a trust certificate authority. I the browser detects that the server certificate is self-signed or not signed by an approved trusted certificate authority then visitors will receive a. Warning that the server certificate cannot be trusted.
