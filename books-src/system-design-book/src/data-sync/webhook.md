# Webhook

A webhook is an _integration_ where the server (the system with data) sends ("**pushes**") data to the client (the system which requires the data).

A webhook is an HTTP request (with some payload) triggered by an event in a source system, then sent to a destination system.

Because this is event-triggered, the destination system will get the data (related to that event) in _real-time_.

A **server**, in the context of webhook, is a system that provides data (in particular, notification).

~~~admonish note title="Webhook or REST API"
GitHub makes a [distinction](https://docs.github.com/en/webhooks/about-webhooks#choosing-webhooks-or-the-rest-api) between a webhook and a REST API.
~~~

~~~admonish note title="Webhook vs. API integration"
A webhook shouldn't be compared to an API. 
~~~

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

## Best practices

* Webhook clients should not take long to respond

  Eg. 10s for [GitHub](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks#respond-within-10-seconds), 20s for [Stripe](https://stackoverflow.com/a/71445729) 

* Missed deliveries should be redeliverable

  [GitHub](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/redelivering-webhooks)

* Webhook servers to implement a unique delivery ID to prevent replay attack

  eg. [GitHub](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks#use-the-x-github-delivery-header) uses the `X-GitHub-Delivery` header

* Check event type before processing

  [Source](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks#check-the-event-type-and-action-before-processing-the-event)