# Filter

An object that  performs filtering tasks on request or response or both.

```kotlin
interface Filter {

	..

	fun doFilter(
		request: ServletRequest, 
		response: ServletResponse,
		chain: Filterchain
	) {}

	..
}
```

In Spring, there is a `Filter` implementation called `DelegatingFilterProxy`. This allows bridging the Servlet’s container’s lifecycle and Spring’s `ApplicationContext`.

In Spring Security, there is a `Filter` implementation called `FilterChainProxy` that allows delegating to many `Filter` instances through `SecurityFilterChain` (Spring).

Example usages:

- Authentication Filters
- Logging and Auditing Filters
- Image conversion Filters
- Data compression Filters
- Encryption Filters
- Tokenising Filters
- Filters that trigger resource access events
- XSL/T filters
- Mime-type chain Filter
