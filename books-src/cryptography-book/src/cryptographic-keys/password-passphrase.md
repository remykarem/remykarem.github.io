# Password / passphrase

A password / passphrase is a form of [authentication](../goals/authentication.md) used by an individual.

The security of the password often depends on its complexity and how its stored etc.

~~~admonish example title="*nix"
Use `/dev/urandom`.

```bash
cat /dev/urandom | LC_ALL=C tr -dc a-zA-Z0-9 | head -c10
```

Based on [this](https://unix.stackexchange.com/questions/230673/how-to-generate-a-random-string) StackOverflow post.
~~~

~~~admonish example title="OpenSSL"
Use `openssl rand`.

```bash
openssl rand 1000 | LC_ALL=C tr -dc a-zA-Z0-9 | head -c10
```

```bash
openssl rand -hex 16
```
~~~
