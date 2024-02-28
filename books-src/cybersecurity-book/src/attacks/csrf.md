# CSRF

Cross-Site Request Forgery

CSRF exploits the fact that a **cookie**, saved in the **browser** (read: not the browser tab), is **automatically** sent together with subsequent requests to the server.

```admonish note
CSRF attacks commonly occur within the context of a **web browser**, since it automatically handles cookies.

However, it is not restricted to browsers; any client that performs automatic cookie handling could be susceptible to a CSRF attack.
```

```admonish example title="Example attack 1"

**What you know**

You know that a server [http://example-bank.com](http://example-bank.com) requires a cookie in its request for identification and authentication.

You also know that a certain endpoint [http://example-bank.com/transfer?account=xxx&amount=xxx](http://example-bank.com/transfer?account=xxx&amount=xxx) transfers money to another account.

**Deliver**

We'll execute a *phishing attack*.

Craft an email that has a link [http://example-bank.com/transfer?account=raimi&amount=10000](http://example-bank.com/transfer?account=raimi&amount=10000) to a particular user who has a lot of money. We'll make it a hyperlink such that the query path is not apparent to the user. Send this email to the user.

**Hope**

We hope that the user has already been authenticated with [http://example-bank.com](http://example-bank.com), and therefore already has cookies saved in the browser.

**Attack**

Once the user clicks, the link opens up the browser, and navigates to the [http://example-bank.com/transfer?account=raimi&amount=10000](http://example-bank.com/transfer?account=raimi&amount=10000) page, **along with the saved cookies**.

Congrats, you now have $10,000 in your account.
```

## Mitigation

* [Anti-CSRF token](../mitigation/anti-csrf-token.md)
* [Same-Site cookie attribute](../mitigation/same-site-cookie-attribute.md)
