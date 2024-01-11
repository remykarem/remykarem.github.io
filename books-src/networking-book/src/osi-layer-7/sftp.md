# SFTP

SSH File Transfer Protocol

This protocol provides file transfer, file access and file management functionalities over any reliable data stream.

SFTP typically uses SSH (Layer 6) to establish a secure connection for file transfers.

~~~admonish note title="On using SSH"
When we say "SFTP uses SSH", we are saying that _SFTP uses the secure communication provided by SSH_.

SFTP doesn't use the remote shell access capabilities of SSH.
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

~~~admonish note title="Automatic permission setting"
SFTP clients can have the capability to set file permissions automatically after a file is uploaded.

This is typically done to mirror the permissions of the file on the client-side system.
~~~

~~~admonish note title="SFTP vs. Unix file system"
The naming convention is consistent with file system manipulation syscalls.
~~~
