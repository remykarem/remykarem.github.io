# SSH

Secure Shell

SSH2 [RFC 4253](https://www.rfc-editor.org/rfc/rfc4253.html)

This protocol provides **remote shell** access to access a remote computer in a secure way. The establishment of a secure communication is part of SSH (Layer 6).

SSH is built on top of TCP.

~~~admonish hint title="SSH across multiple OSI layers"
SSH spans across layers 5, 6 and 7.
~~~

~~~admonish tip
Use `-v` or `-vv` etc. for verbosity.
~~~

~~~admonish info title="SSH implementations"
* OpenSSH (macOS)
* PuTTY (Windows, Linux)
~~~

~~~admonish info title="SSH versions"
SSH-2 is the latest version.

SSH-1 is obsolete and is considered vulnerable (see wiki).
~~~
