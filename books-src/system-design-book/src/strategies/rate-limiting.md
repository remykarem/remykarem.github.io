# Rate limiting

Control the rate at which requests are made to prevent abuse or overload.

Helps with:
* [Reliability](../goals/reliability.md) (primarily) — prevents backend from being overwhelmed
* [Fairness](../goals/fairness.md) — ensure fair distribution across tenants
* [Performance](../goals/performance.md)
* [Availability](../goals/availability.md)

Deals with:
* [Scalablility](../goals/scalability.md)

~~~admonish note title="Rate limiting vs. throttling"
Rate limiting usually refers to _server-side_ enforcing.
~~~

Algorithms:
* Token bucket — add the token at a fixed rate; remove the token for every request; deny request if no tokens

    ~~~admonish tip
    Allows for burst!
    ~~~

    ~~~admonish tip title="AWS API Gateway"
    AWS API Gateway throttles requests using the token bucket algorithm.[^apigateway]
    ~~~

* Leaky bucket — increase counter for every request; decrease counter for every processing; deny request if counter is maxed
* Fixed window counter
* Sliding window log
* Sliding window counter

~~~admonish tip title="HTTP status code 429"
HTTP has a status code 429: Too Many Requests
~~~

~~~admonish warning
When integrating with systems, ensure that the client respects the limits of the target server, and/or handle errors airising from limits.
~~~

References:
* [https://smudge.ai/blog/ratelimit-algorithms](https://smudge.ai/blog/ratelimit-algorithms)

---

[^apigateway]: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html
