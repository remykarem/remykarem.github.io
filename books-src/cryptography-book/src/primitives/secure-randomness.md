# Cryptographically secure randomness

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
Use `openssl rand`.

```bash
openssl rand 1000 | head -c10
```

```bash
openssl rand -hex 16
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
