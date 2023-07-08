# Write

From `man 2 write`:

```c
ssize_t write(int fildes, const void *buf, size_t nbyte);
```

Example:

```c
#include <unistd.h>

int main() {
    const char *message = "Hello, World!\n";
    write(1, message, 14);
    return 0;
}
```