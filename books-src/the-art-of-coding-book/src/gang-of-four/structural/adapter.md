# Adapter

Use cases:
* Letting 2 incompatible _types_ talk to each other.
* Changing an object to fit to an existing implementation.

~~~admonish example title="Spring Boot"

* Custom Converter:

    ```kotlin
    @Component
    class StringToLocalDateConverter : Converter<String, LocalDate> {
        override fun convert(source: String): LocalDate =
            LocalDate.parse(source, DateTimeFormatter.ISO_DATE)
    }
    ```

* HttpMessageConverter (built-in)
~~~

~~~admonish example title="Mapper"
If your classes are "mapper" classes or classes that convert from one type to another, they are implementing the Adapter pattern.

```kotlin
interface ModelMapper<T, U> {
    fun from(from: T): U
}
```
~~~

~~~admonish example title="Rust's From and Into"
Rust has `From<T>` and conversely `Into<U>` to allow types to be converted to each other 😍
~~~

~~~admonish example title="UDP"
**Given that we have** a method or an object (“**adapter client**”) expects another object to have a `write` method.

```python
def log(message, destination):
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
~~~

~~~admonish example title="Voltage difference"
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

We create a different plug that can adapt to this.

```kotlin
class PlugAdapter implements Plug {
    fun recharge() {
        return 1
    }
}
```

And switch out accordingly.
~~~

~~~admonish success title="Kotlin: Extension functions as a means of adapting an existing class"
While Kotlin's extension functions can be seen as adapting a class to a new interface, it's not the Adapter pattern in the strict sense because there's no separate adapter class involved.

However, it _achieves a similar goal of adapting an existing class_ to a new interface.

Given an existing class `String`,

we want to adapt it to append an exclamation mark to it

```kotlin
fun addExclamation(string: String): String {
    return "$string!"
}
```

so we do

```kotlin
fun String.addExclamation(): String {
    return "$this!"
}
```
~~~