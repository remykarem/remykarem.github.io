# Gotchas

* `ClassPathResource`
* Env vars
* validated and null
    https://stackoverflow.com/questions/64699930/spring-boot-validate-each-string-in-a-list-kotlin
* Kapt for annotation processing
* Jackson module for Kotlin
* Refactoring property names snake case camelcase
* overriding configuration for list properties
* Controller: using returns unexpected behaviour

    ```kotlin
    fun someFun(@RequestBody someKey: String) {
    }
    ```

* `RestTemplate` autoconfigures `HttpMessageConverter`s if they are dependencies eg jackson object mappers
