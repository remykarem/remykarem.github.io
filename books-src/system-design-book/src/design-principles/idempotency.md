# Idempotency

An idempotent application is not adversely affected if the _same_ message or request is processed more than once.

Useful in systems where a request might be repeated (eg. in distributed queues)
