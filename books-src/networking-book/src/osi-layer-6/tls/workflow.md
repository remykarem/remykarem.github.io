# Workflow

(?)

TLS 1.2:

1. ClientHello
2. ServerHello
3. Server authentication
4. ServerHelloDone
5. Session key:
   a. Pre-master secret
   b. Master secret

TLS 1.3:

Uses ECDHE, DHE

1. ClientHello
2. ServerHello
3. Server authentication
4. Session key

~~~admonish warning
TLS1.0 and TLS1.1 have vulnerabilities.

Citation needed.
~~~
