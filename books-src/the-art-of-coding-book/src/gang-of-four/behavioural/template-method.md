# Template method

This is a skeleton method that consists of individual steps to be "filled up" by its subclasses.

```kotlin
abstract class SomeClass {

  // this is the template method
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
