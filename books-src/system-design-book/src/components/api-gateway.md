# API gateway

API gateway is the **single entry point** into the system.

With a single entrypoint for requests, it becomes easier to maintain a _consistent_ structure and naming convention — any changes can be applied uniformly across all APIs.

Here are the responsibilities:
* [**Routing**](../core-functionalities/routing.md)
* [**Authentication & authorisation**](../core-functionalities/authentication-and-authorisation.md) — It's easier to manage this aspect via a single entry point, rather than spread requests across many different points.
* [Caching](../strategies/caching.md)
* [Rate limiting](../strategies/rate-limiting.md)
* [Logging & monitoring](../strategies/logging-and-monitoring.md)
