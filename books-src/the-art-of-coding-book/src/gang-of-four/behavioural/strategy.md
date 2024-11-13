# Strategy

Used when you have different algorithms or approaches or classes or ways (known as **"strategies"**) to achieve the same operation. 

You'll need:
* the **Strategy interface**
* the different **concrete Strategy implementations** of this interface
* the **context class** that will use the Strategies — this class's has several purposes:
  * to decouple the _implementation details_ of the Strategies from the client code
  * to encapsulate the _strategy selection_
* the **client code**

You can easily add more strategies without modifying the existing classes, adhering to the open-closed principle.

~~~admonish example title="Examples"
* Different strategies to handle the result of an HTTP response (maybe by looking at status code)
~~~

## Enum pattern vs strategy interface

~~~admonish warning title="Like Rust enum"
Looks freakishly similar to Rust's enum
~~~


