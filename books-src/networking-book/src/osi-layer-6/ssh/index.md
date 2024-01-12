# SSH

SSH typically operates on top of TCP.

Here, SSH is used for **client authentication** and **establishing a secure connection** only.

~~~admonish example title="Using SSH with GitHub"
When you clone a repository from GitHub using SSH, you're using the SSH protocol to authenticate and establish a secure connection _only_. There is no accessing of the remote shell.

The communication between your computer and GitHub is encrypted, ensuring that your data is transferred securely.
~~~

~~~admonish tip
Use `-v` or `-vv` etc. for verbosity.
~~~
