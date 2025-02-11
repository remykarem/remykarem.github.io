# SSH

Secure Shell

[RFC 4253](https://www.rfc-editor.org/rfc/rfc4253.html)

This protocol provides **remote shell** access to access a remote computer in a secure way. The establishment of a secure communication is part of SSH (Layer 6).

SSH is built on top of TCP.

SSH protocol is designed with _multiplexing_ in mind. This means you can open multiple sessions under an existing connection (limited to `MaxSessions`).

~~~admonish hint title="SSH across multiple OSI layers"
SSH spans across layers 5, 6 and 7.
~~~

~~~admonish tip
* Use `-v` or `-vv` etc. for verbosity.
* `man ssh_config` for list of configs
~~~

~~~admonish info title="SSH implementations"
* OpenSSH (macOS)
* PuTTY (Windows, Linux)
~~~

~~~admonish warning
When setting up an SSH server, OpenSSH enables SFTP and SCP by default.

To disable SFTP, you need to remove the SFTP `Subsystem` in the configuration.

To disable SCP, idk
~~~

~~~admonish info title="SSH versions"
SSH-2 is the latest version.

SSH-1 is obsolete and is considered vulnerable (see wiki).
~~~
