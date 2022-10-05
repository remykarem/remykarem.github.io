# Exception handling

There are different exception handling models in Kotlin.

## Throw

You can write `throw` expressions that will cause the program to crash.

Note that your API can alert client code (Java, Swift, or Objective-C) that you are throwing using the `@Throws` annotation.

## Try-catch

We're still bound to Java's world of try-catch if we use Java libraries.

## Result

This is similar to Rust's `Result` type.

## Unhandled

Some functions still throw an exception (eg. the indexing operator of a list), but the compiler won't warn you about that.
