# ECC

Generates PKCS #8 private key:

```bash
openssl genpkey -algorithm Ed25519 -out secret.pem
```

Generates SEC 1 format private key

```
openssl ecparam -name prime256v1 -genkey -noout -out secret.pem
```
