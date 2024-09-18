# System calls

aka syscall

`man -k .`  Get system calls

What happens when an application needs to perform a system call?
1. The application issues a specific instruction (?) that causes a **context switch** from user mode to kernel mode.
2. The application is paused. The kernel performs the requested operation.
3. Once done, the kernel returns the result to the user application.
4. The kernel switches back to user mode.

~~~admonish warning title="Expensive"
System calls are relatively expensive compared to regular function calls.

Frequent or unnecessary system calls can slow down an application.
~~~

## File descriptors and opening files

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>

int main() {

  int fd;
  struct stat file_stat;
  const char *filename = "hello.txt";

  // Open the file
  fd = open(filename, O_RDONLY);
  if (fd < 0) {
    perror("c1");
    return 1;
  }

  // File attributes
  if (stat(filename, &file_stat) == -1) {
      perror("stat");
      return 1;
  }
  printf("File: %s\n", filename);
  printf("Size: %lld bytes\n", (long long) file_stat.st_size);
  printf("Permissions: %o\n", file_stat.st_mode & 0777);
  printf("Owner ID: %d\n", file_stat.st_uid);
  printf("Group ID: %d\n", file_stat.st_gid);

  // Close the file
  if (close(fd) == -1) {
    perror("Error closing the file");
    return 2;
  }

  return 0;  
}
```

## Files
- `open`
- `close`
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
