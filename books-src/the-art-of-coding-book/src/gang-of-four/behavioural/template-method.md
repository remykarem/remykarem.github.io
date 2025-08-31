# Template method

This is a skeleton method that consists of individual steps (aka workflow) to be "filled up" by its subclasses.

Subclasses just need to "fill in the blanks" for specific parts

```admonish example title="Spring Boot"

`RestTemplate`
* Template handles:
    * Open HTTP connection
    * Serialise request body
    * Send request
    * Receive response
    * Deserialise response body according to **some type**
    * Close resources
* Subclasses:
    * What's the request type
    * What's the response type
    
`JdbcTemplate`
* Template handles:
    * Open/close connections
    * Create statements
    * Handle exceptions

```

~~~admonish example title="Kotlin"
```kotlin
abstract class SomeClass {

  // this is the template method
  // not to be overiddden
  fun processSomething() {
    step1()
    step2()
  }

  // to override
  fun step1() {
    
  }

  // to override
  fun step2() {
    
  }
}
```
~~~
