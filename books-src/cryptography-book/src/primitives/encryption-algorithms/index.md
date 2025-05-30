# Encryption algorithms

aka encryption schemes

Encryption provides [confidentiality](../../goals/confidentiality.md).

~~~admonish tip
In practice, a hybrid approach is often used where a symmetric key is exchanged or encrypted with an asymmetric key, and then the symmetric key is used for the bulk data encryption. This is due to the fact that symmetric encryption is typically much more efficient than asymmetric encryption.
~~~

~~~admonish example
An example is TLS in a client-server communication.
~~~
