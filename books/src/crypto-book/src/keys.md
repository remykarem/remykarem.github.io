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

Convert format

```bash
openssl pkcs12 -export -inkey secret.pem -in cert.pem -out cert.pfx
```

For more info, run `man openssl-rsa` or `man openssl-genrsa` etc.

## ECC

```bash
openssl genpkey -algorithm Ed25519 -out secret.pem
```

## SSH

Generate a new key pair.

```
ssh-keygen -t <alg> -b 2048
```

Convert OpenSSH public key into SSH2 public key: 

```
ssh-keygen -e -f <public-key-filename> > <new-public-key-filename>
```

Run `man ssh-keygen` for more info.

### SSH key formats

OpenSSH Public Key

```txt
ssh-rsa AAAAB...
```

`PEM` Private Key

```txt
-----BEGIN RSA PRIVATE KEY-----
MIIEp...
-----END RSA PRIVATE KEY-----
```

`PKCS8` Private Key (???)

```txt
-----BEGIN PRIVATE KEY-----
MIIEvg...
-----END PRIVATE KEY-----
```

`RFC4716` (aka SSH2) Private Key

```txt
-----BEGIN OPENSSH PRIVATE KEY-----
b3Bl...
-----END OPENSSH PRIVATE KEY-----
```

`RFC4716` (aka SSH2) Public Key

```txt
---- BEGIN SSH2 PUBLIC KEY ----
Comment: "2048-bit RSA, converted by ..."
AAAAB...
---- END SSH2 PUBLIC KEY ----
```
