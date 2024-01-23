# Strategy

Used when you have different algorithms or approaches or classes or ways (known as **"strategies"**) to achieve the same operation. 

You'll need:
* the **Strategy interface**
* the **concrete Strategy implementations** of this interface
* the **context class** that will use the Strategies — this class's has several purposes:
  * to decouple the _implementation details_ of the Strategies from the client code
  * to encapsulate the _strategy selection_
* the **client code**

~~~admonish warning title="Like Rust enum"
Looks freakishly similar to Rust's enum
~~~

You can easily add more strategies without modifying the existing classes, adhering to the open-closed principle.
