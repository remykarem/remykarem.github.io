# Authenticity

**Authenticity** ensures that a _party is genuine_ ("real", "not fake") and _can be trusted_. This implies that the information comes from a _verified source_.

Authenticity thus prevents impersonation.

~~~admonish warning title="Violation of authenticity: Replay attack"
Authenticity is violated when impersonation occurs.

An example is when an attacker impersonates a legitimate user by replaying their past messages. This is called a replay attack.
~~~

~~~admonish warning title="Violation of authenticity: Private key compromise"
Authenticity is violated when impersonation occurs.

This can happen when a private key is compromised and is used by another party to generate a signed message.
~~~

~~~admonish note title ="Authentication vs. authenticity"
Authentication is a procedure to ensure authenticity — it verifies the identity of a party.
~~~

Authenticity is typically achieved using digital signatures or MACs.
