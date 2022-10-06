# Lazy property

You can initialise a property lazily. A lazy property is like a cached property in Python.
    
```kotlin
class Person(val height: Float, val weight: Float) {
    val bmi: Float by lazy {
        println("Computing BMI...")
        this.weight / (this.height*this.height)
    }
}

fun main() {
    val person = Person(1.70f, 60f)
    println(person.bmi)
}
```

A lazy property is, by definition, a read-only property. It wouldn't work if you declare it as `var`:
    
```kotlin
class Person(val height: Float, val weight: Float) {
    var bmi: Float by lazy {
        println("Computing BMI...")
        this.weight / (this.height*this.height)
    }
}

fun main() {
    val person = Person(1.70f, 60f)
    println(person.bmi)
}
```

Be careful, though! The lazy property is computed *once* in the object's lifetime.

(The compiler shouldn't even have allowed this... It should have checked for you whether the `this.weight` and `this.height` are mutable.)
    
```kotlin
class Person(var height: Float, var weight: Float) {
    val bmi: Float by lazy {
        println("Computing BMI...")
        this.weight / (this.height*this.height)
    }
}

fun main() {
    val person = Person(1.70f, 60f)
    println(person.bmi)
    person.weight += 20
    println(person.bmi)
}
```

The example above should have been a getter property instead since we expect `bmi` to change.

> 💡 Lazy properties are thread-safe: one thread computes, but all threads will see the same value.
