# Microservices

Characteristics

* [Loosely coupled](../strategies/loose-coupling-of-services.md); organised by business capability
* [Database-per-service](../data-management-patterns/database-per-service.md)
* Separate build for each microservice
* Deploy into containers
* Servers are stateless
* DDD
* Microfrontend (?)

Cons:
* It becomes harder to [maintain](../goals/maintainability.md) multiple services.

References:
* [Microservices by Martin Fowler](https://martinfowler.com/articles/microservices.html)
* [microservices.io](https://microservices.io)
* blog.bytebytego.com

Service Boundaries
In the microservice architecture, a system is composed of a number of fine-grained services, with each service focusing on a single functionality. So the first (and arguably the most important) thing is to identify boundaries and define services.
https://netflixtechblog.com/rebuilding-netflix-video-processing-pipeline-with-microservices-4e5e6310e359
