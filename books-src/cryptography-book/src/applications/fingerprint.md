# Fingerprint

## RSA key pair

To compare between a private and public key, compare the modulus:

```bash
openssl rsa -in private.pem -modulus -noout
```

```bash
openssl rsa -pubin -in public.pem -modulus -noout
```

## SSH key pair

You can use SSH fingerprints to compare between any two keys. A key pair should have the same fingerprint.

? Not sure what values these fingerprints are based on.

```bash
ssh-keygen -lf <filepath>
```

ssh-keygen can also represent keys visually:

```bash
ssh-keygen -lvf <filepath>
```
