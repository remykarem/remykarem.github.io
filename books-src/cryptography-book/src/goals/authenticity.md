# Authenticity

**Authenticity** ensures that a _party is genuine_ ("real", "not fake") and _can be trusted_. This implies that the information comes from a _verified source_.

~~~admonish note title="Trusted party"
A trusted party does not have to be a single entity. It could be a group of entities — as long as they are all trusted.
~~~

Authenticity thus prevents impersonation.

Worded differently, authenticity is violated when impersonation occurs.

~~~admonish warning title="Violation of authenticity: Replay attack"
When an attacker impersonates a legitimate user by replaying their past messages.
~~~

~~~admonish warning title="Violation of authenticity: Private key / shared secret compromise"
This can happen when a private key or shared secret is compromised and is used by another unintended party to generate a signed message.
~~~

~~~admonish note title ="Authentication vs. authenticity"
Authentication is a procedure to ensure authenticity — it verifies the identity of a party.
~~~

Authenticity is typically achieved using digital signatures or MACs.
