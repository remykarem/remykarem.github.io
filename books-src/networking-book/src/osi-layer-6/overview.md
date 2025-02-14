# Overview

aka Translation Layer

This layer is responsible for converting the data.

TLS vs. SSH:

|   | TLS | SSH |
| - | --- | --- |
| Server authentication | Yes | Yes |
| Client authentication | - | Yes |
| Trust model | Chain of trust | Manual (?) |

* Server authentication — the server needs to prove its identity
* Client authentication — the client needs to prove its identity

~~~admonish question title="Why no client authentication at TLS?"
Client authentication can be handled at the application layer; common for HTTP.
~~~
