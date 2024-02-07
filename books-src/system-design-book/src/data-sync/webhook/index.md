# Webhook

[The Webhook Standard](https://www.standardwebhooks.com)

A webhook is an _integration_ where the server sends ("**pushes**") data to the client.

Because this is event-triggered, the destination system will get the data (related to that event) in _real-time_.

Actors:
* Webhook provider (sender)

  This is the server, in the context of webhook, is a system that provides data (in particular, notification).

  It is an application that sends webhooks to an external API.

* Webhook consumer (receiver)

  This is the client, the system which requires the data.

  It is an API that receives the webhooks.

To create a webhook, register the webhook URL with the webhook provider. Then, subscribe the webhook to events of interest.

The webhook provider triggers the webhook. The webhook consumer listens for **webhook requests** or webhook deliveries and responds to them.

~~~admonish note title="Webhook or REST API"
GitHub makes a [distinction](https://docs.github.com/en/webhooks/about-webhooks#choosing-webhooks-or-the-rest-api) between a webhook and a REST API.
~~~

~~~admonish note title="Webhook vs. API integration"
A webhook shouldn't be compared to an API. 
~~~

~~~admonish example title="Uses"
Webhooks are commonly used in event-driven architecture.

* Integration between systems
* Notifications
* Monitoring and alerts

[Stripe Webhook Docs](https://stripe.com/docs/webhooks)
~~~

## Best practices

* Webhook clients should not take long to respond

  Eg. [GitHub](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks#respond-within-10-seconds) will timeout a request after 10s. Additionally, GitHub suggests asynchronous processing of messages by setting up a queue.

  [Stripe](https://stackoverflow.com/a/71445729) has a timeout of 20s. They expect the server to promptly respond with an 2xx HTTP status code to indicate that the their Stripe Event was successfully received.

  [Shopify](https://shopify.dev/docs/apps/webhooks/best-practices) has a timeout of 5s.

  ~~~admonish tip title="Optimise connection management"
  [Shopify](https://shopify.dev/docs/apps/webhooks/best-practices#optimize-connection-management) uses HTTP Keep-Alive to reuse connections to the sam ehost and endpoint to reduce network congestion and latency in subsequent requests.
  ~~~

* Missed deliveries should be redeliverable

  [GitHub](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/redelivering-webhooks)

* Webhook servers to implement a unique delivery ID to prevent replay attack

  eg. [GitHub](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks#use-the-x-github-delivery-header) uses the `X-GitHub-Delivery` header

* Check event type before processing

  [Source](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks#check-the-event-type-and-action-before-processing-the-event)

* Verifying webhook requests

* Webhook clients should expect a burst of requests

  [Shopify](https://shopify.dev/docs/apps/webhooks/best-practices#prepare-your-endpoint-for-a-burst-of-requests).

  Additionally, [Shopify](https://shopify.dev/docs/apps/webhooks/configuration/eventbridge) suggests using AWS EventBridge to manage large volumes of event notifications

## Other practices

* Responding with `2xx` to acknowledge webhooks

  ~~~admonish tip title="Difference from the regular APIs"
  This is different from the usual meaning of `2xx` which means the request succeeded with or without a reponse.
  ~~~

* Viewing past webhook deliveries

  Eg. [GitHub](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries) allows viewing of webhooks delivered in the past 3 days.

  [Shopify](https://shopify.dev/docs/apps/webhooks/best-practices#track-failures)

* Testing webhooks

  [GitHub](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/testing-webhooks), [Stripe](https://stripe.com/docs/webhooks#test-webhook)

* Handling duplicate events

  [Stripe](https://stripe.com/docs/webhooks#handle-duplicate-events), [Shopify](https://shopify.dev/docs/apps/webhooks/best-practices#ignore-duplicates)

* Retry mechanism, webhook redelivery

  [Stripe](https://stripe.com/docs/webhooks#retries) attempts to deliver an event for up to 3 days with an exponential backoff.

* Event ordering guarantee

  [Stripe](https://stripe.com/docs/webhooks#event-ordering) doesn't guarantee the delivery of events in the order in which they are generated, and expects the endpoints to handle accordingly.

* Implement reconciliation jobs along with the webhook

  [Shopify](https://shopify.dev/docs/apps/webhooks/best-practices#implement-reconciliation-jobs)

  [HN](https://news.ycombinator.com/item?id=32521159)

* Additionally as the webhook provider, set up an /events endpoints

* Webhook providers can store external requests in a database or in logs (see [Storing External Requests](https://www.pgrs.net/2023/12/14/storing-external-requests/). 

~~~admonish question title="Thin vs. thick webhooks"
This pattern is where the webhook payload contains a reference ID which you will use to call an API to retrieve the payload.

Svix uses this.
~~~
