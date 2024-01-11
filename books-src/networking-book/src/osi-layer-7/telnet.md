# Telnet

Teletype network

Protocol to establish a bidirectional interactive text-based connection.

Telnet can be used to connect to any port on a remote host. It runs on top of TCP.

~~~admonish info title="Connectivity test"
Telnet is commonly used for diagnosing problems and connectivity only.
~~~

~~~admonish warning
Telnet is not secure. It transmits all data in plain text.
~~~

~~~admonish example

```
telnet <some-ssh-host> 22
```

```
telnet example.com 80
```

and

```
GET / HTTP/1.1
Host: www.example.com
```
~~~
