# Workflow

After TCP handshake, this is what happens:

1. Protocol version exchange

2. Algorithm negotiation

3. **Server authentication**

    The server sends its public host key (initial connection only)

    If the client has never connected to this server before, it uses the "trust on first use" model and asks the user to confirm the server's key fingerprint. If the client has connected to this server before, it checks the server's public key against the one it has saved from previous connections.

4. **Session key (shared secret)**
    
    A key exchange algorithm is used to set up a shared secret. The server creates a key pair and sends the client the public key (in this session itself). See key exchange algorithm for more.

    Both the client and the server will then have the same shared secret.
    
    This secret will be used as a key for _symmetric encryption_ for the remainder of the session to encrypt the communication.
    
5. **Client authentication**
    
    This makes use of the key pair that was previously set up out-of-band.

    In this authentication, the client must prove that it can decrypt the message that the server encrypted.

    1. The server uses the public key to encrypt some message.
    2. The client calculates a hash which is a function of the decrypted message and other metadata, then sends to server.
    3. Server compares with its own calculation of hash (which should be the same).

6. Session establishment

7. Session termination
