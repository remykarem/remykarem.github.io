# Strategy

Used when you have different algorithms or approaches or classes or ways (known as **"strategies"**) to achieve the same operation. 

You'll need:
* the **Strategy interface**

  ```kotlin
  interface Operation {
    fun calculate(a: Int, b: Int): Int
  }
  ```
  
* the different **concrete Strategy implementations** of this interface

  ```kotlin
  class Add: Operation {
    fun calculate(a: Int, b: Int): Int {
      return a + b
    }
  }

  class Subtract: Operation {
    fun calculate(a: Int, b: Int): Int {
      return a - b
    }
  }
  ```
  
* the **context class** that will use the Strategies — this class's has several purposes:
  * to decouple the _implementation details_ of the Strategies from the client code
  * to encapsulate the _strategy selection_, and by extension help to choose the right strategy. 
 
  ```kotlin
  class Calculator(
    operation: Strategy
  ) {
    fun setStrategy(strategy: Strategy)
    fun calculate(a: Int, b: Int): Int {
      return operation.calculate(a, b)
    }
  }
  ```
  
* the **client code**

You can easily add more strategies without modifying the existing classes, adhering to the open-closed principle.

~~~admonish example title="Examples"
* Different strategies to handle the result of an HTTP response (maybe by looking at status code)
~~~

## Enum pattern vs strategy interface

~~~admonish warning title="Like Rust enum"
Looks freakishly similar to Rust's enum
~~~


