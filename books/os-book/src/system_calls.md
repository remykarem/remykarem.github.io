# System calls

`man -k .`  Get system calls

**File descriptors and opening files**

```c
#include <fcntl.h>
#include <stdlib.h>
#include <stdio.h>

int fd1, fd2;

fd1 = open("hello.txt", O_RDONLY);
if (fd1 < 0) {
perror("c1");
exit(1);
  }

fd2 = open("hello.txt", O_RDONLY);
if (fd2 < 0) {
perror("c1");
exit(1);
  }
```

## Files
- `open`
- `read`
- `write`
- `execve`

## Networking
- `connect`
- `send`
- `recv`
- `sendto`
- `recvfrom`

# ABI: System calls reference

- macOS: https://opensource.apple.com/source/xnu/xnu-1504.3.12/bsd/kern/syscalls.master
- `man 2 syscall`
- 