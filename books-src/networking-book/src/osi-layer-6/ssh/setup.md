# Setup

For this protocol to work, these things need to be set up first.

## For server authentication ("host authentication")

A private key ("**host key**"), held by the server, is used for host authentication. It is typically stored in the server's `/etc/ssh`.

The corresponding public key is shared with the client _during the initial connection_. The client then stores this key typically in `~/.ssh/known_hosts`.

~~~admonish note
These keys should be automatically created when installing SSH on the server (?), so no generation is required.
~~~

~~~admonish info title="Host key algorithms"
These are the algorithms that the server will advertise to the client for host authentication.

This can be RSA, ECDSA, ED25519 etc.

This value can be set as the `HostKeyAlgorithms` configuration.
~~~

~~~admonish warning title="Trust On First Use"
The server should ideally share this public key with the clients _out-of-band_ prior to any SSH connections.

Otherwise, the client is left to blindly trust the server on first connection. The client is then susceptible to MITM attack.

What's a good practice then? Out-of-band.

1. Get the host's public key or **host fingerprint** out-of-band.

2. Connect to the SSH.

3. When it prompts for

    ```
    Are you sure you want to continue connecting (yes/no/[fingerprint])?
    ```

    paste the fingerprint instead of typing `yes` or `no`.

GitHub, on the other hand, does it this way: [GitHub SSH key fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)

We could also do `ssh-keyscan [hostname]` but there is still a MITM risk.
~~~

## User account

A username needs to be associated for every connection.

To create an account, a user account needs to be created in the Linux system itself.

## For client authentication

The common client authentication methods (`AuthenticationMethods`) are:
- Public key

    A private key, held by the client, is used for authenticating with the server.
    
    The corresponding public key should be shared with the server out-of-band prior to the first SSH connection. This is typically stored in `~/.ssh/authorized_keys` at the server.
    
    ~~~admonish info title="Accepted public key cryptography algorithms"
    Both the server and the client can specify the public key algorithms it accepts and is willing to use (respectively).
    
    This can be done via the `PubkeyAcceptedAlgorithms` configuration.
    ~~~
    
- Password
- None

which can be any combination.

~~~admonish tip title="Test connection"
To test connection to the server, the client can do

```
ssh -T <hostname>
```
~~~

## Other user configurations

User configurations are typically stored at `~/.ssh/config`:

```config
Host examplehostname
    HostName example.com
    IdentityFile ~/.ssh/example_private_key
    User raimi
    Port 11566
```

## Other system configurations

System configurations are typically stored at `/etc/ssh/ssh_config`.

More information can be found in

```
man ssh_config
```

## Passphrase and ssh-agent
`ssh-agent` is a program that assists with passphrase-protected private keys (in memory) so that the user doesn't have to type in the passphrase every time the key is needed.

The `AddKeysToAgent` and `UseKeychain` SSH configs are associated with this SSH agent.

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent
