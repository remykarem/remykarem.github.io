# Unix socket

aka Unix domain socket

Unix domain socket or IPC socket is a data communications endpoint for exchanging data between processes executing on the same host OS

~~~admonish example title="Example applications"
* Docker
* ssh-agent
* gpg-agent
~~~

~~~admonish example title="Unix socket client"
* cURL

  ```sh
  curl --unix-socket ~/.colima/docker.sock http://localhost/v1.41/containers/json\?all\=tru | jq
  ```

* Low-level programming
~~~

References:
* [IPC — Unix Domain Sockets](https://goodyduru.github.io/os/2023/10/03/ipc-unix-domain-sockets.html)
