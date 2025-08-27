# Loose coupling of services

Facilitates:
* independent [horizontal scaling](./horizontal-scaling.md) for each service
* independent deployment schedules

~~~admonish tip title="Microservices and loose coupling"
Services are _loosely coupled_ if you can change one service without requiring other services to be updated at the same time.

[Source](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis)
~~~

~~~admonish tip
Too many API calls is a sign of poor decoupling
~~~

How to decouple? DDD, domain analysis [^redis]

[^redis]: [Redis](https://redis.com/blog/implementing-designing-microservices/)
