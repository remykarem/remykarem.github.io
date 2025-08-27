# Pub/sub messaging service

Purpose:
* [Asynchronous message **routing**](../core-functionalities/routing.md)

~~~admonish tip
Such a service (eg. SNS) is like an event stream / Kakfa but wiht zero complex transformation capabilities.
~~~

Features:
* Message filtering
* Message ordering
* DLQ integration

~~~admonish example
Amazon SNS
~~~

Examples of subscribers are a Lambda and a queue. 

Note that if a subscriber is not available at the time of message publication, the message is not stored for later retrieval.
