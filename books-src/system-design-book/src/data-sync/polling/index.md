# Polling

~~~admonish tip title="Perspective"
Polling approximates an event-driven architecture (eg. webhook).
~~~

In polling, the client keeps calling the server for updates.

There are 2 types of polling:

- **Short polling** – returns a response immediately, even if empty. $k = 0$.
- **Long polling** – returns a response after a wait time period $k > 0$.

Short polling naturally requires more frequent requests to check for new messages.

Drawbacks:
* ⚠️ A long-running cron job might overlap another, resulting in concurrent processing which might have an adverse effect.
* Constant polling requires resources from client
