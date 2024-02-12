# Summary

- [Preface](./preface.md)

---

# Principles

- [Principle of Least Privilege]()
- [Compartmentalisation]()
- [Reduce blast radius](./reduce-blast-radius.md)

# Trust models

- [Chain of Trust](./trust-models/chain-of-trust.md)
- [Web of Trust](./trust-models/web-of-trust.md)
- [Zero Trust](./trust-models/zero-trust.md)
- [Trust On First Use]()
- [Direct trust]()

---

# Confidentiality

- [Symmetric encryption]()
- [Asymmetric encryption]()
- [Key exchange + hybrid encryption]()
  - [SSL/TLS](./confidentiality/ssl-tls.md)
  - [SSH]()
  - [PGP](./confidentiality/pgp.md)
  - [S/MIME]()
- [E2EE]()
  - [Signal protocol]()
- [Zero-Knowledge Proof]()
- [Homomorphic encryption]()
- [Quantum Key Distribution]()

---

# Authentication

- [Basic auth](./authentication/basic-auth.md)
- [Username-password]()
- [Digest auth]()
- [Form-based auth]()
- [SSL certificate]()
- [Token-in-header]()
- [TOTP](./authentication/totp.md)
  - [Microsoft Authenticator]()
- [SSH]()
- [One-time code]()
- [CAPTCHA]()
- [SSO]()
- [Passkeys](./authentication/passkeys.md)
- [Biometric]()
- [Facial recognition]()
- [MFA]()
- [Public key]()

---

# Authorisation

- [OAuth 2.0](./authorisation/oauth2-0.md)
  - [Authorization Code Flow](./oauth2-0/authorization-code-flow.md)
  - [Client Credentials Flow]()
  - [Hybrid Flow]()
- [OIDC](./authorisation/oidc.md)
- [SAML](./authorisation/saml.md)
- [Kerberos]()
- [JWT]()
- [SCIM]()
- [LDAP]()

---

# Access control

---

# Tings

- [IdP](./idp.md)
- [IAM](./iam.md)
- [Directory service](./directory-service.md)

---

# Device posture assessment

- [MDM]()
- [Tanium]()
- [Pulse Secure]()
- [Cisco Identity Services]()

---

# Privacy and anonymity

- [DNS leak]()

# Other practices

- [Key rotation](./key-rotation.md)

# Others

- [CVE](./cve.md)

# Attacks

- [Links](./links.md)
- [Attacks]()
    - [CSRF](./attacks/csrf.md)
    - [DoS / DDoS](./attacks/dos-ddos.md)
    - [IDOR](./attacks/idor.md)
    - [Directory traversal](./attacks/directory-traversal.md)
    - [Side channel attack](./attacks/side-channel-attack.md)
    - [Supply chain attack](./attacks/supply-chain-attack.md)
    - [XSS]()
    - [SQL injection]()
    - [Command injection]()
    - [Logs]()
    - [Clickjacking]()
    - [Enumeration attack]()
    - [ARP cache poisoning](./attacks/arp-cache-poisoning.md)
    - [IP address spoofing](./attacks/ip-address-spoofing.md)
- [Mitigation](./mitigation.md)
    - [Anti-CSRF token](./mitigation/anti-csrf-token.md)
    - [Same-Site cookie attribute](./mitigation/same-site-cookie-attribute.md)
    - [Rate-limiting]()
    - [Sanitise]()
