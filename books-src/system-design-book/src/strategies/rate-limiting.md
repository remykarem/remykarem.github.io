# Rate limiting

aka throttling

Control the rate at which requests are made to prevent abuse or overload.

Algorithms
* Fixed window
* Sliding window
* Token bucket

~~~admonish tip title="HTTP status code 429"
HTTP has a status code 429: Too Many Requests
~~~

~~~admonish warning
When integrating with systems, ensure that the client respects the limits of the target server, and/or handle errors airising from limits.
~~~

Helps with:
* [Performance](../goals/performance.md)
* [Availability](../goals/availability.md)
* [Reliability](../goals/reliability.md)

References:
* [https://smudge.ai/blog/ratelimit-algorithms](https://smudge.ai/blog/ratelimit-algorithms)
