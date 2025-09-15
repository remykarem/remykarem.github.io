# Load balancer

Responsibilities:

* [**Load balancing**](../strategies/load-balancing.md)
* [**Identity hiding**](../core-functionalities/identity-hiding.md) of the backend servers
* [Routing](../core-functionalities/routing.md)
* [Rate limiting](../strategies/rate-limiting.md)
* [Caching](../strategies/caching.md)
* [SSL termination](../core-functionalities/ssl-encryption-and-decryption.md) for backend servers
* Serve static content via [caching](../strategies/caching.md)

~~~admonish warning title="Traffic spike"
Load balancers _distribute_ the traffic but it can't handle traffic spikes.
~~~
