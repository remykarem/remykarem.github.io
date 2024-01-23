# Strategy

Used when you have different algorithms or approaches or classes or ways (known as **"strategies"**) to achieve the same operation. 

You'll need:
* the **Strategy interface**
* the **concrete Strategy implementations** of this interface
* the **context class** that will use the Strategies — this class's main purpose is to _decouple_ the Strategies from the client code
* the **client code**

~~~admonish warning title="Like Rust enum"
Looks freakishly similar to Rust's enum
~~~

You can easily add more strategies without modifying the existing classes, adhering to the open-closed principle.
