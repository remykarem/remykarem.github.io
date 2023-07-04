# Setup

For this protocol to work, the an **asymmetric key pair** must have been created for the client and the server:

* Client: holder of the private key 
* Server: holder of the public key (typically in `~/.ssh/authorized_keys`)

Note that the public key is sent to the server _out-of-band_.
