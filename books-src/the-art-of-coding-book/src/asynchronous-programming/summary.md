# Asynchronous programming (??????)

## Models

* Coroutine-based concurrency (functions that pause and execute) — eg. Rust async/await, Kotlin's coroutines, Go's goroutines
* Thread pool-based concurrency — uses OS threads
* Event-driven concurrency / event loop — eg. Node.js, Rust `tokio`, Python `asyncio`
* Fork-join model — eg. Java's ForkJoinPool, Rust `rayon`
* Actor model — independent actors with message passing

## Scheduling strategies:
* Event-loop — to listen for I/O readiness
* Cooperative
* Preemptive
* Work-stealing
* Basic (?)

## Coroutine

Coroutine = co-operative + routine

In C++, a coroutine is a function that can suspend execution to be resumed later.

[StackOverflow: What is a coroutine?](https://stackoverflow.com/questions/553704/what-is-a-coroutine)

Coroutines may or may not need a runtime.

~~~admonish tip title="Runtime"
aka scheduler, dispatcher, executor
~~~

* Need runtime:
  * Rust's async functions
  * Python's async functions
  * Kotlin's suspend functions
* Don't need runtime:
  * Python's generators (`yield`)
  * Lua coroutines

## Thread "types"

Green thread vs. OS thread

|             | Green thread           | OS thread                |
|-------------| -----------------------|--------------------------|
| Managed by	| Runtime (e.g., Go, JVM) |	Operating System  |
| Context Switching |	Fast (user-space)	| Slow (kernel-space) |
| Memory Usage	| Low (stack size small)	| High (each thread has its own large stack) | 
| Concurrency Level |	Can spawn millions of threads	| Limited by OS and system resources |
| Preemption	|Usually cooperative |	Preemptive (scheduled by OS) |

