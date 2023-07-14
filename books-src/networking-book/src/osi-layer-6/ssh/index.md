# SSH

SSH typically operates on top of TCP.

In some applications like GitHub and databases, the authentication parts of the SSH workflow (everything before the accessing of the remote shell) is used to authenticate the client with the server.

~~~admonish example title="GitHub"
When you clone a repository from GitHub using SSH, you're using the SSH protocol to authenticate and establish a secure connection.

The communication between your computer and GitHub is encrypted, ensuring that your data is transferred securely.
~~~
