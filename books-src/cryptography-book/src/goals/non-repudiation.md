# Non-repudiation

Non-repudiation is a property of information that ensures a party, which has signed a document digitally or sent a message, _cannot later deny_ having done so.

This means that there must _only be one party_ that has performed the signing or sending the message. 

This relies on the ownership of a key strictly unique to a party and not meant to be shared ("**private key**").

~~~admonish example
If a private key is shared, then the non-repudiation property is violated.

This means the original holder of the private key denies having done something (a bad thing) because they shared the key with another party.
~~~
