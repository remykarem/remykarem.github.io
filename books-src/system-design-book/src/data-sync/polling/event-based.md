# Event-based

The server provides data of all the _events_ (create, update etc.).

The client polls and keeps a cursor locally to keep track which events the client has seen / processed.

The `events` table can serve as a "queue" for outbound work for webhook senders.

References:
* [Events not webhooks by Sequin](https://blog.sequin.io/events-not-webhooks/)
* [Events](https://stripe.com/docs/api/events) endpoint

## ???

There are 2 types of polling:

- **Short polling** – returns a response immediately, even if empty. $k = 0$.
- **Long polling** – returns a response after a wait time period $k > 0$.

Short polling may naturally require more frequent requests to check for new messages.

Drawbacks:
* Constant polling requires resources from client
