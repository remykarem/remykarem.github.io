# Chain of Trust

aka trust chain

The idea of Chain of Trust is we should trust a group of credible entities called **CAs** (certificate authorities) and we should trust who they trust.

~~~admonish example title="Examples of CAs"
Let's Encrypt, DigiCert, Sectigo, GlobalSign
~~~

**Certificates** are a way of saying that a CA trusts another entity. These certificates are [X.509 certificates](https://remykarem.github.io/books/cryptography-book/asn1-schemas/x509.html).

A (root) CA generates a certificate for itself, and generates certificates for servers and other CAs ("intermediary CAs").

Other CAs can in turn generate certificates for other servers and other CAs and so on.

## Certificate verification

The algorithm to verify a certificate is called **certificate path validation**.

If a client needs to verify a server's certificate, it can check the chain of trust up to the root. If the chain leads back to a root that the client trusts, it can trust the server's certificate. This verification is done against the client's _trust store_.

~~~admonish info title="Trust stores"
Different OSes, browsers and other applications (eg. Java, IntelliJ) come with their set of trusted root certificates aka **trust stores**.

* macOS

  In macOS, the Keychain Access app lets you see the root certificates that macOS trusts by default under **System Roots**. See [Available trusted root certificates for Apple operating systems](https://support.apple.com/en-us/HT209143).

  In macOS, there's also `/etc/ssl/cert.pem` (???)

* Linux

  As an OpenSSL-compatible directory `/etc/ssl/certs` or as a bundled cert in `/etc/ssl/certs/ca-certificates.crt`.

* Browser

  Not too sure... maybe it uses the OS'es trust store (?)

* Java — The trust store is typically found in a file name `cacerts` somewhere in the Java installation directory.

  ```
  /Users/raimibinkarim/Library/Java/JavaVirtualMachines/corretto-1.8.0_402/Contents/Home/jre/bin/keytool -import -trustcacerts -alias cloudflare -keystore /Users/raimibinkarim/Library/Java/JavaVirtualMachines/corretto-1.8.0_402/Contents/Home/jre/lib/security/cacerts -file /Users/raimibinkarim/Downloads/Cloudflare_CA.crt
  ```

* Python
  ```
  python3 -c "import ssl; print(ssl.get_default_verify_paths())"
  ```
* OpenSSL — Usually in `/etc/ssl/cert.pem`
~~~

What information does the client verify?

* hostname matching (against the requested URL)
* certificate validity
* CA issuer
* the client validates the:
* **certificate signature** — use the public key of the issuing CA to verify that the certificate has not been tampered with
* **certificate chain** — if the issuing CA is an intermediate CA, get the intermediate CA's certificate and repeat the steps above. if it's a root CA, verify against the OS trust store.

~~~admonish example title="Verify using macOS's Keychain Access"
Go to Keychain Access. Then **Certificate Assistant** > **Evaluate**.

[Determine if a certificate is valid using Keychain Access on Mac](https://support.apple.com/en-sg/guide/keychain-access/kyca2794/mac)
~~~

~~~admonish warning title="Gotcha when adding certs into trust store"
Note that you usually want to _add_ a certificate to a trust store, not overwrite the entire trust store with that one certificate.

Eg. in NPM/Yarn, you would run

```
export NODE_EXTRA_CA_CERTS
```

instead of

```
npm config set cafile <cafile>
```
~~~

~~~admonish example title="Verify using OpenSSL"
You can verify a certificate with

```
openssl verify certificate.crt
```

which (natürlich) uses OpenSSL's trust store.
~~~

```admonish tip title="Clients only need to store root certificates"
It is easier for a client to manage a list of _root_ certificates, rather than managing individual CA certs.
```

```admonish question title="How to add root certificates to trust store?"
The documentation for [Install the Cloudflare certificate](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/user-side-certificates/install-cloudflare-cert/) has a good overview to install the root certificate for OSes (macOS, iOS) and applications (Python, JetBrains).
```

~~~admonish note title="Self-signed certificate"
???
~~~

~~~admonish question title="How to show certificates of intermediate CAs?"
The server typically sends its own certificate and the intermediate CA's certificates as well. 

In OpenSSL, use the `-showcerts` option.

```
openssl s_client -showcerts -servername jvns.ca -connect jvns.ca:443 2>/dev/null
```

In a Chrome browser, you can see the chain when you click the padlock.
~~~

