# Asynchronous programming

## Models

* Thread-based concurrency — uses OS threads
* Event-driven concurrency / event loop — eg. Node.js, Rust `tokio`, Python `asyncio`
* Fork-join model — eg. Java's ForkJoinPool, Rust `rayon`
* Coroutine-based concurrency (functions that pause and execute) — eg. Rust async/await, Kotlin's coroutines, Go's goroutines
* Actor model — independent actors with message passing

## Thread "types"

Green thread vs. OS thread

|             | Green thread           | OS thread                |
|-------------| -----------------------|--------------------------|
| Managed by	| Runtime (e.g., Go, JVM) |	Operating System  |
| Context Switching |	Fast (user-space)	| Slow (kernel-space) |
| Memory Usage	| Low (stack size small)	| High (each thread has its own large stack) | 
| Concurrency Level	Can spawn millions of threads	| Limited by OS and system resources |
| Preemption	|Usually cooperative |	Preemptive (scheduled by OS) |
