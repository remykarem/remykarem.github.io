# Keys

## RSA

Generate private key in PKCS#8 format. `genpkey` is obsolete. Use `gen*`.

```bash
openssl genrsa -out secret.pem 2048
```

Output public key from a private key (note that it contains info about the public key).

```bash
openssl rsa -in secret.pem -pubout -out secret.pem.pub
```

Get modulus:

```bash
openssl rsa -in secret.pem -modulus -noout
```

Convert format

```bash
openssl pkcs12 -export -inkey secret.pem -in cert.pem -out cert.pfx
```

## ECC

```bash
openssl genpkey -algorithm Ed25519 -out secret.pem
```
