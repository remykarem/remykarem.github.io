# SFTP

SSH File Transfer Protocol

This protocol provides file transfer, file access and file management functionalities over any reliable data stream.

SFTP typically uses SSH (Layer 6) to secure the data stream.

~~~admonish note title="On using SSH"
When we say "SFTP uses SSH", we are saying that _SFTP uses the secure communication provided by SSH_.

It doesn't use the remote shell access capabilities of SSH.
~~~

The SFTP protocol defines a variety of operations for file transfer and manipulation.

| operation | sftp cli client |
|-----------|-----------------|
| open      |                 |
| close     |                 |
| read      |                 |
| write     |                 |
| remove    | rm              |
| mkdir     | mkdir           |
| rmdir     | rmdir           |
| stat      | ls, lstat       |
| setstat   | chmod, chown    |
| fstat     |                 |
| rename    | rename          |
| readlink  |                 |
| symlink   | ln              |
| realpath  |                 |

~~~admonish note
The operations seem oddly similar to UNIX file syscalls.
~~~
