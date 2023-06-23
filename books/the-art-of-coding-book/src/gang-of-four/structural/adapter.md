# Adapter

Changing an object to fit to an existing implementation.

**Given that we have** a method or an object (“**adapter client**”) expects another object to have a `write` method.

```python
def log(message, destination):
	destination.write(f"{message}")
```

**We want** to write a message to a UDP socket using this.

**But** UDP objects don't have this method. 

```python
import socket
udp_socket = socket.socket(...)
udp_socket.send("hello", ...)
```

**So** we write a class for this (“**adapter**”) that will have this `send` method.

```python
class UdpSocketAdapter:

  def __init__(self, ip, port):
      self._socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
      self._ip = ip
      self._port = port

  def write(self, message):
      self._socket.send(message, (self._ip, self._port))
```

**Such that now**

```python
udp_socket_adapter = UdpSocketAdapter()
log(message="hello", destination=udp_socket_adapter)
```

---

The plug expects a `recharge` method. But the current voltage is too high.

**Given that we have**

```kotlin
class AdapterClient {
    fun main() {
        plug: HighVoltagePlug = HighVoltagePlug()
        plug.recharge()
    }
}
```

**We want** to write a message to a UDP socket using this.

**But** UDP objects don't have this method. 

We create a different plug that can adapt to this.

```kotlin
class PlugAdapter implements Plug {
		fun recharge() {
			return 1
		}
}
```

And switch out accordingly.
