# Replay attack

An attacker impersonates a legitimate user by replaying their past messages.

A mitigation is to have a tolerance of _k_ minutes between the signed timestamp and current time (eg. [Stripe](https://stripe.com/docs/webhooks#replay-attacks)).
