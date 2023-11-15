# ECDHE

Ephemeral ECDH

The math stays the same. The difference is that a new EC key pair is generated for every session.

Given the recipient's public key, what does the sender do?

1. Create a new key pair (KEK).

2. Generate a shared secret (DEK) from the sender's private key and the recipient's public key.

3. Encrypt the data using the DEK.

4. Send the (i) encrypted data, and (ii) the sender's public key (part of KEK) as the payload.

~~~admonish note
Note that the DEK (nor the encrypted DEK) is not sent over to the recipient.

This is because the recipient can calculate it themselves using the recipient's private key and the sender's public key.
~~~
