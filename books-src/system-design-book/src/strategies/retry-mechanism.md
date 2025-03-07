# Retry mechanism

Retries allow clients to survive random partial failures and short-lived transient failures by sending the same request again.

Helps with:
- [Fault tolerance](../goals/fault-tolerance.md)
- [Reliability](../goals/reliability.md)

Strategies:
* Cancel
* Immediate retry
* Retry after delay (backoff)
  Backoff policies
  * Fixed backoff / constant backoff / uniform retry interval
  * Exponential backoff
  * Capped exponential backoff

  ~~~admonish question title="Why prefer exponential backoff to fixed backoff?"
  * Reduce network congestion from older requests.
  * Reduce server load.
  * Prioritise newer requests (in the case of a queue) possibly due to transient errors. Older requests are possibly due to application error; so we allow some time to recover.
  * Avoid synchronisation risk.
  * Helps with [scalability](../goals/scalability.md) as the workload increases — at any point of time given _m_ messages, we retry _k_ recent requests (where $k \le m$) vs. at any point of time we retry $k = m$ messages
  ~~~

Another strategy is to add jitter to spread out any contention.

Characteristics of a policy:
- Count: How many more times to retry?
- Frequency: Exponential backoff
- Randomness: Jitter can prevent synchronised retries
- Selective: Not all failures should be retried. For example, 4xx is usually because of the request itself.

~~~admonish question title="What about synchronised retries?"
???
~~~

Readings:
* [AWS: Timeouts, retries, and backoff with jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)
* [Azure: Retry](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry)

