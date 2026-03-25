# CSRF

Cross-Site Request Forgery

CSRF exploits:
1. that a user is already **authenticated** to a Site A,

    ~~~admonish note title="Vectors"
    Some vectors include:
    * cookies
    * HTTP basic/digest authentication (credentials cached by browser)
    ~~~

2. that the browser (read: not the browser tab) has **weak Same-Origin Policy** which allows Site B to make a call to Site A,
3. that a **cookie** is **automatically** sent with calls made from any tab.


```admonish note
CSRF attacks commonly occur within the context of a **web browser**, since it automatically handles cookies.

However, it is not restricted to browsers; any client that performs automatic cookie handling could be susceptible to a CSRF attack.
```

```admonish example title="Example attack 1"
**Goal**

As an attacker, the goal is to trigger a _state change_.

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

## Resources

* [OWASP: CSRF](https://owasp.org/www-community/attacks/csrf)
* [OWASP Cheatsheet: CSRF](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
* [Web Security 101: An Interactive Cross-Site Request Forgery (CSRF) Demo](https://victorzhou.com/blog/csrf/)
