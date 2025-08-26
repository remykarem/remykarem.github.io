# Overview

aka Translation Layer

This layer is responsible for converting the data. "Converting" here usually means _encryption_.

The purpose of this layer is to **establish a secure channel***.

TLS vs. SSH:

|   | TLS | SSH |
| - | --- | --- |
| Server authentication | Yes | Yes |
| Client authentication | mTLS | Yes |
| Trust model | Chain of trust | Manual (?) |

* Server authentication — the server is the one that needs to prove its identity
* Client authentication — the client is the one that needs to prove its identity

~~~admonish question title="Why no client authentication at TLS?"
HTTP applications don't always modify the server, unlike SSH (execute commands to server, upload files).

When needed, client authentication can still be handled at the application layer.
~~~
