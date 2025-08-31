# Encryption algorithms

aka encryption schemes

Encryption provides [confidentiality](../../goals/confidentiality.md).

~~~admonish tip
In practice, a hybrid approach is often used where a symmetric key is exchanged or encrypted with an asymmetric key, and then the symmetric key is used for the bulk data encryption. This is due to the fact that symmetric encryption is typically much more efficient than asymmetric encryption.
~~~

~~~admonish question title="Why is RSA slow?"
* Plaintext needs to be converted to numbers.
* Numbers undergo large arithmetic operations (modular exponentiation).
* Involves 2048/4096/8192 bits. AES involves 128/256/512 bits at a time.
~~~

~~~admonish example
An example is TLS in a client-server communication.
~~~
