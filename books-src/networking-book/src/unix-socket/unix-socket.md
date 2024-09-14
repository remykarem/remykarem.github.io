# Unix socket

aka Unix domain socket

~~~admonish example title="Example applications"
* Docker
* ssh-agent
~~~

~~~admonish example title="Unix socket client"
* cURL

  ```sh
  curl --unix-socket ~/.colima/docker.sock http://localhost/v1.41/containers/json\?all\=tru | jq
  ```

* Low-level programming
~~~
