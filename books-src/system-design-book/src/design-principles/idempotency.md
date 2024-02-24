# Idempotency

An idempotent application is not adversely affected if the _same_ message or request is processed more than once.

Useful in systems where a request might be repeated (eg. in distributed queues)

~~~admonish tip title="Idempotency key"
Idempotency keys are used to prevent performing the same transaction more than once.

Stripe[^stripe] and PayPal[^paypal] use them.
~~~

[^stripe]: [https://stripe.com/docs/api/idempotent_requests](https://stripe.com/docs/api/idempotent_requests)
[^paypal]: [https://developer.paypal.com/reference/guidelines/idempotency/](https://developer.paypal.com/reference/guidelines/idempotency/)
