# RSA

## OpenSSL

Generate private key in PKCS #8 format. `genpkey` is obsolete. Use `gen*`.

```bash
openssl genrsa -out secret.pem 2048
```

Output DER format and base64-encode it.

```bash
openssl rsa -in secret.pem -outform der -out secret.der
base64 -i secret.der
```

Output public key from a private key.

```bash
openssl rsa -in secret.pem -pubout -out secret.pem.pub
```

Convert format

```bash
openssl pkcs12 -export -inkey secret.pem -in cert.pem -out cert.pfx
```

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
