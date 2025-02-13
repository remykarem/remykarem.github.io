# SSH

Secure Shell

[RFC 4253](https://www.rfc-editor.org/rfc/rfc4253.html)

This protocol provides **remote shell** access to access a remote computer in a secure way. The establishment of a secure communication is part of SSH (Layer 6).

SSH is built on top of TCP.

SSH protocol is designed with _multiplexing_ in mind. This means you can open multiple sessions under an existing connection (limited to `MaxSessions`).

Multiplexing example

```
Host bastion
  Hostname server.example.com
  ForwardAgent yes
  ControlPath ~/.ssh/cm-%r@%h:%p
  ControlMaster auto
  ControlPersist 10m
```

https://blog.scottlowe.org/2015/12/11/using-ssh-multiplexing/

Try opening multiple tabs

```
mux_client_request_session: session request failed: Session open refused by peer
```

Configs
* Max connections per account (user)
* Max concurrent sessions per connection
* Idle connection timeout

OpenSSH-specific
* MaxSessions — per connection
* MaxStartups x:y:z — global
* MaxConnectionsPerUser 
man ssh_config
AWS Transfer Family-specific
* Concurrent SFTP connections per user
* Connections per account
https://docs.aws.amazon.com/general/latest/gr/transfer-service.html

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
