# Code

1. Decode the Base64 encoding
2. Decode the PKCS8 or X509 into a `KeySpec` object
3. Create a `KeyFactory` instance.
4. Generate private or public from these 2

 

# Kotlin

`KeySpec` — A public or private key in encoded format. Encodings include PKCS #8, X.509????

```kotlin
val pkcS8EncodedKeySpec = PKCS8EncodedKeySpec(Base64.getDecoder().decode("sdfvs331s"))
```

`KeyFactory` — Generate private and public from `keySpec` key specifications

```kotlin
val keyFactory = KeyFactory.getInstance("RSA")
val privateKey = keyFactory.generatePrivate(keySpec)
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
