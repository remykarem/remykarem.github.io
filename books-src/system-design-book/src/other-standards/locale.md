# Locale

IETF BCP 47, RFC 5646, RFC 4647

locale, i18n (internationalisation), l10n (localisation)

A locale is a set of parameters that define a user's
* language (ISO 639)
* country (ISO 3166)
* Date time formatting
* Currency
* Text direction
* Number formatting

A typical locale identifier looks like:

```
<language>[_COUNTRY][.encoding]
```

Eg. `fr_FR`

~~~admonish info title="POSIX locale"
This is a default locale in Unix-like systems.

This locale is ASCII-based locale with no language-specific settings.

This can be set in the environemnt variable `LC_ALL=C`.
~~~
