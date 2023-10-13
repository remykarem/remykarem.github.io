# Setup

For this protocol to work, **3 asymmetric key pairs** are at play:

## 1. Host key pair (permanent)

The private key, held by the server, is used for host authentication. It is typically stored in `/etc/ssh`.

These keys should be automatically created when installing SSH on the server (?), so no generation is required.

~~~admonish info title="Host key algorithms"
These are the algorithms that the server will advertise to the client for host authentication.

This can be RSA, ECDSA, ED25519 etc.

This value can be set as the `HostKeyAlgorithms` configuration.
~~~

The public key is shared with the client _during the initial connection_. The client then stores this key typically in `~/.ssh/known_hosts`.

~~~admonish warning title="Trust On First Use"
The server should ideally share this public key with the clients _out-of-band_ prior to any SSH connections.

Otherwise, the client is left to blindly trust the server on first connection. The client is then susceptible to MITM attack.
~~~

~~~admonish question title="What's a good practice then?"
1. Get the host fingerprint out-of-band.

2. Connect to the SSH.

3. When it prompts for

    ```
    Are you sure you want to continue connecting (yes/no/[fingerprint])?
    ```

    paste the fingerprint instead of typing `yes` or `no`.

GitHub, on the other hand, does it this way: [GitHub SSH key fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)
~~~

## 2. "SSH key pair" (permanent)

The private key, held by the client, is used for authenticating with the server.

The public key, should be shared with the server out-of-band prior to any SSH connection. This is typically stored in `~/.ssh/authorized_keys` at the server.

There is an option to encrypt the private key at rest, which requires a passphrase.

~~~admonish info title="Passphrase and ssh-agent"
`ssh-agent` is a program that assists with SSH (Secure Shell) key management.

It is typically used to hold private keys in memory so that they can be used without requiring the user to type in the passphrase every time the key is needed.

The `AddKeysToAgent` and `UseKeychain` SSH configs are associated with this SSH agent.

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent
~~~

## 3. Session key pair (ephemeral)

The client and the server _each_ will have to generate a key pair for every SSH session.

They are used to establish the session's shared secret using a key exchange algorithm.

---

~~~admonish example title="Test connection"
To test connection, we can do

```
ssh -T <hostname>
```
~~~

User configurations are typically stored at `~/.ssh/config`:

```config
Host examplehostname
    HostName example.com
    IdentityFile ~/.ssh/example_private_key
    User raimi
    Port 11566
```

System configurations are typically stored at `/etc/ssh/ssh_config`.

More information can be found in

```
man ssh_config
```
