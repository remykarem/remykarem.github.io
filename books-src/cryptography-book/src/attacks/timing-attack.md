# Timing attack

Analyse the time taken it takes to execute cryptographic operations in order to infer things like the algorithm's internal state, the key etc. 

Timing attacks can be performed against regular equality operators or regular loops in JIT-Optimised languages ([source](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries#validating-webhook-deliveries)). 

## Mitigations

* **When comparing signatures, never use the `==` operator**

  Instead, use cryptographically safe comparison methods provided by libraries which perform "constant time" string comparison.

  Some keywords to look for: secure, timing safe, equal, compare

  Taken from GitHub's [Validating webhook deliveries](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries#validating-webhook-deliveries).
