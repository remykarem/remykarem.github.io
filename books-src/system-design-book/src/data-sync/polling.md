# Polling (Pull)

In polling, the client keeps calling the server for updates.

There are 2 types of polling:

- **Short polling** – returns a response immediately, even if empty. $k = 0$.
- **Long polling** – returns a response after a wait time period $k > 0$.

Short polling may naturally require more frequent requests to check for new messages.

Drawbacks:
* Constant polling requires resources from client
