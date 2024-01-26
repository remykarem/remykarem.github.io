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

If a client needs to verify a server's certificate, it can check the chain of trust up to the root. If the chain leads back to a root that the client trusts, it can trust the server's certificate. This verification is done against the client's trust store.

~~~admonish info title="Trust store"
Operating systems, browsers and other applications come with a list of trusted root certificates ("**trust store"**).

In macOS, the Keychain Access app lets you see the root certificates that macOS trusts by default under **System Roots**. See [Available trusted root certificates for Apple operating systems](https://support.apple.com/en-us/HT209143).

In macOS, there's also `/etc/ssl/cert.pem` (???)

The browser... not too sure... maybe it uses the OS'es trust store (?)

Some applications (eg. Java, IntelliJ) have their own trust store independent of the OS. 
* Java — The trust store is typically found in a file name `cacerts` somewhere in the Java installation directory.
* Python
  ```
  python3 -c "import ssl; print(ssl.get_default_verify_paths())"
  ```
~~~

What information does the client verify?

* hostname matching (against the requested URL)
* certificate validity
* CA issuer
* the client validates the:
* **certificate signature** — use the public key of the issuing CA to verify that the certificate has not been tampered with
* **certificate chain** — if the issuing CA is an intermediate CA, get the intermediate CA's certificate and repeat the steps above. if it's a root CA, verify against the OS trust store.

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

