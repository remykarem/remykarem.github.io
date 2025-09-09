# Idempotency

An idempotent application is not adversely affected if the _same_ message or request is processed more than once.

Useful in systems where a request might be repeated (eg. in distributed queues, retrying failed HTTP requests) or for highly concurrent applications. 

This is usually implemented using **idempotency keys**. Idempotency keys are used to prevent performing the same transaction more than once.

~~~admonish tip title="SQS FIFO deduplication"
Treat the 5-min window as a safety net, not your primary idempotency guarantee.
~~~

~~~admonish example title="Real-life examples & idempotency guarantees"
* Stripe[^stripe] — 24h
* PayPal[^paypal]
* SQS FIFO — 5mins
~~~

[^stripe]: [https://stripe.com/docs/api/idempotent_requests](https://stripe.com/docs/api/idempotent_requests)

[^paypal]: [https://developer.paypal.com/reference/guidelines/idempotency/](https://developer.paypal.com/reference/guidelines/idempotency/)
