# Process abstraction

## **Daemons**

Process that always run in background

eg. sshd, systemd, cron

---

insert process lifecycle here

---


## **System calls**

Interface between a process and OS

- open
- `fork()` (from existing
- `exec()` (new process from existing)
- `kill`
- `wait()`
- `pipe()`

Elements

- Process ID (assigned by OS)
- Memory
    - Code
    - Data
    - Stack: function calls
    - Heap: dynamic memory allocation
- Files
- Registers (values are saved in memory)
- Kernel state
    - Process state
    - Priority

**New process**

- fork: creates a new process same as parent process
    - All the state is copied (open files, register state, memory allocations, program code)
- exec: replaces the contents of the currently running process with the information from a program binary
    - eg. shell: when launching a new program, firstly fork, creating a new process, and then exec (i.e. load into memory and execute) the program binary it is supposed to run.
- Copy on write

A process is an instance of program.

Processes spawn threads (sub-processes).

- Threads handle subtasks like reading keystrokes, loading HTML pages, autosaving.
- Threads live inside processes, and share the same memory space.

CPUs have 1 or more cores.

Processes

- Useful for CPU-intensive operations
- Two processes can execute code simultaneously
- Sharing info between processes is slower as memory space is not shared

Types

1. User process
2. Daemon process
3. Kernel process

States

Only one process can run at a time on a single CPU.

- Running
- Not running
    - Sleeping (interruptible sleep)
    - Runnable or running
    - Uninterruptable sleep
    - Defunct/zombie
    

