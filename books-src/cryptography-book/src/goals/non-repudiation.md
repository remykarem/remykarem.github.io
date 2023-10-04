# Non-repudiation

Non-repudiation ensures that a party has indeed performed a cryptographic action (like signed a document digitally or sent a message), and _cannot later deny_ having done so (because there is evidence in the party's action).

~~~admonish note title="Authenticity vs. non-repudiation"
Authenticity is about the party _itself_, whereas non-repudiation is about the party's _actions_.
~~~

This means that there must _only be one party_ that has performed the signing or sending the message. 

This relies on the ownership of a key strictly unique to a party and not meant to be shared ("**private key**").

~~~admonish warning title="Violation of non-repudiation"
If a private key is shared, then the non-repudiation property is violated.

This means the original holder of the private key denies having done something (a bad thing) because they shared the key with another party.
~~~
