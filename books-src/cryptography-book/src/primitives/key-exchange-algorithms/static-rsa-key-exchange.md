# Static RSA key exchange

RFC 5246

Can be used for key exchange. Client creates a shared secret and encrypts it with public key using one of the encryption algorithms. Server decrypts. 

~~~admonish warning
RSA key exchange does not offer perfect forward secrecy.
~~~
