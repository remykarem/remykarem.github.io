# Event-based

The server provides data of all the _events_ (create, update etc.).

The client polls and keeps a cursor locally to keep track which events the client has seen / processed.

The `events` table can serve as a "queue" for outbound work for webhook senders.

References:
* [Events not webhooks by Sequin](https://blog.sequin.io/events-not-webhooks/)
* Stripe's [Events](https://stripe.com/docs/api/events) endpoint
