# API gateway

API gateway is the **single entry point** into the system.

With a single entrypoint for requests, it becomes easier to maintain a _consistent_ structure and naming convention — any changes can be applied uniformly across all APIs.

Here are the responsibilities:
* [**Routing**](../core-functionalities/routing.md)

* [**Rate limiting**](../strategies/rate-limiting.md)
  
* [**Authentication & authorisation**](../core-functionalities/authentication-and-authorisation.md)

  API Gateway can handle authentication and authorisation before the request reaches your service.
  It's easier to manage this aspect via a single entry point, rather than spread requests across many different points.

* TLS features
  * SSL termination
  * mTLS

* [Caching](../strategies/caching.md)

* [Logging & monitoring](../strategies/logging-and-monitoring.md)

Features
* [Auto-scaling](../strategies/auto-scaling.md)
* Integration with other cloud services (eg. AWS API Gateway integrates with DynamoDB, SQS)
* Firewall integration
