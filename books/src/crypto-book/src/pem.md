# PEM

PEM (Privacy-Enhanced Mail) format is text-file base64.

Common filenames: `.pem`

PEM is just a Base64-encoded DER with header and footer and wrapped to 64 characters per line.
    
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

Example: [Cloudflare Certificate](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/user-side-certificates/install-cloudflare-cert/)
