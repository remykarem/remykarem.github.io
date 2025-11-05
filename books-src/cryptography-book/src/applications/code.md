# RSA

- [RSA](#rsa)
  - [OpenSSL](#openssl)
  - [Java/Kotlin standard library](#javakotlin-standard-library)

## OpenSSL

```admonish note
Note that OpenSSL 3.x refers to PKCS #1 keys as `traditional`. See `man openssl-genrsa`.
```

### RSA PKCS #1

🙄 Convert from PKCS #1 to PKCS #8 private key:

```bash
openssl pkcs8 -topk8 -inform pem -in secret_pkcs1.pem -outform pem -nocrypt -out secret_pkcs8.pem
```

🙄 Convert from PKCS #1 opento PKCS #8 public key:

```bash
openssl rsa -RSAPublicKey_in -in public_pkcs1.pem -pubout -out public_pkcs8.pem
```

### RSA PKCS #8

Generate private key in PKCS #8 format. `genpkey` is obsolete. Use `gen*`.

```bash
openssl genrsa -out secret.pem 2048
```

🙄 Convert from PKCS #8 to PKCS #1 private key:

```bash
openssl rsa -in private_pkcs8.pem -out private_pkcs1.pem
```

🙄 Convert from PKCS #8 to PKCS #1 public key:

```bash
openssl rsa -pubin -in public_pkcs8.pem -RSAPublicKey_out -out public_pkcs1.pem
```

Output public key from a private key.

```bash
openssl rsa -in secret.pem -pubout -out secret.pem.pub
```

### Others

🙄 Convert from PEM to DER for PKCS #1 private key:

```bash
openssl rsa -in secret.pem -outform der -out secret.der -traditional
base64 -i secret.der
```

Convert format

```bash
openssl pkcs12 -export -inkey secret.pem -in cert.pem -out cert.pfx
```

Other tools include `openssl-pkcs8` and `openssl pkey`.

[How to convert PKCS#8-formatted PEM private key to the traditional format?](https://stackoverflow.com/questions/2957742/how-to-convert-pkcs8-formatted-pem-private-key-to-the-traditional-format)

For more info, run `man openssl-rsa` or `man openssl-genrsa` etc.

---

## Java/Kotlin standard library

Concepts:

* `java.security.spec.KeySpec` 

    A public or private key in the corresponding structured container format aka key spec. Keys can be specified by its components e.g. `RSAPrivateKeySpec` or its binary (DER encoding) e.g. `PKCS8EncodedKeySpec` and `X509EncodedKeySpec`. Other KeySpecs like `OpenSSHPrivateKeySpec` can be obtained from third-party libraries like Bouncy Castle.

* `java.security.KeyFactory`

    A factory method to generate private and public from `KeySpec`.

Code:

```kotlin
val keySpec = PKCS8EncodedKeySpec(Base64.getDecoder().decode("MIIEwAIBADANB..."))
val privateKey = KeyFactory.getInstance("RSA").generatePrivate(keySpec)
```

`Signature`

Given `privateKey: PrivateKey`,

```kotlin
val privateSignature = Signature.getInstance("SHA256withRSA")

privateSignature.initSign(privateKey)

privateSignature.update("payload to encrypt".encodeToByteArray())

val signature = privateSignature.sign()
```

```java
byte[] publicBytes = Base64.decodeBase64(publicK);
X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicBytes);
KeyFactory keyFactory = KeyFactory.getInstance("RSA");
PublicKey pubKey = keyFactory.generatePublic(keySpec);
```
