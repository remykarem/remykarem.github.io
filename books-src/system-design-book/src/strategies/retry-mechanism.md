# Retry mechanism

Helps with:
- [Fault tolerance](../goals/fault-tolerance.md)
- [Reliability](../goals/reliability.md)

Backoff policies
* Fixed backoff / constant backoff / uniform retry interval
* Exponential backoff
* Capped exponential backoff

Why prefer exponential backoff to fixed backoff?
* Reduce congestion from older requests.
* Prioritise newer requests (in the case of a queue) possibly due to transient errors. Older requests are possibly due to application error that requires some time to fix.
* Avoid synchronisation risk.

- Count: How many more times to retry?
- Frequency: Exponential backoff
- Randomness: Jitter can prevent synchronised retries
- Selective: Not all failures should be retried. For example, 4xx is usually because of the request itself.
