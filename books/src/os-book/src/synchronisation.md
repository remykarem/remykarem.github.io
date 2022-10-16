# Synchronisation

## Intro

concurrency: the perception of having tasks that run at the same time, while true parallelism: as tasks that literally run at the same time.

CPU is made up of cores. Each core can only perform 1 operation at a time.

OS have developed advanced techniques to run multiple processes or threads at the same time. **Preemptive multitasking** is one of them, where **preemption** is the ability of interrupting a task, switching to another one, and then resuming the first task at a later time. This gives the user the illusion of having more than one program running in parallel. Concurrency is met, but true parallelism (simultaneous) is still missing,.,

## **Terminologies**

- Race condition: When something bad happens due to unfortunate ordering of events
- Data race: Two threads access (read or write) at the same time
- Thread-safe: works correctly without data races or race conditions
- Critical section

## Important solutions to problems from multithreading

- Synchronisation
- Atomicity
- Ordering

## **Synchronisation primitives**

- Mutexes
- Semaphores
- Condition variables

Concept focuses on simultaneity. They are not antonyms.

Concurrency - Do more than 1 thing, not necessarily simultaneously. No need to wait for one to finish before the other starts.

Parallelism - Do more than 1 same thing simultaneously.