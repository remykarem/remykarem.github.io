# Event-driven architecture

* Events
* Asynchronous; non-blocking
* Stateless
* Webhooks — The server fires an HTTP event to all registered endpoints of the consumer
* Often employs pub/sub model where multiple components can react to a single event

~~~admonish note title="Blocking"
Flow of execution is blocked waiting for another process to complete
~~~

~~~admonish note title="Non-blocking"
Flow of execution is not blocked does not wait for another process to complete
~~~

Events

AKA “IO / input-output”. Eg. button click, HTTP request, change in variable

Non-blocking architecture

Reactive / event-driven architecture.

This means the code is written to react to the events (IO) occurring regularly, as opposed to sequentially moving through the lines of code. Event-driven architecture is all about processing asynchronous data streams. Eg. Nodejs is a single-threaded non-blocking framework written to handle more IO intensive tasks. It has an event loop architecture.

**Latency**

Latency is the amount of time a system takes to respond to a user request. It is usually divided into 2 parts:

- Network latency
- Application latency
