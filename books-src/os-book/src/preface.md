# Preface

* [You're the OS!](https://plbrault.github.io/youre-the-os/)
* [How Unix Works: Become a Better Software Engineer](https://neilkakkar.com/unix.html)
* [IPC — Unix Signals](https://goodyduru.github.io//os/2023/10/05/ipc-unix-signals.html)

An operating system is a system software that manages computer hardware, software resources, and provides common services

Everything is either a file or a process.

Programs can run simultaneously.

But since each program is going to need some memory, and we can’t lose that data when we switch to another program, what the OS does is to allocate a bunch of memory addresses to each program.

If a program asks for more memory, the new blocks of memory allocated may not be sequential. This can be confusing for programmers to keep track of, so OS virtualises memory locations, using **virtual memory**.

With virtual memory, programs can assume their memory always starts at address 0x00. Virtual memory also helps in **memory protection**, where a program will not have memory access to another program.

**OSes**

- Unix-like
    - Linux distributions
        - Red Hat Enterprise Linux
        - Fedora
        - Debian
            - Buster, aka Debian 10, 50MB
            - Stretch, aka Debian 9, 40MB
            - Jessie, aka Debian 8
        - Alpine Linux, 5MB
        - Ubuntu (based on Debian), 25MB
            - 16.04 LTS (Xenial Xerus)
            - 18.04 LTS (Bionic Beaver)
            - 19.10 (Eoan Ermine)wik
            - 20.04 LTS (Focal Fossa)
            - 20.10 (Groovy Gorilla)
        - Arch Linux
    - macOS (previously Darwin)
    - BSD
        - NetBSD
        - FreeBSD
        - OpenBSD
- MS-DOS

## Resources

https://jiayushe.github.io/teaching/2021-spring-cs2106
https://bernardteo.me/nus/CS2106%20Reference.pdf
