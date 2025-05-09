# Error handling patterns

* Result — Rust❤️, Haskell, Kotlin
* Return error codes — C, Go
* Exceptions — Java, Kotlin
* Error callbacks — JavaScript
* Nullable — any language
* Empty collection — any language (for functions that return a collection)

Reads:
* [Kotlin and exceptions](https://elizarov.medium.com/kotlin-and-exceptions-8062f589d07) by Roman Elizarov
* [Designing error types in Rust](https://mmapped.blog/posts/12-rust-error-handling) by Roman Kashitsyn
* [Idiomatic Error Handling in Rust](https://nrempel.com/idiomatic-error-handling-in-rust/) by Nicholas Rempel
* [Error handling patterns](https://andreabergia.com/blog/2023/05/error-handling-patterns/) by Andrea Bergia

Questions to ask:
* Should I crash the app?
* Is the error recoverable? [Rust](https://doc.rust-lang.org/book/ch09-00-error-handling.html) has some guidelines

~~~admonish note title="Result type vs. (checked) exceptions"
The key difference is performance overhead — capturing a stack trace in JVM is expensive.

[Which part of throwing an Exception is expensive?](https://stackoverflow.com/questions/36343209/which-part-of-throwing-an-exception-is-expensive)
~~~
