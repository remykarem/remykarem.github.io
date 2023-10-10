# Webhook (Push)

aka Push APIs

A webhook is an HTTP request (with some payload) triggered by an event in a source system, then sent to a destination system.

Because this is event-triggered, the destination system will get the data (related to that event) immediately.

~~~admonish hint
We can see this as the server sends request to client.
~~~

Webhooks are commonly used in event-driven architecture. 

~~~admonish example title="Uses"
* Integration between systems
* Notifications
* Monitoring and alerts
~~~
