# Randomness

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
