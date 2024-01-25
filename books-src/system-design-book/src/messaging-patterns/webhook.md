# Webhook (Push)

aka Push APIs, callback APIs

A webhook is an HTTP request (with some payload) triggered by an event in a source system, then sent to a destination system.

Because this is event-triggered, the destination system will get the data (related to that event) in real-time.

~~~admonish hint
We can see this as the server sends request to client.
~~~

~~~admonish note title="Vocabulary"
FromGitHub:
* create a webhook — involves soecifying a URL and subscribing to event types
* subscribe the webhook to an event
* trigger the webhook
* listen for webhook deliveries and respond to them
* webhook URL
* if webhook goes down
* redeliver webhook

* register a webhook endpoint
* push real-time event data
* webhook endpoint
* webhook request
* webhook provider (eg. Stripe)
* webhook consumer
~~~

Webhooks are commonly used in event-driven architecture. 

~~~admonish example title="Uses"
* Integration between systems
* Notifications
* Monitoring and alerts

[Stripe Webhook Docs](https://stripe.com/docs/webhooks)
~~~
