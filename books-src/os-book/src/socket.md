# Socket

aka POSIX socket, BSD socket

A socket is a software object _provided by the OS_ to allow applications to send and receive data across the network.

```
man 2 socket
```

~~~admonish info title="OSI model"
Sockets is OSI Layer 4 and 5.
~~~

Sockets are an abstraction of the
1. route table, and
2. network interface,
hence encompassing Layer 3 (`SOCK_RAW`) and Layer 4 (`SOCK_STREAM` and `SOCK_DGRAM`; TCP and UDP respectively).

The system call allows you to:

* Create socket
* Bind socket to an IP address
* Connect socket to an IP address
* Write data to socket — using the routing table
* Read data from socket — using the destination IP address and port number from the data

~~~admonish warning title="Creating sockets is expensive"
Expensive in terms of resource:
* Creating a socket is a **system call**
* The system needs to **allocate memory** and file descriptors for the socket
  * Send and receive buffers (64KB-256KB)
  * Socket structure
  * Assigning a file descriptor (recall file desceiptors are a finite resource)
* Establishing a network connection involves handshaking, buffer allocation and encryption
~~~

```admonish note title="Socket vs. Unix domain socket"
A socket is not the same as the Unix domain socket.
```

```admonish note title="Socket vs. port"
A socket is not a port.

A port is another software construct defined by the OS to differentiate between different programs or processes running on the same machine.
```

```admonish note title="Socket vs. file"
A socket is not a file.

However, it uses file-like semantics like file descriptors.
```

~~~admonish example

Server:

```python
import socket

def start_server():
    # Create a socket object
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Bind to localhost on port 8080
    server_socket.bind(('localhost', 8080))
    # Start listening for connections
    server_socket.listen(1)
    print("Server is listening on port 8080...")

    while True:
        # Accept a client connection
        client_socket, addr = server_socket.accept()
        print(f"Connection from {addr} has been established.")
        
        # Receive data from the client
        data = client_socket.recv(1024)
        print(f"Received data: {data.decode()}")

        # Send a response back to the client
        client_socket.sendall(b"Hello from server")

        # Close the client connection
        client_socket.close()

if __name__ == '__main__':
    start_server()
```

Client:

```python
import socket

# Create a socket object
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client_socket:
    # Connect to the server
    client_socket.connect(('localhost', 8080))
    # Send data to the server
    client_socket.sendall(b'Hello, server')
    
    # Receive response from the server
    response = client_socket.recv(1024)
    print(f"Received from server: {response.decode()}")
```

Few things to take note:
* Buffer handling
* `accept` is a syscall
~~~
