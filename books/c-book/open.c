#include <fcntl.h>      // Needed for open()
#include <stdio.h>      // Needed for perror()

int main() {
    int fd = open("example.txt", O_RDONLY);  // Open the file as read-only

    if (fd == -1) {
        perror("Error opening file");
        return 1;
    }
}
