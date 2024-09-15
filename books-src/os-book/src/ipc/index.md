# IPC

Inter-process communication

## Socket

Data sent over a network interface

## Shared memory

## Memory-mapped file

Memory mapping, `mmap` is a technique to map the file to a process's address space (**directly into program's memory**) such that the process can address the file directly and **no copies are required** (step 3 of file I/O).

Another explanation: `mmap` maps memory pages directly to bytes on disk. 

When to use memory maps?

- You access data randomly
- You keep it around for a long time
- You want to share it with other processes

[https://unix.stackexchange.com/a/474928/289113](https://unix.stackexchange.com/a/474928/289113)
