# Block ciphers

```bash
echo -n "hello" | 
openssl enc -aes-256-cbc | 
base64
```

```bash
echo -n "U2FsdGVkX1+DIdrNWd7HRuO6UXWzjT8YZTJ0ImGBbHQ=" |
base64 -d |
openssl enc -aes-256-cbc -d  # password is 123
```
