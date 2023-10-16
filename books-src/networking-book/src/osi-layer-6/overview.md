# Overview

aka Translation Layer

This layer is responsible for converting the data.

TLS vs. SSH:

|   | TLS | SSH |
| - | --- | --- |
| Server authentication | Yes | Yes |
| Client authentication | mTLS | Yes |

~~~admonish question title="Why no client authentication at TLS?"
Client authentication can be handled at the application layer; common for HTTP.
~~~
