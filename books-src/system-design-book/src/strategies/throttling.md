# Throttling

aka backoff

Usually used in the context of client-side. Similar to [rate limiting](./rate-limiting.md).

Throttling helps to maintain a stable and predictable level of service for servers.

Strategies:
* Sleep
* Max. no. of requests per time window
* Dynamic throttling based on real-time analysis
* Exponential backoff with jitter

Implementations:
* Synchronous — client-side code, limiter-as-a-service
* Asynchronous — **Quasi leaky bucket**: SQS + Lambda with reserved concurrency
