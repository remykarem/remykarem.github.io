# Bean registration

**Beans** are nothing but Java objects in the application.

In Spring, they are managed by the IoC. What you have to do is to *register* them, and Spring will instantiate for you. Thereafter you can use them anywhere in the codebase via dependency injection.

<!-- toc -->

### Register beans

There are 3 ways to register beans:

* Class declaration - `@Service`, `@Component` etc.

    ```kotlin,noplayground
    @Service
    class SomeService {
        fun doSomething() {
            //
        }
    }
    ```

* Function declaration in a `@Configuration` class - `@Bean`

    ```kotlin,noplayground
    @Configuration
    class SomeConfiguration {
        @Bean
        fun mySmallBean() {
            //
        }
    }
    ```

* Import from another library

### Register beans conditionally

* On existence of beans

    * `@ConditionalOnMissingBean`
    * `@ConditionalOnProperty`

* On Spring Profile

    * `@Profile`

### Register beans with same name

This usually occurs if the type of the bean is an interface, or when you have 2 different configuration classes having the same function name.

`@Qualifier`, `@Primary`

### Perform actions after bean registration

A use case is if you want to validate externalised configurations at start time.

One way is to create an `@Component` bean with a `@PostConstruct` function.

```kotlin,noplayground
@Component
class SomeBeanValidator(myBean: MyBean) {

    @PostConstruct
    fun validate() {
        doSomething(myBean)
    }
}
```

### Include bean dependencies

Declare the dependencies in the constructor of a class declaration.
