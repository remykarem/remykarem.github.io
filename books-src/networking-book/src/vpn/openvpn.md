# OpenVPN

OpenVPN uses UDP (port 1194) but also has support for TCP (port 943?).

Workflow:

1. **TLS handshake**

    Recall that TLS is where server authentication happens.

2. **Client authentication**

    Some methods include:
    * user's username and password; the authentication could be an MFA
    * client certificates (mTLS)
    * pre-shared secret key

3. **Session key**

    The client and server generate a session key using a key exchange algorithm.

~~~admonish warning title="Sus"
The OpenVPN server stores the client's private keys (for client authentication via certificates).

See StackOverflow's post on [Why does the OpenVPN server need to keep client's private key?](https://security.stackexchange.com/questions/264667/why-does-the-openvpn-server-need-to-keep-clients-private-key)
~~~