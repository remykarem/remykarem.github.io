# Retry mechanism

Helps with:
- [Fault tolerance](../goals/fault-tolerance.md)
- [Reliability](../goals/reliability.md)

Backoff policies
- Frequency: Exponential backoff
- Randomness: Jitter can prevent synchronised retries
- Selective: Not all failures should be retried. For example, 4xx is usually because of the request itself.
