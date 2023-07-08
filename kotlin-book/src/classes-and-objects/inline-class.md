# Inline class

[Inline classes](https://kotlinlang.org/docs/inline-classes.html) are used to wrap a type.

One possible use case is to provide encapsulation (of the underlying type) as well as a guarantee that the right type of value is supplied at compile time. This use case is similar to Rust's [newtype pattern](https://doc.rust-lang.org/book/ch19-04-advanced-types.html).

This makes inline classes more superior compared to typealiases.

For example, we would want the second `greet` to fail (because it's a `String`). But it's still compilable.

```kotlin
typealias User = String

fun greet(user: User) {
    println("Hello, $user")
}

fun main() {
    val user: User = "Raimi"
    val nonUser: String = "Rogue"
    greet(user)
    greet(nonUser)
}
```

If we use an inline class to wrap the `String` type, there is type safety for its instances. So the following won't compile because of type mismatch:

```kotlin
@JvmInline
value class User(val name: String)

fun greet(user: User) {
    println("Hello, $user")
}

fun main() {
    val user: User = User("Raimi")
    val nonUser: String = "Rogue"
    greet(user)
    greet(nonUser)
}
```

Another use case of inline classes is to override the `toString` method for sensitive data:

```kotlin
@JvmInline
value class Password(val str: String) {
    override fun toString(): String {
        return "***"
    }
}

fun main() {
    val password = Password("secret")
    println("This is my password: $password")
}
```

~~~admonish bug title="Multiple properties"
Note that inline classes only work for a single property (initialised in the primary constructor). The following won't compile because it has two properties:

```kotlin
@JvmInline
value class SecureString(val str: String, val numChars: Int)

fun main() {
    val password = SecureString("pa55w0rd", 1)
    println(password)
}
```
~~~

~~~admonish bug title="With sealed classes"
Inline classes don't play well with sealed classes:

```kotlin
sealed class User {
    @JvmInline value class Student(val name: String): User()
    @JvmInline value class Teacher(val name: String): User()
}

fun main() {
    val user = User.Student("Raimi")
    println(user)
}
```
~~~
