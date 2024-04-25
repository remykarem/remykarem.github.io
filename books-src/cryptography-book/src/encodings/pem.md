# PEM

[RFC 1421](https://datatracker.ietf.org/doc/html/rfc1421), [RFC 7468](https://datatracker.ietf.org/doc/html/rfc7468)

Common filenames: `.pem`

The PEM (Privacy-Enhanced Mail) encoding is a text with
1. Base64 (encoded from binary) wrapped to 64 characters per line,
2. a header, and
3. a footer.

~~~admonish quote title="PEM (Wikipedia)"
Many cryptography standards use ASN.1 to define their data structures, and Distinguished Encoding Rules (DER) to serialize those structures.

Because DER produces binary output, it can be challenging to transmit the resulting files through systems, like electronic mail, that only support ASCII.

The PEM format solves this problem by encoding the binary data using base64. PEM also defines a one-line header, consisting of -----BEGIN, a label, and -----, and a one-line footer, consisting of -----END, a label, and -----. The label determines the type of message encoded. 
~~~

~~~admonish warning title="SSH public key vs. PEM"
Technically, the SSH public key format is not a PEM (see [here](https://datatracker.ietf.org/doc/html/rfc4716#section-3.5)).

There are, however, some differences that make them look superficially similar.
~~~

~~~admonish example title="Example 1: Generic private key"
```
----BEGIN PRIVATE KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
S8lh0lHCwVGlVq0Jqtmp7ieyVOZ0mbU6T2KCDwkL3mWWSiVZc+cjh3EOsXtyzuiq
-----END PRIVATE KEY-----
```
~~~

~~~admonish example title="Example 2: RSA private key"
```
----BEGIN RSA PRIVATE KEY----
MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
S8lh0lHCwVGlVq0Jqtmp7ieyVOZ0mbU6T2KCDwkL3mWWSiVZc+cjh3EOsXtyzuiq
-----END RSA PRIVATE KEY-----
```
~~~

~~~admonish example title="Example 3: EC private key"
```
-----BEGIN EC PRIVATE KEY-----
...
```
~~~

~~~admonish example title="Example 4: Digital certificate"
[Cloudflare Certificate](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/user-side-certificates/install-cloudflare-cert/)
~~~


~~~admonish example title="Example 5: SSH private key"
```txt
-----BEGIN OPENSSH PRIVATE KEY-----
b3Bl...
-----END OPENSSH PRIVATE KEY-----
```
~~~

~~~admonish example title="Example 6: SSH public key"
[RFC 4716](https://datatracker.ietf.org/doc/html/rfc4716)

```txt
---- BEGIN SSH2 PUBLIC KEY ----
Comment: "2048-bit RSA, converted by ..."
AAAAB...
---- END SSH2 PUBLIC KEY ----
```
~~~
