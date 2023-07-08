# I/O

There is a buffer for output so the actual writing of file may not happen untill we close the file

# File I/O

What happens when you `read()` a file?

1. Transfer control to the kernel using system call
2. Interact with the physical disk where the file resides
3. Copy the data into different buffers between user space and kernel space
