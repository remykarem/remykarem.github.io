# Cryptographically secure random bytes

We wanna make sure that attackers cannot find any pattern from the encryption (using **randomness** aka high entropy, dependent on the encryption algorithm)

~~~admonish example title="*nix"
Use `/dev/urandom`.

```bash
LC_ALL=C tr -dc a-zA-Z0-9 < /dev/urandom | head -c10
```

Based on [this](https://unix.stackexchange.com/questions/230673/how-to-generate-a-random-string) StackOverflow post.
~~~

~~~admonish example title="OpenSSL"
Use `openssl rand`.

```bash
LC_ALL=C tr -dc a-zA-Z0-9 < <(openssl rand 1000) | head -c10
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