# SSH

Secure Shell

SSH typically operates on top of TCP.

In this layer, SSH provides
* **privacy**
* **client authentication**
* **server authentication**

thereby establishing a secure connection.

~~~admonish example title="Using SSH with GitHub"
When you clone a repository from GitHub using SSH, you're using the SSH protocol to authenticate and establish a secure connection _only_. There is no accessing of the remote shell.

The communication between your computer and GitHub is encrypted, ensuring that your data is transferred securely.
~~~

~~~admonish tip
Use `ssh -v` or `ssh -vv` etc. for verbosity.
~~~
