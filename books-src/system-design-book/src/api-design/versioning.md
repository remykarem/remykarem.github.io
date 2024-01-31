# Versioning

https://developers.asana.com/reference/rest-api-reference

Some strategies:
* URI versioning (`/v1`)
  * Global level (e.g. Stripe)
  * Resource level
* HTTP header (e.g. Stripe)
* Nullable (in JSON property)

At Stripe, only "[w]hen a breaking change is introduced to the Stripe API, a new dated version is released." 

References:
[Stripe: Upgrades](https://stripe.com/docs/upgrades)
