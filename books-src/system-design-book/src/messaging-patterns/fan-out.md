# Fan-out

Fan-out is a pattern where a message is delivered to multiple destinations.

Fanout provides asynchronous event notifications, which in turn allow for parallel processing. 

~~~admonish question="Fan-out vs. pub/sub"
1. Pub/Sub is a system which encompasses fan-out.

2. Fan-out focuses on the behaviour of the messages. Pub/sub focuses on the actors acting on the messages.
~~~
