# Proxying

Spring Framework (which Spring Boot is based on) often uses proxying for features like transaction management, method security, and performance monitoring.

A proxy is essentially a wrapper around an object which can intercept method calls and add additional behaviors, such as transaction boundaries. For example, when you annotate a method with @Transactional, Spring automatically creates a proxy around your bean and begins a transaction before your method is called, and then commits or rolls back the transaction after your method returns.

In order to create a proxy, Spring needs to subclass your bean and override its methods. However, in Kotlin, classes and methods are final by default, meaning they can't be subclassed or overridden. The kotlin-spring plugin with the @AllOpen annotation helps with this by instructing the Kotlin compiler to make these classes and methods non-final, so they can be proxied.
