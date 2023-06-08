# Create

```c
#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>

int main() {
    // Address family is AF_INET = IPv4
    // Type of socket is SOCK_STREAM = TCP
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);

    if (sockfd == -1) {
        perror("Error creating socket");
        return 1;
    }
}
```
