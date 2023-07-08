# Exception handling

| API                      | Client code handling | Enforced?               |
|--------------------------|----------------------|-------------------------|
| `throw` expression       | `try`/`except`       | No                      |
| Nullable return type     | Type system          | Yes, by the type system |
| Sealed class return type | Type system          | Yes, by the type system |

The sealed class idiom can be seen in the standard library's [`Result`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) or Arrow's [`Either`](https://arrow-kt.io/docs/apidocs/arrow-core/arrow.core/-either/).

> ⚠️ Take note that the compiler doesn't enforce catching exceptions thrown by libraries.
