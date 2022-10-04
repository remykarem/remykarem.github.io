# Application context

A Spring Boot application consists of

1. the container to run everything ("**ApplicationContext**"). This container is responsible for instantiating, configuring beans, assembling beans, wiring them together and managing their lifecycle. This means you can `getBean` from this container.
2. the different objects involved ("**Beans**")
    - methods
    - ("Beans declarations")
    - types ("**components**")
    
    > 💡 The @Bean annotation returns an object that spring should register as bean in application context. The body of the method bears the logic responsible for creating the instance.
    
