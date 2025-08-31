# Proxy

Middleman-object that can control access, add behaviour, defer initialisation etc.

Benefits:
* Client code doesn't need to handle the things that the proxy class handles

~~~admonish example title="Spring Boot"
* `@Transaction` — The proxy starts/commits/rolls back a transaction
* `@Cacheable` — The proxy looks up/puts something into a cache

Under the hood, Spring creates a proxy class which will intercept the method calls.
~~~

