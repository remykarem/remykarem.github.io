# Cryptographically secure randomness

CSPRNG (cryptographically secure pseudorandom number generator)

We wanna make sure that attackers cannot find any pattern from the encryption, so we need some form of randomness aka entropy.

Entropy can be obtained from multiple entropy sources. See Apple's [Random number generation](https://support.apple.com/en-sg/guide/security/seca0c73a75b/web).

See also this article on [Myths about /dev/urandom](https://www.2uo.de/myths-about-urandom/).

~~~admonish example title="*nix"
Use `/dev/urandom`.

```bash
cat /dev/urandom | head -c10 
```
~~~

~~~admonish example title="OpenSSL"
```bash
openssl rand 10
```
~~~

~~~admonish example title="Java"
`java.security.SecureRandom` - might pull from `/dev/random`
~~~

~~~admonish example title="JavaScript"
```javascript
const array = new Uint32Array(10);
window.crypto.getRandomValues(array);
```
~~~

~~~admonish example title="Python"
```python
>>> import secrets
>>> secrets.token_bytes(16)
```
~~~

~~~admonish warning title="Math.random()"
JavaScript's Math.random is not cryptographically secure.
~~~

~~~admonish warning title="Some UUID implementations might not be cryptographically secure"
A StackOverflow post [Using V4 UUID for authentication](https://security.stackexchange.com/a/157277) says that [RFC 4122 Section 6](https://datatracker.ietf.org/doc/html/rfc4122#section-6) says that UUID implementations might not use a cryptographically secure random number generator.

UUIDv4's main goal is to generate unique identifiers, not unpredictability.
~~~
