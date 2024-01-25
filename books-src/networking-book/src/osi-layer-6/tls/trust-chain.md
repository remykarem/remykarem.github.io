# Setup: Trust chain

For this protocol to work, we rely on the trust infrastructure of the web.

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
