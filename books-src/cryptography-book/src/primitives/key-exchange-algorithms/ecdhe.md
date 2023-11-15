# ECDHE

Ephemeral ECDH

The math stays the same. The difference is that a new EC key pair is generated for every session.

Given the recipient's public key, what does the sender do?

1. Create a new key pair (KEK).

2. Generate a shared secret (DEK) from the sender's private key and the recipient's public key.

3. Encrypt the data using the DEK.

4. Encrypt the DEK.

5. Send the (i) encrypted data, (ii) the encrypted DEK, and (iii) the sender's public key as the payload.
