# Unix socket

aka Unix domain socket

Unix domain socket or IPC socket is a data communications endpoint for exchanging data between processes executing on the same host OS

We use the same `socket` syscall.

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

~~~admonish example

Server ("daemon")

```python
import socket
import os

# Define the Unix socket file path
socket_file = '/tmp/unix_socket_example.sock'

# Make sure the socket does not already exist
if os.path.exists(socket_file):
    os.remove(socket_file)

# Create a Unix socket
server = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)

# Bind the socket to the file
server.bind(socket_file)

# Listen for incoming connections
server.listen(1)

print(f"Server listening on {socket_file}...")

while True:
    # Accept a connection
    conn, _ = server.accept()
    print("Client connected")

    # Receive data from the client
    data = conn.recv(1024)
    if data:
        print(f"Received: {data.decode('utf-8')}")

        # Send a response back to the client
        conn.sendall(b'Hello from server')
    
    # Close the connection
    conn.close()
```

Client:

```python
import socket

# Define the Unix socket file path
socket_file = '/tmp/unix_socket_example.sock'

# Create a Unix socket
client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)

# Connect to the server
client.connect(socket_file)

# Send some data to the server
client.sendall(b'Hello from client')

# Receive a response from the server
data = client.recv(1024)
print(f"Received: {data.decode('utf-8')}")

# Close the socket
client.close()
```
~~~

References:
* [IPC — Unix Domain Sockets](https://goodyduru.github.io/os/2023/10/03/ipc-unix-domain-sockets.html)
