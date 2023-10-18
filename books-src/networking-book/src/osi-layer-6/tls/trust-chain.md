# Setup: Trust chain

For this protocol to work, we rely on the trust infrastructure of the web.

The trust infrastructure is made up CAs (**certificate authorities**) and **SSL certificates**.

~~~admonish example title="Examples of CAs"
Let's Encrypt, DigiCert, Sectigo, GlobalSign
~~~

A (root) CA generates a certificate for itself, and certificates for servers and other CAs ("intermediary CAs").

A CA can in turn generate certificates for other servers and other CAs and so on.

If a client needs to verify a server's certificate, it can check the chain of trust up to the root. If the chain leads back to a root that the client trusts, it can trust the server's certificate.

```admonish tip title="Clients only need to store root certificates"
It is easier for a client to manage a list of _root_ certificates, rather than managing individual CA certs.
```

```admonish info title="Trust store"
Operating systems, browsers and other applications come with a list of trusted root certificates ("**trust store"**).

In macOS, the Keychain Access app lets you see the root certificates that macOS trusts by default under **System Roots**.

Some applications (eg. Java, IntelliJ) have their own trust store independent of the OS. For example, in Java, the trust store is typically found in a file name **cacerts** in the Java installation directory.
```

```admonish question title="How to add root certificates to trust store?"
The documentation for [Install the Cloudflare certificate](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/user-side-certificates/install-cloudflare-cert/) has a good overview to install the root certificate for OSes (macOS, iOS) and applications (Python, JetBrains).
```

## Certificate verification

How does the client verify a certificate?

* hostname matching (against the requested URL)
* certificate validity
* CA issuer
* the client validates the:
* **certificate signature** — use the public key of the issuing CA to verify that the certificate has not been tampered with
* **certificate chain** — if the issuing CA is an intermediate CA, get the intermediate CA's certificate and repeat the steps above. if it's a root CA, verify against the OS trust store.

~~~admonish question title="How to show certificates of intermediate CAs?"
The server typically sends its own certificate and the intermediate CA's certificates as well. 

In OpenSSL, use the `-showcerts` option.

```
openssl s_client -showcerts -servername jvns.ca -connect jvns.ca:443 2>/dev/null
```

In a Chrome browser, you can see the chain when you click the padlock.
~~~
