# Prototype

An object that supports *cloning* is called a **prototype**

The prototype pattern is an alternative way to implement inheritance.

~~~admonish example title="JavaScript"
In JavaScript, The prototype model is used mainly for creating objects in performance-intensive situations.

```jsx
const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};
const myCar = Object.create(car, { owner: 10 })
```
~~~

~~~admonish example title="Kotlin"

```kotlin
data class Person(val name: String, val age: Int)

val raimi1 = Person("Raimi", 10)
val raimi2 = raimi.copy(age=19)
```
~~~
