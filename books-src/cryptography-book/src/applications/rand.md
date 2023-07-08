# Cryptographically secure random bytes

## Unix-like OS

Use `/dev/urandom`.

```bash
LC_ALL=C tr -dc a-zA-Z0-9 < /dev/urandom | head -c10
```

Based on [this](https://unix.stackexchange.com/questions/230673/how-to-generate-a-random-string) StackOverflow post.

Use `openssl rand`.

```bash
LC_ALL=C tr -dc a-zA-Z0-9 < <(openssl rand 1000) | head -c10
```

```bash
openssl rand -hex 16
```

## Java

`java.security.SecureRandom` - might pull from `/dev/random`

## JavaScript (browser)

```javascript
const array = new Uint32Array(10);
window.crypto.getRandomValues(array);
```

[How can I generate a cryptographically secure pseudo-random number in Javascript?](https://stackoverflow.com/questions/58600148/how-can-i-generate-a-cryptographically-secure-pseudo-random-number-in-javascript)

## Python

```python
>>> import secrets
>>> secrets.token_bytes(16)
```
