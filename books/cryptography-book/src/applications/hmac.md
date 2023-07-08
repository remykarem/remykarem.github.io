# HMAC

```
echo -n "someplaintext" | openssl dgst -sha384 -hmac "secretkey"
```

See `man openssl-dgst`.
