# Pub/Sub messaging service

Purpose:
* [Asynchronous message **routing**](../core-functionalities/routing.md)

Features:
* Message filtering
* Message ordering
* DLQ integration

~~~admonish example
Amazon SNS
~~~

Examples of subscribers are a Lambda and a queue. 

Note that if a subscriber is not available at the time of message publication, the message is not stored for later retrieval.
