# PEM

Common filenames: `.pem`, `.key`

The PEM (Privacy-Enhanced Mail) encoding is a text with
1. Base64-encoded DER wrapped to 64 characters per line,
2. a header, and
3. a footer.

Some formats it can hold:
* PKCS #1
* PKCS #8
* ECPrivateKey
    
Examples:

```
----BEGIN PRIVATE KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
S8lh0lHCwVGlVq0Jqtmp7ieyVOZ0mbU6T2KCDwkL3mWWSiVZc+cjh3EOsXtyzuiq
-----END PRIVATE KEY-----
```

or

```
----BEGIN RSA PRIVATE KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
S8lh0lHCwVGlVq0Jqtmp7ieyVOZ0mbU6T2KCDwkL3mWWSiVZc+cjh3EOsXtyzuiq
-----END RSA PRIVATE KEY-----
```

or 

```
-----BEGIN EC PRIVATE KEY-----
...
```

Example: [Cloudflare Certificate](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/user-side-certificates/install-cloudflare-cert/)
