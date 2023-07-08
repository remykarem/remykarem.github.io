# Local and non-local return

Local return vs. non-local return in lambda function & anonymous function

When you `return` from a lambda, you do a non-local (non-lambda) return, i.e. return to the function (eg. main()) which called `someFunction`. 

Another way to look at this is this means that the `return` belongs to `someFunction`.

```kotlin
fun someFunction() {

    val numbers = 1..10

    numbers.forEach {
        if (it % 5 == 0)
            return  // this return 'belongs' to someFunction
        println("Hello $it")
    }
}

someFunction()
```

This is the same as `return@someFunction`.

```kotlin
fun someFunction() {
    val numbers = 1..10

    numbers.forEach {
        if (it % 5 == 0)
            return@someFunction
        println("Hello $it")
    }
}

someFunction()
```

However, if you `return` from an anonymous function, you do a local return (return to this anonymous function) (to `someFunction2`).

```kotlin
fun someFunction2() {
    val numbers = 1..10

    numbers.forEach(fun(x) {
        if (x % 5 == 0)
            return  // this does not belong to someFunction2
        println("Hello $x")
    })
}

someFunction2()
```

Unless of course you specify that you want to do a non-local return.

```kotlin
fun someFunction2() {
    val numbers = 1..10

    numbers.forEach(fun(x) {
        if (x % 5 == 0)
            return@someFunction2  // this 'belongs' to someFunction2
        println("Hello $x")
    })
}

someFunction2()
```
