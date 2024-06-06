# Microservices

Characteristics

* [Loosely coupled](../strategies/loose-coupling-of-services.md); organised by business capability
* [Database-per-service](../data-management-patterns/database-per-service.md) [^redis]
* Separate build for each microservice
* Deploy into containers
* Servers are stateless
* DDD
* Microfrontend (?)

Cons:
* It becomes harder to [maintain](../goals/maintainability.md) multiple services.

~~~admonish tip
A service should encapsulate domain knowledge and abstract that knowledge from clients.
~~~

~~~admonish tip
Domain-driven design (DDD) provides a framework that can get you most of the way to a set of well-designed microservices.
~~~

~~~admonish question title="Service boundaries"
In the microservice architecture, a system is composed of a number of fine-grained services, with each service focusing on a single functionality. So the first (and arguably the most important) thing is to identify boundaries and define services.

Netflix Tech Blog [Rebuilding Netflix Video Processing Pipeline with Kicroservices](https://netflixtechblog.com/rebuilding-netflix-video-processing-pipeline-with-microservices-4e5e6310e359)
~~~

References:
* [Microservices by Martin Fowler](https://martinfowler.com/articles/microservices.html)
* [microservices.io](https://microservices.io)
* blog.bytebytego.com
* [ggg](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis)

[^redis]: [Redis](https://redis.com/blog/implementing-designing-microservices/)
