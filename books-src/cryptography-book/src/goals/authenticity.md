# Authenticity

**Authenticity** ensures that a _party is genuine_ ("real", "not fake") and _can be trusted_. This implies that the information comes from a _verified source_.

~~~admonish note title="Trusted party"
A trusted party does not have to be a single entity. It could be a group of entities — as long as they are all trusted.
~~~

Authenticity thus prevents impersonation.

Worded differently, authenticity is violated when impersonation occurs. This happens in the following scenarios:

* [Replay attack]()
* Private key / shared secret compromise

~~~admonish note title ="Authentication vs. authenticity"
Authentication is a procedure to ensure authenticity — it verifies the identity of a party.
~~~

Authenticity is typically achieved using digital signatures or MACs.

~~~admonish warning title="Encryption as a means of authenticity"
Successful decryption does not prove authenticity but _integrity_.

Decryption success suggests the ciphertext wasn’t corrupted. If a single bit was wrong, the decryption would usually fail or produce gibberish.
~~~
