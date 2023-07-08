# Workflow

1. **Client begins TCP handshake** 
    
2. **Set up session key (shared secret)**
    
    A key exchange algorithm is used to set up a shared secret. The server creates a key pair and sends the client the public key (in this session itself). See key exchange algorithm for more.

    (typically in `~/.ssh/known_hosts`)

    Both the client and the server will then have the same shared secret.
    
    This secret will be used as a key for _symmetric encryption_ for the remainder of the session to encrypt the communication.
    
3. **Client authentication**
    
    This makes use of the key pair that was previously set up out-of-band.

    In this authentication, the client must prove that it can decrypt the message that the server encrypted.

    1. The server uses the public key to encrypt some message.
    2. The client calculates a hash which is a function of the decrypted message and other metadata, then sends to server.
    3. Server compares with its own calculation of hash (which should be the same).
    
~~~admonish note title="Other authentication methods"
Apart from asymmetric key pair, other authentication methods include:
- Password — the password is encrypted using the shared secret key
- SSH certificates
~~~
