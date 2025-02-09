# Asynchronous programming

## Models

* Thread-based concurrency — uses OS threads
* Event-driven concurrency / event loop — eg. Node.js, Rust `tokio`, Python `asyncio`
* Fork-join model — eg. Java's ForkJoinPool, Rust `rayon`
* Coroutine-based concurrency (functions that pause and execute) — eg. Rust async/await, Kotlin's coroutines, Go's goroutines
* Actor model — independent actors with message passing
