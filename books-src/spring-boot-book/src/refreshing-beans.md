# Refreshing configurations / caching configurations

## What happens when you call `/actuator/refresh`?

1. Triggers a `EnvironmentChangeEvent`.
    
    [Spring Cloud Commons: Environment changes](https://docs.spring.io/spring-cloud-commons/reference/spring-cloud-commons/application-context-services.html#environment-changes)
    
2. The application, which listens for `EnvironmentChangeEvent`, will:
    - Refresh any classes or `@Bean` methods that are annotated with `@RefreshScope`.
    - **Re-bind any `@ConfigurationProperties`**
        
      ~~~admonish question
      What about data classes?
      ~~~
        
## How does the caching work?

Refresh scope beans are lazy proxies that initialize when they are used (that is, when a method is called), and the scope acts as a cache of initialized values. To force a bean to re-initialize on the next method call, you must invalidate its cache entry. 

[Spring Cloud Commons: Refresh scope](https://docs.spring.io/spring-cloud-commons/reference/spring-cloud-commons/application-context-services.html#refresh-scope)

Refresh scope beans act as an intermediary (”**proxy beans**”).

It checks for an (underlying) existing instance. Only when (”**lazy**”) there is none (due to cache invalidation), it creates and initialises a new instance.

## What happens when a `@RefreshScope` bean is first accessed?

1. The bean gets created.
2. The bean gets cached within the refresh lifecycle (”**scope**”).
3. The bean will be re-used for subsequent calls.

## What happens when a refresh event happens?

1. Clear the cached bean.

~~~admonish warning
Take note of stale data. Use computed property etc. instead.
~~~
