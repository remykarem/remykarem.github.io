# Shared secret

aka secret key, secret, shared key, symmetric key

Secrets are normally represented by ASCII; alphanumeric with/without special characters. This is probably because this representation is easy to be copy-pasted during an out-of-band sharing.

A shared secret can be generated:
* Randomly
* From key exchange algorithms

~~~admonish example title="GitHub webhooks"
Secrets for GitHub webhooks are in text form.
~~~
