# Key exchange

Can be used for key exchange. Client creates a secrets key and encrypts it with piblic key using one of the encryption algorithms. Server decrypts. 

Example of such key exchange is in SSH RSA.

## RSA key exchange for SSH
m = random bytes
c = (m^e mod n) (from client) rsaes-oaep
m = (c^d mod n) (what server gets)
m is the secret key

* client and server each computes h:
h = hash(m, pubkey, …) (nneded for future ssh session)
encrypteddata = m(plaintext)
