# SSL proxying

SSL proxying is a mechanism that allows a proxy server to intercept and decrypt TLS traffic, then re-encrypting the data to forward it to the intended recipient.

In SSL proxying, there are **3 components**:
* client
* SSL proxy
* remote server

and **2 SSL certificates**:
* SSL proxy's certificate
* remote server's certificate

The client will be presented with the SSL proxy's certificate, so it must be installed and trusted on the client machine.
