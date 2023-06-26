# HTTPS

[https://howhttps.works](https://howhttps.works/)

- Authenticity
- Confidentiality or privacy
- Integrity

# 1. Server

1. Generate private key
2. Use private key to generate CSR. Includes info like
    1. **Website’s URL**
    2. public key (gotten from private key)
    3. Company details
    4. Country

https://www.namecheap.com/support/knowledgebase/article.aspx/9592/14/generating-a-csr-on-amazon-web-services-aws/

# 2. Sectigo (via Namecheap)

1. Enter CSR code
2. Confirm that you own the domain (DCV)https://www.namecheap.com/support/knowledgebase/article.aspx/9637/68/how-can-i-complete-the-domain-control-validation-dcv-for-my-ssl-certificate/?_ga=2.260912141.1610096874.1622123522-993745155.1616320593
3. Receive the SSL cert in email. SSL cert contains info like:
    1. The website’s URL
    2. **Public key (from the private key that we generated)**
    3. Certificate authority (certificate issuer)
    4. Expiry date

# 3. Server

1. Concatenate all certs that you have (???)
2. Run server and specify cert and private_key

# 4. Browser

![HTTPS](./https.png)

1. Browser visits an https website
2. Server replies
3. Server sends back a cert
4. Server key exchange, server gives client public key
5. -
Browser then verifies:
    1. Checks if hostname in cert is same as URL
    2. Checks if CA is valid
    3. Checks if cert is expired
1. Browser and server creating a **symmetric key** ("session key") that can be used for encrypting future data.
2. -
3. -
4. -
5.  Browser and server created a **symmetric key** ("session key") that can be used for encrypting future data.

——————————

1. TLS handshake
    1. Exchange public key (asymmetric encryption)
    2. Generate session keys (symmetric encryption)
2. Exchange info using session keys

——————

https://decoder.link/sslchecker/

https://www.cloudflare.com/learning/ssl/how-does-ssl-work/

https://www.thesslstore.com/blog/how-does-https-work/

https://www.ssllabs.com/ssltest/analyze.html

https://hstspreload.org/

https://stackoverflow.com/a/67197597/4570466
