# Socket

### **Socket**

A socket is the software interface between a process (the “port” that an application reserved) and the computer network (which is defined by the machine’s “IP address” in the network).

So, technically, processes communicate with each other using sockets.

Unix domain socket

- Data sent to unix socket never gets lost
- Use them to communicate between processes on the same computer

## Sockets

Sockets are gateways between applications and the network. Data is sent from application to socket. Sockets have an associated port number with them.

OS can take care of explicitly specifying a port. THis is called ephemeral ports, i.e.e OS will bind a socket to a port dynamically
